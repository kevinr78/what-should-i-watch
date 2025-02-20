import { Movie as MovieType } from "@/utils/types";

type Person = {
  character: string;
  original_name: string;
  name: string;
  profile_path: string;
};
interface MovieCredits {
  id: number;
  cast: Person[];
  crew: Person[];
}

type Genre = { name: string; id: number };

interface MovieDetails extends MovieType {
  poster_path: string;
  overview: string;
  release_date: string;
  genres: Genre[];
  isAdult: boolean;
  origin_country: string[];
  runtime: number;
  vote_average: number;
}
