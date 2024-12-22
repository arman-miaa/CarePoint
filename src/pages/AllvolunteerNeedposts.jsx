import { useState } from "react";
import { AuthContext } from "../hooks/AuthProvider";

const AllvolunteerNeedposts = () => {
    const { user } = useState(AuthContext);
    console.log(user);
    return (
        <div>
            AllvolunteerNeedposts....
        </div>
    );
};

export default AllvolunteerNeedposts;