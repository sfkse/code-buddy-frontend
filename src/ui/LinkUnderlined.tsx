import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Link = styled(NavLink)<{ place?: string }>`
  text-decoration: underline;
  color: var(--color-orange-dark);
  cursor: pointer;
  transition: color 0.3s;
  align-self: ${({ place }) => place === "right" && "flex-end"};
  &:hover {
    color: var(--color-orange-light);
  }
`;

interface LinkUnderlinedProps {
  children: string;
  href: string;
  place?: string;
}

function LinkUnderlined({ children, href, place }: LinkUnderlinedProps) {
  return (
    <Link place={place} to={href}>
      {children}
    </Link>
  );
}

export default LinkUnderlined;

