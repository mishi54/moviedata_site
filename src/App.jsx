import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Movies } from "./components/Pages/Movies";
import { Contact, DataContact } from "./components/Pages/Contact";
import AppLayout from "./components/layouts/AppLayout";
import { ErrorPage } from "./components/Pages/ErrorPage";
import { LoadApi } from "./components/api/LoadApi";



const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movies",
          element: <Movies />,
          loader:LoadApi,
        },
        {
          path: "/contact",
          element: <Contact />,
          action:DataContact,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;