"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const formSubmit = (e) => {
    e.preventDefault();
    const search = e.target.search;
    const searchValue = search.value;

    const newParams = new URLSearchParams(searchParams.toString());
    if (searchValue) {
      newParams.set("search", searchValue);
    } else {
      newParams.delete("search");
    }

    router.push(pathname + "?" + newParams.toString(), { scroll: false });
  };

  return (
    <form className="relative" onSubmit={formSubmit}>
      <input
        type="text"
        name="search"
        placeholder="جستجو..."
        autoComplete="off"
        className="textField__input py-3 bg-secondary-0"
      />
      <button
        type="submit"
        className="absolute left-0 bottom-0 ml-3 flex h-full items-center"
      >
        <FaSearch className="h-4 text-secondary-600" />
      </button>
    </form>
  );
};

export default Search;
