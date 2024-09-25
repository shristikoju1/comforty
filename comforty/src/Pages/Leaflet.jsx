import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import CustomMarkerIcon from "../assets/images/map-marker.png";
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

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

  //Custom marker icon
  const customIcons = new Icon({
    iconUrl: CustomMarkerIcon,
    iconSize: [38, 38],
  });

  //Custom cluster icon
  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div class='cluster-icon'>${cluster.getChildCount()}</div>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true),
    });
  };

  return (
    <div className="mt-12 max-width">
      <MapContainer center={[27.7172, 85.324]} zoom={10} icon={customIcons}>

        {/* Provider - Open street map */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Provider - Stamen Watercolor */}
        
        {/* <TileLayer
          attribution="Stamen Watercolor"
          url="https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg"
        /> */}

        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createCustomClusterIcon}
        >
          {markers.map((marker) => (
            <Marker
              position={marker.geocode}
              key={marker.id}
              icon={customIcons}
            >
              <Popup>{marker.popUp}</Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
};

export default Leaflet;
