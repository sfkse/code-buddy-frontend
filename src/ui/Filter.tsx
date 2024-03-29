import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { getFilterNameFromQuery } from "../helpers/utils";

interface FilterProps {
  filters: {
    name: string;
    param: string;
  }[];
  style?: React.CSSProperties;
}

function Filter({ filters, ...props }: FilterProps) {
  const location = useLocation();
  const filterSelected = getFilterNameFromQuery(location.search);

  return (
    <Wrapper {...props}>
      {filters.map((filter) => (
        <FilterName
          key={filter.name}
          to={filter.param}
          style={({ isActive }) => ({
            backgroundColor:
              isActive &&
              filterSelected ===
                getFilterNameFromQuery(filter.param.split("?")[1])
                ? "var(--color-orange-dark)"
                : "",
          })}
        >
          {filter.name}
        </FilterName>
      ))}
    </Wrapper>
  );
}

export default Filter;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  gap: 1.5rem;
`;

const FilterName = styled(NavLink)`
  color: var(--color-black);
  text-decoration: none;
  padding: 0 0.3rem;
  border: 1px solid var(--color-black);
  border-radius: 4px;
  &:hover {
    background-color: var(--color-orange-light);
  }
`;
