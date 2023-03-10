import type { ProductsResponse } from "../page";
import ProductView from "../ProductView";
import { toTitleCase } from "../Sidebar";
import { getMySession } from "../../Navbar";

async function getProductByQuery(query: string) {
  const res = await fetch(`https://dummyjson.com/products/category/${query}`);

  if (!res.ok) {
    throw new Error("Failed to fetch all products.");
  }

  return res.json() as Promise<ProductsResponse>;
}

export async function Page({
  params: { query },
}: {
  params: { query: string };
}) {
  const data = await getProductByQuery(query);
  const name = toTitleCase(query);
  const { user } = await getMySession();

  return <ProductView data={data} name={name} user={user} />;
}

export default Page;
