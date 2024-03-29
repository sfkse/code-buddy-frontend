import styled from "styled-components";
import MainWrapper from "../../ui/MainWrapper";

function MapFilters() {
  return (
    <Wrapper>
      <FiltersWrapper>
        <FiltersHeader>Filters</FiltersHeader>
        <FilterItem>
          <label htmlFor="location">Location</label>
          <input id="location" type="checkbox" />
        </FilterItem>
        <FilterItem>
          <label htmlFor="friends">Friends</label>
          <input id="friends" type="checkbox" />
        </FilterItem>
      </FiltersWrapper>
    </Wrapper>
  );
}

export default MapFilters;

const Wrapper = styled(MainWrapper)`
  flex: 0.2;
`;
const FiltersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2rem;
`;

const FiltersHeader = styled.h2`
  font-size: var(--font-size-regular);
  margin-bottom: 1rem;
`;

const FilterItem = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 8px;
`;

