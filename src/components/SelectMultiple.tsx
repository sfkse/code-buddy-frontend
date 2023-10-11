import Select, { StylesConfig } from "react-select";
import chroma from "chroma-js";

import makeAnimated from "react-select/animated";

type ColourOption = {
  color: string;
  label: string;
  value: string;
};

type SelectMultipleProps = {
  options: Array<{ color: string; label: string; value: string }>;
  defaultValue?: Array<{ color: string; label: string; value: string }>;
  placeholder: string;
};

const animatedComponents = makeAnimated();

const SelectMultiple = ({
  options,
  placeholder,
  defaultValue,
}: SelectMultipleProps) => {
  return (
    <Select
      styles={colourStyles}
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      defaultValue={defaultValue}
      options={options}
      placeholder={placeholder}
    />
  );
};

const colourStyles: StylesConfig<ColourOption, true> = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "white",
    fontSize: 14,
    borderColor: "#e0e2db",
    boxShadow: "none",
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);

    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: data.color,
      cursor: isDisabled ? "not-allowed" : "default",
      fontSize: 14,

      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ":hover": {
      backgroundColor: data.color,
      color: "white",
    },
  }),
};
export default SelectMultiple;

