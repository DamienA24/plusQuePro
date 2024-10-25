import { useCallback } from "react";

import LoadingError from "@/components/LoadingError";
import MovieCard from "@/components/MovieCard";
import Spinner from "@/components/Spinner";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useInfiniteTMDB } from "@/hooks/useInfiniteTMDB";

export default function MoviesTrending({ searchTerm }: { searchTerm: string }) {
  const { movies, error, isLoadingMore, isReachingEnd, loadMore } =
    useInfiniteTMDB({ searchTerm });

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

  if (error) return <LoadingError />;

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
