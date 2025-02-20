import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Registration from "@routes/Registration.tsx";
import Home from "./routes/Home";
import Layout from "./components/UI/Layout";
import Movies from "./routes/Movies";
import TvShows from "./routes/TvShows";
import { fetchOneMovie } from "./utils/movie";
import Movie from "./components/Movie/Movie";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Registration />,
      errorElement: "<p>Error</p>",
    },
    {
      path: "/",
      element: <Layout />,
      errorElement: "Error",
      children: [
        {
          path: "/home",
          element: <Home />,
          errorElement: "Error",
        },
        {
          path: "home/movies",
          element: <Movies />,
          errorElement: "Error",
        },
        {
          path: "home/movies/movie/:id",
          element: <Movie />,
          loader: fetchOneMovie,
          errorElement: "Error",
        },
        {
          path: "home/tvShows",
          element: <TvShows />,
          errorElement: "Error",
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
