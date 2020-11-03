import React from "react";
import styled from "styled-components";

import HeaderContainer from '../components/HeaderContainer';
import Content from '../components/Content';

function PageOptions() {

  return (
    <Wrapper>
      <Content text='Options content'/>
    </Wrapper>
  );
};

export default PageOptions;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 3rem;
  flex-grow: 1;
`;