import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import SignUp from "../LOgsign/SignUp";
import Login from "../LOgsign/Login";
    


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path :'/',
            element:<Home></Home>
        },
        {
            path :'/signup',
            element:<SignUp></SignUp>
        },
        {
            path :'/login',
            element:<Login></Login>
        }
      ]
    },
  ]);