export type ButtonProps = {
  title: string;
  type?: "button" | "submit" | "reset";
  buttonStyle?: string;
  customStyle?: React.CSSProperties;
  icon?: React.ReactElement;
  disabled?: boolean;
  onClick?: () => void;
};

