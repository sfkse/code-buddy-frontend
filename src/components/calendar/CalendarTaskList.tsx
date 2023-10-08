import { BsCircleFill } from "react-icons/bs";
import styled from "styled-components";

const CalendarTaskList = () => {
  return (
    <CalendarTaskListWrapper>
      <CalendarTaskListTitle>Today</CalendarTaskListTitle>
      <CalendarTaskListItem>
        <CalendarTaskListDescription>
          <CalendarTaskListDescriptionIcon />
          <CalendarTaskListDescriptionText>
            <CalendarTaskListDescriptionTime>
              10:00 AM - 11:00 AM
            </CalendarTaskListDescriptionTime>
            Task 1 description
          </CalendarTaskListDescriptionText>
        </CalendarTaskListDescription>
      </CalendarTaskListItem>
      <CalendarTaskListItem>
        <CalendarTaskListDescription>
          <CalendarTaskListDescriptionIcon />
          <CalendarTaskListDescriptionText>
            <CalendarTaskListDescriptionTime>
              10:00 AM - 11:00 AM
            </CalendarTaskListDescriptionTime>
            Task 1 description
          </CalendarTaskListDescriptionText>
        </CalendarTaskListDescription>
      </CalendarTaskListItem>
      <CalendarTaskListItem>
        <CalendarTaskListDescription>
          <CalendarTaskListDescriptionIcon />
          <CalendarTaskListDescriptionText>
            <CalendarTaskListDescriptionTime>
              10:00 AM - 11:00 AM
            </CalendarTaskListDescriptionTime>
            Task 1 description
          </CalendarTaskListDescriptionText>
        </CalendarTaskListDescription>
      </CalendarTaskListItem>
    </CalendarTaskListWrapper>
  );
};

export default CalendarTaskList;

const CalendarTaskListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
`;

const CalendarTaskListItem = styled.a`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.8rem 1rem;
  margin-bottom: 0.5rem;
  &:hover {
    cursor: pointer;
  }
`;

const CalendarTaskListTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  padding-left: 1rem;
`;

const CalendarTaskListDescription = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #666;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CalendarTaskListDescriptionIcon = styled(BsCircleFill)`
  color: ${(props) => props.theme.colors.primary};
  font-size: 0.6rem;
  color: ${(props) => props.theme.colors.yellow};
`;

const CalendarTaskListDescriptionText = styled.span`
  font-size: 0.75rem;
  font-weight: 400;
  color: #666;
  display: flex;
  flex-direction: column;
`;

const CalendarTaskListDescriptionTime = styled.span`
  font-size: 0.6875rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.primaryExtraLight};
  margin-right: 0.5rem;
`;

