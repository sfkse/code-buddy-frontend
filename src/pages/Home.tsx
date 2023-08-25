import { styled } from "styled-components";

import Map from "../components/Map";
import ContactStatus from "../components/ContactStatus";
import UpcomingEvents from "../components/UpcomingEvents";
import LatestTopics from "../components/LatestTopics";
import PageHeader from "../components/PageHeader";

const Home = () => {
  return (
    <HomeWrapper>
      <PageHeader title="See what's going on!" />
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
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

