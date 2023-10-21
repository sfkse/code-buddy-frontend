import styled from "styled-components";
import { Outlet, useNavigate } from "react-router-dom";
import { PiSneakerMove, PiTimer } from "react-icons/Pi";
import { ImLocation2 } from "react-icons/Im";
import Card from "../components/Card";
import Button from "../components/Button";
import Avatar from "../components/Avatar";
import { DEVICES } from "../styles/theme";

const Events = () => {
  const navigate = useNavigate();
  const handleNavigateToEvent = () => {
    navigate("1");
  };

  return (
    <>
      <EventsWrapper>
        <EventsHeader>Popular events</EventsHeader>
        <EventsListWrapper>
          <CardWrapper>
            <Card title="Introducing new innovation asdasdasd">
              <EventImage />
              <EventDate>
                <TimerIcon /> 2021-1025th Jan, 2024 | 10:15 AM
              </EventDate>
              <EventLocation>
                <LocationIcon /> Stockholm, Stockholm
              </EventLocation>
              <EventAudienceAndLinkWrapper>
                <EventAudienceIconsWrapper>
                  <Avatar name="Jessica" />
                  <Avatar overlap name="Henry" />
                  <Avatar overlap name="Susanne" />
                  <Avatar overlap name="Bath" />
                </EventAudienceIconsWrapper>
                <EventButton
                  icon={<PiSneakerMoveIcon />}
                  customStyle={{ flex: 1 }}
                  onClick={handleNavigateToEvent}
                />
              </EventAudienceAndLinkWrapper>
            </Card>
          </CardWrapper>
          <CardWrapper>
            <Card title="Introducing new innovation asdasdasd">
              <EventImage />
              <EventDate>
                <TimerIcon /> 2021-1025th Jan, 2024 | 10:15 AM
              </EventDate>
              <EventLocation>
                <LocationIcon /> Stockholm, Stockholm
              </EventLocation>
              <EventAudienceAndLinkWrapper>
                <EventAudienceIconsWrapper>
                  <Avatar name="Jessica" />
                  <Avatar overlap name="Henry" />
                  <Avatar overlap name="Susanne" />
                  <Avatar overlap name="Bath" />
                </EventAudienceIconsWrapper>
                <EventButton
                  icon={<PiSneakerMoveIcon />}
                  customStyle={{ flex: 1 }}
                  onClick={handleNavigateToEvent}
                />
              </EventAudienceAndLinkWrapper>
            </Card>
          </CardWrapper>
          <CardWrapper>
            <Card title="Introducing new innovation asdasdasd">
              <EventImage />
              <EventDate>
                <TimerIcon /> 2021-1025th Jan, 2024 | 10:15 AM
              </EventDate>
              <EventLocation>
                <LocationIcon /> Stockholm, Stockholm
              </EventLocation>
              <EventAudienceAndLinkWrapper>
                <EventAudienceIconsWrapper>
                  <Avatar name="Jessica" />
                  <Avatar overlap name="Henry" />
                  <Avatar overlap name="Susanne" />
                  <Avatar overlap name="Bath" />
                </EventAudienceIconsWrapper>
                <EventButton
                  icon={<PiSneakerMoveIcon />}
                  customStyle={{ flex: 1 }}
                  onClick={handleNavigateToEvent}
                />
              </EventAudienceAndLinkWrapper>
            </Card>
          </CardWrapper>
          <CardWrapper>
            <Card title="Introducing new innovation asdasdasd">
              <EventImage />
              <EventDate>
                <TimerIcon /> 2021-1025th Jan, 2024 | 10:15 AM
              </EventDate>
              <EventLocation>
                <LocationIcon /> Stockholm, Stockholm
              </EventLocation>
              <EventAudienceAndLinkWrapper>
                <EventAudienceIconsWrapper>
                  <Avatar name="Jessica" />
                  <Avatar overlap name="Henry" />
                  <Avatar overlap name="Susanne" />
                  <Avatar overlap name="Bath" />
                </EventAudienceIconsWrapper>
                <EventButton
                  icon={<PiSneakerMoveIcon />}
                  customStyle={{ flex: 1 }}
                  onClick={handleNavigateToEvent}
                />
              </EventAudienceAndLinkWrapper>
            </Card>
          </CardWrapper>
          <CardWrapper>
            <Card title="Introducing new innovation asdasdasd">
              <EventImage />
              <EventDate>
                <TimerIcon /> 2021-1025th Jan, 2024 | 10:15 AM
              </EventDate>
              <EventLocation>
                <LocationIcon /> Stockholm, Stockholm
              </EventLocation>
              <EventAudienceAndLinkWrapper>
                <EventAudienceIconsWrapper>
                  <Avatar name="Jessica" />
                  <Avatar overlap name="Henry" />
                  <Avatar overlap name="Susanne" />
                  <Avatar overlap name="Bath" />
                </EventAudienceIconsWrapper>
                <EventButton
                  icon={<PiSneakerMoveIcon />}
                  customStyle={{ flex: 1 }}
                  onClick={handleNavigateToEvent}
                />
              </EventAudienceAndLinkWrapper>
            </Card>
          </CardWrapper>
          <CardWrapper>
            <Card title="Introducing new innovation asdasdasd">
              <EventImage />
              <EventDate>
                <TimerIcon /> 2021-1025th Jan, 2024 | 10:15 AM
              </EventDate>
              <EventLocation>
                <LocationIcon /> Stockholm, Stockholm
              </EventLocation>
              <EventAudienceAndLinkWrapper>
                <EventAudienceIconsWrapper>
                  <Avatar name="Jessica" />
                  <Avatar overlap name="Henry" />
                  <Avatar overlap name="Susanne" />
                  <Avatar overlap name="Bath" />
                </EventAudienceIconsWrapper>
                <EventButton
                  icon={<PiSneakerMoveIcon />}
                  customStyle={{ flex: 1 }}
                  onClick={handleNavigateToEvent}
                />
              </EventAudienceAndLinkWrapper>
            </Card>
          </CardWrapper>
          <CardWrapper>
            <Card title="Introducing new innovation asdasdasd">
              <EventImage />
              <EventDate>
                <TimerIcon /> 2021-1025th Jan, 2024 | 10:15 AM
              </EventDate>
              <EventLocation>
                <LocationIcon /> Stockholm, Stockholm
              </EventLocation>
              <EventAudienceAndLinkWrapper>
                <EventAudienceIconsWrapper>
                  <Avatar name="Jessica" />
                  <Avatar overlap name="Henry" />
                  <Avatar overlap name="Susanne" />
                  <Avatar overlap name="Bath" />
                </EventAudienceIconsWrapper>
                <EventButton
                  icon={<PiSneakerMoveIcon />}
                  customStyle={{ flex: 1 }}
                  onClick={handleNavigateToEvent}
                />
              </EventAudienceAndLinkWrapper>
            </Card>
          </CardWrapper>
          <CardWrapper>
            <Card title="Introducing new innovation asdasdasd">
              <EventImage />
              <EventDate>
                <TimerIcon /> 2021-1025th Jan, 2024 | 10:15 AM
              </EventDate>
              <EventLocation>
                <LocationIcon /> Stockholm, Stockholm
              </EventLocation>
              <EventAudienceAndLinkWrapper>
                <EventAudienceIconsWrapper>
                  <Avatar name="Jessica" />
                  <Avatar overlap name="Henry" />
                  <Avatar overlap name="Susanne" />
                  <Avatar overlap name="Bath" />
                </EventAudienceIconsWrapper>
                <EventButton
                  icon={<PiSneakerMoveIcon />}
                  customStyle={{ flex: 1 }}
                  onClick={handleNavigateToEvent}
                />
              </EventAudienceAndLinkWrapper>
            </Card>
          </CardWrapper>
          <CardWrapper>
            <Card title="Introducing new innovation asdasdasd">
              <EventImage />
              <EventDate>
                <TimerIcon /> 2021-1025th Jan, 2024 | 10:15 AM
              </EventDate>
              <EventLocation>
                <LocationIcon /> Stockholm, Stockholm
              </EventLocation>
              <EventAudienceAndLinkWrapper>
                <EventAudienceIconsWrapper>
                  <Avatar name="Jessica" />
                  <Avatar overlap name="Henry" />
                  <Avatar overlap name="Susanne" />
                  <Avatar overlap name="Bath" />
                </EventAudienceIconsWrapper>
                <EventButton
                  icon={<PiSneakerMoveIcon />}
                  customStyle={{ flex: 1 }}
                  onClick={handleNavigateToEvent}
                />
              </EventAudienceAndLinkWrapper>
            </Card>
          </CardWrapper>
        </EventsListWrapper>
      </EventsWrapper>
      <Outlet />
    </>
  );
};

export default Events;

const EventsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  height: 100vh;
  overflow-y: scroll;
`;

const CardWrapper = styled.div`
  width: 30%;

  @media only screen and (${DEVICES.lg}) {
    width: 40%;
  }

  @media only screen and (${DEVICES.md}) {
    width: 100%;
  }
`;

const EventsHeader = styled.div`
  font-size: ${({ theme }) => theme.font.heading.base};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const EventsListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

const EventImage = styled.div`
  width: 100%;
  height: 8rem;
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

  @media only screen and (${DEVICES.xs}) {
    display: none;
  }
`;

const EventButton = styled(Button)``;

const PiSneakerMoveIcon = styled(PiSneakerMove)`
  font-size: ${({ theme }) => theme.font.heading.base};
  margin: 4px 2px 0 0;
`;

