import styled from "styled-components";

type SearchInputProps = {
  placeholder: string;
  searchValue: string;
  handleOnChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput = ({
  placeholder,
  searchValue,
  handleOnChangeSearch,
}: SearchInputProps) => {
  return (
    <SearchInputComponent
      value={searchValue}
      onChange={handleOnChangeSearch}
      placeholder={placeholder}
    />
  );
};

export default SearchInput;

const SearchInputComponent = styled.input`
  border: none;
  outline: none;
  font-size: ${({ theme }) => theme.font.body.xs};
  padding: 0.5rem;
  width: 100%;
  margin: 1rem 0;
  &::placeholder {
    color: ${({ theme }) => theme.colors.primaryExtraLight};
  }
`;

