/**
 * Layout.server.tsx
 * Server Rendered Layout though which all pages will pass
 */
import { CacheLong, gql, Seo, useShopQuery } from '@shopify/hydrogen';

import { Suspense } from 'react';
import { Header } from './global/Header.server';

export function Layout({ children }) {
  const {
    data: { shop },
  } = useShopQuery({
    query: SHOP_QUERY,
    cache: CacheLong(),
    preload: true,
  });

  return (
    <>
      <Suspense>
        <Seo
          type="defaultSeo"
          data={{
            title: shop.name,
            description: shop.description,
          }}
        ></Seo>
      </Suspense>
      <div className="flex flex-col min-h-screen antialiased bg-neutral-50">
        <div className="">
          <a className="sr-only" href="mainContent">
            Skip to content
          </a>
        </div>

        <Header shop={shop} />

        <main role="main" className="flex-grow" id="mainContent">
          <Suspense>{children}</Suspense>
        </main>
      </div>
    </>
  );
}

const SHOP_QUERY = gql`
  query ShopInfo {
    shop {
      name
      description
    }
  }
`;
