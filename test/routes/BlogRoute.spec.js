import React from 'react';
import Router from 'react-router-dom/MemoryRouter';
import { renderToString } from 'react-dom/server';
import BlogRoute from 'routes/BlogRoute';

describe('routes/BlogRoute', () => {
  it('should render the Blog Page for unauthenticated access', () => {
    const render = renderToString(
      <Router initialEntries={['/blog']}>
        <BlogRoute
          exact
          path="/blog"
          component={() => (<div>Blog</div>)}
          isAuthenticated={false}
        />
      </Router>
    );

    expect(render).toMatchSnapshot();
  });

  it('should render the Blog Page for authenticated access', () => {
    const render = renderToString(
      <Router initialEntries={['/blog']}>
        <BlogRoute
          exact
          path="/blog"
          component={() => (<div>Blog</div>)}
          isAuthenticated={true}
        />
      </Router>
    );

    expect(render).toMatchSnapshot();
  });
});
