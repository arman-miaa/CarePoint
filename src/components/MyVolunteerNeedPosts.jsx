import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../hooks/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../pages/Loading";
// import { NavLink, Outlet, useLocation } from "react-router-dom";

const MyVolunteerNeedPosts = () => {
  const { user } = useContext(AuthContext);
  const [mypost, setMypost] = useState([]);
  const [loading, setLoading] = useState(true);

  // console.log(mypost);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/myPost/${user.email}`,{withCredentials:true})
      .then((res) => {
        setMypost(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("ERROR", error);
        setLoading(false);
      });
  }, [user.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("clicked delete", id);
        axios
          .delete(`http://localhost:5000/deletePost/${id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              setMypost((prevPosts) =>
                prevPosts.filter((post) => post._id !== id)
              );
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {mypost.length === 0 ? (
            <div className="text-center mt-8">
              <p className="text-lg font-bold text-gray-600">
                No volunteer need posts found.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="table table-zebra">
                {/* head */}
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Location</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {mypost.map((post, index) => (
                    <tr key={post._id}>
                      <th>{index + 1}</th>
                      <td>
                        <img
                          className="w-12 h-12 rounded-full"
                          src={post.thumbnail}
                          alt=""
                        />
                      </td>
                      <td>{post.title}</td>
                      <td>{post.location}</td>
                      <td className="flex gap-2 flex-col md:flex-row">
                        <Link to={`/updatePost/${post._id}`}>
                          <button className="btn ">Update</button>
                        </Link>
                        <button
                          onClick={() => handleDelete(post._id)}
                          className="btn "
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MyVolunteerNeedPosts;
