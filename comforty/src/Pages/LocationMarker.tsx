import { useEffect } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";

 
 // Get user's current location and add a marker for it
 const LocationMarker = ({setUserLocation, userLocation, userCustomIcons}) => {
    const map = useMapEvents({
      locationfound(e) {
        setUserLocation(e.latlng); // Set the user's location when found
        map.flyTo(e.latlng, map.getZoom()); // Fly to the user's location
      },
    });
  
      // When the component mounts, trigger the map's `locate` function to get the user's location
      useEffect(() => {
        if(map) {
          map.locate();
        }
      }, [map]);
    
      return userLocation ? (
        <Marker position={userLocation} icon={userCustomIcons}>
          <Popup>You are here</Popup>
        </Marker>
      ) : null;
    };
  
    export default LocationMarker;
  