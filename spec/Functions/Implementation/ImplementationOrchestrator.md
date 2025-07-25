# ImplementationOrchestrator  

The ImplementationOrchestrator (/p1/implementation-orchestrator) is cyclically scanning the CurrentAlarms for error objects that are ready for their next attempt to be fixed (means: [date-of-next-attempt-to-fix] exceeded).  

The time period between starting two consequent scans is a configurable parameter (implementationIntervalDuration) in the FunctionData.  
Its initial value can be found [here](../../InformationStructure/initialData/_02_FunctionData.yaml).  

Whenever such error object found, it reads the [_error-code] from the the CurrentAlarms and invokes the associated ImplementationFunction.  

The association between [_error-code] and ImplementationFunction is configurable in the ErrorCodes.  
The initial relationships can be found [here](../../InformationStructure/initialData/_05_ErrorCodeData.yaml).  
