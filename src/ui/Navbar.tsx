import { styled } from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import Icons from "./Icons";
import Button from "./Button";
import UserMenu from "./UserMenu";
import { menuLinks } from "../helpers/utils";

const NavWrapper = styled.nav`
  background-color: var(--color-black);
  color: var(--color-white);
  padding: 0 8rem;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1200px) {
    padding: 1rem 2rem;
  }
`;

const LogoWrapper = styled.div`
  cursor: pointer;
`;

const MenuList = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const MenuItem = styled(NavLink)<{ active?: string }>`
  color: inherit;
  text-decoration: none;
  padding: 0.5rem 0;

  &:hover {
    border-bottom: 2px solid;
    border-image: linear-gradient(
        to right,
        var(--color-white) 50%,
        transparent 50%
      )
      100% 1;
  }

  &.active {
    border-bottom: 2px solid;
    border-image: linear-gradient(
        to right,
        var(--color-white) 50%,
        transparent 50%
      )
      100% 1;
  }
`;

function Navbar() {
  const user = true;
  const navigate = useNavigate();
  return (
    <NavWrapper>
      <LogoWrapper onClick={() => navigate("/")}>
        <Icons.Logo />
      </LogoWrapper>

      <MenuList>
        {menuLinks.map((link) => (
          <MenuItem
            key={link.label}
            to={link.link}
            // style={({ isActive }) => ({
            //   borderBottom: isActive && !link.soon ? "2px solid" : "",
            //   borderImage:
            //     isActive && !link.soon
            //       ? "linear-gradient(to right, var(--color-white) 50%, transparent 50%) 100% 1"
            //       : "",
            // })}
          >
            {link.label}
          </MenuItem>
        ))}
      </MenuList>
      {!user ? <Button>LET'S JOIN!</Button> : <UserMenu />}
    </NavWrapper>
  );
}

export default Navbar;

