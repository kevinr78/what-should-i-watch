import { useState, useEffect } from "react";
import fetchFromTMDB from "@/utils/fetchTMDB";
import Card from "../Card/Card";
import { APIParams } from "@/utils/fetchTMDB";
export type MediaItem = {
  id: number;
  title: string | "";
  name: string | "";
  backdrop_path: string;
};

// TMDB Response Type
type TMDBResponse = {
  results: MediaItem[];
};

export default function MediaItemRow({ endpoint, method }: APIParams) {
  const [mediaItem, setMediaItem] = useState<MediaItem[]>([]);

  useEffect(() => {
    const fetchData = async ({ endpoint, method }: APIParams) => {
      try {
        const response: TMDBResponse | null = await fetchFromTMDB({
          endpoint: endpoint,
          method: method,
        });

        if (!response || !response.results) {
          console.error("Error fetching movies");
          return;
        }

        setMediaItem(response.results);
      } catch (error) {
        console.error("API Fetch Error:", error);
      }
    };

    fetchData({ endpoint, method });
  }, []);

  return (
    <>
      {mediaItem.length > 0 ? (
        mediaItem.map((movie) => (
          <Card
            key={movie.id}
            backdrop={movie.backdrop_path}
            title={movie.title ?? movie.name}
          />
        ))
      ) : (
        <p className="text-white">Loading...</p>
      )}
    </>
  );
}
