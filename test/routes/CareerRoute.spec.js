import React from 'react';
import Router from 'react-router-dom/MemoryRouter';
import { renderToString } from 'react-dom/server';
import CareerRoute from 'routes/CareerRoute';

describe('routes/CareerRoute', () => {
  it('should render the Career Page for unauthenticated access', () => {
    const render = renderToString(
      <Router initialEntries={['/career']}>
        <CareerRoute
          exact
          path="/career"
          component={() => (<div>Career</div>)}
          isAuthenticated={false}
        />
      </Router>
    );

    expect(render).toMatchSnapshot();
  });

  it('should render the Career Page for authenticated access', () => {
    const render = renderToString(
      <Router initialEntries={['/career']}>
        <CareerRoute
          exact
          path="/career"
          component={() => (<div>Career</div>)}
          isAuthenticated={true}
        />
      </Router>
    );

    expect(render).toMatchSnapshot();
  });
});
