export default function FilterButtons({ selectedFilter, onFilterChange }) {
  const filterOptions = ["۱ سال", "۶ ماه", "۱ هفته"];

  return (
    <div className="flex items-center gap-x-2 [&>button]:text-xs [&>button]:rounded-lg [&>button]:px-1.5 [&>button]:cursor-pointer [&>button]:py-1 ">
      {filterOptions.map((item) => (
        <button
          key={item}
          className={selectedFilter === item ? "bg-green-600 text-white" : ""}
          onClick={() => onFilterChange(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
