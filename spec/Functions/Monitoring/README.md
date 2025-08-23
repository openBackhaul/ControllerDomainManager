# Monitoring  

Tasks of the [MonitoringFunctions](./MonitoringFunctions.md):  
- Compare the logical objects in OperationalDS with RunningDS  
- The results of the comparison get documented into the CurrentAlarms  
  - deviations cause creation of entries  
  - equalities cause deletion of entries  
- Every kind of deviation gets identified by a specific error code  

Tasks of the [MonitoringOrchestrator](./MonitoringOrchestrator.md):  
- Invoke the MonitoringFunctions  
