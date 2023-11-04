import styled from "styled-components";
import { Outlet, useNavigate } from "react-router-dom";
import { PiSneakerMove, PiTimer } from "react-icons/Pi";
import { ImLocation2 } from "react-icons/Im";
import Card from "../components/Card";
import Button from "../components/Button";
import Avatar from "../components/Avatar";
import { DEVICES } from "../styles/theme";
import { BsCalendar2Event } from "react-icons/bs";
import useFetchAllEvents from "../hooks/events/useFetchAllEvents";
import Loader from "../components/Loader";
import ToastMessage from "../components/ToastMessage";
import { Event } from "../types/events";
import { formatEventDate } from "../utils/eventsUtils";

const Events = () => {
  const { events, isLoading, error } = useFetchAllEvents();
  const navigate = useNavigate();

  return (
    <Loader isLoading={isLoading}>
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
            onClick={() => navigate("/events/create")}
          />
        </EventsHeaderWrapper>
        <EventsListWrapper>
          {events?.map((event: Event) => (
            <CardWrapper>
              <Card title={event.title}>
                <EventImage
                  $image={event.image || "https://picsum.photos/1000/200"}
                />
                <EventDate>
                  <TimerIcon /> {formatEventDate(event.date)}
                </EventDate>
                <EventLocation>
                  <LocationIcon /> {event.location}
                </EventLocation>
                <EventAudienceAndLinkWrapper>
                  <EventAudienceIconsWrapper>
                    {event.participants &&
                      event.participants.map((participant) => (
                        <Avatar overlap name={participant.name} />
                      ))}
                  </EventAudienceIconsWrapper>
                  <EventButton
                    icon={<PiSneakerMoveIcon />}
                    customStyle={{ flex: 1 }}
                    onClick={() => navigate(`/events/${event.idevents}`)}
                  />
                </EventAudienceAndLinkWrapper>
              </Card>
            </CardWrapper>
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
  overflow-y: scroll;
`;

const CardWrapper = styled.div`
  width: 30%;

  @media only screen and (${DEVICES.lg}) {
    width: 40%;
  }

  @media only screen and (${DEVICES.md}) {
    width: 100%;
  }
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

const EventImage = styled.div<{ $image: string }>`
  width: 100%;
  height: 8rem;
  background-image: url(${({ $image }) => $image});
  background-size: cover;
  background-position: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const EventDate = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  font-size: ${({ theme }) => theme.font.body.xs};
  color: ${({ theme }) => theme.colors.primaryLight};
  letter-spacing: 0.5px;
`;

const TimerIcon = styled(PiTimer)`
  font-size: ${({ theme }) => theme.font.body.xl};
  margin-right: 0.5rem;
  color: ${({ theme }) => theme.colors.yellow};
`;
const EventLocation = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: ${({ theme }) => theme.font.body.xs};
  color: ${({ theme }) => theme.colors.primaryLight};
  letter-spacing: 0.5px;
`;

const LocationIcon = styled(ImLocation2)`
  font-size: ${({ theme }) => theme.font.body.xl};
  margin-right: 0.5rem;
  color: ${({ theme }) => theme.colors.danger};
`;

const EventAudienceAndLinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const EventAudienceIconsWrapper = styled.div`
  display: flex;
  flex: 4;

  @media only screen and (${DEVICES.xs}) {
    display: none;
  }
`;

const EventButton = styled(Button)``;

const PiSneakerMoveIcon = styled(PiSneakerMove)`
  font-size: ${({ theme }) => theme.font.heading.base};
  margin: 4px 2px 0 0;
`;

