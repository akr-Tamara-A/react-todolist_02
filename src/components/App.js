import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import Tabs from './Tabs';
import PageDay from '../pages/Day';
import PageWeek from '../pages/Week';
import PageMonth from '../pages/Month';
import PageYear from '../pages/Year';
import PageOptions from '../pages/Options';
import PageHome from '../pages/Home';

function App() {

  return (
    <>
      <Page>
        <PageWrapper>
          <BrowserRouter>
          <Tabs />
            <Switch>
              <Route exact path='/' component={PageHome} />
              <Route path='/day' component={PageDay} />
              <Route path='/week' component={PageWeek} />
              <Route path='/month' component={PageMonth} />
              <Route path='/year' component={PageYear} />
              <Route path='/options' component={PageOptions} />
            </Switch>
          </BrowserRouter>
        </PageWrapper>
      </Page>
      <GlobalStyles />
    </>
  );
}

export default App;

const GlobalStyles = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
  }
`;

const Page = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(150deg, #f06292 50%, #e55c8a 50%);
  margin: 0;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  `;

const PageWrapper = styled.div`
  background-color: #3c424a;
  margin: 0 auto;
  max-width: 680px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`;
