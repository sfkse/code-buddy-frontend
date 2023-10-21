import { styled } from "styled-components";

type PageHeaderProps = {
  title: string;
};

const PageHeader = (props: PageHeaderProps) => {
  return <Header>{props.title} </Header>;
};

export default PageHeader;

const Header = styled.span`
  font-size: ${({ theme }) => theme.font.heading.lg};
  font-weight: 700;
  margin: 1rem 0;
  align-self: flex-start;
`;

