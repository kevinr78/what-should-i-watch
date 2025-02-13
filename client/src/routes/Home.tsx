import MovieHero from "@/components/MovieHero/MovieHero";
// Define the type for a single movie object

export default function Home() {
  //backgroundImage: `url(http://image.tmdb.org/t/p/original/${carouselElements[0].backdrop_path}`,
  return (
    <main>
      <div id="carousel" className="w-full">
        <>
          <MovieHero />
        </>
      </div>
      <div id="movies"></div>
      <div id="tv-shows"></div>
    </main>
  );
}
