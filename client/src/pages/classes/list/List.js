 import "./list.css";
import MailList from "../../../components/mailList/MailList.js";
import Footer from "../../../components/footer/Footer.js"; 
import { useLocation } from "react-router-dom";
import { useState } from "react";
import SearchItem from '../../../components/searchItem/SearchItem'
import useFetch from "../../../hooks/useFetch";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, error, reFetch } = useFetch(
    `/studios?city=${destination}&min=${min || 0}&max=${max || 999}`
  );

 

  return (
    <div style={{backgroundColor: "#485461", backgroundImage: 'linear-gradient(315deg, #2f4353 0%, #d2ccc4 74%)'}} className="listContainer">
       <h2 style={{borderTop:'1px solid black', marginBottom:'30px',fontWeight:'bold'}}>Fitness Studios in <span style={{textTransform: 'capitalize'}}>{destination}</span> </h2>
          <div className="listResult">
           
          {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
            
             </div>
             
          
          
       
        <MailList/>
      <Footer/>
    
    
    </div> 
  );
};

export default List;
 