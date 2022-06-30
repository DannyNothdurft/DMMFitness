import "./list.css";
import MailList from "../../../components/mailList/MailList.js";
import Footer from "../../../components/footer/Footer.js"; 
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
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

  const handleClick = () => {
    reFetch();
  };

  return (
    <div>
      {/* <Navbar />
      <Header type="list" /> */}
      <div style={{backgroundColor: "#485461", backgroundImage: 'linear-gradient(315deg, #2f4353 0%, #d2ccc4 74%)'}} className="listContainer">
        <div data-aos="fade-up" className="listWrapper">
          <div style={{backgroundColor: "#485461"}} className="listSearch">
            <h1 style={{color:'orange', marginTop:'-10px', fontSize:'2rem'}} className="lsTitle">Your Search</h1>
            <div className="lsItem">
              <label style={{color:'orange', fontSize:'1rem'}}>Studio Location</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label style={{color:'orange', fontSize:'1rem'}}>Booked Classes Date</label>
              <span style={{ borderRadius: '.3rem'}} onClick={() => setOpenDate(!openDate)}>{`${format(
                dates[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>
         {/*    <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMin(e.target.value)}
                    className="lsOptionInput"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMax(e.target.value)}
                    className="lsOptionInput"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
              </div>*/}
  
            <button style={{backgroundColor: 'orange', color: 'black', fontSize:'20px', fontWeight:'bold'}} onClick={handleClick}>Search</button>
          
              </div> 
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
        </div>
        <MailList/>
      <Footer/>
      </div>
    
    </div> 
  );
};

export default List;
