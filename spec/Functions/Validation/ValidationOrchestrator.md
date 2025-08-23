# ValidationOrchestrator

After being triggered by the InterpretationFunction, the ValidationOrchestrator (p1ValidationOrchestrator) checks the ValidationSequence for associated ValidationFunctions and starts to sequentially execute them.

If one of the ValidationFunctions would return a response code different from 204, ...  
- ... the ValidationOrchestrator would immediately stop executing the sequence and ...  
- ... return this response code to the InterpretationFunction, which would return it to the requestor.  

If all the ValidationFunctions in the sequence would respond 204, ...  
- ... the ValidationOrchestrator would overwrite the RunningDS with the content of the  CandidateDS, and ...  
- ... the ValidationOrchestrator would respond 204 to the InterpretationFunction, which would  return this value to the requestor.  

During the process of interpretation and validation, the CDM does not accept requests to any of the InterpretationFunctions and responds 429 'too many requests'.  

The ValidationSequence comprises an entry for every implemented InterpretationFunction (name equals [_triggerFunction]). 
The associated sequences of ValidationFunctions can be listed and updated via the CDM API.  
[Schema](../../InformationStructure/schemas/03_ValidationSequence.yaml) and [initial configuration](../../InformationStructure/initialData/_03_ValidationSequenceData.yaml) of the ValidationSequence.  
