import DiscussionsMenu from "../components/DiscussionsMenu";
import styled from "styled-components";
import DiscussionNewContent from "../components/DiscussionNewContent";

const DiscussionsNew = () => {
  return (
    <DiscussionsNewWrapper>
      <DiscussionsMenu />
      <DiscussionNewContent />
    </DiscussionsNewWrapper>
  );
};

export default DiscussionsNew;

const DiscussionsNewWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: 100vh;
`;

