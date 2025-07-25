# Monitoring  


## Basic Concept of Monitoring  

Tasks of the MonitoringFunctions:  
- Compare the logical objects in OperationalDS with RunningDS  
- The results of the comparison get documented into the CurrentAlarms  
  - deviations cause creation of entries  
  - equalities cause deletion of entries  
- Every kind of deviation gets identified by a specific error code  

Tasks of the [MonitoringOrchestrator](./MonitoringOrchestrator.md):  
- Invoke the MonitoringFunctions  

Structure of the MonitoringFunctions:  
- MonitoringFunctions get invoked, exclusively the MonitoringOrchestrator implements a cyclic operation.  
- The ImplementationFunctions relate to Elements (not Connections).  
  => The error objects in the CurrentAlarms need to relate to Elements.  
  => The MonitoringFunctions need to compare the representations of Elements (but not Connections) in OperationalDS and RunningDS.  
  => The scope of the individual MonitoringFunctions is structured according to the schema definitions of these Elements.  
- The error objects in the CurrentAlarms are grouped by end-to-end connections (ManagementPlaneTransportFc).  
- The result of the individual MonitoringFunction is not passed as a response, but directly consolidated into the CurrentAlarms.  
- Both equality and deviations are documented into the CurrentAlarms  
  - If a new deviation is detected, a new error object is created  
  - If a deviation is detected, which already existed before, the existing error object (including the list of past attempts) must not be changed
  - If an equality is detected, a potentially existing error object would be removed from the CurrentAlarms, this would also involve cutting down the sub-structure of the end-to-end connection in the CurrentAlarms


## Monitoring for missing and faulty  
- /p1/monitoring-orchestrator  
  - cyclically scrolls through the list of FCs (ManagementPlaneTransports) in RunningDS and sequentially invokes the /p1/monitor-management-plane-transport for every entry in the list  
- /p1/monitor-management-plane-transport  
  - creates a list of Links from the list of Routes inside the ManagementPlaneTransport  
  - creates unique pairs of {[_cc], [_ltp]} from the termination points (linktp) of these Links  
  - classifies these pairs of {[_cc], [_ltp]} into the following categories and invokes the following MonitoringFunctions:
    - pair with [category]=='application' at [_cc] => /p1/monitor-management-domain-interface  
    - pair with [category]=='loadBalancer' at [_cc] => /p1/monitor-forwarding  
    - pair with [category]=='controller' at [_cc] => /p1/monitor-mount-point  
- /p1/monitor-management-domain-interface  
    - checks OperationalDS for the following divergences:  
      - if CC with [_cc] does not exists => error object at CC level with error code 631  
      - if LTP with [_ltp] does not exists => error object at LTP level with error code 632  
      - if values at LP identified by [local-id]='tcp-client' differ from RunningDS => error object at LP level with error code 633  
- /p1/monitor-forwarding
    - checks OperationalDS for the following divergences:  
      - if CC with [_cc] does not exists => error object at CC level with error code 640  
      - if LTP with [_ltp] does not exists => error object at LTP level with error code 641  
      - if values at any LP different from RunningDS => error object at LTP level with error code 643  
- /p1/monitor-mount-point
    - checks OperationalDS for the following divergences:  
      - if CC with [_cc] does not exists => error object at CC level with error code 650  
      - if LTP with [_ltp] does not exists => error object at LTP level with error code 651  
      - if values at any LP different from RunningDS => error object at LTP level with error code 653  


## Monitoring for obsolete  
- /p1/monitoring-orchestrator  
  - cyclically scrolls through the list of CCs in RunningDS and sequentially invokes MonitoringFunctions according to the following classifications:  
    - if [category]=='loadBalancer', then invoke /p1/monitor-load-balancer  
    - if [category]=='controller', then invoke /p1/monitor-controller  
- /p1/monitor-load-balancer  
  - checks OperationalDS for the following divergences:  
    - if there is LTP with [local-id] not known in RunningDS => error object at LTP level with error code 642
- /p1/monitor-controller  
  - checks OperationalDS for the following divergences:  
    - if there is LTP with [local-id] not known in RunningDS => error object at LTP level with error code 652
