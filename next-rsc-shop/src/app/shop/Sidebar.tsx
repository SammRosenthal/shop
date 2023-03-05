import Link from "next/link";

export function toTitleCase(str: string) {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

async function getProductFilters() {
  const res = await fetch("https://dummyjson.com/products/categories");

  if (!res.ok) {
    throw new Error("Failed to fetch product filters.");
  }

  return res.json() as Promise<string[]>;
}

export async function Sidebar() {
  const data = await getProductFilters();

  const filters = data.reduce<{ value: string; name: string }[]>(
    (acc, curr) => {
      return [
        ...acc,
        {
          name: toTitleCase(curr),
          value: curr,
        },
      ];
    },
    [{ name: "All", value: "" }]
  );

  // <div className="mb-2 flex h-0 max-h-full max-w-full flex-auto flex-wrap gap-6 overflow-y-auto">
  return (
    <>
      <ul className="fixed flex max-h-full min-w-[12rem] flex-col overflow-y-auto border-[0] border-r border-solid border-black">
        {filters.map((filter) => (
          <Link href={`/shop/${filter.value}`} key={filter.value}>
            <li
              className={
                "flex h-16 items-center justify-center border-[0] border-b border-solid border-black"
              }
            >
              {filter.name}
            </li>
          </Link>
        ))}
      </ul>
      <div className="min-w-[12rem]" aria-hidden />
    </>
  );
}

export default Sidebar;
