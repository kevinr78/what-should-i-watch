import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Registration from "@routes/Registration.tsx";
import Home from "./routes/Home";
import Layout from "./components/UI/Layout";
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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
