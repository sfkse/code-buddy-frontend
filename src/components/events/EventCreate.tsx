import PageMenu from "../discussions/PageMenu";
import { eventCreateMenuLinks } from "../../assets/data/menu";
import { DEVICES } from "../../styles/theme";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const EventCreate = () => {
  return (
    <EventCreateWrapper>
      <PageMenu pageMenuLinks={eventCreateMenuLinks} page="discussions" />
      <EventCreateContentWrapper>
        <Outlet />
      </EventCreateContentWrapper>
    </EventCreateWrapper>
  );
};

export default EventCreate;

const EventCreateWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  position: relative;

  @media only screen and (${DEVICES.md}) {
    grid-template-columns: 1fr;
  }
`;

const EventCreateContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem 2rem 2rem 0;

  @media only screen and (${DEVICES.sm}) {
    padding: 2rem 0;
  }
`;

