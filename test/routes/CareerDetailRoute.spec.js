import React from 'react';
import Router from 'react-router-dom/MemoryRouter';
import { renderToString } from 'react-dom/server';
import CareerDetailRoute from 'routes/CareerDetailRoute';

describe('routes/CareerDetailRoute', () => {
  it('should render the Job Post Page for unauthenticated access', () => {
    const render = renderToString(
      <Router initialEntries={['/career/:id']}>
        <CareerDetailRoute
          exact
          path="/career/:id"
          component={() => (<div>Job Post</div>)}
          isAuthenticated={false}
        />
      </Router>
    );

    expect(render).toMatchSnapshot();
  });

  it('should render the Job Post Page for authenticated access', () => {
    const render = renderToString(
      <Router initialEntries={['/career/:id']}>
        <CareerDetailRoute
          exact
          path="/career/:id"
          component={() => (<div>Job Post</div>)}
          isAuthenticated={true}
        />
      </Router>
    );

    expect(render).toMatchSnapshot();
  });
});
