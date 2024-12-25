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

import UpdatePage from "../pages/UpdatePage";
import { axiosInstance } from "../hooks/useAxiosSecure";
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
        loader: () =>
          fetch("https://ph-assignment-11-server-brown.vercel.app/allPost"),
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
            <DetailsPage />
          </Private>
        ),
        loader: async ({ params }) => {
          try {
            const response = await axiosInstance.get(
              `/volunteerPosts/${params.id}`
            );
            return response.data;
          } catch (error) {
            console.error("Error occurred in loader:", error);
            throw error;
          }
        },
      },

      {
        path: "beAVolunteer/:id",
        element: (
          <Private>
            <BeAVolunteer />
          </Private>
        ),
        loader: async ({ params }) => {
          try {
            const response = await axiosInstance.get(
              `/volunteerPosts/${params.id}`
            );
            return response.data;
          } catch (error) {
            console.error("Error occurred in loader:", error);
            throw error;
          }
        },
      },

      {
        path: "ManageMyPosts",
        element: (
          <Private>
            <ManageMyPosts></ManageMyPosts>
          </Private>
        ),
      },

      {
        path: "updatePost/:id",
        element: (
          <Private>
            <UpdatePage />
          </Private>
        ),
        loader: async ({ params }) => {
          try {
            const response = await axiosInstance.get(
              `/volunteerPosts/${params.id}`
            );
            return response.data;
          } catch (error) {
            console.error("Error occurred in loader:", error);
            throw error;
          }
        },
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
