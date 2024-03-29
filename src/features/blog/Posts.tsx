import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";
import styled from "styled-components";
import { getImage } from "./utils";
import Card from "../../ui/Card";
import Button from "../../ui/Button";
import TruncatedText from "../../ui/TruncatedText";
import Loader from "../../ui/Loader";

interface Post {
  title: string;
  link: string;
  content: string;
  contentSnippet: string;
  pubDate: string;
}

function Posts() {
  const [feedItems, setFeedItems] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const feed = await axios("http://localhost:3000/api/v1/posts/all");
      setIsLoading(false);
      setFeedItems(feed.data.items);
    }

    fetchData();
  }, []);

  return (
    <Loader isLoading={isLoading}>
      <Title>Tech News</Title>
      <PostsList>
        {feedItems.map((item, index) => (
          <Card key={index} style={{ width: "25%" }}>
            <Card.Body>
              <TruncatedText as="h3" text={item.title} lines={2} />
              <PubDate>{moment(item.pubDate).format("DD MMM YYYY")}</PubDate>
              <PostContent
                dangerouslySetInnerHTML={{ __html: getImage(item?.content) }}
              />
              <TruncatedText text={item.contentSnippet} lines={5} />
            </Card.Body>

            <Card.Footer>
              <a href={item.link} target="_blank">
                <ReadMore size="sm">Read more</ReadMore>
              </a>
            </Card.Footer>
          </Card>
        ))}
      </PostsList>
    </Loader>
  );
}

export default Posts;

const PostsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PubDate = styled.p`
  font-size: var(--font-size-sm);
  color: var(--color-grey-dark);
  margin: 1rem 0;
`;

const ReadMore = styled(Button)`
  margin-left: auto;
  font-size: var(--font-size-sm);
`;

const PostContent = styled.div`
  margin: 1.25rem 0;
`;

const Title = styled.h2`
  text-align: center;
  font-size: var(--font-size-xxl);
  font-weight: 600;
  margin: 5rem 0 3rem 0;
`;

