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
  trending: "/trending/movie/day",
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

export const images = {
  base_url: "http://image.tmdb.org/t/p/",
  secure_base_url: "https://image.tmdb.org/t/p/",
  backdrop_sizes: ["w300", "w780", "w1280", "original"],
  logo_sizes: ["w45", "w92", "w154", "w185", "w300", "w500", "original"],
  poster_sizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
  profile_sizes: ["w45", "w185", "h632", "original"],
  still_sizes: ["w92", "w185", "w300", "original"],
} as const;
