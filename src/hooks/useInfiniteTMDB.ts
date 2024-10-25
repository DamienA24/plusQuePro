import useSWRInfinite from "swr/infinite";

import { tmdbConfig } from "@/config/api.config";
import { fetcher } from "@/lib/utils";

import { TrendingResponse } from "@/types";

const getKey = (
  pageIndex: number,
  previousPageData: TrendingResponse | null
) => {
  if (previousPageData && !previousPageData.results.length) return null;
  return `${tmdbConfig.baseUrl}/trending/movie/day?&page=${pageIndex + 1}`;
};

export function useInfiniteTMDB() {
  const { data, error, size, setSize, isLoading, isValidating } =
    useSWRInfinite<TrendingResponse>(
      getKey,
      (url) => fetcher<TrendingResponse>(url, tmdbConfig.options),
      {
        revalidateFirstPage: false,
        revalidateAll: false,
        persistSize: true,
      }
    );

  const movies = data ? data.flatMap((page) => page.results) : [];
  const isLoadingMore = isLoading || (size > 0 && data && !data[size - 1]);
  const isEmpty = data?.[0]?.results.length === 0;
  const isReachingEnd =
    isEmpty ||
    (data && data[data.length - 1]?.page >= (data[0]?.total_pages || 0));

  return {
    movies,
    error,
    isLoadingMore,
    isReachingEnd,
    isLoading,
    isValidating,
    loadMore: () => setSize(size + 1),
  };
}
