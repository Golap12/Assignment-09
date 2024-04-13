import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../components/home/Home";
import Register from "../components/register/Register";
import Login from "../components/login/Login";
import Profile from "../components/profile/Profile";
import Details from "./../components/product/Details";
import PrivetRoute from "../assets/privetRoute/PrivetRoute";
import Error from "./../components/error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/residential.json"),
      },
      {
        path: "/details/:id",
        element: <PrivetRoute><Details></Details></PrivetRoute>,
        loader: () => fetch("/residential.json"),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/profile",
        element: <PrivetRoute><Profile></Profile></PrivetRoute>,
      },
    ],
  },
]);

export default router;
