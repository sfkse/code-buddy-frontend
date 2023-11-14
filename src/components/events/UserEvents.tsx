import styled from "styled-components";
import { Outlet } from "react-router-dom";

import Loader from "../Loader";
import ToastMessage from "../ToastMessage";
import { Event } from "../../types/events";
import EventItem from "./EventItem";

import { useFetchAuthUser } from "../../hooks/user/useFetchAuthUser";
import useFetchUserEvents from "../../hooks/events/useFetchUserEvents";
import { EVENT_STATUS } from "../../utils/eventsUtils";

const UserEvents = () => {
  const { authUser } = useFetchAuthUser();
  const { events, isPending, error } = useFetchUserEvents(
    authUser?.idusers,
    EVENT_STATUS.ACTIVE
  );

  return (
    <>
      {error ? (
        <ToastMessage text={error instanceof Error ? error.message : ""} />
      ) : null}
      <Loader isLoading={isPending}>
        <EventsWrapper>
          <EventsListWrapper>
            {events?.map((event: Event) => (
              <EventItem key={event.idevents} event={event} />
            ))}
          </EventsListWrapper>
        </EventsWrapper>
        <Outlet />
      </Loader>
    </>
  );
};

export default UserEvents;

const EventsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  height: 100vh;
  overflow-y: scroll;
`;

const EventsListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

