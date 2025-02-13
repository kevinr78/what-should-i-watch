import { useState, useEffect } from "react";
import fetchFromTMDB from "@/utils/fetchTMDB";

export type Movie = {
  id: number;
  title: string;
  backdrop_path: string;
};

// Define the type for the response from TMDB
type TMDBResponse = {
  results: Movie[];
};

export default function MovieHero() {
  const [carouselElements, setCarouselElements] = useState<Movie[]>([]);
  const [randIndx, setRandIndx] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRandIndx((prev) => (prev + 1) % 10); // Cycles through first 10 movies
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

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

        setCarouselElements(nowPlaying.results);
      } catch (error) {
        console.error("API Fetch Error:", error);
      }
    };

    fetchData();
  }, []);

  if (carouselElements.length === 0) {
    return <p>Loading...</p>;
  }

  const safeIndex = randIndx % carouselElements.length; // Prevents index out of bounds

  return (
    <div className="relative w-full h-[600px]">
      {/* Background Image with Transition */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(http://image.tmdb.org/t/p/original/${carouselElements[safeIndex].backdrop_path})`,
        }}
      >
        {/* Overlay Gradient for Blending */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-90"></div>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end items-start px-10 bottom-8 text-white transition-opacity duration-1000 ease-in-out">
        <h1 className="text-5xl font-bold opacity-100">
          {carouselElements[safeIndex].title}
        </h1>
        <div className="mt-6 flex gap-4">
          <button className="bg-gray px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-600 transition-transform transform hover:scale-105">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}
