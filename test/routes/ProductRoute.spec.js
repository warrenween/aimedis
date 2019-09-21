import React from 'react';
import Router from 'react-router-dom/MemoryRouter';
import { renderToString } from 'react-dom/server';
import ProductRoute from 'routes/ProductRoute';

describe('routes/ProductRoute', () => {
  it('should render the Product Page for unauthenticated access', () => {
    const render = renderToString(
      <Router initialEntries={['/product']}>
        <ProductRoute
          exact
          path="/product"
          component={() => (<div>Product</div>)}
          isAuthenticated={false}
        />
      </Router>
    );

    expect(render).toMatchSnapshot();
  });

  it('should render the Product Page for authenticated access', () => {
    const render = renderToString(
      <Router initialEntries={['/product']}>
        <ProductRoute
          exact
          path="/product"
          component={() => (<div>Product</div>)}
          isAuthenticated={true}
        />
      </Router>
    );

    expect(render).toMatchSnapshot();
  });
});
