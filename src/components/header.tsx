import React from "react";
import styled from "styled-components";

type HeaderProps = {
  text: string;
};

const Header = (props: HeaderProps) => {
  return (
    <StyledHeader>
      <h2>{props.text}</h2>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #282c34;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  padding: 20px;
  cursor: pointer;

  & h2 {
    margin: 0;
  }
`;

export default Header;
