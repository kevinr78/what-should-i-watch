import endpoints from "@/config/endpoints";
import fetchFromTMDB from "@/utils/fetchTMDB";
import { TMDBResponse, APIParams } from "./types";
import { LoaderFunctionArgs } from "react-router-dom";

export const fetchAllMovies = async ({ endpoint, method }: APIParams) => {
  try {
    const response: TMDBResponse | null = await fetchFromTMDB({
      endpoint: `${endpoints["tmdb_base_url"]}/${endpoint}`,
      method: method,
    });

    if (!response || !response.results) {
      console.error("Error fetching movies");
      return;
    }

    return response.results;
  } catch (error) {
    console.error("API Fetch Error:", error);
  }
};
export const fetchOneMovie = async ({ params }: LoaderFunctionArgs) => {
  const base = `${endpoints["tmdb_base_url"]}${endpoints["tmdb_movie_single_base"]}${params.id}`;

  const movieEndpoints = {
    baseMovieDetailsEndpoint: base,
    movieCreditsEndpoint: `${base}/credits`,
    movieWatchProviders: `${base}/watch/providers`,
  };

  try {
    const method = "GET";

    const promiseArray = Object.values(movieEndpoints).map((endpoint) => {
      return fetch(endpoint, {
        method: method,
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTBmNTUyNjQ5ZTZmNmVmZjY0ZDUwMmExNjQzNjZlMCIsIm5iZiI6MTYyMjAyNTAxOS4wNzIsInN1YiI6IjYwYWUyMzNiYmE0ODAyMDAyOTI3YjhkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5vBfEn-pb7Nx4ZQ1MI3aDJenXIQG8Sfny2lb4_PyHhM",
        },
      }).then((res) => res.json());
    });

    const results = await Promise.allSettled(promiseArray);

    const formattedResults = Object.keys(movieEndpoints).reduce(
      (acc, key, index) => {
        acc[key] =
          results[index].status === "fulfilled" ? results[index].value : null;
        return acc;
      },
      {} as Record<string, any>
    );

    console.log(formattedResults);
    return formattedResults;
  } catch (error) {
    console.error("API Fetch Error:", error);
  }
};
