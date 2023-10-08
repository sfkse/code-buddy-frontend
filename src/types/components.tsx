export type ButtonProps = {
  title?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "tertiary";
  buttonStyle?: string;
  customStyle?: React.CSSProperties;
  iconStyle?: React.CSSProperties;
  icon?: React.ReactElement;
  disabled?: boolean;
  onClick?: () => void;
};

