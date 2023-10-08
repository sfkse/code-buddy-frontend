import styled from "styled-components";
import CalendarTaskList from "../components/calendar/CalendarTaskList";
import CalendarContent from "../components/calendar/CalendarContent";

const Calendar = () => {
  return (
    <CalendarWrapper>
      <CalendarTaskList />
      <CalendarContent />
    </CalendarWrapper>
  );
};

export default Calendar;

const CalendarWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-column-gap: 0.5rem;
  min-height: 100vh;
`;

