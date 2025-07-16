import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function SearchInput() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const searchHandler = () => {
    if (search.trim()) {
      router.push(`/search?q=${search}`);
    }
  };
  useEffect(() => {
    console.log("input changed");
  });
  return (
    <div className="relative flex items-center gap-2 rounded-lg py-3 px-2 2xl:max-w-[576px] 2xl:w-[576px] bg-slate-100 dark:bg-zinc-900 mt-3 2xl:mt-0">
      <CiSearch className="text-2xl cursor-pointer" onClick={searchHandler} />
      <input
        type="text"
        className="outline-none placeholder:text-gray-500 placeholder:font-medium placeholder:text-lg"
        placeholder="جستجو کنید ..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchInput;
