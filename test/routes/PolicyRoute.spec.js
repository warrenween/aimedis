import React from 'react';
import Router from 'react-router-dom/MemoryRouter';
import { renderToString } from 'react-dom/server';
import PolicyRoute from 'routes/PolicyRoute';

describe('routes/PolicyRoute', () => {
  it('should render the Policy Page for unauthenticated access', () => {
    const render = renderToString(
      <Router initialEntries={['/policy']}>
        <PolicyRoute
          exact
          path="/policy"
          component={() => (<div>Policy</div>)}
          isAuthenticated={false}
        />
      </Router>
    );

    expect(render).toMatchSnapshot();
  });

  it('should render the Policy Page for authenticated access', () => {
    const render = renderToString(
      <Router initialEntries={['/policy']}>
        <PolicyRoute
          exact
          path="/policy"
          component={() => (<div>Policy</div>)}
          isAuthenticated={true}
        />
      </Router>
    );

    expect(render).toMatchSnapshot();
  });
});
