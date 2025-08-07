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

.  

    To be discussed:

.

- p1EnsureUniqueTemplateNames  
  Ensures that all instances of Profile have unique template-names  

- p1EnsureUniqueElementNames  
  Ensures that all instances of CC have unique element-names  

- p1EnsureUniqueMountNames  
  Ensures that LogicalController(Ltp(local-id)) is unique  
  (Same MountName at different LogicalControllers would be ok)

- p1EnsureExistenceOfTemplates  
  Ensures that referenced Profiles actually exist  

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

- p1EnsureCopyLinkTpsToMatch  
  - Ensures existence (in CandidateDS) of the termination points  
  - Ensures at termination points of TcpLinks:  
    - CopyClient(copySource)==LogicalController(elementName)  
    - and CopyServer(copyDestination)==Controller(elementName)  
    - Controller(TcpClient(remoteIpAddress))==LogicalController(TcpClient(remoteIpAddress))  
    - Controller(TcpClient(remotePort))==LogicalController(TcpClient(remotePort))  
    - Controller(TcpClient(notificationSubscribe))==LogicalController(TcpClient(notificationSubscribe))  
    - Controller(TcpClient(notificationStreamName))==LogicalController(TcpClient(notificationStreamName))  

- p1EnsureImplementationOfLogicalController  
  - Ensures that every LogicalController(_controllers) is referencing at least one Controller  
  - Ensures existence (in CandidateDS) of all Controllers that are referenced in LogicalController(_controllers) 

.  

    To be completed

.

## TargetStateValidation  

.  

    To be discussed:

.

- p1EnsureRoutesToConnectFcTps  
  Ensures for all Routes that the comprised Links form a chain between the two termination points of the ManagementPlaneTransportConnection  

- p1EnsureFcBeingRouted
  Ensures that all ManagementPlaneTransportConnections having at least one Route  

.  

    To be completed

.
