import React from "react";
import styled from "styled-components";

import HeaderContainer from '../components/HeaderContainer';
import Content from '../components/Content';

function PageWeek() {

  return (
    <Wrapper>
      <HeaderContainer mainDate='Sept. 4 - Sept. 10' subDate='2020 year'/>
      <Content text='Week content'/>
    </Wrapper>
  );
};

export default PageWeek;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 3rem;
  flex-grow: 1;
`;