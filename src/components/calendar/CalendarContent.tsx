import styled from "styled-components";
import { useState } from "react";

import Button from "../Button";
import CalendarUI from "./CalendarUI";

const CalendarContent = () => {
  const [view, setView] = useState("month");

  const handleSwitchView = () => {
    setView(view === "month" ? "week" : "month");
  };

  return (
    <CalendarWrapper>
      <Button onClick={handleSwitchView} title="Month" variant="primary" />
      <CalendarUI view={view} />
    </CalendarWrapper>
  );
};

export default CalendarContent;

const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 1rem;
`;

