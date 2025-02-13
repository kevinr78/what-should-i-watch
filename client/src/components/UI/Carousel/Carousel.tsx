import { useEffect, useState } from "react";
import fetchFromTMDB from "@/utils/fetchTMDB";
import CarouselElement from "./CarouselElement";

type Movie = {
  id: Number;
  title: string;
  overview: string;
  backdrop_path: string;
};

type TMDBResponse = {
  results: Movie[];
};
export default function Carousel() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const nowPlaying: TMDBResponse | null = await fetchFromTMDB({
          endpoint: "movie/now_playing?language=en-US&page=1",
          method: "GET",
        });

        if (!nowPlaying || !nowPlaying.results) {
          console.error("Error fetching movies");
          return;
        }

        setMovies(nowPlaying.results);
      } catch (error) {
        console.error("API Fetch Error:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className=" w-full h-1/2">
      <div className="flex justify-between p-2 items-center">
        <div id="previous">
          <button className="btn">p</button>{" "}
        </div>
        <div id="movies" className="w-full">
          {movies.length > 0 ? (
            <section className="flex justify-evenly">
              <div className="rounded-xl">
                <img
                  src={`http://image.tmdb.org/t/p/w500/${movies[0].backdrop_path}`}
                  className=" rounded-xl"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold ">{movies[0].title}</h1>
                <p className=" max-w-72 ">{movies[0].overview}</p>
              </div>
            </section>
          ) : (
            <p>Loading</p>
          )}
        </div>
        <div id="next">
          <button className="btn"> N</button>
        </div>
      </div>
    </div>
  );
}
