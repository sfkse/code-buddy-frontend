import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Row from "../../ui/Row";
import Card from "../../ui/Card";
import SliderButtons from "../../ui/SliderButtons";
import Button from "../../ui/Button";

import EventBanner from "../../assets/event-banner.png";
import boy from "../../assets/boy.png";
import LinkUnderlined from "../../ui/LinkUnderlined";

function LatestPosts() {
  return (
    <section>
      <Row>
        <TitleWrapper>
          <Title>Latest Posts</Title>
          <Image src={boy} alt="" />
        </TitleWrapper>
        <LinkUnderlined href="/posts" place="right">
          View All Posts
        </LinkUnderlined>
        <CarouselContainer>
          <Carousel
            arrows={false}
            customButtonGroup={<SliderButtons />}
            draggable={false}
            focusOnSelect={false}
            infinite={false}
            minimumTouchDrag={80}
            renderButtonGroupOutside
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 4,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 2,
                partialVisibilityGutter: 30,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
            partialVisible={true}
          >
            <Card isforslider={true}>
              <Card.Image source={EventBanner} />
              <Card.Body>
                <CardTitle>Post Title</CardTitle>
                <Description>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  vehicula, libero in aliquam malesuada, justo nunc ultrices
                  massa, sed fermentum justo libero id nunc.
                </Description>
              </Card.Body>
              <Card.Footer>
                <Author>by Sefa</Author>
                <ReadMore size="sm">Read More</ReadMore>
              </Card.Footer>
            </Card>
            <Card isforslider={true}>
              <Card.Image source={EventBanner} />
              <Card.Body>
                <CardTitle>Post Title</CardTitle>
                <Description>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  vehicula, libero in aliquam malesuada, justo nunc ultrices
                  massa, sed fermentum justo libero id nunc.
                </Description>
              </Card.Body>
              <Card.Footer>
                <Author>by Sefa</Author>
                <ReadMore size="sm">Read More</ReadMore>
              </Card.Footer>
            </Card>
          </Carousel>
        </CarouselContainer>
      </Row>
    </section>
  );
}

export default LatestPosts;

const TitleWrapper = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
`;

const Image = styled.img`
  position: absolute;
  width: 20%;
  top: 0;
  left: 0;
  transform: translateY(-100px);
`;

const Title = styled.h2`
  font-size: var(--font-size-xxl);
  font-weight: 600;
`;

const CarouselContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
`;

const CardTitle = styled.h3`
  font-weight: 600;
`;

const Description = styled.p`
  font-size: var(--font-size-sm);
  color: var(--color-grey-dark);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Author = styled.span`
  font-size: var(--font-size-sm);
  font-weight: 600;
`;

const ReadMore = styled(Button)`
  font-size: var(--font-size-sm);
  margin-left: auto;
`;
