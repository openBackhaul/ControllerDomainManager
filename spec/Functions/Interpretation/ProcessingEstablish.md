# Processing of Establish  

### Establish  

The **/v1/establish-management-domain** shall be processed as follows:  
- copy content of RunningDS into CandidateDS  
- lock CandidateDS  
- create LogicalController (CC) with values from RequestBody in CandidateDS  
- create FD with forwardingDomainName==managementDomain specified in RequestBody in CandidateDS  
- IF LoadBalancer specified in RequestBody  
  - create a Forwarding (LTP) identified by managementDomain specified in RequestBody in CandidateDS  
- invoke validationOrchestrator  
- IF ResponseCode==204  
  - copy content of CandidateDS into RunningDS  
  - respond 204 to requestor  
  - create root point for the new managementDomain in currentAlarms list (create empty array in affected-management-domain)  
  ELSE  
  - respond ResponseCode to requestor  
- unlock CandidateDS  

The **/v1/establish-controller-in-management-domain** service is for adding a Controller to an existing LogicalController.  
It shall be processed as follows:  
- copy content of RunningDS into CandidateDS  
- lock CandidateDS  
- visit LoadBalancer referenced in the _tcpServer attribute of the LogicalController (identified by managementDomain specified in RequestBody) in CandidateDS  
- add additional LP (TcpClient) identified by the new Controller's controllerName to the Forwarding (LTP) (identified by managementDomain specified in RequestBody) in CandidateDS  
- (will be referenced from below as (a)) create TcpLinkB between the new LP and the LP (identified by 'tcp-server') at the LTP (identified by 'controller-manager') at the Controller (CC) identified by the controllerName specified in the RequestBody in CandidateDS  
- update Controller (CC) identified by the controllerName specified in the RequestBody in its _logicalController attribute with managementDomain specified in RequestBody in CandidateDS  
- add controllerName specified in the RequestBody to the _controllers attribute of the LogicalController (identified by managementDomain specified in RequestBody) in CandidateDS  
- filter list of CC for category=='application'  
  - filter list of Applications those with LTPs identified by managementDomain specified in RequestBody in CandidateDS  
  - self-request /v1/establish-management-domain-connection for every Application already connected to the managementDomain specified in RequestBody  
- filter list of LTPs at LogicalController (identified by managementDomain specified in RequestBody) for those different from 'controllerManager'
  - self-request /v1/establish-management-plane-transport for every Device having a LogicalMountPoint already  
- invoke validationOrchestrator  
- IF ResponseCode==204  
  - copy content of CandidateDS into RunningDS  
  - respond 204 to requestor  
  ELSE  
  - respond ResponseCode to requestor  
- unlock CandidateDS  

The **/v1/establish-management-domain-connection** service is for connecting an Application to a LogicalController.
It shall be processed as follows:  
- copy content of RunningDS into CandidateDS  
- lock CandidateDS  
- if not already existing, create FD with forwardingDomainName==applicationName (specified in RequestBody) as lowerLevelForwardingDomain to the FD with forwardingDomainName==managementDomain (specified in RequestBody) in CandidateDS  
- read _tcpServer from LogicalController (in CandidateDS) specified in RequestBody  
- read TCP/IP address from the TcpServer at the LoadBalancer or Controller specified in _tcpServer  
- write TCP/IP address into the TcpClient (LTP identified by managementDomain) at the Application specified in RequestBody  
- if not already existing, create a TcpLinkA between the Application and _tcpServer in CandidateDS  
- read _controllers[*] from LogicalController (in CandidateDS) specified in RequestBody  
- read the user credentials from the HttpServer at one of these Controllers  
- write these user credentials into the HttpClient (LTP identified by managementDomain) at the Application specified in RequestBody in CandidateDS  
- if not already existing, create a HttpLink between the Application and every _controllers[*] in CandidateDS  
- document Routes of TcpLinkA and TcpLinkB inside every HttpLink  
- filter list of LTPs at LogicalController specified in RequestBody for those different from 'controllerManager'
  - self-request /v1/establish-management-plane-transport for every Device having a LogicalMountPoint already  
- invoke validationOrchestrator  
- IF ResponseCode==204  
  - copy content of CandidateDS into RunningDS  
  - respond 204 to requestor  
  ELSE  
  - respond ResponseCode to requestor  
- unlock CandidateDS  

