import type { ProductsResponse } from "../page";
import ProductView from "../ProductView";
import { toTitleCase } from "../Sidebar";

async function getProductByQuery(query: string) {
  const res = await fetch(`https://dummyjson.com/products/category/${query}`)

  if (!res.ok) {
    throw new Error("Failed to fetch all products.");
  }

  return res.json() as Promise<ProductsResponse>;
}

export async function Page({ params: { query } }: { params: { query: string } }) {
  const data = await getProductByQuery(query);
  const name = toTitleCase(query);

  return <ProductView data={data} name={name} />;
}

export default Page;
