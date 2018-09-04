import React from 'react';
import Router from 'react-router-dom/MemoryRouter';
import { renderToString } from 'react-dom/server';
import InvestorRoute from 'routes/InvestorRoute';

describe('routes/InvestorRoute', () => {
  it('should render the Investor Page for unauthenticated access', () => {
    const render = renderToString(
      <Router initialEntries={['/investor']}>
        <InvestorRoute
          exact
          path="/investor"
          component={() => (<div>Investor</div>)}
          isAuthenticated={false}
        />
      </Router>
    );

    expect(render).toMatchSnapshot();
  });

  it('should render the Investor Page for authenticated access', () => {
    const render = renderToString(
      <Router initialEntries={['/investor']}>
        <InvestorRoute
          exact
          path="/investor"
          component={() => (<div>Investor</div>)}
          isAuthenticated={true}
        />
      </Router>
    );

    expect(render).toMatchSnapshot();
  });
});
