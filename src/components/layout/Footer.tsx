import { styled } from "styled-components";

const Footer = () => {
  return <FooterWrapper>Footer</FooterWrapper>;
};

export default Footer;

const FooterWrapper = styled.div`
  grid-column: 2 / -1;
  grid-row: 3 / 4;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.layout.padding};
  display: flex;
  justify-content: center;
`;

