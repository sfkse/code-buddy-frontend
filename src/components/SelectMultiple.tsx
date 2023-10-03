import Select, { StylesConfig } from "react-select";
import chroma from "chroma-js";

import makeAnimated from "react-select/animated";

type ColourOption = {
  color: string;
  label: string;
  value: string;
};
const animatedComponents = makeAnimated();

const SelectMultiple = () => {
  return (
    <Select
      styles={colourStyles}
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      defaultValue={[{ color: "green", label: "General", value: "General" }]}
      options={[
        { color: "green", label: "General", value: "General" },
        { color: "red", label: "Work", value: "Work" },
        { color: "blue", label: "Personal", value: "Personal" },
      ]}
    />
  );
};

const colourStyles: StylesConfig<ColourOption, true> = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    console.log(color.alpha(0.3).css());
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

