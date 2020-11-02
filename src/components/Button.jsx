import React from "react";
import styled from "styled-components";

import { colorButtonNotActive, colorButtonHover, colorLinkTodayBg } from '../styles/consts';

function Button(props) {

  return (
    <ButtonWithIcon>
      {props.children}
    </ButtonWithIcon>
  );
};

export default Button;

const ButtonWithIcon = styled.button`
  background-color: transparent;
  border: none;
  color: ${colorButtonNotActive};
  margin: 0 .5rem;

  :hover {
    color:${colorButtonHover};
    cursor: pointer;
  }

  :focus {
    /* color:${colorButtonHover}; */
    cursor: pointer;
    background-color: ${colorLinkTodayBg};
    outline: none;
  }
`;
