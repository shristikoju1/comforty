import React, { useRef, useState, useMemo, useEffect } from "react";
import {
  MapContainer,
  Marker,
  TileLayer,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import CustomMarkerIcon from "../assets/images/pin.png";
import UserCustomMarkerIcon from "../assets/images/pin-user.png";

const Leaflet = () => {
  const mapRef = useRef(null); // UseRef to store map instance
  const [mapInitialized, setMapInitialized] = useState(false);
  const [userLocation, setUserLocation] = useState(null); // Store user location

  const customIcons = useMemo(
    () =>
      new Icon({
        iconUrl: CustomMarkerIcon,
        iconSize: [38, 38],
      }),
    []
  );

  const userCustomIcons = useMemo(
    () =>
      new Icon({
        iconUrl: UserCustomMarkerIcon,
        iconSize: [38, 38],
      }),
    []
  );

  const markers = useMemo(
    () => [
      {
        id: 1,
        name: "Kathmandu",
        geocode: [27.7172, 85.324],
        popUp: (
          <div>
            <h4>Kathmandu</h4>
            <img
              src="https://www.erikastravelventures.com/wp-content/uploads/2018/12/IMG_4768.jpg"
              alt="Kathmandu"
              width="40"
              height="auto"
            />
          </div>
        ),
      },
      {
        id: 2,
        name: "Lalitpur",
        geocode: [27.6683, 85.3188],
        popUp: (
          <div>
            <h4>Lalitpur</h4>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmnVsayEvl2xmocAyLVIVfC3dDH8lCGrPG4g&s"
              alt="Lalitpur"
              width="40"
              height="auto"
            />
          </div>
        ),
      },
      {
        id: 3,
        name: "Bhaktapur",
        geocode: [27.6722, 85.4298],
        popUp: (
          <div>
            <h4>Bhaktapur</h4>
            <img
              src="https://www.altitudehimalaya.com/media/files/Blog/Travel-Stories/Bhaktapur-DS/Pottery-Square-Bhaktapur.png"
              alt="Bhaktapur"
              width="40"
              height="auto"
            />
          </div>
        ),
      },
    ],
    []
  );

 // Get user's current location and add a marker for it
const LocationMarker = () => {
  const map = useMapEvents({
    locationfound(e) {
      setUserLocation(e.latlng); // Set the user's location when found
      map.flyTo(e.latlng, map.getZoom()); // Fly to the user's location
    },
  });

  // When the component mounts, trigger the map's `locate` function to get the user's location
  useEffect(() => {
    map.locate();
  }, [map]);

  return userLocation === null ? null : (
    <Marker position={userLocation} icon={userCustomIcons}>
      <Popup>You are here</Popup>
    </Marker>
  );
};

  // Fly to the clicked location
  const flyToLocation = (geocode) => {
    if (mapInitialized && mapRef?.current) {
      mapRef.current.flyTo(geocode, 13);
    }
    console.log("mapRef", mapRef.current)
  };

  // Function to get direction using Google Maps
  const getDirection = (destination) => {
    if (!userLocation) {
      console.error("User location is not available.");
      return;
    }

    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLocation.lat},${userLocation.lng}&destination=${destination.geocode[0]},${destination.geocode[1]}`;
    window.open(googleMapsUrl, "_blank");
  };
  // console.log(mapInitialized)


  return (
    <div className="my-10 max-width">
      <h1 className="text-xl text-center md:text-start md:mb-4">
        Comforty is now available in <b className="text-[#014d54]">3</b> cities:
      </h1>
      <div className="leaflet-container">
        <div className="flex flex-col gap-4 overflow-y-scroll h-[70vh] py-2 px-1 custom-scrollbar">
          {markers.map((marker) => (
            <div
              key={marker.id}
              className="cursor-pointer left-section"
          onClick={() => {
            flyToLocation(marker.geocode)
            console.log("marker", marker.geocode);
          }}
            >
              <h2>{marker.name}</h2>
              <p>{marker.name} P.O.Box 8207 Kathmandu, Nepal</p>
              <p>+977 987654321, +977 984567832</p>
              <p>
                <span>comforty@{marker.name.toLowerCase()}.np</span>
              </p>
              <button
                className="px-4 py-2 font-bold text-white rounded-md text-md bg-green"
                onClick={(e) => {
                  e.stopPropagation(); 
                  getDirection(marker);
                }}
              >
                Get Location
              </button>
            </div>
          ))}
        </div>

        <div className="my-1 right-section">
          <MapContainer
            center={[27.7172, 85.324]}
            zoom={10}
            whenCreated={(mapInstance) => {
              setMapInitialized(true);
              mapRef.current = mapInstance; // Store map instance when created
            }}
            style={{ height: "100%", width: "100%" }}
          >
            
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* User's current location */}
            <LocationMarker />

            {/* Displaying markers from the array */}
            {markers.map((marker) => (
              <Marker
                position={marker.geocode}
                key={marker.id}
                icon={customIcons}
              >
                <Popup>{marker.popUp}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Leaflet;