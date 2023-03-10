import { ProductCard } from "../components/ProductCard";

export function ProductList() {
  return (
    <div className="sm:px-4 py-1">
      <div className="flex gap-x-4 border-[0] border-b border-solid border-black py-4 overflow-x-auto">
        {Array(40).fill(0).map((_, i) => <FilterOption key={i} />)}
      </div>

      <div className="flex flex-wrap sm:gap-4 gap-2 py-8 justify-center">
        {Array(20).fill(0).map((_, i) => <ProductCard key={i} />)}
      </div>
    </div>
  );
}

function FilterOption() {
  return (
    <div className="rounded-full bg-white py-2 px-3.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-200 hover:ring-gray-400 min-w-[6rem] text-center transition-all">
      woo
    </div>
  );
}
