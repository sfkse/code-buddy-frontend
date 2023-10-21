import styled from "styled-components";

type DataProps = {
  value: string;
  label: string;
};
type SelectProps = {
  data: DataProps[];
  defaultValue?: string;
  handleOnChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ data, defaultValue, handleOnChange }: SelectProps) => {
  return (
    <SelectContainer onChange={handleOnChange}>
      <option value="">{defaultValue}</option>
      {data?.map((d: DataProps, idx: number) => (
        <option key={idx} value={d.value}>
          {d.label}
        </option>
      ))}
    </SelectContainer>
  );
};

export default Select;

const SelectContainer = styled.select`
  width: 50%;
  padding: 1rem;
  border-radius: 0.5rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.body.base};
  font-weight: 700;
  outline: none;
  cursor: pointer;
`;

