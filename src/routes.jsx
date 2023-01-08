import {
  createBrowserRouter
} from "react-router-dom";
import { AddTodoPage } from "./Pages/AddTodoPage/AddTodoPage";

import { InitialPage } from "./Pages/InitialPage/InitialPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <InitialPage />,
  },
  {
    path: "adicionar",
    element: <AddTodoPage />,
  },
]);