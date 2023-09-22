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
  // selectStyle: {
  //   option: (base: object, { isFocused, isSelected }) => ({
  //     ...base,
  //     backgroundColor: isSelected
  //       ? theme.colors.lightPrimaryColor
  //       : theme.colors.white,
  //     border: isFocused ? 0 : 0,
  //     boxShadow: isFocused ? 0 : 0,
  //     ":focus": {
  //       border: isFocused ? 0 : 0,
  //       boxShadow: isFocused ? 0 : 0,
  //     },
  //     ":hover": {
  //       backgroundColor: isFocused ? theme.colors.orange : base.backgroundColor,
  //       color: theme.colors.secondaryColor,
  //     },
  //   }),
  //   control: (styles) => ({
  //     ...styles,
  //     border: `1px solid ${theme.colors.darkPrimaryColorTransparent}`,
  //   }),
  // },
};

const breakpoints = {
  xs: "320px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

export const devices = {
  xs: `(max-width: ${breakpoints.xs})`,
  sm: `(max-width: ${breakpoints.sm})`,
  md: `(max-width: ${breakpoints.md})`,
  lg: `(max-width: ${breakpoints.lg})`,
  xl: `(max-width: ${breakpoints.xl})`,
  "2xl": `(min-width: ${breakpoints["2xl"]})`,
};

export const fonSizes = {
  body: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem",
  },
  heading: {
    xs: "1rem",
    sm: "1.25rem",
    base: "1.5rem",
    lg: "1.875rem",
    xl: "2.25rem",
    "2xl": "3rem",
    "3xl": "3.75rem",
    "4xl": "4.5rem",
    "5xl": "6rem",
    "6xl": "8rem",
  },
};

export const gradientButtonStyle = {
  width: "200px",
  alignSelf: "center",
  color: "white",
  display: "flex",
  gap: "5px",
  alignItems: "center",
  justifyContent: "space-evenly",
  background:
    "radial-gradient(circle at 100% 100%, #000 0, #000 1px, transparent 1px) 0% 0%/2px 2px no-repeat,radial-gradient(circle at 0 100%, #000 0, #000 1px, transparent 1px) 100% 0%/2px 2px no-repeat,radial-gradient(circle at 100% 0, #000 0, #000 1px, transparent 1px) 0% 100%/2px 2px no-repeat,radial-gradient(circle at 0 0, #000 0, #000 1px, transparent 1px) 100% 100%/2px 2px no-repeat,linear-gradient(#000, #000) 50% 50%/calc(100% - 4px) calc(100% - 6px) no-repeat,linear-gradient(#000, #000) 50% 50%/calc(100% - 6px) calc(100% - 4px) no-repeat,linear-gradient(90deg, transparent 0%, #ffd100 51%)",
  borderRadius: "2px",
  padding: "0.7rem 0.6rem",
  boxSizing: "border-box",
  fontSize: ".95rem",
  lineHeight: "1.5",
  fonwWeight: "300",
  letterSpacing: ".025rem",
};

