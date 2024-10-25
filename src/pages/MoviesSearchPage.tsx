import { useState } from "react";
import MovieSearchBar from "@/components/MovieSearchBar";
import MoviesTrending from "@/components/MoviesTrending";

export default function MoviesSearchPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  return (
    <div className="overflow-y-auto">
      <MovieSearchBar onSearch={setSearchTerm} />
      <MoviesTrending searchTerm={searchTerm} />
    </div>
  );
}
