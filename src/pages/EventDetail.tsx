import styled from "styled-components";
import { useLocation } from "react-router-dom";

import Avatar from "../components/Avatar";
import Button from "../components/Button";
import ShapeCircle from "../components/ShapeCircle";
import ToastMessage from "../components/ToastMessage";
import Loader from "../components/Loader";

import useFetchSingleEventParticipants from "../hooks/events/useFetchSingleEventParticipants";
import useJoinEvent from "../hooks/events/useJoinEvent";
import useFetchSingleEvent from "../hooks/events/useFetchSingleEvent";

import { EventParticipant, EventTimeline } from "../types/events";
import {
  formatEventDate,
  getContentFromEditorState,
} from "../utils/eventsUtils";
import { useFetchAuthUser } from "../hooks/user/useFetchAuthUser";
import CopyButton from "../components/CopyButton";

// TODO: Fix the timeline issue when there is no timeline
const EventDetail = () => {
  const location = useLocation();
  const eventID = location.pathname.split("/")[2];

  const { authUser } = useFetchAuthUser();
  const { event, isEventLoading, error } = useFetchSingleEvent(eventID);
  const { mutate } = useJoinEvent();
  const { participants, isParticipantsLoading } =
    useFetchSingleEventParticipants(eventID);

  const isLoading = isEventLoading || isParticipantsLoading;
  const isEventJoined = participants?.some(
    (participant: EventParticipant) => participant.idusers === authUser.idusers
  );

  console.log(event);
  const hasTimeline =
    event.length > 0 &&
    JSON.parse(JSON.parse(event?.timeline)).length >= 1 &&
    JSON.parse(JSON.parse(event?.timeline))[0].description !== "" &&
    JSON.parse(JSON.parse(event?.timeline))[0].time !== "";
  const handleJoinEvent = () =>
    mutate({ idEvent: event.idevents, idUser: authUser.idusers });
  return (
    <Loader isLoading={isLoading}>
      <EventDetailWrapper>
        {error ? (
          <ToastMessage text={error instanceof Error ? error.message : ""} />
        ) : null}
        <EventImageWrapper>
          <EventImage src={event?.image || "https://picsum.photos/1000/200"} />
          <EventFeeLabel>FREE</EventFeeLabel>
        </EventImageWrapper>
        <EventInfoWrapper>
          <EventHeaderWrapper>
            <EventDateAndTitleWrapper>
              <EventDate>{formatEventDate(event?.date)}</EventDate>
              <EventTitle>{event?.title}</EventTitle>
            </EventDateAndTitleWrapper>
            <EventShareWrapper>
              <CopyButton urlPath={location.pathname} fullWidth={false} />
            </EventShareWrapper>
          </EventHeaderWrapper>
          <EventAudienceIconsWrapper>
            {participants.slice(0, 4).map((participant: EventParticipant) => (
              <Avatar key={participant.name} overlap name={participant.name} />
            ))}
            {participants?.length > 4 && (
              <ShapeCircle
                type="text"
                overlap
                content={`+${participants.length - 4}`}
              />
            )}
          </EventAudienceIconsWrapper>

          {/* <EventHost>sefa</EventHost> */}
          <EventDescription>
            {event?.description &&
              getContentFromEditorState(event?.description)}
          </EventDescription>
          <EventButtonWrapper>
            <EventButton
              title="JOIN"
              variant="primary"
              fullWidth
              customStyle={{ padding: "0.5rem" }}
              onClick={handleJoinEvent}
              disabled={isEventJoined}
            />
          </EventButtonWrapper>
        </EventInfoWrapper>
        {hasTimeline && (
          <EventTimelineWrapper>
            <EventTimelineHeader> Timeline </EventTimelineHeader>
            <EventTimelineContent>
              {JSON.parse(JSON.parse(event?.timeline)).map(
                (timeline: EventTimeline) => (
                  <EventTimelineItem key={timeline.id}>
                    <ShapeCircleItem type="text" content={timeline.time} />
                    <EventTimelineItemDetailsWrapper>
                      <EventTimelineItemTitle>
                        {timeline.description}
                      </EventTimelineItemTitle>
                    </EventTimelineItemDetailsWrapper>
                  </EventTimelineItem>
                )
              )}
            </EventTimelineContent>
          </EventTimelineWrapper>
        )}
      </EventDetailWrapper>
    </Loader>
  );
};

export default EventDetail;

const EventDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  width: 60vw;
  min-height: 100vh;

  @media (max-width: 768px) {
    width: 100vw;
  }
`;

const EventImageWrapper = styled.div`
  position: relative;
  display: flex;
  height: 15rem;
`;

const EventImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const EventFeeLabel = styled.span`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.secondary};
`;

const EventInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const EventHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EventDateAndTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const EventAudienceIconsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  padding-left: 1rem;
`;

// const EventHost = styled.div`
//   font-size: ${({ theme }) => theme.font.body.base};
//   font-weight: 700;
//   color: ${({ theme }) => theme.colors.primary};
//   margin: 1rem 0;
// `;

const EventTitle = styled.h1`
  font-size: ${({ theme }) => theme.font.heading.base};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const EventDate = styled.div`
  font-size: ${({ theme }) => theme.font.body.xs};
  color: ${({ theme }) => theme.colors.caution};
  margin: 1rem 0;
  font-weight: 500;
`;

const EventDescription = styled.div`
  margin: 3rem 0;
  font-size: ${({ theme }) => theme.font.body.sm};
  line-height: 1.5rem;
  color: ${({ theme }) => theme.colors.primaryLight};
  letter-spacing: 0.5px;
`;

const EventButtonWrapper = styled.div``;

const EventButton = styled(Button)``;

const EventShareWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

const EventTimelineWrapper = styled.div`
  width: 100%;
  margin-top: 4rem;
`;

const EventTimelineHeader = styled.div`
  font-size: ${({ theme }) => theme.font.body.base};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
  padding: 0.5rem;
`;

const EventTimelineContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
`;

const ShapeCircleItem = styled(ShapeCircle)`
  flex: 1;
`;
const EventTimelineItem = styled.div`
  display: flex;
  gap: 2rem;
`;

const EventTimelineItemDetailsWrapper = styled.div`
  flex: 1;
  font-size: ${({ theme }) => theme.font.body.sm};
  color: ${({ theme }) => theme.colors.primaryExtraLight};
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
`;

const EventTimelineItemTitle = styled.div`
  font-size: ${({ theme }) => theme.font.body.sm};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.3rem;
`;

// const EventAudienceIconsWrapper = styled.div`

