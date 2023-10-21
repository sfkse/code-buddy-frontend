import styled from "styled-components";

type ShapeCircleProps = {
  type: string;
  content?: string;
  overlap?: boolean;
  source?: string;
  alt?: string;
  size?: string;
  style?: React.CSSProperties;
  variant?: string;
};
const ShapeCircle = ({
  type,
  content,
  overlap,
  source,
  alt,
  size,
  style,
  variant,
}: ShapeCircleProps) => {
  return (
    <ShapeWrapper $size={size} $overlap={overlap} $variant={variant}>
      {type === "text" ? (
        <ShapeText>{content}</ShapeText>
      ) : (
        <img src={source} alt={alt} style={style} />
      )}
    </ShapeWrapper>
  );
};

export default ShapeCircle;

const ShapeWrapper = styled.div<{
  $size?: string;
  $overlap?: boolean;
  $variant?: string;
}>`
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  width: ${({ $size }) =>
    $size === "sm" ? "24px" : $size === "md" ? "38px" : "48px"};
  height: ${({ $size }) =>
    $size === "sm" ? "24px" : $size === "md" ? "38px" : "48px"};
  border-radius: 50%;
  background-color: ${({ theme, $variant }) =>
    $variant === "primary" ? theme.colors.secondary : theme.colors.caution};
  color: ${({ theme, $variant }) =>
    $variant === "primary"
      ? theme.colors.primaryLight
      : theme.colors.secondary};
  margin-left: ${({ $overlap }) => ($overlap ? "-1rem" : "0")};
`;

const ShapeText = styled.p`
  text-transform: uppercase;
  text-align: center;
  font-size: ${({ theme }) => theme.font.body.xs};
  padding: 1rem;
`;