The **/v1/establish-management-plane-transport** service is for connecting a new Device.  
It shall be processed as follows:  
- copy content of RunningDS into CandidateDS  
- lock CandidateDS  
- if not already existing, create a LogicalMountPoint with values from RequestBody inside LogicalController specified in RequestBody in CandidateDS  
- wherever not already existing, create a MountPoint with same values in all n Controllers listed in _controllers attribute of the same LogicalController in CandidateDS  
- wherever not already existing, create n CopyLinks between the newly created n MountPoints and the LogicalMountPoint in CandidateDS  
- if not already existing, create an FC between the Application and the LogicalController (managementDomain) specified in RequestBody in CandidateDS 
- read _tcpServer from LogicalController (in CandidateDS) specified in RequestBody  
- IF category of _tcpServer (CC) == controller  
  - if not already existing, create one Route at newly created FC and reference:  
    - the HttpLink between Application specified in RequestBody and Controller referenced in the _tcpServer attribute of the LogicalController in CandidateDS  
    - the CopyLink between the newly created MountPoint and the newly created LogicalMountPoint  
- IF category of _tcpServer (CC) == loadBalancer  
  - wherever not already existing, create n Routes at newly created FC and reference in each Route:  
    - an HttpLink between the Application specified in RequestBody and one of the Controllers referenced in the _controllers attribute of the LogicalController in CandidateDS  
    - a newly created CopyLink between a newly created MountPoint and the also newly created LogicalMountPoint in CandidateDS  
- invoke validationOrchestrator  
- IF ResponseCode==204  
  - copy content of CandidateDS into RunningDS  
  - respond 204 to requestor  
  ELSE  
  - respond ResponseCode to requestor  
- unlock CandidateDS  

### Dismantle  

The following service  
- **/v1/dismantle-management-domain**  

shall be processed as follows:  
- managementDomain is specified in RequestBody  
- copy content of RunningDS into CandidateDS  
- lock CandidateDS  
- read list of deviceName from list of local-ids of LTPs inside LogicalController (CC identified by managementDomain)  
- create list of applicationName by filtering list of CC for category=='application' and those having an LTP identified by managementDomain  
- read list of controllerName from _controllers[*] attribute at CC identified by managementDomain  
- read loadBalancerName from _tcpServer attribute at CC identified by managementDomain  
- FOR all values of deviceName  
  - call /v1/dismantle-management-plane-transport  
- FOR all values of applicationName  
  - call /v1/dismantle-management-domain-connection  
- FOR all values of controllerName  
  - call /v1/dismantle-controller-from-management-domain
- delete the LTP identified by managementDomain (Forwarding) inside the CC identified by loadBalancerName in CandidateDS  
- delete LogicalController (incl. its reference in the NetworkControlDomain) in CandidateDS  
- invoke validationOrchestrator  
  - check all ManagementPlaneTransport (FC) for existing termination points (CC) in CandidateDS  
  - check all Routes at all FCs for existing Links in CandidateDS  
- IF ResponseCode==204  
  - copy content of CandidateDS into RunningDS  
  - respond 204 to requestor  
  - delete FD with forwardingDomainName==managementDomain specified in RequestBody in CandidateDS, RunningDS and OperationalDS  
  - delete root point (incl. all attached entries) for the obsolete managementDomain in currentAlarms  
  ELSE  
  - respond ResponseCode to requestor  
- unlock CandidateDS 


The following service  
- **/v1/dismantle-controller-from-management-domain**  

shall be processed as follows:  
- controllerName is specified in RequestBody  
- copy content of RunningDS into CandidateDS  
- lock CandidateDS  
- read managementDomain from _logical-controller attribute at CC identified by controllerName  
- read loadBalancerName from _tcpServer attribute at CC identified by managementDomain  
- delete LP identified by controllerName at LTP identified by managementDomain at CC identified by loadBalancerName in CandidateDS  
- delete controllerName from _controllers[*] attribute at CC identified by managementDomain in CandidateDS  
- create list of Links with _cc==controllerName at any linktp  
  - delete all Links from that list in CandidateDS  
  - delete all Routes that reference any of the listed Links from all FCs in CandidateDS  
- visit the Controller (CC) identified by the controllerName  
  - delete the value from the _logicalController attribute in CandidateDS  
  - delete all LTPs except the one identified by 'controller-manager' in CandidateDS  
- invoke validationOrchestrator  
- IF ResponseCode==204  
  - copy content of CandidateDS into RunningDS  
  - respond 204 to requestor  
  ELSE  
  - respond ResponseCode to requestor  
