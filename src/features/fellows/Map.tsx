import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { styled } from "styled-components";
import Leaflet from "leaflet";

import onlineIcon from "../../assets/user-logo.png";

const Markers = () => {
  return (
    <>
      <Marker
        icon={
          new Leaflet.Icon({
            iconUrl: onlineIcon,
            iconRetinaUrl: onlineIcon,
            popupAnchor: [-0, -0],
            iconSize: [32, 32],
          })
        }
        position={[51.905, -0.09]}
      >
        <Popup>{/* <UserInfoPopUp user={user} /> */}</Popup>
      </Marker>
      <Marker
        icon={
          new Leaflet.Icon({
            iconUrl: onlineIcon,
            iconRetinaUrl: onlineIcon,
            popupAnchor: [-0, -0],
            iconSize: [32, 32],
          })
        }
        position={[51.505, -0.09]}
      >
        <Popup>{/* <UserInfoPopUp user={user} /> */}</Popup>
      </Marker>
    </>
  );
};

const Map = () => {
  return (
    <MapWrapper>
      <MapContainer
        style={{ height: "100vh", width: "100%" }}
        center={[51.505, -0.09]}
        zoom={3}
        // scrollWheelZoom={false}
        minZoom={3}
      >
        <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
        <Markers />
      </MapContainer>
    </MapWrapper>
  );
};

export default Map;

const MapWrapper = styled.div`
  flex: 1;
  /* /* width: 50%; */
  width: 100%;
`;

// const PopUp = styled(Popup)`
//   border-radius: 0px;
//   width: 500px;
// `;

