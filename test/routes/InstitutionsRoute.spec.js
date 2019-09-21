import React from 'react';
import Router from 'react-router-dom/MemoryRouter';
import { renderToString } from 'react-dom/server';
import InstitutionsRoute from 'routes/InstitutionsRoute';

describe('routes/InstitutionsRoute', () => {
  it('should render the Institutions Page for unauthenticated access', () => {
    const render = renderToString(
      <Router initialEntries={['/institutions']}>
        <InstitutionsRoute
          exact
          path="/institutions"
          component={() => (<div>Institutions</div>)}
          isAuthenticated={false}
        />
      </Router>
    );

    expect(render).toMatchSnapshot();
  });

  it('should render the Institutions Page for authenticated access', () => {
    const render = renderToString(
      <Router initialEntries={['/institutions']}>
        <InstitutionsRoute
          exact
          path="/institutions"
          component={() => (<div>Institutions</div>)}
          isAuthenticated={true}
        />
      </Router>
    );

    expect(render).toMatchSnapshot();
  });
});
