import Featured from "../../../components/featured/Featured";
import FeaturedProperties from "../../../components/typeOfWorkout/FeaturedProperties.js";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/classesHeader/Header"; 
import MailList from "../../../components/mailList/MailList";
import WorkoutList from "../../../components/workoutList/WorkoutList.js";
import "./home.css";

const Home = () => {
  return (
    <div style={{backgroundColor: "#485461", backgroundImage: 'linear-gradient(315deg, #2f4353 0%, #d2ccc4 74%)'}}>
      
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 data-aos='fade-left' className="homeTitle">Choose your workout</h1>
        <WorkoutList/>
        <h1 data-aos='fade-down' className="homeTitle">Ratings and Experience</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;