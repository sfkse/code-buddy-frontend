import React, { KeyboardEventHandler } from "react";

import CreatableSelect from "react-select/creatable";

const components = {
  DropdownIndicator: null,
};

interface Option {
  readonly label: string;
  readonly value: string;
}

const createOption = (label: string, value: string) => ({
  label,
  value,
});

type SelectNoteTagsProps = {
  placeholder: string;
  options: Option[];
  value: Option[];
  handleOnChangeSelect: (e: any) => void;
};

const SelectMultipleOptions = ({
  placeholder,
  options,
  value,
  handleOnChangeSelect,
}: SelectNoteTagsProps) => {
  const [inputValue, setInputValue] = React.useState("");
  const [values, setValue] = React.useState<readonly Option[]>([]);

  const handleKeyDown: KeyboardEventHandler = (event) => {
    if (!inputValue) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
        setValue((prev) => [...prev, createOption(inputValue, "green")]);
        setInputValue("");
        event.preventDefault();
    }
  };
  return (
    <CreatableSelect
      isMulti
      components={components}
      options={options}
      onKeyDown={handleKeyDown}
      //   defaultValue={options[0]}
      onChange={handleOnChangeSelect}
      placeholder={placeholder}
      value={[...value, ...values]}
    />
  );
};

export default SelectMultipleOptions;

