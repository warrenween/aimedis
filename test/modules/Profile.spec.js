import React from 'react';
import Router from 'react-router-dom/MemoryRouter';
import { renderToString } from 'react-dom/server';
import ProfileRoute from 'routes/ProfileRoute';

describe('modules/RoutePrivate', () => {
  it('should redirect for unauthenticated access', () => {
    const render = renderToString(
      <Router initialEntries={['/profile']}>
        <ProfileRoute
          exact
          path="/profile"
          component={() => (<div>PROFILE</div>)}
          isAuthenticated={false}
        />
      </Router>);

    expect(render).toMatchSnapshot();
  });

  it('should allow navigation for authenticated access', () => {
    const render = renderToString(
      <Router initialEntries={['/profile']}>
        <ProfileRoute
          exact
          path="/profile"
          component={() => (<div>PROFILE</div>)}
          isAuthenticated={true}
        />
      </Router>
    );

    expect(render).toMatchSnapshot();
  });
});
