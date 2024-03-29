import styled from "styled-components";
import Icons from "./Icons";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const IconWrapper = styled.span`
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;

function SliderButtons({ next, previous }: any) {
  return (
    <Wrapper>
      <IconWrapper onClick={() => previous()}>
        <Icons.LeftArrow />
      </IconWrapper>
      <IconWrapper onClick={() => next()}>
        <Icons.RightArrow />
      </IconWrapper>
    </Wrapper>
  );
}

export default SliderButtons;

