### MonitoringOrchestrator  

The MonitoringOrchestrator (/p1/monitoring-orchestrator) is cyclically initiating the comparisons of  
  - ManagementPlaneTransports (for detecting missing and faulty entries in OperationalDS)  
  - LoadBalancers and Controllers (for detecting obsolete entries in OperationalDS)  

The speeds of monitoring FCs and CCs can be configured independently.  


Hier geht's weiter





The time period between two 


identical measurements on the same managed Element is a configurable parameter (measurementPeriod) in the FunctionData.  
Its initial value can be found [here](../../InformationStructure/initialData/_02_FunctionData.yaml).  

- TcpClient at Application (ManagementDomainInterface) => /p1/measure-management-domain-interface  
- LoadBalancer => /p1/measure-list-of-forwardings  
- Controller => /p1/measure-list-of-mount-points  

Each of these MeasurementFunctions is not just updating the OperationalDS with information about the termination points, it is also returning a list of changed termination points.  