import styled from "styled-components";
import React from "react";

const Button = () => {
  return <Button></Button>;
};

type StyledButtonProps = {
  main: string;
};

const StyledButton = styled.button<StyledButtonProps>`
  color: red;
  background: ${(theme) => theme.main};
`;
StyledButton.defaultProps = {
  theme: {
    main: "#0088ee",
  },
};
export default Button;
