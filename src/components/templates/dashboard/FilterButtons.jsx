function FilterButtons() {
  const filterOptions = ["همه", "سال ۱", "۶ماه", "۱ هفته"];

  return (
    <div className="flex items-center gap-x-2 [&>button]:text-xs [&>button]:rounded-lg [&>button]:px-1.5 [&>button]:cursor-pointer [&>button]:py-1 [&>button]:bg-blue-100 [&>button]:text-blue-700">
      {filterOptions.map((item) => (
        <button key={item}>{item}</button>
      ))}
    </div>
  );
}

export default FilterButtons;
