import React from "react";
import styled from "styled-components";

import HeaderContainer from '../components/HeaderContainer';
import Content from '../components/Content';

function PageYear() {

  return (
    <Wrapper>
      <HeaderContainer mainDate='2020' subDate='current year'/>
      <Content text='Year content'/>
    </Wrapper>
  );
};

export default PageYear;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 3rem;
  flex-grow: 1;
`;