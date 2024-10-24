export interface TMDBConfig {
  baseUrl: string;
  options: {
    method: "GET";
    headers: {
      accept: "application/json";
      Authorization: string;
    };
  };
}

export interface FetchOptions {
  method: string;
  headers: {
    accept: string;
    Authorization: string;
  };
}

export interface TrendingResponse {
  page: number;
  results: Array<{
    backdrop_path: string | null;
    id: number;
    title: string;
    original_title: string;
    overview: string;
    poster_path: string | null;
    media_type: "movie";
    adult: boolean;
    original_language: string;
    genre_ids: number[];
    popularity: number;
    release_date: string; // format "YYYY-MM-DD"
    video: boolean;
    vote_average: number;
    vote_count: number;
  }>;
  total_pages: number;
  total_results: number;
}
