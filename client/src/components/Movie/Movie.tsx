import { useLoaderData } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import { MovieResult } from "@/utils/types";
import MovieCast from "./MovieCast";
export default function Movie() {
  const {
    baseMovieDetailsEndpoint,
    movieCreditsEndpoint,
  }: /* movieWatchProviders */
  MovieResult = useLoaderData();
  console.log(movieCreditsEndpoint);
  return (
    <section className="min-h-screen">
      <MovieDetails movie={baseMovieDetailsEndpoint} />
      <MovieCast cast={movieCreditsEndpoint?.cast || []} />
    </section>
  );
}
