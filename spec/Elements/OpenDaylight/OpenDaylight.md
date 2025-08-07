# OpenDaylight  

The OpenDaylight Controller is an open source controller [project](https://www.opendaylight.org/), upon which many other controllers are built.  


### MeasurementFunctions  

- /p1/measure-controller  
  get ???

.  

    Request for reading user credentials from OpenDaylight to be added here and in the excerpt of its proprietary API

.

- /p1/measure-list-of-mount-points  
  get /rests/data/network-topology:network-topology/topology=topology-netconf?fields=node  


### ImplementationFunctions  

- /p1/reconstruct-controller
  put ???

.  

    Requests for updating the user credentials in OpenDaylight to be added here and in the excerpt of its proprietary API

.

- /p1/construct-mount-point  
  post /rests/data/network-topology:network-topology/topology=topology-netconf  

- /p1/destruct-mount-point  
  delete /rests/data/network-topology:network-topology/topology=topology-netconf/node={mount-name}  

- /p1/reconstruct-mount-point  
  put /rests/data/network-topology:network-topology/topology=topology-netconf/node={mount-name}  


### Proprietary Interface  

Detailed Description of [OpenDaylight's proprietary API](./OpenDaylight.yaml) in regards with the needed MeasurementFunction and ImplementationFunctions.  
