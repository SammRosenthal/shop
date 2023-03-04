import Image from "next/image";

import SearchInput from "./SearchInput";

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export async function getAllProducts() {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch all products.");
  }

  return res.json() as Promise<ProductsResponse>;
}

export async function Page() {
  const data = await getAllProducts();

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="ml-4 text-2xl">All Products</div>
        <SearchInput />
      </div>

      <div className="mt-2 mb-4 border" aria-hidden id="separator" />

      <div className="mb-2 flex max-h-full max-w-full flex-wrap justify-center gap-6 overflow-y-auto h-0 flex-auto">
        {data.products.map((product) => (
          <div
            key={product.id}
            className="flex w-56 flex-col items-center gap-y-2 border p-2"
          >
            <Image
              src={product.thumbnail}
              alt={product.title}
              className="h-20 w-20"
              width={80}
              height={80}
            />

            <div className="ml-2 flex flex-col">
              <div className="text-sm font-medium text-gray-900">
                {product.title}
              </div>
              <div className="text-sm text-gray-500">
                Price: ${product.price}.00
              </div>
              <div className="text-sm text-gray-500">
                Rating: {product.rating}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Page;
