"use client";

import { type Dispatch, type SetStateAction, useState } from "react";
import Image from "next/image";

import type { Product, ProductsResponse } from "./page";
import MagnifyingGlassIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";

export function ProductView({ data }: { data: ProductsResponse }) {
  const [search, setSearch] = useState("");

  const filteredData = data.products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="flex min-w-full items-center justify-between">
        <div className="ml-4 text-2xl">All Products</div>
        <SearchInput search={search} setSearch={setSearch} />
      </div>
      <div className="mt-2 mb-4 border" aria-hidden id="separator" />
      {Boolean(filteredData.length) ? (
        <ItemView items={filteredData} />
      ) : (
        <div className="text-center text-gray-500">No products found</div>
      )}
    </>
  );
}

function SearchInput({
  search,
  setSearch,
}: {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="relative mt-2 rounded-md shadow-sm">
      <input
        type="text"
        name="account-number"
        id="account-number"
        className="block w-full rounded-md border-0 py-1.5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <MagnifyingGlassIcon
          className="h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

function ItemView({ items }: { items: Product[] }) {
  return (
    <div className="mb-2 flex h-0 max-h-full max-w-full flex-auto flex-wrap gap-6 overflow-y-auto">
      {items.map((product) => (
        <div
          key={product.id}
          className="flex h-fit min-h-[12rem] w-56 flex-col items-center gap-y-2 border p-2"
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
  );
}

export default ProductView;
