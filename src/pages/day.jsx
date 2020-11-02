import React from "react";
import styled from "styled-components";

import HeaderContainer from '../components/HeaderContainer';
import Content from '../components/Content';

function PageDay() {

  return (
    <Wrapper>
      <HeaderContainer mainDate='Monday' subDate='September 4, 2020'/>
      <Content text='Day content'/>
    </Wrapper>
  );
};

export default PageDay;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 3rem;
  flex-grow: 1;
`;