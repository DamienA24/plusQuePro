import { useCallback } from "react";

import MovieCard from "@/components/MovieCard";
import Spinner from "@/components/Spinner";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useInfiniteTMDB } from "@/hooks/useInfiniteTMDB";

export default function MoviesTrending() {
  const { movies, error, isLoading, isLoadingMore, isReachingEnd, loadMore } =
    useInfiniteTMDB();

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting && !isLoadingMore && !isReachingEnd) {
        loadMore();
      }
    },
    [loadMore, isLoadingMore, isReachingEnd]
  );

  const [ref] = useIntersectionObserver(handleObserver);

  if (error) return <div>failed to load</div>;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies &&
          movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
      </div>
      <div ref={ref}>{isLoadingMore && <Spinner />}</div>
    </>
  );
}
