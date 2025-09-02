# ImplementationOrchestrator  

After being triggered by the Pulser, the ImplementationOrchestrator (/p1/implementation-orchestrator) scans the CurrentAlarms for error objects that are ready for their next attempt to be fixed (means: [dateOfNextAttemptToFix] reached or exceeded).  

Whenever such error object is found, it reads the [_errorCode] from the the CurrentAlarms and checks for the associated ImplementationFunction in the ErrorCode definitions.  
If there is some ImplementationFunction associated, the ImplementationOrchestrator invokes it.  

The ErrorCode array allows to manage the ImplementationFunction that gets invoked by some error code.  
The associations between [_errorCode]s and ImplementationFunctions are documented in the ErrorCode definitions, which can be configured via the CDM API.  
Apart from listing and updating existing relationships, the administrative services also allow to define new ones.  
One ImplementationFunction can be associated with an [_errorCode] in maximum.  
[Schema](../../InformationStructure/schemas/05_ErrorCode.yaml) and [initial configuration](../../InformationStructure/initialData/_05_ErrorCodeData.yaml) of the ImplementationOrchestrator.  
