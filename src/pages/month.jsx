import React from "react";
import styled from "styled-components";

import HeaderContainer from "../components/HeaderContainer";
import Content from "../components/Content";

function PageMonth() {
  return (
    <Wrapper>
      <HeaderContainer mainDate='September' subDate='2020 year'/>
      <Content text="Month content" />
    </Wrapper>
  );
}

export default PageMonth;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 3rem;
  flex-grow: 1;
`;