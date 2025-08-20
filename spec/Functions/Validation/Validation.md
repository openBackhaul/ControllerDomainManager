# Validation  

Tasks of the [ValidationFunctions](./ValidationFunctions.md):  
- Validate the content of the CandidateDS against generic rules  

Tasks of the [ValidationOrchestrator](./ValidationOrchestrator.md):  
- Invoke a configurable set of ValidationFunctions depending on the InterpretationFunctions executed before  

Validation philosophy:  
- Network context
  Validation shall not focus on the bare change, but the complete context.  
- Fragmentation  
  The required validation tasks shall be fragmented to such an extent that the context to a specific InterpretationFunction gets eliminated. Individual ValidationFunctions shall combine to validation sequences of diverse InterpretationFunctions.  
- Flexibility  
  It shall be feasible to flexibly add, remove or replace ValidationFunctions at any time without changing the implementation of other ValidationFunctions or the ValidationOrchestrator.  
  The composition of validation sequences shall be freely configurable.  
- Reuse across applications  
  Ideally, ValidationFunctions (particularly for SelfTesting) are so generic that they can be re-used in multiple applications.  
