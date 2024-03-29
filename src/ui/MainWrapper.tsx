import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 2rem;
`;

function MainWrapper({ children, ...props }: { children: React.ReactNode }) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

export default MainWrapper;

