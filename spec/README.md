# ControllerDomainManager Specification  

### Managed Elements  

    Measurement, Monitoring and Implementation are not included in the v1.0.0_spec.  
    Please, ignore the Managed Elements segment during implementing v1.0.0_impl.  

- The following kinds of Elements are encapsulated:  
  - Controller  
    - [OpenDaylight](./Elements/OpenDaylight)  
  - LoadBalancer  
    - [nginx](./Elements/nginx)  
- The following kind of Endpoint is managed, despite its holding Element is encapsulated by a neighboring domain:  
  - ManagementDomainInterface (TcpClient at Applications encapsulated by [ApplicationDomainManager](./Elements/ADM))  
- The following kinds of Connections are managed:  
  - TCP: ManagementDomainInterface <---> LoadBalancer/Controller  
  - TCP: LoadBalancer <---> Controller  
  - HTTP: ManagementDomainInterface <---> Controller  
  - (Copy: LogicalMountPoint ---> MountPoints)  
  - (ManagementPlaneTransport: Application <---> LogicalController)  
- A neighboring domain is managing the following kind of Endpoint, but CDM is mediating towards the Element:  
  - TcpClient at MountPoints at Controllers  

### InformationStructure  
- [Internal Information Structure](./InformationStructure) (includes definition of the terminology in the CDM)  

### Functions  
- [Public and Private Functions](./Functions)  
- [Example: Sequence of steps to the first ManagementPlaneTransport connection](./Functions/Example.md)

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