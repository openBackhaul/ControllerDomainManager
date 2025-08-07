# Processing of Establish  

### Establish  

The **/v1/establish-management-domain** service shall create a LogicalController from Controllers and Loadbalancer (if required).  
It shall be processed as follows:  
- copy content of RunningDS into CandidateDS  
- lock CandidateDS  
- create LogicalController (CC) with values from RequestBody in CandidateDS  
- create FD with forwardingDomainName==managementDomain specified in RequestBody in CandidateDS  
- IF NO LoadBalancer specified in RequestBody  
  - update Controller specified in RequestBody in _logicalController attribute with managementDomain specified in RequestBody in CandidateDS  
- IF LoadBalancer specified in RequestBody  
  - create a Forwarding (LTP) identified by managementDomain specified in RequestBody in CandidateDS  
  - update all n Controllers specified in RequestBody in _logicalController attribute with managementDomain specified in RequestBody in CandidateDS  
  - create n TcpLinkBs between the Forwarding and these n Controllers in CandidateDS  
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
- replicate the information of all LogicalMountPoints (LTPs) inside the LogicalController (identified by managementDomain specified in RequestBody) into new MountPoints (LTPs) of the same number inside the new Controller (identified by the controllerName specified in the RequestBody) in CandidateDS  
- (will be referenced from below as (b)) create HttpLinks between the existing LPs (identified by 'http-client') at Application that are already connected with the ManagementDomain and new LPs (identified by applicationName) at the new Controller
- complement every new HttpLink with one Route referencing 
  - the TcpLinkA from one of the Applications to the LoadBalancer identified in _tcpServer attribute of the LogicalController (identified by managementDomain specified in RequestBody) 
  - and the TcpLinkB from the LoadBalancer to the new Controller   
- (will be referenced from below as (c)) create CopyLinks between the LogicalMountPoints (LTPs) inside the LogicalController (identified by managementDomain specified in RequestBody) and the MountPoints (LTPs) identified by the same deviceName inside the new Controller (identified by the controllerName specified in the RequestBody) in CandidateDS  
- add an additional Route to every ManagementPlaneTransport (FC) that is terminating at the same LogicalController (identified by managementDomain specified in RequestBody) and identified by the same deviceNames in CandidateDS  
- add the following references to every newly created Route:
  - reference to newly created HttpLink between Application and Controller (see above (b))
  - reference to newly created CopyLink between MountPoint and LogicalMountPoint (see above (b))
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
- read _tcpServer from LogicalController (in CandidateDS) specified in RequestBody  
- create a TcpLink between the Application specified in RequestBody and _tcpServer in CandidateDS  
- read _controllers[*] from LogicalController (in CandidateDS) specified in RequestBody  
- create a HttpLinks between the Application specified in RequestBody and _controllers[*] in CandidateDS  
- document Routes of TcpLinks inside the HttpLinks
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
- create a LogicalMountPoint with values from RequestBody inside LogicalController specified in RequestBody in CandidateDS  
- create a MountPoint with same values in all n Controllers listed in _controllers attribute of the same LogicalController in CandidateDS  
- create n CopyLinks between the newly created n MountPoints and the LogicalMountPoint in CandidateDS  
- create an FC between the Application and the LogicalController (managementDomain) specified in RequestBody in CandidateDS 
- read _tcpServer from LogicalController (in CandidateDS) specified in RequestBody  
- IF category of _tcpServer (CC) == controller  
  - create one Route at newly created FC and reference:  
    - the HttpLink between Application specified in RequestBody and Controller referenced in the _tcpServer attribute of the LogicalController in CandidateDS  
    - the CopyLink between the newly created MountPoint and the newly created LogicalMountPoint  
- IF category of _tcpServer (CC) == loadBalancer  
  - create n Routes at newly created FC and reference in each Route:  
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

The **/v1/dismantle-management-domain** service is deleting the LogicalController and the Forwarding (inside LoadBalancer), the Links to and from the involved Controllers and Forwarding. All ManagementPlaneTransport FCs to the LogicalController get deleted. Application, LoadBalancer and Controllers remain.  
It shall be processed as follows:  
- read (in CandidateDS) _tcpServer from LogicalController (managementDomain) specified in RequestBody  
- read (in CandidateDS) _controllers from LogicalController (managementDomain) specified in RequestBody  
- IF (number of entries in _controllers)==1 AND (_tcpServer)==(entry in _controllers) (means no LoadBalancer)  
  - search all Links terminating at the LPs identified by 'tcp-server' and 'http-server' of the LTP identified by 'controller-manager' inside the Controller identified in _tcpServer in CandidateDS  
  - visit the remote ends with _lp==tcp-client of these Links and delete entries in remote-ip-address and remote-port in CandidateDS  
  - visit the remote ends with _lp==http-client of these Links and delete entries in http-user-name and http-password  
  - delete the TcpLinks and the HttpLinks (incl. their reference in the NetworkControlDomain) in CandidateDS  
- ELSE
  - search all TcpLinks terminating at the LPs of the Forwarding identified by managementDomain inside the LoadBalancer identified in _tcpServer in CandidateDS  
  - visit the remote ends with _lp==tcp-client of these Links and delete entries in remote-ip-address and remote-port in CandidateDS  
  - delete all TcpLinks (both directions) (incl. their reference in the NetworkControlDomain) in CandidateDS  
  - delete the Forwarding (incl. its reference in the CC) identified by managementDomain inside the LoadBalancer identified in _tcpServer in CandidateDS  
  - search all HttpLinks terminating at the LPs, which are NOT identified by 'http-server' or 'copy-client', of the Controllers identified by _controllers at LogicalController  
  - visit the remote ends with _lp==http-client of these Links and delete entries in http-user-name and http-password in CandidateDS  
  - delete HttpLinks (incl. their reference in the NetworkControlDomain) in CandidateDS  
