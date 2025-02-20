export type Method = "GET" | "POST" | "DELETE";
export type Headers = {
  "Content-Type": string;
  Authorization?: string;
};

export interface Movie {
  id: string;
  title?: string | "";
  name?: string | "";
  backdrop_path: string;
}

export type Person = {
  character: string;
  adult: boolean;
  cast_id: number;
  credit_id: number;
  gender: boolean;
  id: number;
  known_for_department: string;
  order: number;
  popularity: number;
  original_name: string;
  name: string;
  profile_path: string;
};
export interface MovieCredits {
  id: number;
  cast: Person[];
  crew: Person[];
}

type Genre = { name: string; id: number };

export interface MovieDetails extends Movie {
  poster_path: string;
  overview: string;
  release_date: string;
  genres: Genre[];
  adult: boolean;
  origin_country: string[];
  runtime: number;
  vote_average: number;
}
// TMDB Response Type
export type TMDBResponse = {
  results: Movie[];
};

export type MovieResult = {
  baseMovieDetailsEndpoint: MovieDetails;
  movieCreditsEndpoint: MovieCredits | null;
  movieWatchProviders: Record<string, any> | null;
  [key: string]: any | null;
};

export type APIParams = {
  endpoint: string;
  method: Method;
};
