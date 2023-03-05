import { getMySession } from "../Navbar";
import { ProductView } from "./ProductView";

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
  const { user } = await getMySession();

  return <ProductView data={data} name={"All Products"} user={user} />;
}

export default Page;
