import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Search } from "lucide-react";

export default function MovieSearchBar() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchTerm);
  };

  return (
    <form onSubmit={handleSearch} className="mb-8">
      <div className="flex gap-2 w-full">
        <Input
          type="search"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
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
