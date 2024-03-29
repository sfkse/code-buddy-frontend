import styled from "styled-components";
import Button from "../../ui/Button";
import Icons from "../../ui/Icons";

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 8rem;
  height: 90vh;
  background-color: var(--color-black);
  color: var(--color-white);
  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 4rem 2rem;
  }
`;

const BannerTextWrapper = styled.div`
  max-width: 60%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: flex-start;
`;

const BannerTitle = styled.h1`
  font-size: var(--font-size-xxl);
  margin-bottom: 1rem;
  font-weight: 600;
`;

const BannerText = styled.p`
  margin-bottom: 2rem;
  font-weight: 300;
  color: var(--color-grey-dark);
`;

const iconStyle = { transform: "translateY(5px)" };

function Banner() {
  return (
    <Wrapper>
      <BannerTextWrapper>
        <BannerTitle>
          FellowCoders: Where Coding Meets Community{" "}
          <Icons.Strike style={iconStyle} />
        </BannerTitle>
        <BannerText>
          Join FellowCoders, where developers not only code but connect and
          create through forums and events. Dive into discussions, share
          insights, and attend events that fuel your growth. Together, we're not
          just coding; we're building a community and shaping the future of
          tech. Let's embark on this journey together!
        </BannerText>
        <Button>CONNECT FELLOWS!</Button>
      </BannerTextWrapper>
      <Icons.Banner />
    </Wrapper>
  );
}

export default Banner;

