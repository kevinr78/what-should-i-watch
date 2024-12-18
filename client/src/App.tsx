import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "@pages/Signup";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Signup />,
      errorElement: "<p>Error</p>",
    },
    {
      path: "/home",
      element: "<p>Home</p>",
      errorElement: "<p>Error</p>",
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
