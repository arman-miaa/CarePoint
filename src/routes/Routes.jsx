import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Private from "../Private/Private";
import AllvolunteerNeedposts from "../pages/AllvolunteerNeedposts";
import ManageMyPosts from "../pages/ManageMyPosts";
import AddVolunteerNeedPostPage from "../pages/AddVolunteerNeedPostPage";
import DetailsPage from "../pages/DetailsPage";
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
        element: (
          <Private>
            <AddVolunteerNeedPostPage></AddVolunteerNeedPostPage>
          </Private>
        ),
      },
      {
        path: "detailsPage/:id",
        element: (
          <Private>
            <DetailsPage></DetailsPage>
          </Private>
        ),
        loader: ({params}) => fetch(`http://localhost:5000/volunteerPosts/${params.id}`),
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
