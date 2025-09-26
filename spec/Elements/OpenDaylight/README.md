# OpenDaylight  

    ImplementationFunctions are not included in the v1.0.0_spec.  
    Please, ignore this segment during implementing v1.0.0_impl.  

The OpenDaylight Controller is an open source controller [project](https://www.opendaylight.org/), upon which many other controllers are built.  


### MeasurementFunctions  

- p1MeasureOdl  
  get ???

.  

    Reading user credentials from OpenDaylight to be cover here and in the excerpt of its proprietary API

.


### ImplementationFunctions  

- p1ReconstructController  
  put ???

.  

    Requests for updating the user credentials in OpenDaylight to be added here and in the excerpt of its proprietary API

.

- p1ConstructMountPoint  
  post /rests/data/network-topology:network-topology/topology=topology-netconf  

- p1DestructMountPoint  
  delete /rests/data/network-topology:network-topology/topology=topology-netconf/node={mount-name}  

- p1ReconstructMountPoint  
  put /rests/data/network-topology:network-topology/topology=topology-netconf/node={mount-name}  


### Proprietary Interface  

Detailed Description of [OpenDaylight's proprietary API](./OpenDaylight.yaml) in regards with the needed MeasurementFunction and ImplementationFunctions.  
