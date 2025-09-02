# MonitoringFunctions  

MonitoringFunctions compare measured state (OperationalDS) with target state (RunningDS).  
Depending on the type of deviation found, entries are generated in the internal list of CurrentAlarms.  
Each entry is described by a specific ErrorCode.  

#### Two kinds of monitoring are distinguished:  
- Monitoring for missing and faulty  
The RunningDS defines a set of ManagementPlaneTransport connections in their deep detail as a target state.  
Monitoring checks whether these ManagementPlaneTransport connections are actually operational as defined.  
Deviations are expected to identify missing or faulty configurations on the managed Elements.  

- Monitoring for obsolete  
Monitoring checks the managed Elements for configurations that do not have any correspondence in the target state defined in the RunningDS.  
Deviations are expected to identify obsolete configuration artifacts on the managed Elements.  

#### CurrentAlarms:
- Results of the monitoring are not passed as a response, but directly consolidated into the CurrentAlarms.  
- If a new deviation is detected, a new error object is created in the CurrentAlarms.  
Independently from the kind of monitoring, error objects are grouped by end-to-end connections (ManagementPlaneTransportFc).  
- If the MonitoringFunction detects a deviation that is already documented in the CurrentAlarms, the existing error object (including the list of past attempts) must not be changed  
- If an equality is detected, a potentially existing error object has to be removed from the CurrentAlarms.  
This might involve cutting down the sub-structure or even deleting the entire end-to-end connection from the CurrentAlarms.  

### Monitoring for missing and faulty  

The following fixed sequence of MonitoringFunctions gets triggered by the MonitoringOrchestrator calling the /p1/monitor-management-plane-transport with a [forwardingConstructName] as an input.  

- /p1/monitor-management-plane-transport  
  - creates a list of Links from the list of Routes inside the ManagementPlaneTransport  
  - checks the resulting Links for Routes,  
    - if there is a Route in the Link, the Links inside this Route are also added to the list of Links  
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
      - if LTP with [_ltp] does not exists => error object at LTP level with error code 652  
      - if values at any LP different from RunningDS => error object at LTP level with error code 654  

### Monitoring for obsolete  

The following MonitoringFunctions do not define a sequence.  
They get individually triggered by the MonitoringOrchestrator calling them with an [elementName] as an input.  

- /p1/monitor-load-balancer  
  - checks OperationalDS for the following divergences:  
    - if there is LTP with [local-id] not known in RunningDS => error object at LTP level with error code 642  

- /p1/monitor-controller  
  - checks OperationalDS for the following divergences:  
    - if there are differences in LTP identified by 'controller-manager' => error object at CC level with error code 651
    - if there is LTP with [local-id] not known in RunningDS => error object at LTP level with error code 653
