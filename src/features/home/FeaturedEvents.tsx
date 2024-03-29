import styled from "styled-components";

import Icons from "../../ui/Icons";
import Row from "../../ui/Row";
import Card from "../../ui/Card";
import Button from "../../ui/Button";
import LinkUnderlined from "../../ui/LinkUnderlined";

import EventBanner from "../../assets/event-banner.png";

const iconStyle = { position: "absolute", transform: "translateY(-150px)" };

function FeaturedEvents() {
  return (
    <section>
      <TitleWrapper>
        <Title>Featured Events</Title>
        <Icons.Stars style={iconStyle} />
      </TitleWrapper>
      <Row>
        <LinkUnderlined href="/events" place="right">
          View All Events
        </LinkUnderlined>
        <EventList>
          <Card>
            <Card.Image source={EventBanner} />
            <Card.Body>
              <CardTitle>Event Title</CardTitle>
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vehicula, libero in aliquam malesuada, justo nunc ultrices
                massa, sed fermentum justo libero id nunc.
              </Description>
            </Card.Body>
            <Card.Footer>
              <TicketPrice>Free</TicketPrice>
              <GetTicket size="sm">Get Ticket</GetTicket>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Image source={EventBanner} />
            <Card.Body>
              <CardTitle>Event Title</CardTitle>
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vehicula, libero in aliquam malesuada, justo nunc ultrices
                massa, sed fermentum justo libero id nunc.
              </Description>
            </Card.Body>
            <Card.Footer>
              <TicketPrice>Free</TicketPrice>
              <GetTicket size="sm">Get Ticket</GetTicket>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Image source={EventBanner} />
            <Card.Body>
              <CardTitle>Event Title</CardTitle>
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vehicula, libero in aliquam malesuada, justo nunc ultrices
                massa, sed fermentum justo libero id nunc.
              </Description>
            </Card.Body>
            <Card.Footer>
              <TicketPrice>Free</TicketPrice>
              <GetTicket size="sm">Get Ticket</GetTicket>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Image source={EventBanner} />
            <Card.Body>
              <CardTitle>Event Title</CardTitle>
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vehicula, libero in aliquam malesuada, justo nunc ultrices
                massa, sed fermentum justo libero id nunc.
              </Description>
            </Card.Body>
            <Card.Footer>
              <TicketPrice>Free</TicketPrice>
              <GetTicket size="sm">Get Ticket</GetTicket>
            </Card.Footer>
          </Card>
        </EventList>
      </Row>
    </section>
  );
}

export default FeaturedEvents;

const TitleWrapper = styled.div`
  margin-bottom: 2rem;
  position: relative;
  text-align: center;
`;

const Title = styled.h2`
  font-size: var(--font-size-xxl);
  font-weight: 600;
  margin-top: 5rem;
`;

const EventList = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const CardTitle = styled.h3`
  /* font-size: var(--font-size-md); */
  font-weight: 600;
`;

const Description = styled.p`
  /* line-height: 1.75rem; */
  font-size: var(--font-size-sm);
  color: var(--color-grey-dark);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TicketPrice = styled.span`
  font-size: var(--font-size-sm);
  font-weight: 600;
`;

const GetTicket = styled(Button)`
  font-size: var(--font-size-sm);
  margin-left: auto;
`;
