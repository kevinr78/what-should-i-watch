import MovieHero from "@/components/Movie/MovieHero";
import MediaItemRow from "@/components/UI/Row/MediaItemRow";
import Row from "@/components/UI/Row/Row";
import endpoints from "@/config/endpoints";
// Define the type for a single movie object

export default function Home() {
  //backgroundImage: `url(http://image.tmdb.org/t/p/original/${carouselElements[0].backdrop_path}`,
  return (
    <main className="flex flex-col">
      <div className="">
        <MovieHero />
      </div>
      <div id="movies" className="w-full">
        <Row title="Top Rated Movies" to="movies" type="Show">
          <MediaItemRow
            endpoint={endpoints["tmdb_movie_top_rated"]}
            method="GET"
          />
        </Row>
        <Row title="Trending Movies" to="movies" type="Show">
          <MediaItemRow
            endpoint={endpoints["tmdb_movie_trending"]}
            method="GET"
          />
        </Row>
        <Row title="Popular TV Shows" to="tvShows" type="Show">
          <MediaItemRow endpoint={endpoints["tmdb_tv_popular"]} method="GET" />
        </Row>
        <Row title="Top Rated TV Shows" to="tvShows" type="Show">
          <MediaItemRow
            endpoint={endpoints["tmdb_tv_top_rated"]}
            method="GET"
          />
        </Row>
      </div>
      <div id="tv-shows"></div>
    </main>
  );
}
