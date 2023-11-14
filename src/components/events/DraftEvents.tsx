import { useFetchAuthUser } from "../../hooks/user/useFetchAuthUser";
import useFetchUserEvents from "../../hooks/events/useFetchUserEvents";
import ToastMessage from "../ToastMessage";
import Loader from "../Loader";
import styled from "styled-components";
import EventItem from "./EventItem";
import { Outlet } from "react-router-dom";
import { EVENT_STATUS } from "../../utils/eventsUtils";
import { Event } from "../../types/events";
import EmptyState from "../EmptyState";

const DraftEvents = () => {
  const { authUser } = useFetchAuthUser();
  const { events, isPending, error } = useFetchUserEvents(
    authUser?.idusers,
    EVENT_STATUS.DRAFT
  );

  return (
    <>
      {error ? (
        <ToastMessage text={error instanceof Error ? error.message : ""} />
      ) : null}
      <Loader isLoading={isPending}>
        {events?.length === 0 ? (
          <EmptyState text="You have no draft events" icon="📝" />
        ) : (
          <>
            <EventsWrapper>
              <EventsListWrapper>
                {events?.map((event: Event) => (
                  <EventItem key={event.idevents} event={event} />
                ))}
              </EventsListWrapper>
            </EventsWrapper>
          </>
        )}

        <Outlet />
      </Loader>
    </>
  );
};

export default DraftEvents;

const EventsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  height: 100vh;
`;

const EventsListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

