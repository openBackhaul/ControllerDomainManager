# ControllerDomainManager Specification  

### Managed Elements  
- The following kinds of Elements are encapsulated:  
  - Controller  
    - [OpenDaylight](./Elements/OpenDaylight/OpenDaylight.md)  
  - LoadBalancer  
    - [nginx](./Elements/nginx/nginx.md)  
- The following kind of Endpoint is managed, despite its holding Element is encapsulated by a neighboring domain:  
  - ManagementDomainInterface (TcpClient at Applications encapsulated by [ApplicationDomainManager](./Elements/ADM/adm.md))  
- The following kinds of Connections are managed:  
  - TCP: ManagementDomainInterface <---> LoadBalancer/Controller  
  - TCP: LoadBalancer <---> Controller  
- A neighboring domain is managing the following kind of Endpoint, but CDM is mediating towards the Element:  
  - TcpClient at MountPoint at Controller  

### InformationStructure  
- [Internal Information Structure](./InformationStructure/InformationStructure.md) (includes definition of the terminology in the CDM)  

### Functions  
- [Public and Private Functions](./Functions/Functions.md)  

.  

    Starting from here the detailed specification has to be elaborated from the input above.

.

### Diagrams  
- [Collection of Diagrams](./diagrams)  

### ServiceList  
- [ControllerDomainManager+services](./ControllerDomainManager+services.yaml)  

### ProfileList and ProfileInstanceList  
- [ControllerDomainManager+profiles](./ControllerDomainManager+profiles.yaml)  
- [ControllerDomainManager+profileInstances](./ControllerDomainManager+profileInstances.yaml)  

### ForwardingList  
- [ControllerDomainManager+forwardings](./ControllerDomainManager+forwardings.yaml)  

### Open API specification (Swagger)  
- [ControllerDomainManager](./ControllerDomainManager.yaml)  

### CONFIGfile (JSON)  
- [ControllerDomainManager+config](./ControllerDomainManager+config.json)  

### Comments  
A lot of conceptual work has been done, during specifying the DeviceDomainManager application.  
The following concepts are base to the ControllerDomainManager, too:  
- [AutomationArchitecture](https://github.com/openBackhaul/MediatorManager/blob/v1.0.0_spec/spec/concepts/03_AutomationArchitecture.md)  
- [NetworkTopology](https://github.com/openBackhaul/MediatorManager/blob/v1.0.0_spec/spec/concepts/05_NetworkTopology.md)  
- [FunctionConcepts](https://github.com/openBackhaul/MediatorManager/blob/v1.0.0_spec/spec/concepts/07_FunctionConcepts.md)  

.

    Links to be updated after specification of DeviceDomainManager has been merged into develop branch

.