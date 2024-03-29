import styled from "styled-components";
import Card from "../../ui/Card";
import MainWrapper from "../../ui/MainWrapper";
import logo from "../../assets/user-logo.png";
import Button from "../../ui/Button";

function FellowsList() {
  return (
    <ListWrapper>
      <ListHeader> Fellows</ListHeader>
      <Card>
        <Card.Body>
          <BodyWrapper>
            <FellowLogo>
              <img src={logo} alt="Logo" />
            </FellowLogo>
            <FellowDetails>
              <Name>Johanna</Name>
              <Location>Stockolm</Location>
              <Skills>#React, #Node, #Express</Skills>
            </FellowDetails>
            <Connect size="sm">Connect</Connect>
          </BodyWrapper>
        </Card.Body>
      </Card>
    </ListWrapper>
  );
}

export default FellowsList;

const ListWrapper = styled(MainWrapper)`
  flex: 0.5;
`;

const ListHeader = styled.h2`
  font-size: var(--font-size-regular);
  margin: 2rem 0 1rem 0;
`;

const BodyWrapper = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  align-items: center;
`;

const FellowLogo = styled.div`
  width: 50px;
  img {
    width: 100%;
    border-radius: 50%;
  }
`;

const FellowDetails = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 0.5rem; */
`;

const Name = styled.span`
  margin: 0;
`;

const Location = styled.span`
  font-size: var(--font-size-sm);
  margin: 0;
  color: var(--color-grey-dark);
`;

const Skills = styled.span`
  font-size: var(--font-size-sm);
  margin: 0;
  color: var(--color-grey-dark);
`;

const Connect = styled(Button)`
  font-size: var(--font-size-sm);
  margin-left: auto;
`;

