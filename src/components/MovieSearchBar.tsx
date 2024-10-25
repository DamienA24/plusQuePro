import { useRef } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { MovieSearchBarProps } from "@/types";
export default function MovieSearchBar({ onSearch }: MovieSearchBarProps) {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const term = searchInputRef.current?.value;
    if (term) {
      onSearch(term);
    }
  };

  return (
    <form onSubmit={handleSearch} className="mb-8 mx-auto p-4">
      <div className="flex gap-2 w-full">
        <Input
          type="search"
          placeholder="Search movies..."
          ref={searchInputRef}
          className="flex-grow"
        />
        <Button type="submit" size="icon">
          <Search className="h-4 w-4" />
          <span className="sr-only">Search</span>
        </Button>
      </div>
    </form>
  );
}
