import styled from "styled-components";
import FellowsList from "../features/fellows/FellowsList";
import Map from "../features/fellows/Map";
import MapFilters from "../features/fellows/MapFilters";

function Fellows() {
  return (
    <Wrapper>
      <MapFilters />
      <FellowsList />
      <Map />
    </Wrapper>
  );
}

export default Fellows;

const Wrapper = styled.div`
  display: flex;
  margin-top: 2rem;
`;

