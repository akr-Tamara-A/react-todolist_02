import React from "react";
import styled from "styled-components";
import Button from './Button';
import { IconPrev, IconNext } from './Icons';
import { IconStyle } from '../styles/styles';

function HeaderContainer(props) {

  return (
    <Header>
      <Button>
        <StyledIconPrev />
      </Button>
      <Date>
        <MainDate>{props.mainDate}</MainDate>
        <SubDate>{props.subDate}</SubDate>
      </Date>
      <Button>
        <StyledIconNext />
      </Button>
    </Header>
  );
};

export default HeaderContainer;

const Header = styled.header`
  display: flex;
  margin: 2.5rem 0;
`;

const StyledIconPrev = styled(IconPrev)`
  ${IconStyle}
`;

const StyledIconNext = styled(IconNext)`
  ${IconStyle}
`;

const Date = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 200px
`;

const MainDate = styled.h1`
  color: #dce0e3;
  margin: .2rem;
  font-size: 1.6rem;

`;
const SubDate = styled.p`
  color: #868e86;
  margin: .2rem;
  font-size: 1rem;  
`;