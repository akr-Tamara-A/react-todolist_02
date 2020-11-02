import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  colorLinkHover,
  colorButtonNotActive,
  colorButtonActive,
} from "../styles/consts";

function Tabs() {
  const [isLinkActive, setisLinkActive] = useState({
    linkDay: true,
    linkWeek: false,
    linkMonth: false,
    linkYear: false,
  });

  return (
    <TabsWrapper>
      <StyledRouterLink
        to="/day"
        isActive={isLinkActive.linkDay}
        onClick={() => {
          setisLinkActive({
            linkDay: true,
            linkWeek: false,
            linkMonth: false,
            linkYear: false,
          });
        }}
      >
        Day
      </StyledRouterLink>
      <StyledRouterLink
        to="/week"
        isActive={isLinkActive.linkWeek}
        onClick={() => {
          setisLinkActive({
            linkDay: false,
            linkWeek: true,
            linkMonth: false,
            linkYear: false,
          });
        }}
      >
        Week
      </StyledRouterLink>
      <StyledRouterLink
        to="/month"
        isActive={isLinkActive.linkMonth}
        onClick={() => {
          setisLinkActive({
            linkDay: false,
            linkWeek: false,
            linkMonth: true,
            linkYear: false,
          });
        }}
      >
        Month
      </StyledRouterLink>
      <StyledRouterLink
        to="/year"
        isActive={isLinkActive.linkYear}
        onClick={() => {
          setisLinkActive({
            linkDay: false,
            linkWeek: false,
            linkMonth: false,
            linkYear: true,
          });
        }}
      >
        Year
      </StyledRouterLink>
    </TabsWrapper>
  );
}

export default Tabs;

const TabsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #31363c;
  width: 100%;
`;

const StyledRouterLink = styled(Link)`
  background-color: transparent;
  border: none;
  font-size: 1rem;
  padding: 0.8em 1em;
  border-bottom: ${(props) =>
    props.isActive ? `2px solid ${colorLinkHover}` : "2px solid transparent"};
  text-decoration: none;
  color: ${(props) =>
    props.isActive ? colorButtonActive : colorButtonNotActive
  };

  :hover {
    color: ${(props) =>
      props.isActive ? colorButtonActive : colorLinkHover
    };
    cursor: ${(props) =>
      props.isActive ? 'default' : 'pointer'
    };
  }
`;
