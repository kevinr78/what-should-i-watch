import React from "react";
import { MovieDetails as MDD } from "@/utils/types";
import endpoints from "@/config/endpoints";

type MovieProps = {
  movie: MDD;
};
export default function MovieDetails({ movie }: MovieProps) {
  return (
    <div className="hero bg-base-200 min-h-3.5">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={`${endpoints["tmdb_image_base_url"]}${movie.poster_path}`}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{movie.title}</h1>
          <p className="py-6">{movie.overview}</p>
          <div className="flex flex-col gap-4">
            <p>
              <span className="text-slate-600">Release Year</span> :{" "}
              {new Date(movie.release_date).getFullYear()}
            </p>
            <p>
              <span className="text-slate-600">Runtime</span> :{" "}
              {Math.floor(movie.runtime / 60)}h {movie.runtime % 60} min
            </p>
            <p>
              <span className="text-slate-600">Genres</span> :{" "}
              {movie.genres.map((genre, index) => {
                return (
                  <span className="mr-2">
                    {genre.name}
                    {index !== movie.genres.length - 1 ? "," : ""}
                  </span>
                );
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
