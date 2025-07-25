# MeasurementOrchestrator  

**Termination Points**  
The MeasurementOrchestrator (/p1/measurement-orchestrator) is cyclically initiating the measurement of the resource consumption on the managed Elements.  

The time period between two identical measurements on the same managed Element is a configurable parameter (measurementPeriod) in the FunctionData.  
Its initial value can be found [here](../../InformationStructure/initialData/_02_FunctionData.yaml).  

- TcpClient at Application (ManagementDomainInterface) => /p1/measure-management-domain-interface  
- LoadBalancer => /p1/measure-list-of-forwardings  
- Controller => /p1/measure-list-of-mount-points  

Each of these MeasurementFunctions is not just updating the OperationalDS with information about the termination points, it is also returning a list of changed termination points.  

**Links**  
For every entry in any of the returned lists of changed termination points, the MeasurementOrchestrator is initiating the measurement of the potentially affected Links.  

- changed termination point indicated => /p1/measure-links  

This leads to updating the Links referencing the changed termination point in the OperationalDS and returning a list of changed Links.  

**Routes**  
For every entry in the returned list of changed Links, the MeasurementOrchestrator is initiating the measurement of the potentially affected Routes.  

- changed Link indicated => /p1/measure-routes  

This leads to updating the Routes referencing the changed Link in the OperationalDS and returning a list of _affected_ FCs.  
(Background: While both CC/LTP and Link classes are composite associated to NetworkControlDomain, Route class is  composite associated to FC. This is why /p1/measure-routes is able to return the affected FCs.)  

**FCs**  
For every entry in the returned list of affected FCs, the MeasurementOrchestrator is initiating the measurement of the potentially changed FCs.  

- affected FC indicated => /p1/measure-management-plane-transport  

This leads to updating the FCs comprising the changed Route in the OperationalDS and returning a list of actually changed FCs.  
(Background: The FC is not considered to have changed as long as there is at least one operational Route.)  
