# ControllerDomainManager  

### Location  
The ControllerDomainManager is part of the OperationSupport.  

    Please note:
    The following chapter describes a planned target that is to be achieved iteratively.  

### Description  
The ControllerDomainManager manages and encapsulates all necessary activities for providing and maintaining the transport of the device management connection (= ManagementPlaneTransport) between the REST clients at the lowest layer of applications (MWDI, MWDG, NP) and the NETCONF clients at the MountPoints inside the Controller.  

It encapsulates the management interfaces to both the controller software (OpenDaylight) and the load balancer software (nginx).  

At the controller software, it is not only creating the MountPoints for the RESTCONF connection to the applications, but also providing an external service through which the DeviceDomainManager can configure the NetconfClients.  

The following use cases are covered:  
- autonomous establishing the device management connection  
- adding/removing Controller to a load sharing configuration (LogicalController), implies:  
  - abstracting and encapsulating the management of multi-controller configurations
  - support of non-traffic affecting Controller release updates  
  - load sharing based protection against Controller failure  
- representing the network topology beneath the RESTCONF and the NETCONF interfaces  
- cleaning-up configuration artifacts on LoadBalancer and Controller  
- device management connection related error reporting  

The CDM implements the state-based design of the recently developed application architecture for network automation tasks.  

### Relevance  
The ControllerDomainManager is required for connecting the application layer with the controller layer.  

### Dependencies  
- ApplicationLayerManager  
- DeviceDomainManager  
- LinkIdIntoLtpWriter  
- ConnectionPreparation  
- ManagementPlaneManager  

### Resources  
- [Specification](./spec/)  
- [TestSuite](./testing/)  
- [Implementation](./server/)  

### Comments  
./.
