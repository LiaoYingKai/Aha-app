import App from "../pages/App";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Search from "../pages/Home/Search";
import Result from "../pages/Home/Result";
import Tags from "../pages/Tags";
import {createBrowserRouter} from "react-router-dom";

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
        ]
      },
      {
        path: "tags",
        element: <Tags />,
      },
    ],
  },
]);
