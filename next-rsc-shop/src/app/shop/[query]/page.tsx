import ProductView from "../ProductView";

async function getProductByQuery(query: string) {
  const res = await fetch(`https://dummyjson.com/products/category/${query}`)

  if (!res.ok) {
    throw new Error("Failed to fetch all products.");
  }

  return res.json();
}

export async function Page({ params }: { params: { query: string } }) {
  const data = await getProductByQuery(params.query);

  return <ProductView data={data} />;
}

export default Page;
