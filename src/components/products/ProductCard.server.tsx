import { Image, Link, Money } from '@shopify/hydrogen';

export default function ProductCard({ product }) {
  // extract product variant data
  const { priceV2: price, compareAtPriceV2: compareAtPrice } =
    product.variants?.nodes[0] || {};

  // check if product is discounted
  const isDiscounted = compareAtPrice?.amount > price?.amount;

  return (
    <Link to={`/products/${product.handle}`}>
      {/* is product discounted? */}
      <div className="shadow-sm rounded relative">
        {isDiscounted && (
          <label className="subpixel-antialiased absolute top-0 right-0 m-4 text-right text-notice text-red-600 text-xs">
            Sale
          </label>
        )}
        {/* product image */}
        <Image
          className="aspect-[4/5]"
          data={product.variants.nodes[0].image}
          alt="Alt text"
        />
      </div>

      <div className="grid gap-1">
        {/* product title */}
        <h3 className="max-w-prose text-copy w-full overflow-hidden whitespace-nowrap text-ellipsis ">
          {product.title}
        </h3>
        <div className="flex gap-4">
          <span className="max-w-prose whitespace-pre-wrap inherit text-copy flex gap-4">
            <Money withoutTrailingZeros data={price} />
            {isDiscounted && (
              <Money
                className="line-through opacity-50"
                withoutTrailingZeros
                data={compareAtPrice}
              ></Money>
            )}
          </span>
        </div>
      </div>
    </Link>
  );
}
