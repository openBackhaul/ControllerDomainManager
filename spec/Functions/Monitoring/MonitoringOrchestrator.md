### MonitoringOrchestrator  

The MonitoringOrchestrator is cyclically triggered by the Pulser and scrolls through the lists of ManagementPlaneTransport connections and Elements and invokes the respective MonitoringFunctions.  

After being triggered by the Pulser, ...  

- ... the MonitoringOrchestrator reads the list of ManagementPlaneTransport connections from the RunningDS and invokes the /p1/monitor-management-plane-transport for every entry in that list one after another.  

- ... the MonitoringOrchestrator reads the list of CCs from the RunningDS and invokes one of the following MonitoringFunctions for every entry, which is matching the criteria, one after another.  
  - /p1/monitor-load-balancer, if [category]=='loadBalancer'  
  - /p1/monitor-controller, if [category]=='controller'  
