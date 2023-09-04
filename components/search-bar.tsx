"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { Input } from "./ui/input";

// TODO: useDebounce Hook to optimize the search performance and reduce the re-renders

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // console.log(searchTerm);

  return (
    <div className="flex gap-4 px-4 py-6 md:gap-6 md:px-6 md:py-8 lg:pt-16 lg:pb-8">
      <Search className="h-6 w-6 md:h-8 md:w-8" />
      <Input
        className="w-full flex-1 border-0 pl-0 pt-0 text-base font-light text-white placeholder:opacity-50 focus-visible:border-b focus-visible:border-b-grayishBlue md:text-2xl"
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        placeholder="Search for movies or TV Series"
      />
    </div>
  );
};
export default SearchBar;
