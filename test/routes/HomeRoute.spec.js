import React from 'react';
import Router from 'react-router-dom/MemoryRouter';
import { renderToString } from 'react-dom/server';
import HomeRoute from 'routes/HomeRoute';

describe('routes/HomeRoute', () => {
  it('should render the Home Page for unauthenticated access', () => {
    const render = renderToString(
      <Router initialEntries={['/']}>
        <HomeRoute
          exact
          path="/"
          component={() => (<div>HOME</div>)}
          isAuthenticated={false}
        />
      </Router>
    );

    expect(render).toMatchSnapshot();
  });

  it('should render the Home Page for authenticated access', () => {
    const render = renderToString(
      <Router initialEntries={['/']}>
        <HomeRoute
          exact
          path="/"
          component={() => (<div>HOME</div>)}
          isAuthenticated={true}
        />
      </Router>
    );

    expect(render).toMatchSnapshot();
  });
});
