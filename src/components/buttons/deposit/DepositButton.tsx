import React from 'react';
import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
  disabled: boolean;
  onClick: () => void;
}

function DepositButton({ children, disabled, onClick }: Props) {
  return (
    <Button onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
}

const Button = styled.button`
  background-color: ${(props) => `${props.theme.colors.blue}`};
  color: ${(props) => `${props.theme.colors.white}`};
`;

export default DepositButton;
