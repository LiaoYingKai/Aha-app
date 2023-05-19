import {lazy} from "react";
import {createBrowserRouter} from "react-router-dom";

const App = lazy(() => import("../pages/App"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));
const Home = lazy(() => import("../pages/Home"));
const Search = lazy(() => import("../pages/Home/Search"));
const Result = lazy(() => import("../pages/Home/Result"));
const Tags = lazy(() => import("../pages/Tags"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
        children: [
          {
            path: "",
            element: <Search />,
          },
          {
            path: "result",
            element: <Result />,
          },
        ],
      },
      {
        path: "tags",
        element: <Tags />,
      },
    ],
  },
]);
