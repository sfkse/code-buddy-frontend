import styled from "styled-components";
import React, { CSSProperties } from "react";
import { NavLink } from "react-router-dom";

import SearchInput from "../SearchInput";
import { DEVICES } from "../../styles/theme";

type PageMenuLinkProps = {
  label: string;
  icon: React.ReactNode;
  to: string;
  soon?: boolean;
};

type PageMenuProps = {
  pageMenuLinks: PageMenuLinkProps[];
  hasSearch?: boolean;
  searchPlaceholder?: string;
};

const PageMenu = ({
  pageMenuLinks,
  hasSearch,
  searchPlaceholder,
}: PageMenuProps) => {
  const [searchValue, setSearchValue] = React.useState("");

  const handleOnChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  return (
    <PageMenuWrapper>
      <PageMenuSearchInputWrapper>
        {hasSearch && (
          <SearchInput
            searchValue={searchValue}
            handleOnChangeSearch={handleOnChangeSearch}
            placeholder={searchPlaceholder}
          />
        )}
      </PageMenuSearchInputWrapper>
      <PageMenuList>
        {pageMenuLinks.map((link) => (
          <NavLinkItem
            to={link.to}
            key={link.label}
            style={({ isActive }): CSSProperties => ({
              fontWeight: isActive && !link.soon ? "bold" : "normal",
            })}
            $isSoon={link.soon}
          >
            <PageMenuItemIcon>{link.icon}</PageMenuItemIcon>
            <PageMenuItemText>{link.label}</PageMenuItemText>
            {link.soon && <SoonLabel>Soon</SoonLabel>}
          </NavLinkItem>
        ))}
      </PageMenuList>
    </PageMenuWrapper>
  );
};

export default PageMenu;

const PageMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  @media only screen and (${DEVICES.md}) {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 80%;
    height: 100%;
    z-index: 10;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

const PageMenuSearchInputWrapper = styled.div`
  padding: 0 2rem;
`;

const PageMenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavLinkItem = styled(NavLink)<{ $isSoon?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 2rem;
  cursor: pointer;
  &:hover,
  &.active {
    background-color: ${({ theme, $isSoon }) =>
      !$isSoon && theme.colors.secondary};
    svg {
      color: ${({ theme, $isSoon }) => !$isSoon && theme.colors.yellow};
    }
  }
`;

const PageMenuItemIcon = styled.div`
  padding-top: 0.3rem;
`;

const PageMenuItemText = styled.span`
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: ${({ theme }) => theme.font.body.base};
`;

const SoonLabel = styled.span`
  font-size: 0.6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.01rem 0.2rem;
  border-radius: 3px;
  background: rgb(224, 15, 15);
  background: linear-gradient(
    90deg,
    rgba(224, 15, 15, 1) 0%,
    rgba(214, 114, 8, 1) 35%,
    rgba(255, 244, 0, 1) 100%
  );
`;

