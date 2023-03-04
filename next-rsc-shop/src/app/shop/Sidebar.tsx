const filters = [
  { name: "All", value: "all" },
  { name: "Clothing", value: "clothing" },
  { name: "Shoes", value: "shoes" },
  { name: "Accessories", value: "accessories" },
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
