import styled from "styled-components";

type SearchInputProps = {
  placeholder: string;
};

const SearchInput = ({ placeholder }: SearchInputProps) => {
  return <SearchInputComponent placeholder={placeholder} />;
};

export default SearchInput;

const SearchInputComponent = styled.input`
  border: none;
  outline: none;
  font-size: 0.8rem;
  padding: 0.5rem;
  width: 100%;
  margin: 1rem 0;
  &::placeholder {
    color: ${({ theme }) => theme.colors.primaryExtraLight};
  }
`;

