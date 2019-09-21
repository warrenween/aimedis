import React from 'react';
import Router from 'react-router-dom/MemoryRouter';
import { renderToString } from 'react-dom/server';
import BlogDetailRoute from 'routes/BlogDetailRoute';

describe('routes/BlogDetailRoute', () => {
  it('should render the Single Blog Page for unauthenticated access', () => {
    const render = renderToString(
      <Router initialEntries={['/blog/:id']}>
        <BlogDetailRoute
          exact
          path="/blog/:id"
          component={() => (<div>Single Blog</div>)}
          isAuthenticated={false}
        />
      </Router>
    );

    expect(render).toMatchSnapshot();
  });

  it('should render the Single Blog Page for authenticated access', () => {
    const render = renderToString(
      <Router initialEntries={['/blog/:id']}>
        <BlogDetailRoute
          exact
          path="/blog/:id"
          component={() => (<div>Single Blog</div>)}
          isAuthenticated={true}
        />
      </Router>
    );

    expect(render).toMatchSnapshot();
  });
});
