import { Link, useUrl } from '@shopify/hydrogen';

export function Header({ shop }) {
  const { pathname } = useUrl();
  const isHome = pathname === '/';

  return (
    <header
      role="banner"
      className={`flex items-center h-16 p-6 md:p-8 lg:p-12 sticky backdrop-blue-lg z-40 top-0 justify-between w-full leading-none gap-4 antialiased transition shadow-sm ${
        isHome ? 'bg-black/80 text-white' : 'bg-white/80'
      }`}
    >
      <div className="flex gap-12">
        <Link className="font-bold" to="/">
          {shop.name}
        </Link>
      </div>
    </header>
  );
}
