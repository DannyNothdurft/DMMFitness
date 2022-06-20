import SearchItem from '../../components/Search.js'
import Classes from '../../components/Classes.js'
import "./bookClass.css";

const Home = () => {
  return (
    <div>
      <SearchItem />
     
      <div className="homeContainer">
       
        <h1 className="homeTitle">Choose your Workout</h1>
        <Classes/>
       
      </div>
    </div>
  );
};

export default Home;