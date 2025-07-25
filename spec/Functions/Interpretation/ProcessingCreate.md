# Processing of Create  

### Create  

The following services  
- /v1/create-management-domain-interface-template  
- /v1/create-load-balancer-template  
- /v1/create-controller-template  
- /v1/create-mount-point-template  

shall be processed as follows:  
- copy content of RunningDS into CandidateDS  
- create logical object of specified type and category with values from RequestBody in CandidateDS  
- invoke validationOrchestrator  
- IF ResponseCode==204  
  - copy content of CandidateDS into RunningDS  
  - respond 204 to requestor  
  ELSE  
  - respond ResponseCode to requestor  

### Delete  

The following services  
- /v1/delete-management-domain-interface-template  
- /v1/delete-load-balancer-template  
- /v1/delete-controller-template  
- /v1/delete-mount-point-template  

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
- /v1/list-configured-management-domain-interface-templates
- /v1/list-configured-load-balancer-templates  
- /v1/list-configured-controller-templates  
- /v1/list-configured-mount-point-templates  

shall be processed as follows:  
- retrieve key attribute values of logical objects of specified type and category from RunningDS  
- respond list of key attribute values to requestor  

### Inform  

The following services  
- /v1/provide-config-of-management-domain-interface-template  
- /v1/provide-config-of-load-balancer-template  
- /v1/provide-config-of-controller-template  
- /v1/provide-config-of-mount-point-template  

shall be processed as follows:  
- identify logical object by specified type, category and key attribute value  
- respond values of logical object from RunningDS to requestor  

### Update  

The following services  
- /v1/update-management-domain-interface-template  
- /v1/update-load-balancer-template  
- /v1/update-controller-template  
- /v1/update-mount-point-template  

shall be processed as follows:  
- copy content of RunningDS into CandidateDS  
- identify logical object by specified type, category and key attribute value and change it with values from RequestBody in CandidateDS  
- invoke validationOrchestrator  
- IF ResponseCode==204  
  - copy content of CandidateDS into RunningDS  
  - respond 204 to requestor  
  ELSE  
  - respond ResponseCode to requestor  
