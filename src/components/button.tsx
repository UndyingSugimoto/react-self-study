import styled from "styled-components";

type PropType = {
  main: string;
};

const Button = styled.button<PropType>`
  color: red;
  background: ${(theme) => theme.main};
`;
Button.defaultProps = {
  theme: {
    main: "#0088ee",
  },
};
