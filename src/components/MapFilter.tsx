import { styled } from "styled-components";
import { BsCheck2 } from "react-icons/bs";
import { useState } from "react";

type Buttontype = {
  $checked: boolean;
  onClick: () => void;
};
const MapFilter = () => {
  const [filters, setFilters] = useState({
    online: true,
    offline: true,
  });

  return (
    <FilterButtonsWrapper>
      <Button
        onClick={() => setFilters({ ...filters, online: !filters.online })}
        $checked={filters.online}
      >
        <CheckIcon />
        Online
      </Button>
      <Button
        onClick={() => setFilters({ ...filters, offline: !filters.offline })}
        $checked={filters.offline}
      >
        <CheckIcon />
        Offline
      </Button>
    </FilterButtonsWrapper>
  );
};

export default MapFilter;

const FilterButtonsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const CheckIcon = styled(BsCheck2)`
  font-size: 1rem;
`;

const Button = styled.button<Buttontype>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, $checked }) =>
    $checked ? theme.colors.primary : theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-size: 0.8rem;
  font-weight: 700;
  color: ${({ theme, $checked }) =>
    $checked ? theme.colors.white : theme.colors.primary};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`;

