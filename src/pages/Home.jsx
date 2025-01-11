import { Helmet } from "react-helmet";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Review from "../components/Review";
import VolunteerNeeds from "../components/VolunteerNeeds";
import OurMission from "../components/OurMission";


const Home = () => {
    return (
      <div>
        <Helmet>
          <title>Home Page || CarePoint</title>
        </Helmet>
        <Banner></Banner>
        <VolunteerNeeds></VolunteerNeeds>
        <Review></Review>
        <OurMission></OurMission>
        <Contact></Contact>
      </div>
    );
};

export default Home;