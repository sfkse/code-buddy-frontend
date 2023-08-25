import { styled } from "styled-components";
import { GiTalk } from "react-icons/gi";
import Card from "./Card";

const LatestTopics = () => {
  return (
    <Card title="Latest Topics" style={{ flex: 1 }}>
      <LatestTopicsRow>
        <LatestTopicsFirstCol>
          <GiTalk />{" "}
          <LatestTopicsName>What was your win this week?</LatestTopicsName>
        </LatestTopicsFirstCol>
        <LatestTopicsSecondCol>
          <LatestTopicsText></LatestTopicsText>
        </LatestTopicsSecondCol>
      </LatestTopicsRow>
      <LatestTopicsRow>
        <LatestTopicsFirstCol>
          <GiTalk />{" "}
          <LatestTopicsName>It's Follow Friday! ✨💫 ...</LatestTopicsName>
        </LatestTopicsFirstCol>
        <LatestTopicsSecondCol>
          <LatestTopicsText></LatestTopicsText>
        </LatestTopicsSecondCol>
      </LatestTopicsRow>
    </Card>
  );
};

export default LatestTopics;

const LatestTopicsRow = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`;
const LatestTopicsFirstCol = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LatestTopicsSecondCol = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const LatestTopicsName = styled.a``;

const LatestTopicsText = styled.div`
  font-size: 0.8rem;
  color: #b3b3b3;
`;

