import { TbMessage2 } from "react-icons/tb";
import { styled } from "styled-components";
import DropdownMenu from "./DropdownMenu";

const Actions = () => {
  const dropdownMenuContent = [{ title: "Message", text: "New " }];

  return (
    <>
      <IconsWrapper>
        <TbMessage2 />
        <AlertDot />
        <DropdownMenu content={dropdownMenuContent} />
      </IconsWrapper>
    </>
  );
};

export default Actions;

const IconsWrapper = styled.div`
  display: flex;
  font-size: 1.2rem;
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.lightGray};
  cursor: pointer;
  &:hover > ul {
    display: flex;
    flex-direction: column;
    z-index: 1000;
  }
`;

const AlertDot = styled.div`
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  position: absolute;
  transform: translateY(-20%);
  background-color: ${({ theme }) => theme.colors.yellow};
  margin-left: 0.7rem;
`;

