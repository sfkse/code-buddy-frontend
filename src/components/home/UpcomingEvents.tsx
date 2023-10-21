import { styled } from "styled-components";
import { Link } from "react-router-dom";

import Card from "../Card";
import Button from "../Button";

const UpcomingEvents = () => {
  return (
    <Card title="Upcoming Events" style={{ flex: 2 }}>
      <EventsRow>
        <EventsFirstCol>
          <EventName>THE PRINCIPAL DEV – MASTERCLASS FOR TECH LEADS</EventName>
        </EventsFirstCol>
        <EventsSecondCol>
          <Button title="JOIN!" />
        </EventsSecondCol>
      </EventsRow>
      <EventsRow>
        <EventsFirstCol>
          <EventName>CLEAN ARCHITECTURE MASTERCLASS</EventName>
        </EventsFirstCol>
        <EventsSecondCol>
          <Button title="JOIN!" />
        </EventsSecondCol>
      </EventsRow>
      <EventsRow>
        <EventsFirstCol>
          <EventName>REACT NATIVE EU</EventName>
        </EventsFirstCol>
        <EventsSecondCol>
          <Button title="JOIN!" />
        </EventsSecondCol>
      </EventsRow>
      <ShowMore to="/events">Show More...</ShowMore>
    </Card>
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

