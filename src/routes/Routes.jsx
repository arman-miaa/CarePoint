import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <p>Error Page</p>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        },
        {
            path: 'login',
            element:<Login></Login>
        },
        {
            path: 'signUp',
            element:<SignUp></SignUp>,
        }
    ],
  },
]);

export default router;
