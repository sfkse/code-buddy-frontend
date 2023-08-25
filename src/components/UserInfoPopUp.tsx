import { styled } from "styled-components";
import Button from "./Button";

const UserInfoPopUp = () => {
  return (
    <PopUpWrapper>
      <UserLogo />
      <UserLocation>KIYV, UKRAINE</UserLocation>
      <UserFullName>Ilya Dmitruk</UserFullName>
      <UserTags>#founder and #designer</UserTags>
      <Actions>
        <Button title="CALL" />
        <Button title="MESSAGE" />
      </Actions>
    </PopUpWrapper>
  );
};

export default UserInfoPopUp;

const PopUpWrapper = styled.div`
  display: flex;
  width: 200px;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  border: 3px solid ${(props) => props.theme.colors.darkPrimaryColor};
  border-radius: 3px;
  box-shadow: 4px 8px ${(props) => props.theme.colors.darkPrimaryColor};
`;

const UserLogo = styled.p`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.darkPrimaryColor};
`;

const UserLocation = styled.span`
  height: 20px;
  color: ${(props) => props.theme.colors.lightGray};
  font-size: 0.7rem;
`;

const UserFullName = styled.span``;

const UserTags = styled.span``;

const Actions = styled.div`
  display: flex;
  width: 100%;
  margin-top: 0.5rem;
  align-items: center;
  background-color: ${(props) => props.theme.colors.yellow};
  color: ${(props) => props.theme.colors.darkPrimaryColor};
`;

