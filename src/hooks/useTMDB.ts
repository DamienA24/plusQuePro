import useSWR from "swr";

import { tmdbConfig, createTMDBUrl } from "@/config/api.config";
import { FetchOptions } from "@/types";
import { fetcher } from "@/lib/utils";

export function useTMDB<T>(endpoint: string, params?: Record<string, string>) {
  const url = createTMDBUrl(endpoint, params);

  return useSWR<T>([url, tmdbConfig.options], ([url, options]) =>
    fetcher<T>(url, options as FetchOptions)
  );
}
