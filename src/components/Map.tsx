import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { styled } from "styled-components";
import Leaflet from "leaflet";

import UserInfoPopUp from "./UserInfoPopUp";
import MapFilter from "./MapFilter";
import Loader from "./Loader";
import onlineIcon from "../assets/images/onlineIcon.png";
// import offlineIcon from "../assets/images/offlineIcon.png";

import { useFetchAllUsers } from "../hooks/user/useFetchAllUsers";
import { User } from "../types/user";

type MarkersProps = {
  users: User[];
};
const Markers = ({ users }: MarkersProps) => {
  const positions: [number, number][] = [
    [51.505, -0.09],
    [52.505, -0.19],
    [46.505, -0.19],
    [38.505, -0.19],
  ];

  if (!users) return null;

  return (
    <>
      {users.map((user, index: number) => (
        <Marker
          key={user.idusers}
          icon={
            new Leaflet.Icon({
              iconUrl: onlineIcon,
              iconRetinaUrl: onlineIcon,
              popupAnchor: [-0, -0],
              iconSize: [32, 32],
            })
          }
          position={positions[index]}
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
  const { data: users, isLoading, error } = useFetchAllUsers();
  console.log(users);
  if (error instanceof Error) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <Loader isLoading={isLoading}>
      <>
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

