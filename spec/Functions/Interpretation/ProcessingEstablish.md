- v1-establish-management-plane-transport  
  - Copies content of RunningDS into CandidateDS  
  - Creates the specified (Device) CC object (incl. LTP and LPs) in CandidateDS  
  - Creates the specified (MountPoint, MediatorProcess) LTP objects (incl. LPs) in CandidateDS  
  - Creates the Link objects (NetconfLink, SnmpLink) in CandidateDS  
  - Creates the FC object in CandidateDS  
  - Calls p1-validation-orchestrator  
  - IF ResponseCode==204  
    - Copies content of CandidateDS into RunningDS  
    - Responds 204 to requestor  
    ELSE  
    - Responds ResponseCode to requestor  
- v1-dismantle-management-plane-transport
  - Copies content of RunningDS into CandidateDS  
  - Deletes the LTP objects (MountPoint, MediatorProcess) that are referenced by the Links that are referenced by the specified FC from CandidateDS  
  - Deletes the Link objects (NetconfLink, SnmpLink) that are referenced by the specified FC from CandidateDS  
  - Deletes the CC objects (Device) that is referenced by the specified FC from CandidateDS  
  - Deletes the specified FC from CandidateDS  
  - Calls p1-validation-orchestrator  
  - IF ResponseCode==204  
    - Copies content of CandidateDS into RunningDS  
    - Responds 204 to requestor  
    ELSE  
    - Responds ResponseCode to requestor  

# Processing of Establish  

### Establish  

The /v1/establish-management-domain services shall be processed as follows:  
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

The /v1/establish-management-domain-connection services shall be processed as follows:  
- copy content of RunningDS into CandidateDS  
- read _tcpServer from LogicalController (in RunningDS) specified in RequestBody  
- create a Link between the Application specified in RequestBody and _tcpServer in CandidateDS  
- invoke validationOrchestrator  
- IF ResponseCode==204  
  - copy content of CandidateDS into RunningDS  
  - respond 204 to requestor  
  ELSE  
  - respond ResponseCode to requestor  

The /v1/establish-management-plane-transport services shall be processed as follows:  
- copy content of RunningDS into CandidateDS  
- create a LogicalMountPoint with values from RequestBody inside LogicalController specified in RequestBody in CandidateDS  
- create a MountPoint with same values in all n Controllers listed in _controllers attribute of the same LogicalController in CandidateDS  
- create n Links between the newly created n MountPoints and the LogicalMountPoint in CandidateDS  
- create an FC between the Application and the LogicalController (managementDomain) specified in RequestBody in CandidateDS 
- read _tcpServer from LogicalController (in RunningDS) specified in RequestBody  
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



[Thorsten] The dismantle processes must be individually described.



The following services  
- /v1/dismantle-management-domain  
- /v1/dismantle-management-domain-connection  
- /v1/dismantle-management-plane-transport  

shall be processed as follows:  
- copy content of RunningDS into CandidateDS  
- identify logical object by specified type, category and key attribute value and delete if from CandidateDS  
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
- respond values of logical object to requestor  

### Update  

The following services  
- /v1/update-management-domain  
- /v1/update-management-domain-connection  
- /v1/update-management-plane-transport  

shall be processed as follows:  
- copy content of RunningDS into CandidateDS  
- identify logical object by specified type, category and key attribute value and change it with values from RequestBody in CandidateDS  
- invoke validationOrchestrator  
- IF ResponseCode==204  
  - copy content of CandidateDS into RunningDS  
  - respond 204 to requestor  
  ELSE  
  - respond ResponseCode to requestor  
