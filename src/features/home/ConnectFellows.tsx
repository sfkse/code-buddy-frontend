import styled from "styled-components";
import Icons from "../../ui/Icons";
import globeImg from "../../assets/globe.png";
import Button from "../../ui/Button";

function ConnectFellows() {
  return (
    <Section>
      <LeftContent>
        <TitleWrapper>
          <Title>Explore Your Developer Community on the Map</Title>
          <Icons.Signal style={iconStyle} />
        </TitleWrapper>
        <Desription>
          Dive into our interactive map and discover fellow coders just around
          the corner or across the globe. Each dot represents a creative mind, a
          potential collaborator, or the next big idea waiting to happen. Don't
          let distance limit your networking opportunities—start connecting,
          sharing, and growing together with developers who share your passion.
        </Desription>
        <Button>EXPLORE THE MAP</Button>
      </LeftContent>
      <Image src={globeImg} />
    </Section>
  );
}

export default ConnectFellows;

const Section = styled.section`
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  align-items: center;
  padding: 4rem 8rem;
  background-color: var(--color-black);
  color: var(--color-white);
  @media (max-width: 1200px) {
    padding: 4rem 2rem;
  }
`;

const LeftContent = styled.div`
  max-width: 60%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: flex-start;
`;

const TitleWrapper = styled.div`
  display: flex;
`;

const Title = styled.h2`
  font-size: var(--font-size-md);
  font-weight: 600;
`;

const Desription = styled.p`
  margin-bottom: 2rem;
  font-weight: 300;
  color: var(--color-grey-dark);
`;

const Image = styled.img``;

const iconStyle = {
  transform: "translate(8px, -2px)",
};