- unlock CandidateDS  


The following service  
- **/v1/dismantle-management-domain-connection**  

shall be processed as follows:  
- managementDomain (controller-name) and applicationName are specified in RequestBody  
- copy content of RunningDS into CandidateDS  
- lock CandidateDS  
- filter FCs for ( (fctp::fctp-type=='management-plane-transport-client') AND (fctp::_cc==applicationName) AND (fctp::_ltp==managementDomain) )  
  - create list of Devices from the value of fctp::_ltp at fctp with fctp-type=='management-plane-transport-server'  
  - create list of Links from references in Routes at these FCs  
    - note the LinkId of the one with ( (linktp::interface-type=='tcp-client') AND (linktp::_cc==applicationName) ) => TcpLink  
    - create list of LinkIds from those with ( (linktp::interface-type=='http-client') AND (linktp::_cc==applicationName) ) => list of HttpLinks  
- FOR all listed Devices  
  - call /v1/dismantle-management-plane-transport  
- FOR all HttpLinks  
  - delete Link in CandidateDS  
- delete TcpLink in CandidateDS  
- delete LTP identified by managementDomain at CC identified by applicationName in CandidateDS  
- invoke validationOrchestrator  
  - check all Routes at all FCs for existing Links in CandidateDS  
- IF ResponseCode==204  
  - copy content of CandidateDS into RunningDS  
  - respond 204 to requestor  
  - delete LowerLevelForwardingDomain identified by applicationName from ForwardingDomain identified by managementDomain in CandidateDS  
  - delete applicationName from affected-application attribute in affected-management-domain==managementDomain in the currentAlarms  
  ELSE  
  - respond ResponseCode to requestor  
- unlock CandidateDS  


The following service  
- **/v1/dismantle-management-plane-transport**  

shall be processed as follows:  
- deviceName, managementDomain (controller-name) and applicationName are specified in RequestBody  
- copy content of RunningDS into CandidateDS  
- lock CandidateDS  
- filter FCs for  
  - ( (fctp::fctp-type=='management-plane-transport-client') AND (fctp::_cc==*) AND (fctp::_ltp==managementDomain) )  
  - AND ( (fctp::fctp-type=='management-plane-transport-server') AND (fctp::_cc==managementDomain) AND (fctp::_ltp==deviceName) )  
- IF number of filtered FCs (equals number of Applications that are connecting to the specified combination of ManagementDomain and Device) == 1  
  - FOR every Route at that FC  
    - filter list of Links referenced in Route for the one with linktp::interface-type=='copy-server'  
    - delete the LTPs (LogicalMountPoint and MountPoint) referenced as LinkTps at that Link  
    - delete the Link  
- search list of already filtered FCs for the one with ( (fctp::fctp-type=='management-plane-transport-client') AND (fctp::_cc==applicationName) ) and delete it  
- invoke validationOrchestrator  
- IF ResponseCode==204  
  - copy content of CandidateDS into RunningDS  
  - respond 204 to requestor  
  - delete the entry identified by  from the affectedDevice attribute in the currentAlarms
  ELSE  
  - respond ResponseCode to requestor  
- unlock CandidateDS  

### List  

The following services  
- /v1/list-management-domains  
- /v1/list-management-domain-interfaces  
- /v1/list-management-plane-transports  

shall be processed as follows:  
- retrieve key attribute values of logical objects of specified type and category from RunningDS  
- respond list of key attribute values to requestor  

### Inform  

The following services  
- /v1/provide-config-of-management-domain  
- /v1/provide-config-of-management-domain-connection  
- /v1/provide-config-of-management-plane-transport  

shall be processed as follows:  
- identify logical object by specified type, category and key attribute value  
- respond values of logical object from _RunningDS_ to requestor  

The following services  
- /v1/provide-status-of-management-domain  
- /v1/provide-status-of-management-domain-connection  
- /v1/provide-status-of-management-plane-transport  

shall be processed as follows:  
- identify logical object by specified type, category and key attribute value  
- respond values of logical object from _OperationalDS_ to requestor  

### Update  

If possible, the update function should be avoided.  
The complex validation is offset by only a small number of incidents during operation.  
There are alternative procedures to cover these incidents.  

### List Alarms  

The /v1/list-alarms-at-management-plane-transport service shall be processed as follows:  
- search list of currentAlarms for entry identified by the managementDomain and the deviceName specified in RequestBody  
- respond values of CurrentAlarm object to requestor  
