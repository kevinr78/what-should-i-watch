import React from "react";

type CarouselElementProps = {
  next: string;
  back: string;
  backdrop: string;
  current: string;
};
export default function CarouselElement({
  next,
  back,
  backdrop,
  current,
}: CarouselElementProps) {
  return (
    <div id={current} className="carousel-item relative w-full h-full">
      <div className=" p-2 w-screen">
        <div>
          <img
            src={`http://image.tmdb.org/t/p/w500/${backdrop}`}
            className="w-full h-72 object-contain"
          />
        </div>
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>

      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href={back} className="btn btn-circle">
          ❮
        </a>
        <a href={next} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
}
