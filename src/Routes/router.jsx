import Main from "../Layout/Main";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/Errorpage";
import Homepage from "../pages/Homepage/Homepage";
import TodoPages from "../pages/TodoPage/TodoPages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "/todo",
        element: <TodoPages></TodoPages>,
      },
    ],
  },
]);

export default router;
