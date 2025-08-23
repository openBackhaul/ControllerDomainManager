# Pulser  

The Pulser implements the cyclic invocation of other Functions, as for example:  
- MeasurementOrchestrator  
- MonitoringOrchestrator  
- ImplementationOrchestrator  

The list of Functions, which can be triggered by the Pulser, and their names are pre-defined before starting the CDM.  
period-length, starting-time and ending-time can be configured via the CDM API.  
Pulses can be individually de-/activated by the same administrative service.  
[Schema](../../InformationStructure/schemas/04_Pulser.yaml) and [initial configuration](../../InformationStructure/initialData/_04_PulserData.yaml) of the Pulser.  

The period-length defines the time period between two identical calls.  
Some calls might trigger time-consuming cascades of activities.  
The pulser ignores the status of processes that have already been started, which might result in multiple instances of the same process being executed in parallel.  
