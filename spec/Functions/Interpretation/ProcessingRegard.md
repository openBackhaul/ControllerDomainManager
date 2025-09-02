# Processing of Regard  

### Regard  

The following services  
- /v1/regard-application  
- /v1/regard-load-balancer  
- /v1/regard-controller  

shall be processed as follows:  
- copy content of RunningDS into CandidateDS  
- lock CandidateDS  
- create logical object of specified type and category with values from RequestBody in CandidateDS  
- invoke validationOrchestrator  
- IF ResponseCode==204  
  - copy content of CandidateDS into RunningDS  
  - respond 204 to requestor  
  ELSE  
  - respond ResponseCode to requestor  
- unlock CandidateDS  

### Disregard  

The following service  
- /v1/disregard-application  

shall be processed as follows:  
- copy content of RunningDS into CandidateDS  
- lock CandidateDS  
- identify CC by specified key attribute value (applicationName)  
- create list of localIds of LTPs (ManagementDomainInterfaces) that still exist at the Application  
- FOR every localId (managementDomain) found  
  - call /v1/dismantle-management-domain-connection  
- IF all calls 204  
  - delete CC identified by specified key attribute value (applicationName) from CandidateDS  
  ELSE
  - respond the ResponseCode which is different from 204 to requestor  
- invoke validationOrchestrator  
- IF ResponseCode==204  
  - copy content of CandidateDS into RunningDS  
  - respond 204 to requestor  
  ELSE  
  - respond ResponseCode to requestor  
- unlock CandidateDS  

The following service  
- /v1/disregard-load-balancer  

shall be processed as follows:  
- copy content of RunningDS into CandidateDS  
- lock CandidateDS  
- identify CC by specified key attribute value (loadBalancerName)  
- count number of LTPs that exist at the LoadBalancer  
- IF number of LTPs > 1  
  - ResponseCode==4??  
  ELSE  
  - delete CC identified by specified key attribute value (loadBalancerName) from CandidateDS  
- invoke validationOrchestrator  
- IF ResponseCode==204  
  - copy content of CandidateDS into RunningDS  
  - respond 204 to requestor  
  ELSE  
  - respond ResponseCode to requestor  
- unlock CandidateDS   

The following services  
- /v1/disregard-controller  

shall be processed as follows:  
- copy content of RunningDS into CandidateDS  
- lock CandidateDS  
- call /v1/dismantle-controller-from-management-domain  
- IF ResponseCode==204  
  - delete CC identified by specified key attribute value (controllerName) from CandidateDS  
  ELSE
  - respond ResponseCode to requestor
- invoke validationOrchestrator  
- IF ResponseCode==204  
  - copy content of CandidateDS into RunningDS  
  - respond 204 to requestor  
  ELSE  
  - respond ResponseCode to requestor  
- unlock CandidateDS  

### List  

The following services  
- /v1/list-applications  
- /v1/list-load-balancers  
- /v1/list-controllers  

shall be processed as follows:  
- retrieve key attribute values of logical objects of specified type and category from _RunningDS_  
- respond list of key attribute values to requestor  

### Provide Configuration Data  

The following services  
- /v1/provide-config-of-application  
- /v1/provide-config-of-load-balancer  
- /v1/provide-config-of-controller  

shall be processed as follows:  
- identify logical object by specified type, category and key attribute value  
- respond values of logical object from _RunningDS_ to requestor  

### Provide Status Data  

The following services  
- /v1/provide-status-of-load-balancer  
- /v1/provide-status-of-controller  

shall be processed as follows:  
- identify logical object by specified type, category and key attribute value  
- respond values of logical object from _OperationalDS_ to requestor  

### Update  

If possible, the update function should be avoided.  
The complex validation is offset by only a small number of incidents during operation.  
There are alternative procedures to cover these incidents.  
