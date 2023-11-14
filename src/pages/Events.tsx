import styled from "styled-components";
import { Outlet, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { BsCalendar2Event } from "react-icons/bs";
import useFetchAllEvents from "../hooks/events/useFetchAllEvents";
import Loader from "../components/Loader";
import ToastMessage from "../components/ToastMessage";
import { Event } from "../types/events";
import EventItem from "../components/events/EventItem";
import { useFetchAuthUser } from "../hooks/user/useFetchAuthUser";

const Events = () => {
  const { authUser } = useFetchAuthUser();
  const { events, isPending, error } = useFetchAllEvents();
  const navigate = useNavigate();

  return (
    <Loader isLoading={isPending}>
      {error ? (
        <ToastMessage text={error instanceof Error ? error.message : ""} />
      ) : null}
      <EventsWrapper>
        <EventsHeaderWrapper>
          <EventsHeader>Popular events</EventsHeader>
          <Button
            title="CREATE AN EVENT"
            variant="primary"
            icon={<BsCalendar2Event />}
            disabled={Object.keys(authUser).length === 0}
            onClick={() => navigate("/events/create")}
            customStyle={
              Object.keys(authUser).length === 0 ? { marginLeft: "auto" } : {}
            }
          />
        </EventsHeaderWrapper>
        <EventsListWrapper>
          {events?.map((event: Event) => (
            <EventItem key={event.idevents} event={event} />
          ))}
        </EventsListWrapper>
      </EventsWrapper>
      <Outlet />
    </Loader>
  );
};

export default Events;

const EventsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  height: 100vh;
`;

const EventsHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const EventsHeader = styled.div`
  font-size: ${({ theme }) => theme.font.heading.base};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const EventsListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

