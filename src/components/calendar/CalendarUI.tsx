import styled from "styled-components";

// import useCalendar from "../../hooks/calendar/useCalendar";
// import { useEffect } from "react";

// type CalendarUIProps = {
//   view: string;
// };

// type CalendarSelectDateTimeProps = {
//   start: Date;
//   end: Date;
// };

const CalendarUI = () => {
  // const { calendar, events } = useCalendar(view);

  // useEffect(() => {
  //   calendar?.createEvents(events);
  // }, [events, calendar]);

  // useEffect(() => {
  //   calendar?.on("selectDateTime", (e: CalendarSelectDateTimeProps) => {
  //     console.log(e.start, e.end);
  //   });
  // }, [calendar]);
  return <CalendarContainer id="calendar"></CalendarContainer>;
};

export default CalendarUI;

const CalendarContainer = styled.div`
  min-height: 40rem;
  border: 1px solid #e9ecef;
`;

