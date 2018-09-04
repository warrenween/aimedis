import React from 'react';
import Router from 'react-router-dom/MemoryRouter';
import { renderToString } from 'react-dom/server';
import ProfileRoute from 'routes/ProfileRoute';

describe('routes/ProfileRoute', () => {
  it('should render Profile Page for unauthenticated access', () => {
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

  it('should render Profile Page for authenticated access', () => {
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
