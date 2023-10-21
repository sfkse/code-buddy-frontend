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
  font-size: ${({ theme }) => theme.font.body.xs};
  padding: 0.5rem;
  width: 100%;
  margin: 1rem 0;
  &::placeholder {
    color: ${({ theme }) => theme.colors.primaryExtraLight};
  }
`;

