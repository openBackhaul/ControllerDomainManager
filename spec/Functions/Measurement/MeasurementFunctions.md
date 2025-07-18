# Measurement  


## Basic Concept of Measurement  

Tasks of the MeasurementFunctions:  
- Collecting data from the managed Elements  
- Interpreting that data into the logical objects of the data structure inside the OperationalDS  
- Encapsulating the proprietary interfaces to the managed Elements  

Tasks of the MeasurementOrchestrator:  
- Invoking the MeasurementFunctions  
  - cyclically (basic, continuous process)  
  - event based (optimize speed of propagation of effects of measurement results)  

Measurement results:  
- Availability of  
  - termination point or  
  - connection  
- Currently effective configuration and status of the managed Element  

Measured objects:  
- Physically existing Elements  
  => availability of termination points + currently effective configuration and status  
- Objects representing termination points in OperationalDS  
  => availability of connections  

Measurement philosophy:  
- The logical resources on the managed Elements are completely and exclusively subordinate to the domain manager  
- The measurement concept must cover all consumers of these resources, also to facilitate removing consumers that are not part of the target state  


## MeasurementFunctions Summary  

Managed Elements and associated MeasurementFunctions (covering availability of termination point + currently effective configuration and status):  
- ManagementDomainInterface  
  - /p1/measure-management-domain-interface  
- LoadBalancer and Forwarding  
  - /p1/measure-list-of-forwardings  
  - /p1/measure-forwarding  
- Controller and MountPoint  
  - /p1/measure-list-of-mount-points  
  - /p1/measure-mount-point  

Managed Connections and associated MeasurementFunctions (covering availability of connection):  
- TcpConnectionA, TcpConnectionB and CopyConnection  
  - /p1/measure-link _(potentially three different MeasurementFunctions required)_  
- Route  
  - /p1/measure-route _(potentially consolidated into /p1/measure-management-plane-transport)_  
- ManagementPlaneTransport  
  - /p1/measure-management-plane-transport  


## ManagementDomainInterface  

The Application itself is managed by another domain.  
The CDM's management is limited to ensuring that the ManagementDomainInterface's configuration is aligned with address and authentication at LoadBalancer, respectively Controller.  
So, measurement is limited to availability, configuration and status of a specified Element.  

### /p1/measure-management-domain-interface  

Is addressing the ApplicationDomainManager  

#### Input:  
- application-name  
  Name of the Application that holds the ManagementDomainInterface  
- management-domain  
  Name of the ManagementDomain  