- read list of deviceNames (in CandidateDS) from list of local-ids of LTPs inside LogicalController (managementDomain) specified in RequestBody  
- visit all Controllers identified in _controllers of LogicalController  
  - delete all LTPs with local-ids from list of deviceNames in CandidateDS  
  - delete entry in _logicalController attribute at CC in CandidateDS  
- delete all CopyLinks (incl. their reference in the NetworkControlDomain) terminating at the LogicalController (managementDomain) specified in RequestBody  
- delete the LogicalController (incl. its reference in the NetworkControlDomain) in CandidateDS  
- invoke validationOrchestrator  
  - check all ManagementPlaneTransport (FC) for existing termination points (CC) in CandidateDS  
  - check all Routes at all FCs for existing Links in CandidateDS  
- IF ResponseCode==204  
  - copy content of CandidateDS into RunningDS  
  - respond 204 to requestor  
  - delete FD with forwardingDomainName==managementDomain specified in RequestBody in CandidateDS, RunningDS and OperationalDS  
  - delete root point (incl. all attached entries) for the obsolete managementDomain in currentAlarms list  
  ELSE  
  - respond ResponseCode to requestor  

The **/v1/dismantle-controller-from-management-domain** service is for removing a Controller from a LogicalController.  
It shall be processed as follows:  
- copy content of RunningDS into CandidateDS  
- lock CandidateDS  
- search list of Links for those referencing the obsolete Controller (identified by the controllerName specified in the RequestBody) in the _cc attribute at one of their termination points (linktp) and  
  - filter this list of Links for LinkTPs with _lp==controllerName specified in the RequestBody  
    and delete these LPs (means: TcpClients at Forwardings) in CandidateDS  
    and delete the filtered Links in CandidateDS  
  - filter this list of Links for the LinkTP with _lp==copyServer  
    and delete this LP (means: CopyServer at LogicalController) in CandidateDS  
    and delete the filtered Link in CandidateDS  

.

    I got lazy :(  
    Starting from here, the processing is poorly defined.  
    Instead of describing a deterministic process an error correction logic is applied to clean up.  
    This obsoletes the validation and poses a risk.  
    If detailed specification could complement a deterministic process, would be create.  

.

- visit all Routes at all FCs and check whether the Links referenced in the Route's _links attribute still exist; if referenced Link does not exist, delete Route from FC in CandidateDS  
- visit the Controller (CC) identified by the controllerName specified in the RequestBody  
  - delete the value from the _logicalController attribute in CandidateDS  
  - delete all LTPs except the one identified by 'controller-manager' in CandidateDS  
- visit the LogicalController identified by managementDomain specified in RequestBody and delete the controllerName specified in the RequestBody from its _logicalController attribute in CandidateDS  
- invoke validationOrchestrator  
- IF ResponseCode==204  
  - copy content of CandidateDS into RunningDS  
  - respond 204 to requestor  
  ELSE  
  - respond ResponseCode to requestor  
- unlock CandidateDS  

The **/v1/dismantle-management-domain-connection** service is for disconnecting an Application from a LogicalController.  
The TcpLink towards the LoadBalancer, the HttpLinks towards the Controller and all ManagementPlaneTransport FCs terminating at the Application get deleted.  
It shall be processed as follows:  
- read (in CandidateDS) _tcpServer from LogicalController (managementDomain) specified in RequestBody  
- search all FCs for those terminating at the Application specified in RequestBody  
  - delete resulting list of FCs (incl. their reference in the FD) in CandidateDS  
- search all Links for those terminating at the Application specified in RequestBody  
  - search resulting list of Links for 
    - those (might be several HttpLinks) terminating at the CCs (could be several Controllers) identified in _controllers at LogicalController (identified by managementDomain) in CandidateDS  
      visit the link termination points with _lp=http-client and delete entries in http-user-name and http-password  
      delete Links (incl. their reference in the NetworkControlDomain) in CandidateDS  
    - those (should be one TcpLink) terminating at the CC (could be Controller or LoadBalancer) identified in _tcpServer at LogicalController (identified by managementDomain) in CandidateDS  
      visit the link termination points with _lp=tcp-client and delete entries in remote-ip-address and remote-port in CandidateDS  
      delete Links (should be one)(incl. their reference in the NetworkControlDomain) in CandidateDS  
- invoke validationOrchestrator  
  - check all Routes at all FCs for existing Links in CandidateDS  
- IF ResponseCode==204  
  - copy content of CandidateDS into RunningDS  
  - respond 204 to requestor  
  ELSE  
  - respond ResponseCode to requestor  

The **/v1/dismantle-management-plane-transport** service is for disconnecting a Device. The ManagementPlaneTransport FC between Application and LogicalController gets deleted.  
It shall be processed as follows:  
- search the FD that is identified by the managementDomain specified in RequestBody  
- search this FD's list of FCs for the one identified by the deviceName specified in RequestBody  
- delete this FC (incl. its reference in the FD) from CandidateDS   
- invoke validationOrchestrator  
- IF ResponseCode==204  
  - copy content of CandidateDS into RunningDS  
  - respond 204 to requestor  
  ELSE  
  - respond ResponseCode to requestor  

### List  

The following services  
- /v1/list-configured-management-domains  
- /v1/list-configured-management-domain-connections  
- /v1/list-configured-management-plane-transports  

shall be processed as follows:  
- retrieve key attribute values of logical objects of specified type and category from RunningDS  
- respond list of key attribute values to requestor  

### Inform  

The following services  
- /v1/provide-config-of-management-domain  
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
