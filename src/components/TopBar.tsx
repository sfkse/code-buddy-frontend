import { styled } from "styled-components";
import Actions from "./Actions";
import UserMenu from "./UserMenu";

const TopBar = () => {
  return (
    <TopBarWrapper>
      <Actions />
      <UserMenu />
    </TopBarWrapper>
  );
};

export default TopBar;

const TopBarWrapper = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  padding: 0 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
`;

