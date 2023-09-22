export type ButtonProps = {
  title: string;
  type?: "button" | "submit" | "reset";
  buttonStyle?: string;
  icon?: React.ReactElement;
  disabled?: boolean;
  onClick?: () => void;
};

