# ValidationFunctions  

The following kinds of ValidationFunctions can be distinguished:  

- SelfTesting  
  SelfTestingFunctions analyze whether the data structure that is resulting from executing the InterpretationFunctions are free from conflicts with generic modelling rules (e.g., the Links referenced by a Route must combine to a chain between the two termination points of the FC).  
  It is expected that these Functions can be reused in various applications.  
  After completion of a test phase, these functions might be deactivated for performance reasons.  

- TargetStateValidation  
  TargetStateValidationFunctions analyze whether the data in the CandidateDS is describing a reasonable and stable target state of the administrated network.  
  This implicitly validates the changes caused by the InterpretationFunctions in the context of the entire network.  


## SelfTesting  

- p1EnsureUniqueTemplateNames  
  Ensures that all instances of Profile have unique template-names  
  (allowing just unique values in key attribute of CC list could also be assured by InterpretationFunction; p1EnsureUniqueTemplateNames would be obsoleted in that case)  

- p1EnsureUniqueElementNames  
  Ensures that all instances of CC have unique element-names  
  (allowing just unique values in key attribute of CC list could also be assured by InterpretationFunction; p1EnsureUniqueElementNames would be obsoleted in that case)  

- p1EnsureUniqueForwardingNames  
  Ensures that values of LoadBalancer::Ltp::local-id are unique  
  (allowing just unique values in key attribute of LTP list could also be assured by InterpretationFunction; p1EnsureUniqueForwardingNames would be obsoleted in that case)  

- p1EnsureUniqueMountNames  
  Ensures that values of LogicalController::Ltp::local-id are unique  
  (Same MountName at different LogicalControllers would be ok)  
  (allowing just unique values in key attribute of LTP list could also be assured by InterpretationFunction; p1EnsureUniqueMountNames would be obsoleted in that case)  

- p1EnsureExistenceOfTemplates  
  Ensures that referenced Profiles actually exist  

- p1EnsureProperCategorization  
  Ensures that the category of the referenced template is matching the category of the referencing element  

- p1EnsureTcpLinkTpsToMatch  
  - Ensures existence of the termination points (in CandidateDS)  
  - Ensures at termination points of TcpLinks:  
    - TcpClient(remoteIpAddress)==TcpServer(localIpAddress)  
    - and TcpClient(remotePort)==TcpServer(localPort)  

- p1EnsureHttpLinkTpsToMatch  
  - Ensures existence of the termination points (in CandidateDS)  
  - Ensures at termination points of HttpLinks:  
    - HttpClient(httpUserName)==HttpServer(httpUserName)  
    - and HttpClient(httpPassword)==HttpServer(httpPassword)  

- p1EnsureProperHttpLinkRoutes  
  - Ensures that exactly two TcpLinks are referenced in a Route  
  - Ensures that the TcpLinks form an uninterrupted chain between the endpoints  

- p1EnsureCopyLinkTpsToMatch  
  - Ensures existence (in CandidateDS) of the termination points  
  - Ensures at termination points of TcpLinks:  
    - Controller(TcpClient(remoteIpAddress))==LogicalController(TcpClient(remoteIpAddress))  
    - Controller(TcpClient(remotePort))==LogicalController(TcpClient(remotePort))  
    - Controller(TcpClient(notificationSubscribe))==LogicalController(TcpClient(notificationSubscribe))  
    - Controller(TcpClient(notificationStreamName))==LogicalController(TcpClient(notificationStreamName))  

- p1EnsureProperManagementPlaneTransportFcRoutes  
  - Ensures that exactly one HttpLink and one CopyLink are referenced in a Route  
  - Ensures that HttpLink and CopyLink form an uninterrupted chain between the endpoints  

- p1EnsureReciprocalControllerRelationships  
  - Ensures that every Controller that is referenced in the _controllers[*] attribute at some
    LogicalController is referencing the same LogicalController in its _logical-controller attribute  


## TargetStateValidation  

    If there would be engineering limits (, e.g. like maximum number of MountPoints per Controller) these limits would have to be added to the respective Template and compliance with these limits could be validated here.
