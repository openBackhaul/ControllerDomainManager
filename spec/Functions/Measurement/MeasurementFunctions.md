### Measurement  

_(See the following entries as examples._  
_They might be technically wrong, or not inconsistent._  
_List of MeasurementFunctions is to be defined by ApplicationOwner:)_  

- p1-measure-management-plane-transport-availability (cyclic process)  
  - Picks next FC object from rolling list in RunningDS  
  - Sends Restconf request to MountPoint to check ManagementPlaneTransport connection to Device  
  - IF expected CC::externalLabel
    - Creates FC object and all related objects (both Links, CC and both LTPs) similar to RunningDS in OperationalDS (might already have existed)  
    - Deletes all entries related to the FC in the CurrentAlarms (there might be no entry)  
    ELSE  
    - Deletes FC object from OperationalDS (might not have existed)  
    - Creates an entry with ErrorCode [might depend on the exact measurement result] at the FC object in the CurrentAlarms (might have already existed)  
    - calls p1-measure-snmp-link-availability  
    - IF available  
      - calls p1-measure-netconf-link-availability  
  - start over
- p1-measure-snmp-link-availability  
  - Sends Netconf request to MediatorProcess to check SnmpLink to Device  
  - IF expected CC::externalLabel
    - Creates Link object and all related objects (CC and LTP) similar to RunningDS in OperationalDS (might already have existed)  
    - Deletes all entries related to the Link in the CurrentAlarms (there might be no entry)  
    - Returns true
    ELSE  
    - Deletes Link object from OperationalDS (might not have existed)  
    - Creates an entry with ErrorCode [might depend on the exact measurement result] at the Link object in the CurrentAlarms (might have already existed)  
    - calls p1-measure-device-availability  
    - IF available  
      - calls p1-measure-mediator-process-availability  
    - Returns false
- p1-measure-device-availability  
  - Pings TcpServer of Device  
  - IF responding  
    - Creates CC object (Device) similar to RunningDS in OperationalDS (might already exist)  
    - Deletes all entries related to the CC in the CurrentAlarms (there might be no entry)  
    - Returns true  
    ELSE  
    - Deletes CC object from OperationalDS (might not have existed)  
    - Creates an entry with ErrorCode [might depend on the exact measurement result] at the missing CC object in the CurrentAlarms (might have already existed)  
    - Returns false  
- p1-measure-mediator-process-availability  
  - Request MIM://v1/list-mediator-instances  
  - IF MountName of FC in the list of MediatorProcesses  
    - Creates LTP object (MediatorProcess) similar to RunningDS in OperationalDS (might already exist)  
    - Deletes all entries related to the LTP in the CurrentAlarms (there might be no entry)  
    - Returns true  
    ELSE  
    - Deletes LTP object from OperationalDS (might not have existed)  
    - Creates an entry with ErrorCode [might depend on the exact measurement result] at the missing LTP object in the CurrentAlarms (might have already existed)  
    - Returns false  
- p1-measure-netconf-link-availability
  - Request CDM://v1/inform-about-mount-point
  - IF MountPoint exists
    - Creates LTP object (MountPoint) similar to RunningDS in OperationalDS (might already exist)  
    - Deletes all entries related to the LTP in the CurrentAlarms (there might be no entry)  
    - IF state==connected  
      - Creates Link object (NetconfLink) similar to RunningDS in OperationalDS (might already have existed)  
      - Deletes all entries related to the Link in the CurrentAlarms (there might be no entry)  
      - Returns true
      ELSE  
      - Deletes Link object from OperationalDS (might not have existed)  
      - Creates an entry with ErrorCode [might depend on the exact measurement result] at the missing Link object in the CurrentAlarms (might have already existed)  
      - Return false
    ELSE  
    - Deletes Link object (NetconfLink) from OperationalDS (might not have existed)  
    - Creates an entry with ErrorCode [might depend on the exact measurement result] at the missing Link object in the CurrentAlarms (might have already existed)  
    - Deletes LTP object (MountPoint) from OperationalDS (might not have existed)  
    - Creates an entry with ErrorCode [might depend on the exact measurement result] at the missing LTP object in the CurrentAlarms (might have already existed)  
    - Returns false  
