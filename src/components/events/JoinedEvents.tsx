import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Loader from "../Loader";
import ToastMessage from "../ToastMessage";
import EmptyState from "../EmptyState";
import EventItem from "./EventItem";
import { useFetchAuthUser } from "../../hooks/user/useFetchAuthUser";
import { Event } from "../../types/events";
import useFetchJoinedEvents from "../../hooks/events/useFetchJoinedEvents";

const JoinedEvents = () => {
  const { authUser } = useFetchAuthUser();
  const { events, isPending, error } = useFetchJoinedEvents(authUser?.idusers);
  return (
    <>
      {error ? (
        <ToastMessage text={error instanceof Error ? error.message : ""} />
      ) : null}
      <Loader isLoading={isPending}>
        {events?.length === 0 ? (
          <EmptyState text="You have no draft events" icon="📝" />
        ) : (
          <EventsWrapper>
            <EventsListWrapper>
              {events?.map((event: Event) => (
                <EventItem key={event.idevents} event={event} />
              ))}
            </EventsListWrapper>
          </EventsWrapper>
        )}

        <Outlet />
      </Loader>
    </>
  );
};

export default JoinedEvents;

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