#### Callback:  
- [ADM://v1/provide-status-of-management-domain-interface](../../Elements/ADM/adm.yaml)  

#### Made Measurements:  
- response.code!=200 => ManagementDomainInterface is unavailable  
- response.body => Current configuration and status of the ManagementDomainInterface  

#### Interpretations:  
response.code:  
- Object - LTP identified by [management-domain] inside ControlConstruct identified by [application-name]  
- Interpretation - entire Object to be deleted from OperationalDS, if [response.code]!=200  

response.body#remote-ip-address:  
- Object - LP identified by 'tcp-client' inside LTP identified by [management-domain] inside ControlConstruct identified by [application-name]  
- Interpretation - [Object#remote-ip-address] = [response.body#remote-ip-address]  

response.body#remote-port:  
- Object - LP identified by 'tcp-client' inside LTP identified by [management-domain] inside ControlConstruct identified by [application-name]  
- Interpretation - [Object#remote-port] = [response.body#remote-port]  

#### Output: <span style="color:blue ;">_(Preliminary)_ </span>  
- list-of-changed-ltps  
  List of references towards LTPs that are affected by change of un-/available or value  


## LoadBalancer and Forwarding  

The CDM encapsulates the LoadBalancer.  
It manages the entire logical resource of the LoadBalancer, which is the Forwardings.  

### /p1/measure-list-of-forwardings  

Is addressing the nginx server at its [management API](https://demo.nginx.com/swagger-ui/)  

#### Input:  
- load-balancer-name  
  Name of a LoadBalancer  

#### Callback:  
- [nginx:/???](../../Elements/nginx/nginx.yaml)  

#### Made Measurements:  
- response.code!=200 => LoadBalancer (incl. all Forwardings) is unavailable  
- response.body => List of currently configured Forwardings; Forwardings that are not included are unavailable  

#### Interpretations:  

response.code:  
- Object - ControlConstruct identified by [load-balancer-name]  
- Interpretation - entire Object to be deleted from OperationalDS, if [response.code]!=200  

response.body#_nginx-api-specific-version-of-list-of-forwardings_:  
- Objects - All LTPs except the one identified by 'load-balancer-manager' inside ControlConstruct identified by [load-balancer-name]  
- Interpretation - any of the Objects to be deleted from OperationalDS, if [Object#uuid] not included in [response.body#_nginx-api-specific-version-of-list-of-forwardings_]  

#### Output: <span style="color:blue ;">_(Preliminary)_ </span>  
- list-of-changed-ltps  
  List of references towards LTPs that are affected by change of un-/available or value  

### /p1/measure-forwarding  

Is addressing the nginx server at its [management API](https://demo.nginx.com/swagger-ui/)  

#### Input:  
- load-balancer-name  
  Name of a LoadBalancer  
- management-domain  
  Name of the ManagementDomain  

#### Callback:  
- [nginx:/???](../../Elements/nginx/nginx.yaml)  

#### Made Measurements:  
- response.code!=200 => Forwarding is unavailable  
- response.body => Current configuration and status of the Forwarding  

#### Interpretations:  

response.code:  
- Object - LTP identified by [management-domain] inside ControlConstruct identified by [load-balancer-name]  
- Interpretation - entire Object to be deleted from OperationalDS, if [response.code]!=200  

response.body#_nginx-api-specific-version-of-local-ip-address_:  
- Object - LP identified by 'tcp-server' inside LTP identified by [management-domain] inside ControlConstruct identified by [load-balancer-name]  
- Interpretation - [Object#local-ip-address] = [response.body#_nginx-api-specific-version-of-local-ip-address_]  

response.body#_nginx-api-specific-version-of-local-port_:
- Object - LP identified by 'tcp-server' inside LTP identified by [management-domain] inside ControlConstruct identified by [load-balancer-name]  
- Interpretation - [Object#local-port] = [response.body#_nginx-api-specific-version-of-local-port_]  

response.body#_nginx-api-specific-version-of-list-of-tcp-clients_:  
- Objects - All LPs except the one identified by 'tcp-server' inside LTP identified by [management-domain] inside ControlConstruct identified by [load-balancer-name]  
- Interpretation - any of the Objects to be deleted from OperationalDS, if [Object#uuid] not included in [response.body#_nginx-api-specific-version-of-list-of-tcp-clients=*/uuid_]  

response.body#_nginx-api-specific-version-of-list-of-tcp-clients{controllerName}/remote-ip-address_:  
- Object - LP identified by [controllerName] inside LTP identified by [management-domain] inside ControlConstruct identified by [load-balancer-name]  
- Interpretation - [Object#remote-ip-address] = [response.body#_nginx-api-specific-version-of-list-of-tcp-clients={controllerName}/remote-ip-address_]  

response.body#_nginx-api-specific-version-of-list-of-tcp-clients{controllerName}/remote-port_:  
- Object - LP identified by [controllerName] inside LTP identified by [management-domain] inside ControlConstruct identified by [load-balancer-name]  
- Interpretation - [Object#remote-port] = [response.body#_nginx-api-specific-version-of-list-of-tcp-clients={controllerName}/remote-port_]  

#### Output: <span style="color:blue ;">_(Preliminary)_ </span>  
- list-of-changed-ltps  
  List of references towards LTPs that are affected by change of un-/available or value  


## Controller and MountPoint  

The CDM encapsulates the Controller.  
It manages the entire logical resource of the Controller, which is the MountPoints.  

### /p1/measure-list-of-mount-points  

Is addressing the OpenDaylight controller  

#### Input:  
- controller-name  
  Name of a Controller  

#### Callback:  
- [ODL://rests/data/network-topology:network-topology/topology=topology-netconf?fields=node(node-id)](../../Elements/OpenDaylight/OpenDaylight.yaml)  

#### Made Measurements:  
- response.code!=200 => Controller (incl. all MountPoints) is unavailable  
- response.body => List of currently configured MountPoints; MountPoints that are not included are unavailable  

#### Interpretations:  

response.code:  
- Object - ControlConstruct identified by [controller-name]  
- Interpretation - entire Object to be deleted from OperationalDS, if [response.code]!=200  

response.body#network-topology:topology/node/node-id:  
- Objects - All LTPs except the one identified by 'controller-manager' inside ControlConstruct identified by [controller-name]  
- Interpretation - any of the Objects to be deleted from OperationalDS, if [Object#local-id] not included in [response.body#network-topology:topology/node/node-id]  

#### Output: <span style="color:blue ;">_(Preliminary)_ </span>  
- list-of-changed-ltps  
  List of references towards LTPs that are affected by change of un-/available or value  

### /p1/measure-mount-point  

Is addressing the OpenDaylight controller  

#### Input:  
- controller-name  
  Name of a Controller  
- device-name  
  Name of the MountPoint  

#### Callback:  
- [ODL://rests/data/network-topology:network-topology/topology=topology-netconf/node={mount-name}](../../Elements/OpenDaylight/OpenDaylight.yaml)  

#### Made Measurements:  
- response.code!=200 => MountPoint is unavailable  
- response.body => Current configuration and status of the MountPoint  

#### Interpretations:  

response.code:  
- Object - LTP identified by [device-name] inside ControlConstruct identified by [controller-name]  
- Interpretation - entire Object to be deleted from OperationalDS, if [response.code]!=200  

response.body#network-topology:node/netconf-node-topology:host:  
- Object - LP identified by 'tcp-client' inside LTP identified by [device-name] inside ControlConstruct identified by [controller-name]  
- Interpretation - [Object#remote-ip-address] = [response.body#network-topology:node/netconf-node-topology:host]  

response.body#network-topology:node/netconf-node-topology:port:  
- Object - LP identified by 'tcp-client' inside LTP identified by [device-name] inside ControlConstruct identified by [controller-name]  
- Interpretation - [Object#remote-port] = [response.body#network-topology:node/netconf-node-topology:port]  

response.body#network-topology:node/netconf-node-optional:notification/subscribe:  
- Object - LP identified by 'tcp-client' inside LTP identified by [device-name] inside ControlConstruct identified by [controller-name]  
- Interpretation - [Object#notification-subscribe] = [response.body#network-topology:node/netconf-node-optional:notification/subscribe]  

response.body#network-topology:node/netconf-node-optional:notification/stream-name:  
- Object - LP identified by 'tcp-client' inside LTP identified by [device-name] inside ControlConstruct identified by [controller-name]  
- Interpretation - [Object#notification-stream-name] = [response.body#network-topology:node/netconf-node-optional:notification/stream-name]  


---- ab hier geht's weiter ----

response.body#network-topology:node/netconf-node-topology:username:  
- Object - LP identified by 'tcp-client' inside LTP identified by [device-name] inside ControlConstruct identified by [controller-name]  
- Interpretation - [Object#remote-ip-address] = [response.body#network-topology:node/netconf-node-topology:host]  

response.body#network-topology:node/netconf-node-topology:password:  
- Object - LP identified by 'tcp-client' inside LTP identified by [device-name] inside ControlConstruct identified by [controller-name]  
- Interpretation - [Object#remote-port] = [response.body#network-topology:node/netconf-node-topology:port]  





response.body#local-ip-address:  
- Object - LP identified by 'tcp-server' inside LTP identified by [management-domain] inside ControlConstruct identified by [load-balancer-name]  
- Interpretation - [Object#local-ip-address] = [response.body#local-ip-address]  

response.body#local-port:
- Object - LP identified by 'tcp-server' inside LTP identified by [management-domain] inside ControlConstruct identified by [load-balancer-name]  
- Interpretation - [Object#local-port] = [response.body#local-port]  

response.body#list-of-tcp-clients:  
- Objects - All LPs except the one identified by 'tcp-server' inside LTP identified by [management-domain] inside ControlConstruct identified by [load-balancer-name]  
- Interpretation - any of the Objects to be deleted from OperationalDS, if [Object#uuid] not included in [response.body#list-of-tcp-clients=*/uuid]  

response.body#list-of-tcp-clients{controllerName}/remote-ip-address:  
- Object - LP identified by [controllerName] inside LTP identified by [management-domain] inside ControlConstruct identified by [load-balancer-name]  
- Interpretation - [Object#remote-ip-address] = [response.body#list-of-tcp-clients={controllerName}/remote-ip-address]  

response.body#list-of-tcp-clients{controllerName}/remote-port:  
- Object - LP identified by [controllerName] inside LTP identified by [management-domain] inside ControlConstruct identified by [load-balancer-name]  
- Interpretation - [Object#remote-port] = [response.body#list-of-tcp-clients={controllerName}/remote-port]  

#### Output: <span style="color:blue ;">_(Preliminary)_ </span>  
- list-of-changed-ltps  
  List of references towards LTPs that are affected by change of un-/available or value  









=============

Welche verwaltete Ressource ist betroffen?

** MeasurementFunction name

Encapsulated interface

Input 

Callbacks
Referenz auf details 

Interpretation
- high level
- in detail (Effekt auf OperationalDS)

Output (what is indicated to the MeasurementOrchestrator)

==========





## Interpreting Data



<span style="color:blue ;">_The following two definitions are incomplete_ </span>  

| Forwarding     |   |
| -------------- | - |
| Function       | /p1/measure |
| Object         | LTP identified by [managementDomain] inside ControlConstruct with [/control-construct/category]=='loadBalancer' |
| Measurement    |  |
| Result         |  |
| Interpretation |  |

| Forwarding     |   |
| -------------- | - |
| Function       | /p1/measure |
| Object         | LTP identified by [managementDomain] inside ControlConstruct with [/control-construct/category]=='loadBalancer' |
| Measurement    |  |
| Result         |  |
| Interpretation |  |


# Hier geht's weiter



| MountPoint     |   |
| -------------- | - |
| Function       | /p1/measure-list-of-mount-points |
| Object         | ControlConstruct with [/control-construct/category]=='controller' |
| Measurement    | [ODL://rests/data/network-topology:network-topology/topology=topology-netconf?fields=node(node-id)$response.code] |
| Result         | Availability of the Controller |
| Interpretation | entire Object to be deleted from OperationalDS, if ResponseCode!=200 |

| MountPoint     |   |
| -------------- | - |
| Function       | /p1/measure |
| Object         | LTP identified by [deviceName] inside ControlConstruct with [/control-construct/category]=='controller' |
| Measurement    | [C://_service-for-retrieving-list-of-mount-points$response.body#list-of-mount-points_] |
| Result         | list of names of MountPoints |
| Interpretation | entire Object to be deleted from OperationalDS, if deviceName==[/control-construct/logical-termination-point/local-id] not included in Result |

| LogicalController |   |
| -------------- | - |
| Function       | /p1/measure |
| Object         | ControlConstruct with [/control-construct/category]=='logicalController' |
| Measurement    | ./. |
| Result         | ./. |
| Interpretation | must exist in OperationalDS |

| LogicalMountPoint |   |
| -------------- | - |
| Function       | /p1/measure |
| Object         | LTP identified by [deviceName] inside ControlConstruct with [/control-construct/category]=='logicalController' |
| Measurement    | ./. |
| Result         | ./. |
| Interpretation | must exist in OperationalDS |


### Internal dependencies     

| Link           |   |
| -------------- | - |
| Object         | any Link with termination points described by triple of references {_cc,_ltp ,_lp } |
| Measurement    | [/network-control-domain=operational/control-construct=_cc/logical-termination-point=_ltp/layer-protocol=_lp] |
| Result         | available/not available in OperationalDS |
| Interpretation | entire Object to be deleted from OperationalDS, if Result==not available |

| Route          |   |
| -------------- | - |
| Object         | any Route with _links (list of references to the Links that chain up between the FC's endpoints) |
| Measurement    | [/network-control-domain=operational/link=[_links]] |
| Result         | available/not available in OperationalDS |
| Interpretation | entire Object to be deleted from OperationalDS, if Result==not available for at least one of the referenced Links |

| FC             |   |
| -------------- | - |
| Object         | any FC with route (list of alternative Routes between the FC's endpoints) |
| Measurement    | [/network-control-domain=operational/forwarding-domain=_any_/forwarding-construct=_any_/route].length |
| Result         | number of operational Routes |
| Interpretation | entire Object to be deleted from OperationalDS, if Result==0 |
