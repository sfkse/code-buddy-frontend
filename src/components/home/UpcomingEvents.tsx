import { styled } from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import Card from "../Card";
import Button from "../Button";
import useFetchAllEvents from "../../hooks/events/useFetchAllEvents";
import { Event } from "../../types/events";
import Loader from "../Loader";
import ToastMessage from "../ToastMessage";

const UpcomingEvents = () => {
  const navigate = useNavigate();
  const { events, isLoading, error } = useFetchAllEvents();

  return (
    <>
      {error ? (
        <ToastMessage text={error instanceof Error ? error.message : ""} />
      ) : null}
      <Card
        title="Upcoming Events"
        style={{
          flex: 2,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {events.length > 0 &&
          events.slice(0, 3).map((event: Event) => (
            <EventsRow key={event.idevents}>
              <EventsFirstCol>
                <EventName>{event.title}</EventName>
              </EventsFirstCol>
              <EventsSecondCol>
                <Button
                  title="JOIN!"
                  onClick={() => navigate(`/events/${event.idevents}`)}
                />
              </EventsSecondCol>
            </EventsRow>
          ))}

        <ShowMore to="/events">Show More...</ShowMore>
      </Card>
    </>
  );
};

export default UpcomingEvents;

const EventsRow = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
`;

const EventsFirstCol = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const EventsSecondCol = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const EventName = styled.div`
  font-size: ${({ theme }) => theme.font.body.base};
`;

const ShowMore = styled(Link)`
  display: flex;
  justify-content: center;
  font-size: ${({ theme }) => theme.font.body.xs};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

