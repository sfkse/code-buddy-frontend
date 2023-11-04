import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { styled } from "styled-components";
import Leaflet from "leaflet";

import UserInfoPopUp from "../UserInfoPopUp";
import MapFilter from "./MapFilter";
import Loader from "../Loader";
import ToastMessage from "../ToastMessage";

import onlineIcon from "../../assets/images/onlineIcon.png";
// import offlineIcon from "../assets/images/offlineIcon.png";
import { useFetchAllUsers } from "../../hooks/user/useFetchAllUsers";
import { User } from "../../types/user";

type MarkersProps = {
  users: User[];
};
const Markers = ({ users }: MarkersProps) => {
  if (!users) return null;

  return (
    <>
      {users.map((user: User, index) => (
        <Marker
          key={index}
          icon={
            new Leaflet.Icon({
              iconUrl: onlineIcon,
              iconRetinaUrl: onlineIcon,
              popupAnchor: [-0, -0],
              iconSize: [32, 32],
            })
          }
          position={[
            JSON.parse(user.location).lat,
            JSON.parse(user.location).lon,
          ]}
        >
          <Popup>
            <UserInfoPopUp user={user} />
          </Popup>
        </Marker>
      ))}
    </>
  );
};

const Map = () => {
  const { users, isLoading, error } = useFetchAllUsers();

  return (
    <Loader isLoading={isLoading}>
      <>
        {error ? (
          <ToastMessage text={error instanceof Error ? error.message : ""} />
        ) : null}
        <MapFilter />
        <MapWrapper>
          <MapContainer
            style={{ height: "65vh", width: "100%" }}
            center={[51.505, -0.09]}
            zoom={3}
            scrollWheelZoom={false}
            key={users?.length}
          >
            <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
            {users && <Markers users={users} />}
          </MapContainer>
        </MapWrapper>
      </>
    </Loader>
  );
};

export default Map;

const MapWrapper = styled.div``;

// const PopUp = styled(Popup)`
//   border-radius: 0px;
//   width: 500px;
// `;

