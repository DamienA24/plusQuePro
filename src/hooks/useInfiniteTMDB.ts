import { useEffect } from "react";
import useSWRInfinite from "swr/infinite";

import { tmdbConfig, API_ENDPOINTS } from "@/config/api.config";
import { fetcher } from "@/lib/utils";

import { TrendingResponse, InfiniteTMDBProps } from "@/types";

const getKey = (searchTerm?: string) => {
  return (pageIndex: number, previousPageData: TrendingResponse | null) => {
    if (previousPageData && !previousPageData.results.length) return null;

    if (searchTerm) {
      return `${tmdbConfig.baseUrl}${
        API_ENDPOINTS.search
      }?query=${encodeURIComponent(searchTerm)}&page=${pageIndex + 1}`;
    }

    return `${tmdbConfig.baseUrl}${API_ENDPOINTS.trending}?&page=${
      pageIndex + 1
    }`;
  };
};

export function useInfiniteTMDB({ searchTerm }: InfiniteTMDBProps = {}) {
  const { data, error, size, setSize, isLoading, isValidating, mutate } =
    useSWRInfinite<TrendingResponse>(
      getKey(searchTerm),
      (url) => fetcher<TrendingResponse>(url, tmdbConfig.options),
      {
        revalidateFirstPage: false,
        revalidateAll: false,
        persistSize: true,
        revalidateOnFocus: false,
      }
    );

  // Reset to first page when searchTerm changes
  useEffect(() => {
    setSize(1);
    mutate();
  }, [searchTerm, setSize, mutate]);

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
    isEmpty,
    loadMore: () => setSize(size + 1),
  };
}
