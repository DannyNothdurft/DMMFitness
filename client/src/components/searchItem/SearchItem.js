import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
  const cityFirstLetter = item.city[0].toUpperCase();
  const restOfCity = item.city.split('').splice(1,item.city.length);
  const cityCapitalize = cityFirstLetter + restOfCity.join('')
  
  
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">DMM.Fitness</h1>
        <span className="siDistance" style={{fontWeight: 'bold', fontSize:'1rem'}}>Fitness Studio in {cityCapitalize}</span>
       
        <span className="siFeatures">{item.address}</span>
        <span className="siSubtitle">
         Best Choice!
        </span>
       
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>Excellent <button style={{backgroundColor:'transparent', border: '1px solid green', padding: '5px 10px', margin: '10px'}}> {item.rating} </button></span>
        
        </div>}
        <div className="siDetailTexts">
         {/*  <span className="siPrice">${item.cheapestPrice}</span> */}
          {/* <span className="siTaxOp">Includes taxes and fees</span> */}
          <Link to={`/studios/${item._id}`}>
          <button className="siCheckButton">See Fitness Studio</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;