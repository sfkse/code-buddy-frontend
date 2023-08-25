export const theme = {
  colors: {
    lightGray: "rgb(199, 199, 199)",
    frameBorders: "rgba(0, 51, 78, 0.2)",
    //Text
    darkPrimaryColor: "rgb(0, 0, 0)",
    darkSecondaryColor: "rgb(34, 34, 34)",
    darkPrimaryColorTransparent: "rgba(0, 0, 0, 0.4)",
    lightPrimaryColor: "rgb(20, 83, 116)",
    secondaryColor: "#B8B8B8",
    yellow: "#F5CA5B",
    white: "white",
    error: "#FF4154",
    //Box
    boxShadow:
      "0px 2px 2px rgba(21, 21, 23, 0.04), 0px 0px 2px rgba(21, 21, 23, 0.04);",
  },
  font: {
    fontInter: "Inter",
    smallFont: ".8rem",
    extraSmallFont: ".65rem",
  },
  layout: {
    padding: "2rem 1rem;",
  },
  selectStyle: {
    option: (base: object, { isFocused, isSelected }) => ({
      ...base,
      backgroundColor: isSelected
        ? theme.colors.lightPrimaryColor
        : theme.colors.white,
      border: isFocused ? 0 : 0,
      boxShadow: isFocused ? 0 : 0,
      ":focus": {
        border: isFocused ? 0 : 0,
        boxShadow: isFocused ? 0 : 0,
      },
      ":hover": {
        backgroundColor: isFocused ? theme.colors.orange : base.backgroundColor,
        color: theme.colors.secondaryColor,
      },
    }),
    control: (styles) => ({
      ...styles,
      border: `1px solid ${theme.colors.darkPrimaryColorTransparent}`,
    }),
  },
};

