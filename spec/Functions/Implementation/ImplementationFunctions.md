
# Implementation  

## Offered Implementations  

The Elements that are managed within this domain are offering proprietary APIs with limited capabilities.  
The Offered Implementations section describes the implementations that are available at these proprietary APIs.  

### Application  

The Applications of the MW SDN application layer are equipped with an ONF Core IM based OaM REST interface that allows to configure during runtime.  

#### ApplicationDomainManager
The Application's OaM interface is encapsulated by the [ApplicationDomainManager](https://github.com/openBackhaul/ApplicationDomainManager) (ADM) application.  

The ADM is offering the following services for implementation:  
- Updating the client interface towards a ManagementDomain (ADM://v1/update-management-domain-interface)

The openAPI specification of the ApplicationDomainManager can be found [here](https://github.com/openBackhaul/ApplicationDomainManager/blob/develop/spec/ApplicationDomainManager.yaml).

### LoadBalancer  

#### nginx
The currently used nginx LoadBalancer is offering the following resources:  
...  

### Controller  

#### OpenDaylight  
OpenDaylight supports to manage the MountPoints via its REST interface.  

The following implementations are offered:  
- Create MountPoint
  CDM://p1/construct-mount-point
- Delete MountPoint
  CDM://p1/destruct-mount-point
- Update MountPoint
  CDM://p1/reconstruct-mount-point

A detailed description of the implementation services can be found [here](../../Elements/OpenDaylight/OpenDaylight.yaml).  



=========================

# Artifacts

### Implementation  
- p1-implementation-orchestrator (cyclic operation)  
  - Picks next FC object from rolling list in CurrentAlarms  
  - Identifies errored object and checks dateOfNextAttemptToFix  
    - IF currentDate > dateOfNextAttemptToFix  
      - Requests ImplementationFunction according definitions in ErrorCode table  
      - Receives Response  
  - Start over with next FC  

_(List of ImplementationFunctions is to be defined by ApplicationOwner:)_  



### Concepts for defining ImplementationFunctions  
**Shaping**
During discussions we found out that:  
- With increasing number of deviations between RunningDS and OperationalDS some deadlock might occur.  
- It is unclear how roll-back of partly executed implementation sequences could be defined in case of idempotent functions.  

The following concepts should help minimizing the risk of dead lock and partly executed implementation sequences:  
- Implementation sequences should be short (this is why the information structure is now limiting to a single function).  
- Each implementation sequence shall terminate in a stable state more close to the target state defined in the RunningDS.  
- Steps that are increasing the options in the total system (e.g. releasing limited resources) shall be done first. Steps that are narrowing down the options in the total system (e.g. allocating resources) shall be done in a separated sequence later.  

**ResponseCode**
The results of the implementation attempts shall be documented into the CurrentAlarms.  
The ResponseCodes of the ImplementationFunctions shall relate to the processing of the request, not to the success or failure of the configuration task.  
