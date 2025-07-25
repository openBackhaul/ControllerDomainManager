# Measurement  


## Basic Concept of Measurement  

Tasks of the [MeasurementFunctions](./MeasurementFunctions.md):  
- Collect data from the managed Elements  
- Interpret that data into the logical objects of the data structure inside the OperationalDS  
- Encapsulate the proprietary interfaces of the managed Elements  

Tasks of the [MeasurementOrchestrator](./MeasurementOrchestrator.md):  
- Invoke the MeasurementFunctions  

Measurement results:  
- Availability of  
  - termination point or  
  - connection  
- Currently effective configuration and status of the managed Element  

Measured objects:  
- Physically existing Elements  
  => availability of termination points + currently effective configuration and status  
- Objects representing termination points in OperationalDS  
  => availability of connections  

Measurement philosophy:  
- The logical resources on the managed Elements are completely and exclusively subordinate to the domain manager  
- The measurement concept must cover all consumers of these resources, also to facilitate removing consumers that are not part of the target state  

