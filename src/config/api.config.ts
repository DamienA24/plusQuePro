import { TMDBConfig } from "@/types";

export const tmdbConfig: TMDBConfig = {
  baseUrl: "https://api.themoviedb.org/3",
  options: {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
    },
  },
};

export const API_ENDPOINTS = {
  trending: "/trending/all/day",
  search: "/search/movie",
  movie: (id: string) => `/movie/${id}`,
} as const;

export const createTMDBUrl = (
  endpoint: string,
  params?: Record<string, string>
) => {
  const url = new URL(`${tmdbConfig.baseUrl}${endpoint}`);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }
  return url.toString();
};
