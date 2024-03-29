import styled from "styled-components";
import LogoImg from "../assets/user-logo.png";

const LogoWrapper = styled.div`
  /* width: 100%; */
  text-align: center;
  position: relative;
`;

const Logo = styled.img`
  /* width: 20%; */
`;

function UserLogo() {
  return (
    <LogoWrapper>
      <Logo src={LogoImg} alt="logo" />
    </LogoWrapper>
  );
}

export default UserLogo;

