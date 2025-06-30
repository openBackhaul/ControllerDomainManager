# Interpretation  

## Public InterpretationFunctions  

### Groups of logical objects

The logical objects of the internal data structure can be grouped as follows:
- Logical objects that only exist within the data structure of the application. There is no corresponding, really existing element. The fact that these elements can be freely generated in the internal data structure is expressed by the service name /v1/**create**-element-type.  
- Logical objects that represent a real-world element, but cannot influence the existence of that element. The fact that the internal data structure has to follow the real-world conditions is expressed by the service name /v1/**regard**-element-type.  
- Logical objects that are initially generated in the internal data structure, but are also having effect to the real world. Obviously, this results in configuring logical elements on physical elements. The fact that a specific target state is to be manifested in the real world is expressed by the service name /v1/**establish**-element-type.  

### Created logical objects  

Logical objects need to be **created** for the following types of elements:  
- ApplicationTemplate  
- LoadBalancerTemplate  
- ControllerTemplate  
- LogicalControllerTemplate  

The following Public InterpretationFunctions are provided for managing them:  
- /v1/**create**-_instance_of_element-type_  
- /v1/delete-_instance_of_element-type_  
- /v1/list-_all_instances-of-element-type_  
- /v1/inform-about-_instance-of-element-type_  
- /v1/update-_instance_of_element-type_  

High level description of the [processing of create](./ProcessingCreate.md)  

### Regarded elements  

The following types of elements need to be **regarded** by documenting logical objects:  
- Application  
- LoadBalancer  
- Controller  

The following Public InterpretationFunctions are provided for documenting them:  
- /v1/**regard**-_instance_of_element-type_  
- /v1/disregard-_instance_of_element-type_  
- /v1/list-_all_instances-of-element-type_  
- /v1/inform-about-_instance-of-element-type_  

High level description of the [processing of regard](./ProcessingRegard.md)  

### Established elements  

Logical objects need to be **established** for the following types of elements:  
- ManagementDomain, composed from  
  - LogicalController  
  - Forwarding (if LoadBalancer involved)  
  - n Links between the Forwarding and a Controller (if LoadBalancer involved)  
- ManagementDomainConnection, composed from  
  - Link between Application and either Forwarding (if LoadBalancer involved) or Controller
- ManagementPlaneTransport, composed from  
  - LogicalMountPoint  
  - 1 or n MountPoint(s)  
  - 1 or n Link(s) between MountPoint(s) and LogicalMountPoint  
  - FC between Application and LogicalController  
  - Either
    - 1 Route with references on 
      - the ManagementDomainConnection (in this case: Link between Application and Controller)  
      - the Link between the MountPoint and the LogicalMountPoint
    - or n (!) Routes with references on  
      - the ManagementDomainConnection (in this case: Link between Application and Forwarding)  
      - a Link between the Forwarding and a Controller and  
      - a Link between a MountPoint (inside same the Controller) and the LogicalMountPoint  

The following Public InterpretationFunctions are provided for managing them:  
- /v1/**stablish**-_instance_of_element-type_  
- /v1/dismantle-_instance_of_element-type_  
- /v1/list-_all_instances-of-element-type_  
- /v1/inform-about-_instance-of-element-type_  
- /v1/list-alarms-at-_instance_of_element-type_ (not always)  

High level description of the [processing of establish](./ProcessingEstablish.md)  

## Private InterpretationFunctions  

No Private InterpretationFunctions in the CDM's first release.
