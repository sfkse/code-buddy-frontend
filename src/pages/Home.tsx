import { styled } from "styled-components";

import Map from "../components/home/Map";
import ContactStatus from "../components/home/ContactStatus";
import UpcomingEvents from "../components/home/UpcomingEvents";
import LatestTopics from "../components/home/LatestTopics";

const Home = () => {
  return (
    <HomeWrapper>
      <Map />
      <SectionWrapper>
        <ContactStatus />
        <UpcomingEvents />
        <LatestTopics />
      </SectionWrapper>
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

