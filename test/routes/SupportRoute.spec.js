import React from 'react';
import Router from 'react-router-dom/MemoryRouter';
import { renderToString } from 'react-dom/server';
import SupportRoute from 'routes/SupportRoute';

describe('routes/SupportRoute', () => {
  it('should render the Support Page for unauthenticated access', () => {
    const render = renderToString(
      <Router initialEntries={['/support']}>
        <SupportRoute
          exact
          path="/support"
          component={() => (<div>Support</div>)}
          isAuthenticated={false}
        />
      </Router>
    );

    expect(render).toMatchSnapshot();
  });

  it('should render the Support Page for authenticated access', () => {
    const render = renderToString(
      <Router initialEntries={['/support']}>
        <SupportRoute
          exact
          path="/support"
          component={() => (<div>Support</div>)}
          isAuthenticated={true}
        />
      </Router>
    );

    expect(render).toMatchSnapshot();
  });
});
