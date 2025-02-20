type Endpoints = {
  login: string;
  signup: string;
  tmdb_base_url: string;
  tmdb_image_base_url: string;
  tmdb_movie_top_rated: string;
  tmdb_movie_trending: string;
  tmdb_tv_popular: string;
  tmdb_tv_top_rated: string;
  tmdb_movie_single_base: string;
};

const endpoints: Endpoints = {
  // add your endpoints here
  login: "/user/login",
  signup: "/user/signup",
  tmdb_base_url: "https://api.themoviedb.org/3/",
  tmdb_image_base_url: "http://image.tmdb.org/t/p/original/",
  tmdb_movie_top_rated: "movie/top_rated?language=en-US&page=1",
  tmdb_movie_trending: "trending/movie/day?language=en-US",
  tmdb_tv_popular: "tv/popular?language=en-US&page=1",
  tmdb_tv_top_rated: "tv/top_rated?language=en-US&page=1",
  tmdb_movie_single_base: "movie/",
};

export default endpoints;
