import React from 'react';
import Router from 'react-router-dom/MemoryRouter';
import { renderToString } from 'react-dom/server';
import HomeRoute from 'routes/HomeRoute';

describe('modules/RoutePublic', () => {
  it('should render the Login component for unauthenticated access', () => {
    const render = renderToString(
      <Router initialEntries={['/login']}>
        <HomeRoute
          exact
          path="/login"
          component={() => (<div>LOGIN</div>)}
          isAuthenticated={false}
        />
      </Router>
    );

    expect(render).toMatchSnapshot();
  });

  it('should redirect to /private for authenticated access', () => {
    const render = renderToString(
      <Router initialEntries={['/login']}>
        <HomeRoute
          exact
          path="/login"
          component={() => (<div>LOGIN</div>)}
          isAuthenticated={true}
        />
      </Router>
    );

    expect(render).toMatchSnapshot();
  });
});
