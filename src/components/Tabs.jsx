import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { IconHome, IconSettings } from './Icons';
import { IconStyle } from '../styles/styles';

import {
  colorLinkHover,
  colorButtonNotActive,
  colorButtonActive,
} from "../styles/consts";

function Tabs() {
  const [isLinkActive, setisLinkActive] = useState({
    linkHome: true,
    linkDay: false,
    linkWeek: false,
    linkMonth: false,
    linkYear: false,
    linkOptions: false,
  });

  return (
    <TabsWrapper>
      <StyledRouterLink
        to="/"
        isActive={isLinkActive.linkHome}
        onClick={() => {
          setisLinkActive({
            linkHome: true,
            linkDay: false,
            linkWeek: false,
            linkMonth: false,
            linkYear: false,
            linkOptions: false,
          });
        }}
        >
          <StyledIconHome />
        </StyledRouterLink>
      <div>
        <StyledRouterLink
          to="/day"
          isActive={isLinkActive.linkDay}
          onClick={() => {
            setisLinkActive({
              linkHome: false,
              linkDay: true,
              linkWeek: false,
              linkMonth: false,
              linkYear: false,
              linkOptions: false,
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
              linkHome: false,
              linkDay: false,
              linkWeek: true,
              linkMonth: false,
              linkYear: false,
              linkOptions: false,
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
              linkHome: false,
              linkDay: false,
              linkWeek: false,
              linkMonth: true,
              linkYear: false,
              linkOptions: false,
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
              linkHome: false,
              linkDay: false,
              linkWeek: false,
              linkMonth: false,
              linkYear: true,
              linkOptions: false,
            });
          }}
        >
          Year
        </StyledRouterLink>
      </div>
      <StyledRouterLink
        to="/options"
        isActive={isLinkActive.linkOptions}
        onClick={() => {
          setisLinkActive({
            linkHome: false,
            linkDay: false,
            linkWeek: false,
            linkMonth: false,
            linkYear: false,
            linkOptions: true,
          });
        }}
      >
        <StyledIconSettings />
      </StyledRouterLink>
    </TabsWrapper>
  );
}

export default Tabs;

const TabsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
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
    props.isActive ? colorButtonActive : colorButtonNotActive};

  :hover {
    color: ${(props) => (props.isActive ? colorButtonActive : colorLinkHover)};
    cursor: ${(props) => (props.isActive ? "default" : "pointer")};
  }

  :focus {
    outline: none;
    color: ${colorLinkHover};
  }
`;


const StyledIconHome = styled(IconHome)`
  ${IconStyle};
  width: 1.1875rem;
  height: 1.1875rem;
`;

const StyledIconSettings = styled(IconSettings)`
  ${IconStyle};
  width: 1.1875rem;
  height: 1.1875rem;
`;

