import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { styled } from "styled-components";
import Leaflet from "leaflet";
import UserInfoPopUp from "./UserInfoPopUp";
import onlineIcon from "../assets/onlineIcon.png";
// import offlineIcon from "../assets/offlineIcon.png";
import MapFilter from "./MapFilter";

const Map = () => {
  const Markers = (
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
      <Popup>
        <UserInfoPopUp />
      </Popup>
    </Marker>
  );

  return (
    <>
      <MapFilter />
      <MapWrapper>
        <MapContainer
          style={{ height: "65vh", width: "100%" }}
          center={[51.505, -0.09]}
          zoom={5}
          scrollWheelZoom={true}
        >
          <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
          {Markers}
        </MapContainer>
      </MapWrapper>
    </>
  );
};

export default Map;

const MapWrapper = styled.div``;

// const PopUp = styled(Popup)`
//   border-radius: 0px;
//   width: 500px;
// `;

