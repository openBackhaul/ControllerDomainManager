# ControllerDomainManager Specification

### Managed Elements  
- The following kinds of Elements are encapsulated:  
  - Controller  
  - LoadBalancer  
- The following kinds of Connections are managed:  
  - Application <---> LoadBalancer/Controller  
  - LoadBalancer <---> Controller  
- The following kind of Endpoints is managed, despite its holding Elements are encapsulated by a neighboring domain:  
  - TcpClient at Applications encapsulated by ApplicationLayerManager  

### InformationStructure  
- Introduction and detailed specification of the [Internal Information Structure](./InformationStructure/InformationStructure.md) of the CDM  

### Supported UseCases  
- Connecting Devices to the ApplicationLayer  
- Representing multi controller configurations as a single LogicalController  
- Adding, removing (and implicitly: upgrading) Controllers without traffic impact  

### Functions  
- [Public and Private Functions](./Functions/Functions.md)  

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

### Comments _(Links to be updated after specification of DeviceDomainManager completed)_  
A lot of conceptual work has been done, during specifying the DeviceDomainManager application.  
The following concepts are base to the ControllerDomainManager, too:  
- [AutomationArchitecture](https://github.com/openBackhaul/MediatorManager/blob/v1.0.0_spec/spec/concepts/03_AutomationArchitecture.md)  
- [NetworkTopology](https://github.com/openBackhaul/MediatorManager/blob/v1.0.0_spec/spec/concepts/05_NetworkTopology.md)  
- [FunctionConcepts](https://github.com/openBackhaul/MediatorManager/blob/v1.0.0_spec/spec/concepts/07_FunctionConcepts.md)  
