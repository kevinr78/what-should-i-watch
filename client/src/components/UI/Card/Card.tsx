import React from "react";

type CardProps = {
  backdrop: string;
  title: string;
};

export default function Card({ backdrop, title }: CardProps) {
  return (
    <div className="card bg-base-100 min-w-40 md:min-w-52 lg:min-w-80 shadow-xl overflow-hidden group">
      <figure className="relative">
        <img
          src={`http://image.tmdb.org/t/p/original/${backdrop}`}
          alt="Shoes"
          className="w-full"
        />
      </figure>

      {/* Card Body (Hidden Initially) */}
      <div className="card-body flex flex-row justify-between absolute bottom-0 left-0 w-full bg-glass transition-all duration-500 translate-y-full group-hover:translate-y-0">
        <h4 className="card-title text-black">{title}</h4>

        <div className="card-actions justify-end">
          <button className="btn btn-ghost btn-outline ">See More</button>
        </div>
      </div>
    </div>
  );
}
