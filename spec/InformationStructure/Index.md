# Index  

### CopyConnection  
The CDM just represents LogicalControllers and allows management of LogicalMountPoints.  
The configurations of the LogicalMountPoints get automatically replicated to the MountPoints on the Controllers that belong to the same Controller configuration.  
The CopyConnection (Link) describes on which MountPoints the configuration of a LogicalMountPoint gets replicated.  

### DomainController  
The DomainController is the top-level element in the internal data structure of the ControllerDomainManager.  
It consolidates all kinds of data, from the parameters of internal Functions and CurrentAlarms to the entire network built from managed Elements.  

### Forwarding   
A Forwarding is a configuration inside a LoadBalancer.  
It distributes received requests on a group of Controllers.  

### Function
The Function array allows to manage parameters of the Functions inside the CDM.  
Hypothetical example: If the CDM would implement a Function for cyclically uploading data from the devices, the Function array would comprise a parameter that allows to configure the number of devices that are addressed in parallel for the upload (sliding-window-size).  
The CDM is providing service paths for listing the entries of the Function array and changing an individual entry.  
Creating a complete list of Functions, including their configurable parameters, is part of the specification.  

### LogicalMountPoint  
The CDM is abstracting the actual Controller configurations.  
It is not transparent from how many instances or which software a Controller configuration has been composed.  
The CDM just represents LogicalControllers and allows management of LogicalMountPoints.  
These LogicalMountPoints get then automatically translated into MountPoints on the Controllers that build up the actual Controller configurations.  

### ManagementDomainInterface  
Elements, which need to be managed, are grouped into domains.  
An interface is required for reading or writing information on Elements in such a domain.  
The interface itself has characteristics that need to be properly configured.  
Example: The MWDI needs proper configuration of the IP address, TCP port, username and password of the Controller for accessing the live domain that is holding the 42,ooo devices of the mobile backhaul network.  

### ManagementPlaneTransportConnection  
The ManagementPlane is a connection between an Application and a Device.  
It ranges through several Elements that belong to diverse domains.  
The CDM is also contributing to transporting this connection.  
To decouple between the domains, the CDM is representing the path segment, on which it is transporting the ManagementPlane, as a technologically abstract transport service.  
Internally this ManagementPlaneTransportConnection is documented as an FC between Application and LogicalController.  

### MountPoint  
A MountPoint is a configuration inside a Controller.  
It hides the IP address and TCP port of the Device (or its Mediator) behind a MountName.  
The MountName can be incorporated into URIs for addressing resources on the Device.  

### Profiles  
It is expected that there are several ManagementDomainInterfaces, LoadBalancers, Controllers and MountPoints.  
Some of them might share the same values in some characteristics and might also change these values together as a group.  
These common characteristics are consolidated into templates and groups of instances of ManagementDomainInterface, LoadBalancer, Controller or MountPoint that share the same values are referencing the identical instance of template.  
Example: There might be several ManagementDomainInterfaces at divers Applications that are all managed by the same ApplicationDomainManager. Consequently, these  ManagementDomainInterfaces share the same [manager-ip-address] amd [manager-port].  

### TcpConnectionA
Link between TcpClient (LP) at the ManagementDomainInterface and TcpServer (LP) at the Forwarding or Controller.  

### TcpConnectionB
Link between TcpClient (LP) at the Forwarding and TcpServer (LP) at the Controller.  
