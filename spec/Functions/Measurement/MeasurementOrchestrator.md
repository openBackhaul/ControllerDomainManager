# MeasurementOrchestrator  

The MeasurementOrchestrator is cyclically triggered by the Pulser and invokes the MeasurementFunctions to retrieve data from the Elements that are managed within the domain.  

**Termination Points**  
The MeasurementOrchestrator (/p1/measurement-orchestrator) initiates the measurement of the resource consumption on the managed Elements and triggers the update of the operational state of Connections that are affected by change.  
This implies that there is a fixed sequence and the return values of many Functions are used as an input to other Functions.  

After being triggered by the Pulser, the MeasurementOrchestrator reads the existing CCs from RunningDS and invokes the following MeasurementFunctions one after another (but not before the returned deviations have been processed by consequent function calls):  
- TcpClient at Application (ManagementDomainInterface) => /p1/measure-management-domain-interface  
- LoadBalancer => /p1/measure-list-of-forwardings  
- Controller => /p1/measure-controller and /p1/measure-list-of-mount-points  

Each of these MeasurementFunctions is not just updating the OperationalDS with information about the termination points, it is also returning a list of changed termination points.  

**Links**  
For every entry in any of the returned lists of changed termination points, the MeasurementOrchestrator is initiating the measurement of the potentially affected Links.  

- changed termination point indicated => /p1/measure-links  

This leads to updating the Links in the OperationalDS and returning a list of changed Links.  

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
