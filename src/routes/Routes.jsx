import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Private from "../Private/Private";
import AllvolunteerNeedposts from "../pages/AllvolunteerNeedposts";
import ManageMyPosts from "../pages/ManageMyPosts";
import AddVolunteerNeedPostPage from "../pages/AddVolunteerNeedPostPage";
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
        path: "AllvolunteerNeedposts",
        element: <AllvolunteerNeedposts></AllvolunteerNeedposts>,
      },
      {
        path: "AddVolunteerNeedPostPage",
        element:<Private><AddVolunteerNeedPostPage></AddVolunteerNeedPostPage></Private>
      },
      {
        path: "ManageMyPosts",
        element: (
          <Private>
            <ManageMyPosts></ManageMyPosts>
          </Private>
        ),
        // element:<MyProfile></MyProfile>
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;
