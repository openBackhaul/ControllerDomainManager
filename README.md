# ControllerDomainManager

### Location
The ControllerDomainManager is part of the OperationSupport.

### Description  
The ControllerDomainManager manages and encapsulates all necessary activities for providing and maintaining the transport of the device management connection (= ManagementPlaneTransport) between the REST clients at the lowest layer of applications (MWDI, MWDG, NP) and the NETCONF clients at the MountPoints inside the Controller.  

It encapsulates the management interfaces to both the controller software (OpenDaylight) and the load balancer software (nginx).  

At the controller software, it is not only creating the MountPoints for the RESTCONF connection to the applications, but also providing an external service through which the DeviceDomainManager can configure the NetconfClients.  

The following use cases are covered (maybe, not all of them from beginning on)  
  - establishing the management connection  
  - sharing the load across Controllers  
  - supporting non-traffic affecting Controller release updates  
  - load sharing based protection of Controllers  
  - representing the network topology beneath the RESTCONF and the NETCONF interfaces.  


The CDM implements the state-based design of the recently developed application architecture for network automation tasks.

### Relevance
The ControllerDomainManager is required for connecting the application layer with the controller.

### Dependencies
t.b.d.

### Resources
- [Specification](./spec/)
- [TestSuite](./testing/)
- [Implementation](./server/)

### Comments
./.
