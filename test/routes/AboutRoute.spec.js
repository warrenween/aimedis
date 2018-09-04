import React from 'react';
import Router from 'react-router-dom/MemoryRouter';
import { renderToString } from 'react-dom/server';
import AboutRoute from 'routes/AboutRoute';

describe('routes/AboutRoute', () => {
  it('should render the About us Page for unauthenticated access', () => {
    const render = renderToString(
      <Router initialEntries={['/about']}>
        <AboutRoute
          exact
          path="/about"
          component={() => (<div>About us</div>)}
          isAuthenticated={false}
        />
      </Router>
    );

    expect(render).toMatchSnapshot();
  });

  it('should render the About us Page for authenticated access', () => {
    const render = renderToString(
      <Router initialEntries={['/about']}>
        <AboutRoute
          exact
          path="/about"
          component={() => (<div>About us</div>)}
          isAuthenticated={true}
        />
      </Router>
    );

    expect(render).toMatchSnapshot();
  });
});
