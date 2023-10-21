import { styled } from "styled-components";
import { Checkbox } from "@mui/material";

const MapFilter = () => {
  return (
    <FilterButtonsWrapper>
      <Label htmlFor="checkbox">Online</Label>
      <Checkbox
        id="checkbox"
        aria-label="checkbox"
        defaultChecked
        size="small"
        sx={{
          padding: 0,
          color: "#191716",
          "&.Mui-checked": { color: "#e6af2e" },
        }}
      />
      <Label htmlFor="offline">Offline</Label>
      <Checkbox
        id="offline"
        aria-label="checkbox"
        defaultChecked
        size="small"
        sx={{
          padding: 0,
          color: "#191716",
          "&.Mui-checked": { color: "#e6af2e" },
        }}
      />
      <Label htmlFor="friends">Friends</Label>
      <Checkbox
        id="friends"
        aria-label="checkbox"
        defaultChecked
        size="small"
        sx={{
          padding: 0,
          color: "#191716",
          "&.Mui-checked": { color: "#e6af2e" },
        }}
      />
      <Label htmlFor="all">Show all</Label>
      <Checkbox
        id="all"
        aria-label="checkbox"
        defaultChecked
        size="small"
        sx={{
          padding: 0,
          color: "#191716",
          "&.Mui-checked": { color: "#e6af2e" },
        }}
      />
    </FilterButtonsWrapper>
  );
};

export default MapFilter;

const FilterButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: ${({ theme }) => theme.font.body.sm};
  margin-bottom: 1rem;
`;

const Label = styled.label`
  cursor: pointer;
  margin-left: 0.5rem;
`;

