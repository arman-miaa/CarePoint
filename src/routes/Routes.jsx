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
import BeAVolunteer from "../pages/BeAVolunteer";
import ErrorPage from "../pages/ErrorPage";
import MyVolunteerNeedPosts from "../pages/MyVolunteerNeedPosts";
import MyVolunteerRequestPost from "../pages/MyVolunteerRequestPost";
import UpdatePage from "../pages/UpdatePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "AllvolunteerNeedposts",
        element: <AllvolunteerNeedposts></AllvolunteerNeedposts>,
        loader: () => fetch("http://localhost:5000/allPost"),
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
        loader: ({ params }) =>
          fetch(`http://localhost:5000/volunteerPosts/${params.id}`),
      },

      {
        path: "beAVolunteer/:id",
        element: (
          <Private>
            <BeAVolunteer></BeAVolunteer>
          </Private>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/volunteerPosts/${params.id}`),
      },

      {
        path: "ManageMyPosts",
        element: (
          <Private>
            <ManageMyPosts></ManageMyPosts>
          </Private>
        ),
        children: [
          {
            index: true,
            element: (
              <Private>
                <MyVolunteerNeedPosts />
              </Private>
            ),
          },
          {
            path: "myVolunteerNeedPosts",
            element: (
              <Private>
                <MyVolunteerNeedPosts />
              </Private>
            ),
          },
          {
            path: "myVolunteerRequestPost",
            element: (
              <Private>
                <MyVolunteerRequestPost />
              </Private>
            ),
          },
        ],
      },

      {
        path: "updatePost/:id",
        element: (
          <Private>
            <UpdatePage></UpdatePage>
          </Private>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/volunteerPosts/${params.id}`),
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
