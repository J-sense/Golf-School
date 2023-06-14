import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import SignUp from "../LOgsign/SignUp";
import Login from "../LOgsign/Login";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import Allusers from "../Pages/Dashboard/Allusers/Allusers";
import PrivateRoute from "./PrivateRote.jsx/PrivateRoute";
import Addclass from "../Pages/Dashboard/Addclass/Addclass";
import Myclasses from "../Pages/MyCLasses/Myclasses";
import ManageClasses from "../Pages/ManageUSers/ManageClasses";
    


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
    {
      path :'/dashboard',
      element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
      children:[
        {
          path :'manageUsers',
          element :<Allusers></Allusers>
        },
        {
          path :'addclass',
          element :<Addclass></Addclass>
        },
        {
          path :'myclasses',
          element : <Myclasses></Myclasses>
        },
        {
          path :'manageClasses',
          element : <ManageClasses>s</ManageClasses>
        }
      ]
    }
  ]);