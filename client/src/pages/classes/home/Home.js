import Featured from "../../../components/featured/Featured";
import FeaturedProperties from "../../../components/typeOfWorkout/FeaturedProperties.js";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/classesHeader/Header"; 
import MailList from "../../../components/mailList/MailList";
import WorkoutList from "../../../components/workoutList/WorkoutList.js";
import "./home.css";

const Home = () => {
  return (
    <div>
      
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Choose your workout</h1>
        <WorkoutList/>
        <h1 className="homeTitle">Ratings and Experience</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;