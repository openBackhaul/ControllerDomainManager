# Processing of Establish  

### Establish  

The /v1/establish-management-domain service shall be processed as follows:  
- copy content of RunningDS into CandidateDS  
- create LogicalController (CC) with values from RequestBody in CandidateDS  
- IF NO LoadBalancer specified in RequestBody  
  - update Controller specified in RequestBody in _logicalController attribute with managementDomain specified in RequestBody in CandidateDS  
- IF LoadBalancer specified in RequestBody  
  - create a Forwarding (LTP) identified by managementDomain specified in RequestBody in CandidateDS  
  - update all n Controllers specified in RequestBody in _logicalController attribute with managementDomain specified in RequestBody in CandidateDS  
  - create n Links between the Forwarding and these n Controllers in CandidateDS  
- invoke validationOrchestrator  
- IF ResponseCode==204  
  - copy content of CandidateDS into RunningDS  
  - respond 204 to requestor  
  ELSE  
  - respond ResponseCode to requestor  

The /v1/establish-management-domain-connection service shall be processed as follows:  
- copy content of RunningDS into CandidateDS  
- read _tcpServer from LogicalController (in CandidateDS) specified in RequestBody  
- create a Link between the Application specified in RequestBody and _tcpServer in CandidateDS  
- invoke validationOrchestrator  
- IF ResponseCode==204  
  - copy content of CandidateDS into RunningDS  
  - respond 204 to requestor  
  ELSE  
  - respond ResponseCode to requestor  

The /v1/establish-management-plane-transport service shall be processed as follows:  
- copy content of RunningDS into CandidateDS  
- create a LogicalMountPoint with values from RequestBody inside LogicalController specified in RequestBody in CandidateDS  
- create a MountPoint with same values in all n Controllers listed in _controllers attribute of the same LogicalController in CandidateDS  
- create n Links between the newly created n MountPoints and the LogicalMountPoint in CandidateDS  
- create an FC between the Application and the LogicalController (managementDomain) specified in RequestBody in CandidateDS 
- read _tcpServer from LogicalController (in CandidateDS) specified in RequestBody  
- IF category of _tcpServer (CC) == controller  
  - create one Route at newly created FC and reference:  
    - the Link between Application specified in RequestBody and Controller referenced in the _tcpServer attribute of the LogicalController in CandidateDS  
    - the Link between the newly created MountPoint and the newly created LogicalMountPoint  
- IF category of _tcpServer (CC) == loadBalancer  
  - create n Routes at newly created FC and reference:  
    - the Link between Application specified in RequestBody and the Forwarding (managementDomain) at LoadBalancer referenced in the _tcpServer attribute of the LogicalController in CandidateDS  
    - a Link between the same Forwarding and one of the newly created MountPoints in CandidateDS  
    - a Link between the same MountPoint and the also newly created LogicalMountPoint in CandidateDS  
- invoke validationOrchestrator  
- IF ResponseCode==204  
  - copy content of CandidateDS into RunningDS  
  - respond 204 to requestor  
  ELSE  
  - respond ResponseCode to requestor  

### Dismantle  

The /v1/dismantle-management-domain service shall be processed as follows:  
- read (in CandidateDS) _tcpServer from LogicalController (managementDomain) specified in RequestBody  
- read (in CandidateDS) _controllers from LogicalController (managementDomain) specified in RequestBody  
- IF (number of entries in _controllers)==1 AND (_tcpServer)==(entry in _controllers) (means no LoadBalancer)  
  - search all Links terminating at the LPs identified by 'tcp-server' of the LTP identified by 'controller-manager' inside the Controller identified in _tcpServer in CandidateDS  
  - visit the remote ends with _lp==tcp-client of these Links and delete entries in remote-ip-address and remote-port in CandidateDS  
  - delete the Links (incl. their reference in the NetworkControlDomain) in CandidateDS  
- ELSE
  - search all Links terminating at the LPs of the Forwarding identified by managementDomain inside the LoadBalancer identified in _tcpServer in CandidateDS  
  - visit the remote ends with _lp==tcp-client of these Links and delete entries in remote-ip-address and remote-port in CandidateDS  
  - delete all Links (both directions) (incl. their reference in the NetworkControlDomain) in CandidateDS  
  - delete the Forwarding (incl. its reference in the CC) identified by managementDomain inside the LoadBalancer identified in _tcpServer in CandidateDS  
- read list of deviceNames (in CandidateDS) from list of local-ids of LTPs inside LogicalController (managementDomain) specified in RequestBody  
- visit all Controllers identified in _controllers of LogicalController  
  - delete all LTPs with local-ids from list of deviceNames in CandidateDS  
  - delete entry in _logicalController attribute at CC in CandidateDS  
- delete all Links (incl. their reference in the NetworkControlDomain) terminating at the LogicalController (managementDomain) specified in RequestBody  
- delete the LogicalController (incl. its reference in the NetworkControlDomain) in CandidateDS  
- invoke validationOrchestrator  
  - check all ManagementPlaneTransport (FC) for existing termination points (CC) in CandidateDS  
  - check all Routes at all FCs for existing Links in CandidateDS  
- IF ResponseCode==204  
  - copy content of CandidateDS into RunningDS  
  - respond 204 to requestor  
  ELSE  
  - respond ResponseCode to requestor  

The /v1/dismantle-management-domain-connection service shall be processed as follows:  
- read (in CandidateDS) _tcpServer from LogicalController (managementDomain) specified in RequestBody  
- search all Links for those terminating at the Application specified in RequestBody  
- search resulting list of Links for those (should be one) terminating at the CC (could be Controller or LoadBalancer) identified in _tcpServer in CandidateDS  
- delete the resulting list of Links (should be one)(incl. their reference in the NetworkControlDomain) in CandidateDS  
- invoke validationOrchestrator  
  - check all Routes at all FCs for existing Links in CandidateDS  
- IF ResponseCode==204  
  - copy content of CandidateDS into RunningDS  
  - respond 204 to requestor  
  ELSE  
  - respond ResponseCode to requestor  

The /v1/dismantle-management-plane-transport service shall be processed as follows:  
- search FD terminating at the Application and the LogicalController (managementDomain) specified in RequestBody  
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
- /v1/list-management-domains  
- /v1/list-management-domain-connections  
- /v1/list-management-plane-transports  

shall be processed as follows:  
- retrieve key attribute values of logical objects of specified type and category from RunningDS  
- respond list of key attribute values to requestor  

### Inform  

The following services  
- /v1/inform-about-management-domain  
- /v1/inform-about-management-domain-connection  
- /v1/inform-about-management-plane-transport  

shall be processed as follows:  
- identify logical object by specified type, category and key attribute value  
- respond values of logical object from RunningDS to requestor  

### Update  

If possible, the update function should be avoided.  
The complex validation is offset by only a small number of incidents during operation.  
There are alternative procedures to cover these incidents.  

### List Alarms  

The /v1/list-alarms-at-management-plane-transport service shall be processed as follows:  
- search list of currentAlarms for entry identified by the managementDomain and the deviceName specified in RequestBody  
- respond values of CurrentAlarm object to requestor  
