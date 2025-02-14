import MovieHero from "@/components/Movie/MovieHero";
import MediaItemRow from "@/components/UI/Row/MediaItemRow";
import Row from "@/components/UI/Row/Row";
// Define the type for a single movie object

export default function Home() {
  //backgroundImage: `url(http://image.tmdb.org/t/p/original/${carouselElements[0].backdrop_path}`,
  return (
    <main className="flex flex-col">
      <div className="">
        <MovieHero />
      </div>
      <div id="movies" className="w-full">
        <Row title="Top Rated Movies">
          <MediaItemRow
            endpoint="/movie/top_rated?language=en-US&page=1"
            method="GET"
          />
        </Row>
        <Row title="Trending Movies">
          <MediaItemRow
            endpoint="trending/movie/day?language=en-US"
            method="GET"
          />
        </Row>
        <Row title="Popular TV Shows">
          <MediaItemRow
            endpoint="tv/popular?language=en-US&page=1"
            method="GET"
          />
        </Row>
        <Row title="Top Rated TV Shows">
          <MediaItemRow
            endpoint="/tv/top_rated?language=en-US&page=1"
            method="GET"
          />
        </Row>
      </div>
      <div id="tv-shows"></div>
    </main>
  );
}
