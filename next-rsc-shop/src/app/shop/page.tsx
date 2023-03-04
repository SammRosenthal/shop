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

  // {
  //   id: 28,
  //   title: '3D Embellishment Art Lamp',
  //   description: '3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)',
  //   price: 20,
  //   discountPercentage: 16.49,
  //   rating: 4.82,
  //   stock: 54,
  //   brand: 'LED Lights',
  //   category: 'home-decoration',
  //   thumbnail: 'https://i.dummyjson.com/data/products/28/thumbnail.jpg',
  //   images: [Array]
  // }

  return (
    <>
      <div className="flex justify-between">
        <div aria-hidden id="spacer" />
        <SearchInput />
      </div>
      <div className="my-2 border" />
      <div className="flex flex-wrap justify-center max-w-full gap-6">
        {data.products.map((product) => (
          <div key={product.id} className="flex flex-col border w-56">
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
              <div className="text-sm text-gray-500">{product.brand}</div>
              <div className="text-sm text-gray-500">{product.category}</div>
              <div className="text-sm text-gray-500">
                {product.rating} ({product.stock})
              </div>
              <div className="text-sm text-gray-500">
                {product.price} ({product.discountPercentage}%)
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Page;
