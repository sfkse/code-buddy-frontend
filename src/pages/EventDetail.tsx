import styled from "styled-components";

import Avatar from "../components/Avatar";
import Button from "../components/Button";
import ShapeCircle from "../components/ShapeCircle";

const EventDetail = () => {
  const event = {
    id: 1,
    title: "Title",
    date: "2021-09-01",
    host: "Sefa",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus 
    deserunt exercitationem fugiat, hic 
    laudantium necessitatibus quibusdam et repellendus corrupti, veritatis, tempore voluptatem facilis 
    porro rem excepturi nobis quidem! Dignissimos, debitis.
    Suscipit autem necessitatibus deleniti minus, officiis voluptate nisi? In laudantium ex neque alias ea 
    optio doloremque cupiditate velit quod repellendus.
    Esse, fuga earum tenetur iusto dolores amet eligendi repellendus voluptate?
    Suscipit iste sed, voluptate perspiciatis esse consequatur omnis dolor exercitationem rerum accusamus 
    totam nemo similique deserunt, harum, 
    est necessitatibus deleniti ipsam ab aperiam dolorum at quae! Dolor quos eius consectetur!
    Consequatur dolor dicta ipsa! Laudantium quod eius nulla non culpa, similique error ea eveniet fugit eaque
    in fuga repellendus voluptas ullam labore placeat possimus. Officiis quam voluptatibus hic temporibus doloribus?
    Pariatur velit perferendis reprehenderit nam totam consequuntur, assumenda voluptas enim qui est, voluptates, 
    quis excepturi.
    Fuga ratione, minus vitae provident consequuntur error aliquid voluptas atque! Sit asperiores omnis labore numquam.`,
    image: "https://picsum.photos/1000/200",
    fee: 10000,
    is_online: false,
    is_free: false,
    is_canceled: false,
  };

  return (
    <EventDetailWrapper>
      <EventImageWrapper>
        <EventImage src={event.image} />
        <EventFeeLabel>FREE</EventFeeLabel>
      </EventImageWrapper>
      <EventInfoWrapper>
        <EventHeaderWrapper>
          <EventDateAndTitleWrapper>
            <EventDate>7th Mar, 2024 | 6.30 PM</EventDate>
            <EventTitle>CLEAN ARCHITECTURE MASTERCLASS</EventTitle>
          </EventDateAndTitleWrapper>
          <EventShareWrapper>
            <EventShareButton title="Invite via email" />
          </EventShareWrapper>
        </EventHeaderWrapper>
        <EventAudienceIconsWrapper>
          <Avatar name="Sefa" />
          <Avatar overlap name="seda" />
          <Avatar overlap name="sena" />
          <Avatar overlap name="hansa" />
          <Avatar overlap name="kerem" />
          <Avatar overlap name="erdem" />
          <Avatar overlap name="arda" />
          <ShapeCircle type="text" overlap content="+10" />
        </EventAudienceIconsWrapper>

        {/* <EventHost>{event.host}</EventHost> */}
        <EventDescription>{event.description}</EventDescription>
        <EventButtonWrapper>
          <EventButton
            title="JOIN"
            variant="primary"
            customStyle={{ width: "100%" }}
          />
        </EventButtonWrapper>
      </EventInfoWrapper>
      <EventTimelineWrapper>
        <EventTimelineHeader> Timeline </EventTimelineHeader>
        <EventTimeline>
          <EventTimelineItem>
            <ShapeCircleItem type="text" content="9:00 AM" />
            <EventTimelineItemDetailsWrapper>
              <EventTimelineItemTitle>Opening ceremony</EventTimelineItemTitle>
              <EventTimelineItemSpeakerAndTimeWrapper>
                <EventTimelineItemSpeaker>By Sefa</EventTimelineItemSpeaker>
                <EventTimelineItemTime>9:00 AM - 9:30 AM</EventTimelineItemTime>
              </EventTimelineItemSpeakerAndTimeWrapper>
            </EventTimelineItemDetailsWrapper>
          </EventTimelineItem>
          <EventTimelineItem>
            <ShapeCircleItem type="text" content="9:00 AM" />
            <EventTimelineItemDetailsWrapper>
              <EventTimelineItemTitle>Opening ceremony</EventTimelineItemTitle>
              <EventTimelineItemSpeakerAndTimeWrapper>
                <EventTimelineItemSpeaker>By Sefa</EventTimelineItemSpeaker>
                <EventTimelineItemTime>9:00 AM - 9:30 AM</EventTimelineItemTime>
              </EventTimelineItemSpeakerAndTimeWrapper>
            </EventTimelineItemDetailsWrapper>
          </EventTimelineItem>
        </EventTimeline>
      </EventTimelineWrapper>
    </EventDetailWrapper>
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
  margin-top: 1rem;
`;

const EventTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const EventDate = styled.div`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.caution};
  margin: 1rem 0;
  font-weight: 500;
`;

const EventDescription = styled.div`
  margin: 3rem 0;
  font-size: 0.9rem;
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
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
  padding: 0.5rem;
`;

const EventTimeline = styled.div`
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
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.primaryExtraLight};
  letter-spacing: 0.5px;
`;

const EventTimelineItemTitle = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.3rem;
`;

const EventTimelineItemSpeakerAndTimeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.8rem;
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

