import { Suspense } from 'react';
import { FeaturedCollections } from '../components/collections/FeaturedCollections.server';
import { Layout } from '../components/Layout.server';

export default function Home() {
  return (
    <Layout>
      <div className="p-6 md:p-6 lg:p-12">
        <h1 className="font-extrabold mb-4 text-5xl md:text-7xl">Hydrogen</h1>
        <p className="font-bold mb-3">This is a Template App</p>
        <em>Spectre Creative</em>
      </div>
      <Suspense>
        <FeaturedCollections></FeaturedCollections>
      </Suspense>
    </Layout>
  );
}
