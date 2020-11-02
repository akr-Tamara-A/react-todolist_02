import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import Tabs from './Tabs';
import PageDay from '../pages/day';
import PageWeek from '../pages/week';
import PageMonth from '../pages/month';
import PageYear from '../pages/year';

function App() {

  return (
    <>
      <Page>
        <PageWrapper>
          <BrowserRouter>
          <Tabs />
            <Switch>
              <Route path='/day' component={PageDay} />
              <Route path='/week' component={PageWeek} />
              <Route path='/month' component={PageMonth} />
              <Route path='/year' component={PageYear} />
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
