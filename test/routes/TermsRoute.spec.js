import React from 'react';
import Router from 'react-router-dom/MemoryRouter';
import { renderToString } from 'react-dom/server';
import TermsRoute from 'routes/TermsRoute';

describe('routes/TermsRoute', () => {
  it('should render the Terms Page for unauthenticated access', () => {
    const render = renderToString(
      <Router initialEntries={['/']}>
        <TermsRoute
          exact
          path="/"
          component={() => (<div>Terms</div>)}
          isAuthenticated={false}
        />
      </Router>
    );

    expect(render).toMatchSnapshot();
  });

  it('should render the Terms Page for authenticated access', () => {
    const render = renderToString(
      <Router initialEntries={['/']}>
        <TermsRoute
          exact
          path="/"
          component={() => (<div>Terms</div>)}
          isAuthenticated={true}
        />
      </Router>
    );

    expect(render).toMatchSnapshot();
  });
});
