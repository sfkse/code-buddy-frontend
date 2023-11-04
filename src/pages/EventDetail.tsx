import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";

import Avatar from "../components/Avatar";
import Button from "../components/Button";
import ShapeCircle from "../components/ShapeCircle";
import useFetchSingleEvent from "../hooks/events/useFetchSingleEvent";
import { useLocation } from "react-router-dom";
import ToastMessage from "../components/ToastMessage";
import {
  formatEventDate,
  getContentFromEditorState,
} from "../utils/eventsUtils";
import { EventParticipant, EventTimeline } from "../types/events";
import config from "../config/config.json";
import { useState } from "react";
import useJoinEvent from "../hooks/events/useJoinEvent";
import { fetchAuth } from "../utils/userUtils";
import Loader from "../components/Loader";
import useFetchSingleEventParticipants from "../hooks/events/useFetchSingleEventParticipants";

const EventDetail = () => {
  const [copied, setCopied] = useState(false);
  const location = useLocation();
  const eventID = location.pathname.split("/")[2];

  const { event, isEventLoading, error } = useFetchSingleEvent(eventID);
  const { mutate } = useJoinEvent(event?.idevents);
  const { participants, isParticipantsLoading } =
    useFetchSingleEventParticipants(eventID);

  const isLoading = isEventLoading || isParticipantsLoading;

  console.log(participants);
  const handleJoinEvent = () => {
    //TODO: Fix removing fetchAuth after updating authentication
    mutate({ idEvent: event?.idevents, idUser: fetchAuth() });
  };
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
              <CopyToClipboard
                text={`${config.APP_BASE_URL}/events/${event?.idevents}`}
                onCopy={() => setTimeout(() => setCopied(false), 3000)}
              >
                <EventShareButton
                  onClick={() => setCopied(true)}
                  title={copied ? "Copied!" : "Invite friends"}
                />
              </CopyToClipboard>
            </EventShareWrapper>
          </EventHeaderWrapper>
          <EventAudienceIconsWrapper>
            {/* //TODO: Fix this. Save db or another table */}
            {/* {event?.participants &&
              JSON.parse(event?.participants)
                .slice(0, 4)
                .map((participant: EventParticipant) => (
                  <Avatar overlap name={participant.name} />
                ))} */}
            {participants.slice(0, 4).map((participant: EventParticipant) => (
              <Avatar overlap name={participant.name} />
            ))}

            {/* {participants.length > 1 && (
              <ShapeCircle
                type="text"
                overlap
                content={`+${event?.participants.length - 4}`}
              />
            )} */}
          </EventAudienceIconsWrapper>

          {/* <EventHost>{event?.host}</EventHost> */}
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
            />
          </EventButtonWrapper>
        </EventInfoWrapper>
        <EventTimelineWrapper>
          <EventTimelineHeader> Timeline </EventTimelineHeader>
          <EventTimelineContent>
            {event?.timeline &&
              JSON.parse(JSON.parse(event?.timeline)).map(
                (timeline: EventTimeline) => (
                  <EventTimelineItem key={timeline.id}>
                    <ShapeCircleItem type="text" content={timeline.time} />
                    <EventTimelineItemDetailsWrapper>
                      <EventTimelineItemTitle>
                        {timeline.description}
                      </EventTimelineItemTitle>
                      {/* <EventTimelineItemSpeakerAndTimeWrapper>
                      <EventTimelineItemSpeaker>
                        By Sefa
                      </EventTimelineItemSpeaker>
                      <EventTimelineItemTime>
                        9:00 AM - 9:30 AM
                      </EventTimelineItemTime>
                    </EventTimelineItemSpeakerAndTimeWrapper> */}
                    </EventTimelineItemDetailsWrapper>
                  </EventTimelineItem>
                )
              )}
          </EventTimelineContent>
        </EventTimelineWrapper>
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

const EventShareButton = styled(Button)``;

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

const EventTimelineItemSpeakerAndTimeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: ${({ theme }) => theme.font.body.xs};
`;

const EventTimelineItemSpeaker = styled.div`
  color: ${({ theme }) => theme.colors.primaryLight};
  letter-spacing: 0.5px;
  font-style: italic;
`;

const EventTimelineItemTime = styled.div`
  color: ${({ theme }) => theme.colors.primaryLight};
  letter-spacing: 0.5px;
`;

// const EventAudienceIconsWrapper = styled.div`

