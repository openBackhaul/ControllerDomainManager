# Index  

### AlarmPac (AP)  
Class definition from the official ONF information model for holding alarm related information and configuration.  

### ControlConstruct (CC)  
Class definition from the official ONF Core IM for representing some element (,e.g. physical or logical) with its own internal controller.  

### CopyConnection  
The CDM just represents LogicalControllers and allows management of LogicalMountPoints.  
The configurations of the LogicalMountPoints get automatically replicated to the MountPoints on the Controllers that belong to the same Controller configuration.  
The CopyConnection (Link) describes on which MountPoints the configuration of a LogicalMountPoint gets replicated.  

### CurrentAlarms (CA)  
Class definition from the official ONF information model for holding the list of currently active alarms ([further details](../Functions/Monitoring/MonitoringFunctions.md#currentalarms)).  

### DomainController (DC)  
The DomainController is the top-level element in the internal data structure of the ControllerDomainManager.  
It consolidates all kinds of data, from the parameters of internal Functions and CurrentAlarms to the entire network built from managed Elements.  

### ErrorCode (EC)  
Class definition from the state-based design of applications for network automation tasks.  
It allows to manage the relation between ErrorCodes (as they result from the MonitoringFunctions) and ImplementationFunctions (that are to applied to resolve the divergence between RunningDS and OperationalDS) ([further details](../Functions/Implementation/ImplementationOrchestrator.md)).  

### Forwarding   
A Forwarding is a configuration inside a LoadBalancer.  
It distributes received requests on a group of Controllers.  

### ForwardingConstruct (FC)  
Class definition from the official ONF Core IM for representing a logical connection that results from configurations on the managed elements.  

### ForwardingDomain (FD)  
Class definition from the official ONF Core IM for defining a potential for creating logical connections by configurations on the managed elements.  
The information structure of the CDM has some simplifications here.  
Actually, the definition of the FD (ManagementDomain) should reference all applications and a single LogicalController.  
Similarly, the definition of the LLFD (Application) should reference a single application and a single LogicalController.  
These references have been omitted as they would serve no practical use.  

### Function (F)  
The Function array allows to manage parameters of the Functions inside the CDM.  
Hypothetical example: If the CDM would implement a Function for cyclically uploading data from the devices, the Function array would comprise a parameter that allows to configure the number of devices that are addressed in parallel for the upload (sliding-window-size).  
The CDM is providing service paths for listing the entries of the Function array and changing an individual entry.  
Creating a complete list of Functions, including their configurable parameters, is part of the specification.  

### LayerProtocol (LP)  
Class definition from the official ONF Core IM for representing a termination point of connections of a specific kind or OSI layer.  

### Link (L)  
Class definition from the official ONF Core IM for representing connections that are between managed elements.  

### LogicalMountPoint  
The CDM is abstracting the actual Controller configurations.  
It is not transparent from how many instances or which software a Controller configuration has been composed.  
The CDM just represents LogicalControllers and allows management of LogicalMountPoints.  
These LogicalMountPoints get then automatically translated into MountPoints on the Controllers that build up the actual Controller configurations.  

### LogicalTerminationPoint (LTP)  
Class definition from the official ONF Core IM for representing a termination point of connection.  
In contrary to most the official ONF information models, the information structure of the CDM is grouping the terminations of multiple kinds of connections at an LTP.  

### LowerLevelForwardingDomain (LLFD)  
A class definition that is derived from, but not part of, the official ONF Core IM.  
It represents a substructure of the FD.  

### ManagementDomainInterface  
An Application might be used for addressing devices in different domains (,e.g. live network and trial area).  
These domains are managed by different Controllers (or groups of Controllers).  
The ManagementDomainInterface holds the information for addressing these Controllers.  
Example: The MWDI needs proper configuration of the IP address, TCP port, username and password of the Controller for accessing the live domain that is holding the 42,ooo devices of the mobile backhaul network.  

### ManagementPlaneTransportConnection  
The ManagementPlane is a connection between an Application and a Device.  
It ranges through several Elements (,e.g. Controller, Mediator) that are managed by different domain managers.  
The CDM is also contributing to transporting this connection.  
To decouple between the domain managers, the CDM is representing the path segment, on which it is transporting the ManagementPlane, as a technologically abstract transport service.  
Internally this ManagementPlaneTransportConnection is documented as an FC between Application and LogicalController.  

### MountPoint  
A MountPoint is a configuration inside a Controller.  
In regard of addressing requests to the Devices, it abstracts the IP addresses and TCP ports of the Devices (or their Mediators) behind a MountName.  

### NetworkControlDomain (NCD)  
Class definition from the official ONF Core IM for distinguishing between networks or network segments.  
Within the CDM it is used to distinguish between the target network (RunningDS) and the actual network(OperationalDS).  

### Profiles (P)  
It is expected that there are several Applications, LoadBalancers, Controllers and MountPoints.  
Some of them might share the same values in some characteristics and might also change these values together as a group.  
These common characteristics are consolidated into templates; and groups of instances of Application, LoadBalancer, Controller or MountPoint that share the same values are referencing the identical instance of template.  
Example: There might be several Applications that are managed by the same ApplicationDomainManager. Consequently, these  Applications share the same [manager-ip-address] amd [manager-port].  

### Pulser (P)  
Class definition from the state-based design of applications for network automation tasks.  
It facilitates the management of the cyclic triggering of internal functions ([further details](../Functions/Pulser)).  

### Route (R)  
Attribute definition from the official ONF Core IM.  
The Route of some connection (FC or Link) is a group of references to lower layer connections (Links) that must combine to a continuous chain between the termination points of the connection.  

### TcpConnectionA
Link between TcpClient (LP) at the ManagementDomainInterface and TcpServer (LP) at the Forwarding or Controller.  

### TcpConnectionB
Link between TcpClient (LP) at the Forwarding and TcpServer (LP) at the Controller.  

### ValidationSequence (VS)  
Class definition from the state-based design of applications for network automation tasks.  
It facilitates to list the ValidationFunctions that shall be executed after a specific InterpretationFunction has been applied on the CandidateDS  ([further details](../Functions/Validation/ValidationOrchestrator.md)).  
