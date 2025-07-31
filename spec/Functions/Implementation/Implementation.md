# Implementation  

Tasks of the [ImplementationFunctions](./ImplementationFunctions.md):  
- Execute a specific configuration task on a physically existing Element  
- Document response and next step into the CurrentAlarms  
- Encapsulate the proprietary interfaces of the managed Elements  

Tasks of the [ImplementationOrchestrator](./ImplementationOrchestrator.md):  
- Invoke the ImplementationFunctions  

Implementation philosophy:  
- Fragmentation  
  The required configuration tasks shall be fragmented to such an extent that the context to a specific use case gets eliminated. Individual ImplementationFunctions shall contribute to diverse use cases.  
- Safety  
  Operational connections must not be harmed.  
  Every individual step (ImplementationFunction) must end in a stable state.  
- Deadlock Prevention  
  If several steps are required to reach the target state, those increasing the range of possibilities must be performed first.  
- No Linear Processes  
  If several steps are required to reach the target state, these must not follow a rigid sequence of function calls. Whatever step can be done should be done.  

These principles may contradict each other. In such cases, priority should be given in accordance with the order in which they are listed.  
