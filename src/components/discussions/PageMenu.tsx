import styled from "styled-components";
import React, { CSSProperties } from "react";
import { NavLink } from "react-router-dom";

import SearchInput from "../SearchInput";

type PageMenuLinkProps = {
  label: string;
  icon: React.ReactNode;
  to: string;
};

type PageMenuProps = {
  pageMenuLinks: PageMenuLinkProps[];
  page: string;
};

const PageMenu = ({ pageMenuLinks, page }: PageMenuProps) => {
  return (
    <PageMenuWrapper>
      <PageMenuSearchInputWrapper>
        {page !== "settings" && (
          <SearchInput placeholder="Search discussions..." />
        )}
      </PageMenuSearchInputWrapper>
      <PageMenuList>
        {pageMenuLinks.map((link) => (
          <NavLinkItem
            to={link.to}
            key={link.label}
            style={({ isActive }): CSSProperties => ({
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            <PageMenuItemIcon>{link.icon}</PageMenuItemIcon>
            <PageMenuItemText>{link.label}</PageMenuItemText>
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
`;

const PageMenuSearchInputWrapper = styled.div`
  padding: 0 2rem;
`;

const PageMenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavLinkItem = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 2rem;
  cursor: pointer;
  &:hover,
  &.active {
    background-color: ${({ theme }) => theme.colors.secondary};
    svg {
      color: ${({ theme }) => theme.colors.yellow};
    }
  }
`;

const PageMenuItemIcon = styled.div`
  padding-top: 0.3rem;
`;

const PageMenuItemText = styled.span`
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: 1rem;
`;

