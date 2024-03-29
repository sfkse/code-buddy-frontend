import styled from "styled-components";

type TruncatedTextProps = {
  text: string;
  as?: string;
  lines?: number;
};

function TruncatedText({ text, as = "p", lines = 3 }: TruncatedTextProps) {
  return (
    <Text as={as} lines={lines}>
      {text}
    </Text>
  );
}

export default TruncatedText;

const Text = styled.p<{ lines: number }>`
  display: -webkit-box;
  -webkit-line-clamp: ${({ lines }) => lines};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

