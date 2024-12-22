import Banner from "../components/Banner";
import Review from "../components/Review";
import VolunteerNeeds from "../components/VolunteerNeeds";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <VolunteerNeeds></VolunteerNeeds>
            <Review></Review>
        </div>
    );
};

export default Home;