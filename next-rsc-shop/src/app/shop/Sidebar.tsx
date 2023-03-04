const filters = [
  { name: "All", value: "all" },
  { name: "Smartphones", value: "smartphones" },
  { name: "Laptops", value: "laptops" },
  { name: "Fragrances", value: "fragrances" },
  { name: "Skincare", value: "skincare" },
  { name: "Groceries", value: "groceries" },
  { name: "Home Decoration", value: "home-decoration" },
  { name: "Furniture", value: "furniture" },
  { name: "Sunglasses", value: "sunglasses" },
  { name: "Automotive", value: "automotive" },
  { name: "Motorcycle", value: "motorcycle" },
  { name: "Lighting", value: "lighting" },
] as const;

export function Sidebar() {
  return (
    <ul className="flex min-w-[12rem] flex-col items-stretch border-[0] border-r border-solid border-black bg-white">
      {filters.map((filter) => (
        <li
          className="flex h-14 items-center justify-center border-[0] border-b border-solid border-black"
          key={filter.value}
        >
          {filter.name}
        </li>
      ))}
    </ul>
  );
}

export default Sidebar;
