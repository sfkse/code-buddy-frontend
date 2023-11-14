import styled from "styled-components";

type EmptyStateProps = {
  text: string;
  icon?: string;
};

const EmptyState = ({ text, icon }: EmptyStateProps) => {
  return (
    <EmptyStateWrapper>
      <EmptyStateText>
        {text}
        {icon}
      </EmptyStateText>
    </EmptyStateWrapper>
  );
};

export default EmptyState;

const EmptyStateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const EmptyStateText = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondary};
`;

