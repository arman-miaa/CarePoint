import { Helmet } from "react-helmet";
import MyVolunteerNeedPosts from "../components/MyVolunteerNeedPosts";
import MyVolunteerRequestPost from "../components/MyVolunteerRequestPost";


const ManageMyPosts = () => {


  

  return (
    <div>
      <Helmet>
        <title>Manage my  posts Page || CarePoint</title>
      </Helmet>
      <div>
        <MyVolunteerNeedPosts />
        <MyVolunteerRequestPost />
      </div>
    </div>
  );
};

export default ManageMyPosts;
