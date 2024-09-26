import { MapContainer, Marker, TileLayer, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import CustomMarkerIcon from "../assets/images/map-marker.png";
import UserCustomMarkerIcon from "../assets/images/user-location-marker.png";
import { Icon, L } from "leaflet";
import React from "react";

const Leaflet = () => {
  const markers = [
    {
      id: 1,
      geocode: [27.7172, 85.324],
      popUp: "Kathmandu",
    },
    {
      id: 2,
      geocode: [27.6683, 85.3188],
      popUp: "Lalitpur",
    },
    {
      id: 3,
      geocode: [27.6722, 85.4298],
      popUp: "Bhaktapur",
    },
  ];

  // Custom marker icon
  const customIcons = new Icon({
    iconUrl: CustomMarkerIcon,
    iconSize: [38, 38],
  });

  // User Custom marker icon
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

  // Routing between user's location and selected branch
  const calculateRoute = (branchLocation) => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const userLocation = [pos.coords.latitude, pos.coords.longitude];

      // Use leaflet-routing-machine to create route
      L.Routing.control({
        waypoints: [L.latLng(userLocation), L.latLng(branchLocation)],
        routeWhileDragging: true,
        show: true,
        createMarker: function () {
          return null;
        }, // Disable extra markers
      }).addTo(map);
    });
  };

  return (
    <div className="my-10 leaflet-container max-width">
      <div className="left-section">
        <h2>Comforty is now available in 3 cities:</h2>
        <ul className="mb-3 ml-5 list-disc">
          <li>Kathmandu</li>
          <li>Lalitpur</li>
          <li>Bhaktapur</li>
        </ul>
        <p>Click on any branch marker to see the route from your location.</p>
      </div>
      <div className="right-section">
        <MapContainer center={[27.7172, 85.324]} zoom={10} icon={customIcons}>
          {/* Provider - Open street map */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* User's current location */}
          <LocationMarker />

          {markers.map((marker) => (
            <Marker
              position={marker.geocode}
              key={marker.id}
              icon={customIcons}
              eventHandlers={{
                click: () => calculateRoute(marker.geocode), // Calculate route on click
              }}
            >
              <Popup>{marker.popUp}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Leaflet;
