# Basic building blocks  
_(This is a conceptual document that is not directly part of the CDM specification.  
It reflects the status as of end of May 2025 and has not been updated since that time.)_  

**In regards with the controller management, the ControllerDomainManager is distinguishing three categories of things**  

- **ControllerTemplate**  
The ControllerTemplate defines a set of characteristics that are filled with values that are specific to a controller software. It exists in the ControllerDomainManager only.  
- **Controller**  
The Controller defines a set of characteristics that are filled with values that are specific to a controller installation (same controller software might be installed multiple times). It is assumed that these characteristics are describing the configurations of the controller installations or how to address them by requests.  
- **MountPoint**  
Thousands of MountPoints are running inside a Controller. The MountPoint is a NETCONF-RESTCONF protocol converter that is dedicated to a physical device.   

**Static Characteristics of the Controller**  
The ControllerTemplate, from which the Controllers were generated, still determines the characteristics of the Controllers even after instantiation.  
(You could also say that the characteristics in the ControllerTemplate are defined like static variables that can only be changed in the class (ControllerTemplate) but not in the derived objects (Controller).)  

This concepts is identical with the one implemented in the DeviceDomainManager.  

**The work process distinguishes the following three stages:**  
Preparation:  
A lead operational expert or engineering expert is creating the ControllerTemplate whenever a new controller software release got delivered. It means that the ControllerDomainManager gets prepared.  

Resource allocation:  
A member of the operational team is creating an instance of Controller and referencing a ControllerTemplate inside the ControllerDomainManager, whenever a new controller got installed.  

Automated Operation:  
MountPoints get created and dismantled automatically by the ControllerDomainManager after it has been requested to provide a RESTCONF interface for a device.  
