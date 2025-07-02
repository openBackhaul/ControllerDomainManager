# Applied Measurements  

<span style="color:red;"> _**! The definitions on this page are experimental !**_ </span>  

### Specific Definitions of the Availability of Termination Points  

| Application    |   |
| -------------- | - |
| Object         | ControlConstruct with [/control-construct/category]=='application' |
| Measurement    | [ALM://v1/list-applications$response.body#list-of-application-names] |
| Result         | list of names of Applications |
| Interpretation | entire Object to be deleted from OperationalDS, if applicationName==[/control-construct/element-name] not included in Result |

| Management DomainInterface |   |
| -------------- | - |
| Object         | LTP identified by [managementDomain] inside ControlConstruct with [/control-construct/category]=='application' |
| Measurement    | [ALM://v1/list-management-domains$response.body#list-of-management-domains] |
| Result         | list of names of ManagementDomains |
| Interpretation | entire Object to be deleted from OperationalDS, if managementDomain==[/control-construct/logical-termination-point/local-id] not included in Result |

| LoadBalancer   |   |
| -------------- | - |
| Object         | ControlConstruct with [/control-construct/category]=='loadBalancer' |
| Measurement    | [LB://_service-for-retrieving-list-of-forwardings_$response.code] |
| Result         | ResponseCode |
| Interpretation | entire Object to be deleted from OperationalDS, if ResponseCode!=200 |

| Forwarding     |   |
| -------------- | - |
| Object         | LTP identified by [managementDomain] inside ControlConstruct with [/control-construct/category]=='loadBalancer' |
| Measurement    | [LB://_service-for-retrieving-list-of-forwardings$response.body#list-of-forwardings_] |
| Result         | list of names of Forwardings |
| Interpretation | entire Object to be deleted from OperationalDS, if managementDomain==[/control-construct/logical-termination-point/local-id] not included in Result |

| Controller     |   |
| -------------- | - |
| Object         | ControlConstruct with [/control-construct/category]=='controller' |
| Measurement    | [C://_service-for-retrieving-list-of-mount-points_$response.code] |
| Result         | ResponseCode |
| Interpretation | entire Object to be deleted from OperationalDS, if ResponseCode!=200 |

| MountPoint     |   |
| -------------- | - |
| Object         | LTP identified by [deviceName] inside ControlConstruct with [/control-construct/category]=='controller' |
| Measurement    | [C://_service-for-retrieving-list-of-mount-points$response.body#list-of-mount-points_] |
| Result         | list of names of MountPoints |
| Interpretation | entire Object to be deleted from OperationalDS, if deviceName==[/control-construct/logical-termination-point/local-id] not included in Result |

| LogicalController |   |
| -------------- | - |
| Object         | ControlConstruct with [/control-construct/category]=='logicalController' |
| Measurement    | ./. |
| Result         | ./. |
| Interpretation | must exist in OperationalDS |

| LogicalMountPoint |   |
| -------------- | - |
| Object         | LTP identified by [deviceName] inside ControlConstruct with [/control-construct/category]=='logicalController' |
| Measurement    | ./. |
| Result         | ./. |
| Interpretation | must exist in OperationalDS |


### Generic Definitions of the Availability of Connections  

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
