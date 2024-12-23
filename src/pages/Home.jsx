import { Helmet } from "react-helmet";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Review from "../components/Review";
import VolunteerNeeds from "../components/VolunteerNeeds";


const Home = () => {
    return (
      <div>
        <Helmet>
          <title>Home Page || CarePoint</title>
        </Helmet>
        <Banner></Banner>
        <VolunteerNeeds></VolunteerNeeds>
        <Review></Review>
        <Contact></Contact>
      </div>
    );
};

export default Home;