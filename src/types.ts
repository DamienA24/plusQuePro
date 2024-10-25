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
  results: Array<TrendingMovie>;
  total_pages: number;
  total_results: number;
}

export interface TrendingMovie {
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
}

export interface MovieDetails {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  adult: boolean;
  original_language: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  runtime: number;
  genres: Array<object>;
}

export interface CastMember {
  adult: boolean;
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string | null;
}

export interface Credits {
  cast: Array<CastMember>;
}

export interface MovieSearchBarProps {
  onSearch: (term: string) => void;
}

export interface InfiniteTMDBProps {
  searchTerm?: string;
}
