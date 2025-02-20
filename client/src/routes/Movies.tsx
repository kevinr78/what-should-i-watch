import { useEffect, useState } from "react";
import endpoints from "@/config/endpoints";
import { useNavigate } from "react-router-dom";
import fetchFromTMDB from "@/utils/fetchTMDB";
import SearchBar from "@/components/UI/SearchBar/SearchBar";
import Card from "@/components/UI/Card/Card";
import { TMDBResponse, Movie, APIParams } from "@/utils/types";

export default function Movies() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    const fetchData = async ({ endpoint, method }: APIParams) => {
      try {
        const response: TMDBResponse | null = await fetchFromTMDB({
          endpoint: `${endpoints["tmdb_base_url"]}/${endpoint}`,
          method: method,
        });

        if (!response || !response.results) {
          console.error("Error fetching movies");
          return;
        }

        setMovies(response.results);
      } catch (error) {
        console.error("API Fetch Error:", error);
      }
    };

    fetchData({
      endpoint: `${endpoints["tmdb_movie_top_rated"]}`,
      method: "GET",
    });
  }, []);

  const goToMoviePage = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const buttonTarget = target.closest("#movie-id") as HTMLElement;
    if (!buttonTarget) return;
    navigate(`/home/movies/movie/${buttonTarget.dataset.id}`);
  };
  return (
    <main>
      <div className="p-4">
        <SearchBar />
      </div>
      <div>
        <h2>All Movies</h2>
        <div
          className="flex flex-wrap  w-full gap-3 p-2"
          onClick={goToMoviePage}
        >
          {movies.length > 0 ? (
            movies.map((movie) => {
              return (
                <Card
                  key={movie.id}
                  id={movie.id}
                  backdrop={movie.backdrop_path}
                  title={movie.title}
                />
              );
            })
          ) : (
            <p>Loading</p>
          )}
        </div>
      </div>
    </main>
  );
}
