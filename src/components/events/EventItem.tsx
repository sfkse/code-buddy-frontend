import styled from "styled-components";
import { PiSneakerMove, PiTimer } from "react-icons/Pi";

import { ImLocation2 } from "react-icons/Im";
import { useNavigate } from "react-router-dom";

import Card from "../Card";
import Button from "../Button";
import Avatar from "../Avatar";

import { Event, EventParticipant } from "../../types/events";
import { formatEventDate } from "../../utils/eventsUtils";
import { DEVICES } from "../../styles/theme";
import ShapeCircle from "../ShapeCircle";
import useFetchSingleEventParticipants from "../../hooks/events/useFetchSingleEventParticipants";
import { AiOutlineEdit } from "react-icons/ai";

type EventItemProps = {
  event: Event;
};

const EventItem = ({ event }: EventItemProps) => {
  const navigate = useNavigate();
  const { participants } = useFetchSingleEventParticipants(event.idevents);
  console.log(event);
  return (
    <CardWrapper key={event.idevents}>
      <Card title={event.title}>
        <EventImage $image={event.image || "https://picsum.photos/200/100"} />
        <EventDate>
          <TimerIcon /> {formatEventDate(event.date)}
        </EventDate>
        <EventLocation>
          <LocationIcon /> {event.location}
        </EventLocation>
        <EventAudienceAndLinkWrapper>
          {participants?.length > 0 && (
            <EventAudienceIconsWrapper>
              {participants.slice(0, 4).map((participant: EventParticipant) => (
                <Avatar
                  key={participant.name}
                  overlap
                  name={participant.name}
                />
              ))}
              {participants?.length > 4 && (
                <ShapeCircle
                  type="text"
                  overlap
                  content={`+${event.participants.length - 4}`}
                />
              )}
            </EventAudienceIconsWrapper>
          )}

          {event.status === -2 && (
            <EventButton
              icon={<AiOutlineEdit />}
              variant="primary"
              title="EDIT"
              onClick={() =>
                navigate(`/events/draft/${event.idevents}`, { state: event })
              }
            />
          )}
          {event.status !== -2 && (
            <EventButton
              icon={<PiSneakerMoveIcon />}
              customStyle={{ marginLeft: "auto" }}
              onClick={() => navigate(`/events/${event.idevents}`)}
            />
          )}
        </EventAudienceAndLinkWrapper>
      </Card>
    </CardWrapper>
  );
};

export default EventItem;

const CardWrapper = styled.div`
  width: 30%;

  @media only screen and (${DEVICES.lg}) {
    width: 40%;
  }

  @media only screen and (${DEVICES.md}) {
    width: 100%;
  }
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
  padding-left: 1rem;

  @media only screen and (${DEVICES.xs}) {
    display: none;
  }
`;

const EventButton = styled(Button)``;

const PiSneakerMoveIcon = styled(PiSneakerMove)`
  font-size: ${({ theme }) => theme.font.heading.base};
  margin: 4px 2px 0 0;
`;

