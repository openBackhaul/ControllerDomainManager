# MeasurementFunctions  

The MeasurementFunctions collect data and translate it into concrete logical objects that build the internal data structure inside the OperationalDS.  
The data structures inside the CandidateDS, RunningDS and OperationalDS are build from the same classes.  
In an ideal and stable situation, they should be identical.  

Managed Elements and associated MeasurementFunctions (covering availability of termination point + currently effective configuration and status):  
- [ManagementDomainInterface](#managementdomaininterface)  
  - /p1/measure-management-domain-interface  
- [LoadBalancer and Forwarding](#loadbalancer-and-forwarding)  
  - /p1/measure-list-of-forwardings  
- [Controller and MountPoint](#controller-and-mountpoint)  
  - /p1/measure-list-of-mount-points  

Managed Connections and associated MeasurementFunctions (covering availability of connection):  
- [TcpConnectionA, TcpConnectionB and CopyConnection](#tcpconnectiona-tcpconnectionb-and-copyconnection)  
  - /p1/measure-links  
- [Route](#route)  
  - /p1/measure-routes
- [ManagementPlaneTransport](#managementplanetransport)  
  - /p1/measure-management-plane-transport  


## ManagementDomainInterface  

Applications are managed by another domain (ADM).  
The CDM's scope is limited to ensuring that the ManagementDomainInterface's configuration is aligned with address and authentication at LoadBalancer, respectively Controller.  
So, measurement is limited to availability, configuration and status of a specified ManagementDomainInterface.  

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
Callback$response.code:  
- Object - LTP identified by [management-domain] inside ControlConstruct identified by [application-name]  
- Interpretation - entire Object to be deleted from OperationalDS, if [response.code]!=200  

response.body#remote-ip-address:  
- Object - LP identified by 'tcp-client' inside LTP identified by [management-domain] inside ControlConstruct identified by [application-name]  
- Interpretation - [Object#remote-ip-address] = [response.body#remote-ip-address]  

response.body#remote-port:  
- Object - LP identified by 'tcp-client' inside LTP identified by [management-domain] inside ControlConstruct identified by [application-name]  
- Interpretation - [Object#remote-port] = [response.body#remote-port]  

#### Output:  
- list-of-changed-ltps {elementName, ltpId}    
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
- response.body  
  => List of currently configured Forwardings; Forwardings that are not included are unavailable  
  => Current configuration and status of all Forwardings  

#### Interpretations:  

CC Availability  
- Callback$response.code:  
  - Object - ControlConstruct identified by [load-balancer-name]  
  - Interpretation - entire Object to be deleted from OperationalDS, if [response.code]!=200  

LTP Availability  
- response.body#_nginx-api-specific-version-of-list-of-forwardings_:  
  - Objects - All LTPs except the one identified by 'load-balancer-manager' inside ControlConstruct identified by [load-balancer-name]  
  - Interpretation - any of the Objects to be deleted from OperationalDS, if [Object#uuid] not included in [response.body#_nginx-api-specific-version-of-list-of-forwardings_]  

LTP Configuration  
- response.body#_nginx-api-specific-version-of-local-ip-address_:  
  - Object - LP identified by 'tcp-server' inside LTP identified by [management-domain] inside ControlConstruct identified by [load-balancer-name]  
  - Interpretation - [Object#local-ip-address] = [response.body#_nginx-api-specific-version-of-local-ip-address_]  

- response.body#_nginx-api-specific-version-of-local-port_:
  - Object - LP identified by 'tcp-server' inside LTP identified by [management-domain] inside ControlConstruct identified by [load-balancer-name]  
  - Interpretation - [Object#local-port] = [response.body#_nginx-api-specific-version-of-local-port_]  

- response.body#_nginx-api-specific-version-of-list-of-tcp-clients_:  
  - Objects - All LPs except the one identified by 'tcp-server' inside LTP identified by [management-domain] inside ControlConstruct identified by [load-balancer-name]  
  - Interpretation - any of the Objects to be deleted from OperationalDS, if [Object#uuid] not included in [response.body#_nginx-api-specific-version-of-list-of-tcp-clients=*/uuid_]  

- response.body#_nginx-api-specific-version-of-list-of-tcp-clients{controllerName}/remote-ip-address_:  
  - Object - LP identified by [controllerName] inside LTP identified by [management-domain] inside ControlConstruct identified by [load-balancer-name]  
  - Interpretation - [Object#remote-ip-address] = [response.body#_nginx-api-specific-version-of-list-of-tcp-clients={controllerName}/remote-ip-address_]  

- response.body#_nginx-api-specific-version-of-list-of-tcp-clients{controllerName}/remote-port_:  
  - Object - LP identified by [controllerName] inside LTP identified by [management-domain] inside ControlConstruct identified by [load-balancer-name]  
  - Interpretation - [Object#remote-port] = [response.body#_nginx-api-specific-version-of-list-of-tcp-clients={controllerName}/remote-port_]  

#### Output:  
- list-of-changed-ltps {elementName, ltpId}    
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
- [ODL://rests/data/network-topology:network-topology/topology=topology-netconf?fields=node](../../Elements/OpenDaylight/OpenDaylight.yaml)  

#### Made Measurements:  
- response.code!=200 => Controller (incl. all MountPoints) is unavailable  
- response.body  
  => List of currently configured MountPoints; MountPoints that are not included are unavailable  
  => Current configuration and status of all MountPoints  

#### Interpretations:  

CC Availability  
- Callback$response.code:  
  - Object - ControlConstruct identified by [controller-name]  
  - Interpretation - entire Object to be deleted from OperationalDS, if [response.code]!=200  

LTP Availability  
- response.body#network-topology:topology=*/node=*/node-id:  
  - Objects - All LTPs except the one identified by 'controller-manager' inside ControlConstruct identified by [controller-name]  
  - Interpretation - any of the Objects to be deleted from OperationalDS, if [Object#local-id] not included in [response.body#network-topology:topology=*/node=*/node-id]  

LTP Configuration  
- response.body#network-topology:topology=*/node=[device-name]/netconf-node-topology:host:  
  - Object - LP identified by 'tcp-client' inside LTP identified by [device-name] inside ControlConstruct identified by [controller-name]  
  - Interpretation - [Object#remote-ip-address] = [response.body#network-topology:topology=*/node=[device-name]/netconf-node-topology:host]  

- response.body#network-topology:topology=*/node=[device-name]/netconf-node-topology:port:  
  - Object - LP identified by 'tcp-client' inside LTP identified by [device-name] inside ControlConstruct identified by [controller-name]  
  - Interpretation - [Object#remote-port] = [response.body#network-topology:topology=*/node=[device-name]/ netconf-node-topology:port]  

- response.body#network-topology:topology=*/node=[device-name]/netconf-node-optional:notification/subscribe:  
  - Object - LP identified by 'tcp-client' inside LTP identified by [device-name] inside ControlConstruct identified by [controller-name]  
  - Interpretation - [Object#notification-subscribe] = [response.body#network-topology:topology=*/node=[device-name]/netconf-node-optional:notification/subscribe]  

- response.body#network-topology:topology=*/node=[device-name]/netconf-node-optional:notification/stream-name:  
  - Object - LP identified by 'tcp-client' inside LTP identified by [device-name] inside ControlConstruct identified by [controller-name]  
  - Interpretation - [Object#notification-stream-name] = [response.body#network-topology:topology=*/node=[device-name]/netconf-node-optional:notification/stream-name]  

LTP Status  
- response.body#network-topology:topology=*/node=[device-name]/netconf-node-topology:connection-status:  
  - Object - LP identified by 'tcp-client' inside LTP identified by [device-name] inside ControlConstruct identified by [controller-name]  
  - Interpretation - [Object#connection-status] = [response.body#network-topology:topology=*/node=[device-name]/netconf-node-topology:connection-status]  

- response.body#network-topology:topology=*/node=[device-name]/netconf-node-topology:session-id:  
  - Object - LP identified by 'tcp-client' inside LTP identified by [device-name] inside ControlConstruct identified by [controller-name]  
  - Interpretation - [Object#session-id] = [response.body#network-topology:topology=*/node=[device-name]/ netconf-node-topology:session-id] 

Logical LTP Capability
- response.body#network-topology:topology=*/node=[device-name]/netconf-node-topology:available-capabilities/available-capability=\*:  
  - Object - LP identified by 'tcp-client' inside LTP identified by [device-name] inside ControlConstruct identified by [[_logical-controller] inside ControlConstruct identified by [controller-name]]  
  - Interpretation - [Object#available-capability=*] = [response.body#network-topology:topology=*/node=[device-name]/netconf-node-topology:available-capabilities/available-capability=\*]; entire list shall be replaced at the LogicalMountPoint  

- response.body#network-topology:topology=*/node=[device-name]/netconf-node-topology:unavailable-capabilities/**un**available-capability=\*:  
  - Object - LP identified by 'tcp-client' inside LTP identified by [device-name] inside ControlConstruct identified by [[_logical-controller] inside ControlConstruct identified by [controller-name]]  
  - Interpretation - [Object#unavailable-capability=*] = [response.body#network-topology:topology=*/node=[device-name]/netconf-node-topology:unavailable-capabilities/unavailable-capability=\*]; entire list shall be replaced at the LogicalMountPoint  

Profile Configuration  
- response.body#network-topology:topology=*/node=[device-name]/netconf-node-topology:username:  
  - Object - Profile (with category=='mountpoint') identified by [ mountPointTemplateName==[_template] inside LTP identified by [device-name] inside ControlConstruct identified by [controller-name] ] 
  - Interpretation - [Object#netconf-user-name] = [response.body#network-topology:topology=*/node=[device-name]/netconf-node-topology:username]  

- response.body#network-topology:topology=*/node=[device-name]/netconf-node-topology:password:  
  - Object - Profile (with category=='mountpoint') identified by [ mountPointTemplateName==[_template] inside LTP identified by [device-name] inside ControlConstruct identified by [controller-name] ] 
  - Interpretation - [Object#netconf-password] = [response.body#network-topology:topology=*/node=[device-name]/netconf-node-topology:password]  

- response.body#network-topology:topology=*/node=[device-name]/netconf-node-topology:sleep-factor:  
  - Object - Profile (with category=='mountpoint') identified by [ mountPointTemplateName==[_template] inside LTP identified by [device-name] inside ControlConstruct identified by [controller-name] ] 
  - Interpretation - [Object#sleep-factor] = [response.body#network-topology:topology=*/node=[device-name]/netconf-node-topology:sleep-factor]  

- response.body#network-topology:topology=*/node=[device-name]/netconf-node-topology:max-connection-attempts:  
  - Object - Profile (with category=='mountpoint') identified by [ mountPointTemplateName==[_template] inside LTP identified by [device-name] inside ControlConstruct identified by [controller-name] ] 
  - Interpretation - [Object#max-connection-attempts] = [response.body#network-topology:topology=*/node=[device-name]/netconf-node-topology:max-connection-attempts]  

- response.body#network-topology:topology=*/node=[device-name]/netconf-node-topology:default-request-timeout-millis:  
  - Object - Profile (with category=='mountpoint') identified by [ mountPointTemplateName==[_template] inside LTP identified by [device-name] inside ControlConstruct identified by [controller-name] ] 
  - Interpretation - [Object#default-request-timeout-millis] = [response.body#network-topology:topology=*/node=[device-name]/netconf-node-topology:default-request-timeout-millis]  

- response.body#network-topology:topology=*/node=[device-name]/netconf-node-topology:tcp-only:  
  - Object - Profile (with category=='mountpoint') identified by [ mountPointTemplateName==[_template] inside LTP identified by [device-name] inside ControlConstruct identified by [controller-name] ] 
  - Interpretation - [Object#tcp-only] = [response.body#network-topology:topology=*/node=[device-name]/netconf-node-topology:tcp-only]  

- response.body#network-topology:topology=*/node=[device-name]/netconf-node-topology:concurrent-rpc-limit:  
  - Object - Profile (with category=='mountpoint') identified by [ mountPointTemplateName==[_template] inside LTP identified by [device-name] inside ControlConstruct identified by [controller-name] ] 
  - Interpretation - [Object#concurrent-rpc-limit] = [response.body#network-topology:topology=*/node=[device-name]/netconf-node-topology:concurrent-rpc-limit]  

- response.body#network-topology:topology=*/node=[device-name]/netconf-node-topology:schema-cache-directory:  
  - Object - Profile (with category=='mountpoint') identified by [ mountPointTemplateName==[_template] inside LTP identified by [device-name] inside ControlConstruct identified by [controller-name] ] 
  - Interpretation - [Object#schema-cache-directory] = [response.body#network-topology:topology=*/node=[device-name]/netconf-node-topology:schema-cache-directory]  

- response.body#network-topology:topology=*/node=[device-name]/netconf-node-topology:between-attempts-timeout-millis:  
  - Object - Profile (with category=='mountpoint') identified by [ mountPointTemplateName==[_template] inside LTP identified by [device-name] inside ControlConstruct identified by [controller-name] ] 
  - Interpretation - [Object#between-attempts-timeout-millis] = [response.body#network-topology:topology=*/node=[device-name]/netconf-node-topology:between-attempts-timeout-millis]  

- response.body#network-topology:topology=*/node=[device-name]/netconf-node-topology:reconnect-on-changed-schema:  
  - Object - Profile (with category=='mountpoint') identified by [ mountPointTemplateName==[_template] inside LTP identified by [device-name] inside ControlConstruct identified by [controller-name] ] 
  - Interpretation - [Object#reconnect-on-changed-schema] = [response.body#network-topology:topology=*/node=[device-name]/netconf-node-topology:reconnect-on-changed-schema]  

- response.body#network-topology:topology=*/node=[device-name]/netconf-node-topology:keepalive-delay:  
  - Object - Profile (with category=='mountpoint') identified by [ mountPointTemplateName==[_template] inside LTP identified by [device-name] inside ControlConstruct identified by [controller-name] ] 
  - Interpretation - [Object#keepalive-delay] = [response.body#network-topology:topology=*/node=[device-name]/netconf-node-topology:keepalive-delay]  


#### Output:  
- list-of-changed-ltps {elementName, ltpId}    
  List of references towards LTPs that are affected by change of un-/available or value  


## TcpConnectionA, TcpConnectionB and CopyConnection  

The CDM manages the TCP connections:  
- A: Application <---> LoadBalancer/Controller  
- B: LoadBalancer <---> Controller  

CopyConnection: The CDM manages the replication of configurations to Controllers that are belonging to the same ManagementDomain.  

### /p1/measure-links  

#### Input:  
- changed LTP {elementName, ltpId}  
  Reference towards an LTP that changed un-/available or value  

#### Callback:  
-> own OperationalDS   

#### Made Measurements:  
- One or more termination points do not exist in OperationalDS => Link to be deleted from OperationalDS  
- Current configuration or status data mismatch at termination points => Link to be deleted from OperationalDS  

#### Interpretations:  
Link Availability (general)  
- [/network-control-domain=operational/control-construct=elementName/logical-termination-point=ltpId]:  
  - Objects - one or more Links with [ [/network-control-domain=running/link=\*/linktp=\*/_cc]==elementName AND [/network-control-domain=running/link=\*/linktp=\*/_ltp]==ltpId ]  
  - Interpretation - entire Object to be deleted from OperationalDS, if [/network-control-domain=operational/control-construct=elementName/logical-termination-point=ltpId] not existing  

Link Availability (TcpConnection only) <span style="color:red ;">_(needs to be detailed)_ </span>  
- if one or more TcpClients at changed LTP {elementName, ltpId}:  
  - Link to be deleted, if [remoteIpAddress] != [localIpAddress at TcpServer at remote end]  
  - Link to be deleted, if [remotePort] != [localPort at TcpServer at remote end]  
- if one or more TcpServers at changed LTP {elementName, ltpId}:  
  - Link to be deleted, if [localIpAddress] != [remoteIpAddress at TcpClient at remote end]  
  - Link to be deleted, if [localPort] != [remotePort at TcpClient at remote end]  

#### Output:  
- list-of-changed-links {localId}  
  List of references towards Links that changed un-/availability  


## Route  

The CDM manages the Routes from Application to LogicalController/ManagementDomain  

### /p1/measure-routes

#### Input:  
- changed Link {localId}  
  Reference towards a Link that changed un-/availability  

#### Callback:  
-> own OperationalDS   

#### Made Measurements:  
- One or more Links do not exist in OperationalDS => Route to be deleted from OperationalDS  

#### Interpretations:  
Route Availability  
- [/network-control-domain=operational/link=localId]:  
  - Objects - one or more Routes with [ [/network-control-domain=running/forwarding-domain=\*/forwarding-construct=\*/route=\*/_links] containing [localId] ]  
  - Interpretation - entire Object to be deleted from OperationalDS, if [/network-control-domain=operational/link=localId] not existing  

#### Output:  
- list-of-affected-fcs [{forwardingDomainName, forwardingConstructName}]  
  List of ManagementPlaneTransports that have changes in their Routes


## ManagementPlaneTransport  

The CDM manages the ManagementPlaneTransport from Application to LogicalController/ManagementDomain  

### /p1/measure-management-plane-transport

#### Input:  
- affected FC {forwardingDomainName, forwardingConstructName}  
  Reference towards an FC that changed un-/availability  

#### Callback:  
-> own OperationalDS  

#### Made Measurements:  
- Number of Routes==0 in OperationalDS => ManagementPlaneTransport (FC) to be deleted from OperationalDS  

#### Interpretations:  
ManagementPlaneTransport Availability  
- [/network-control-domain=operational/forwarding-domain=forwardingDomainName/forwarding-construct=forwardingConstructName/route]  
  - Object - [/network-control-domain=operational/forwarding-domain=forwardingDomainName/forwarding-construct=forwardingConstructName]  
  - Interpretation - entire Object to be deleted from OperationalDS, if no entry in [/network-control-domain=operational/forwarding-domain=forwardingDomainName/forwarding-construct=forwardingConstructName/route]  

#### Output:  
- changed-fc {forwardingDomainName, forwardingConstructName}  
  ManagementPlaneTransport that that changed un-/availability  
