import {
  MapContainer,
  Marker,
  TileLayer,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import CustomMarkerIcon from "../assets/images/map-marker.png";
import UserCustomMarkerIcon from "../assets/images/user-location-marker.png";
import { Icon } from "leaflet";
import React, { useRef, useEffect } from "react";

const Leaflet = () => {
  const mapRef = useRef(null); // UseRef to store map instance

  const markers = [
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
            width="50"
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
            width="50"
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
            width="50"
            height="auto"
          />
        </div>
      ),
    },
  ];

  // Custom marker icon
  const customIcons = new Icon({
    iconUrl: CustomMarkerIcon,
    iconSize: [38, 38],
  });

  // User custom marker icon
  const UserCustomIcons = new Icon({
    iconUrl: UserCustomMarkerIcon,
    iconSize: [38, 38],
  });

  // Get user's current location and add a marker for it
  const LocationMarker = () => {
    const [position, setPosition] = React.useState(null);

    const map = useMapEvents({
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    React.useEffect(() => {
      map.locate();
    }, [map]);

    return position === null ? null : (
      <Marker position={position} icon={UserCustomIcons}>
        <Popup>You are here</Popup>
      </Marker>
    );
  };

  // Fly to the clicked location
  const flyToLocation = (geocode) => {
    const map = mapRef?.current;

    if (map) {
      map.flyTo(geocode, 13);
    } else {
      console.error("Map is not initialized yet.");
    }
  };

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
              onClick={() => flyToLocation(marker.geocode)}
            >
              <h2>{marker.name}</h2>
              <p>{marker.name} P.O.Box 8207 Kathmandu, Nepal</p>
              <p>+977 987654321, +977 984567832</p>
              <span>comforty@{marker.name.toLowerCase()}.np</span>
            </div>
          ))}
        </div>

        <div className="px-1 my-1 right-section">
          <MapContainer
            center={[27.7172, 85.324]}
            zoom={10}
            whenCreated={(mapInstance) => {
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
