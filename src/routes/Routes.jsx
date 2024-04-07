import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../components/home/Home";
import Register from "../components/register/Register";
import Login from "../components/login/Login";
import Profile from './../components/profile/Profile';
import Details from './../components/product/Details';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: '/details',
          element: <Details></Details>,
        },
        {
          path: '/register',
          element: <Register></Register>,
        },
        {
          path: '/login',
          element: <Login></Login>,
        },
        {
          path: '/profile',
          element: <Profile></Profile>,
        },
      ]
    },
  ]);

  export default router;