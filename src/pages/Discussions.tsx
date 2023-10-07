import styled from "styled-components";
import DiscussionsContent from "../components/DiscussionsContent";
import DiscussionsMenu from "../components/DiscussionsMenu";

const Discussions = () => {
  return (
    <DiscussionsWrapper>
      <DiscussionsMenu />
      <DiscussionsContent />
    </DiscussionsWrapper>
  );
};

export default Discussions;

const DiscussionsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

