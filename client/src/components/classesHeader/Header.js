import {
    faBed,
    faCalendarDays,
    faLocationDot,
    faPerson
   
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import "./header.css";
  import { DateRange } from "react-date-range";
  import { useContext, useState } from "react";
  import "react-date-range/dist/styles.css"; // main css file
  import "react-date-range/dist/theme/default.css"; // theme css file
  import { format } from "date-fns";
  import { useNavigate } from "react-router-dom";
  import { SearchContext } from "../../context/SearchContext";
  import { AuthContext } from "../../context/AuthContext";
  
  const Header = ({ type }) => {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [dates, setDates] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
      adult: 1,
      children: 0,
      room: 1,
    });
  
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
  
  
    const handleOption = (name, operation) => {
      setOptions((prev) => {
        return {
          ...prev,
          [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
        };
      });
    };
  
    const { dispatch } = useContext(SearchContext);
  
    const handleSearch = () => {
      if(destination.length===0) {
          alert('Please write Fitness LOCATION and DATE')
      }
      else {
        dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
        navigate("/studios", { state: { destination, dates, options } });
      }
      
    };
  
    return (
      <div style={{backgroundColor: "#485461"}} className="header">
        <div
          className={
            type === "list" ? "headerContainer listMode" : "headerContainer"
          }
        >
         
          {type !== "list" && (
            <>
              <h1 style={{textAlign: "center"}} className="headerTitle">
             DON'T WAIT! <br/> Book Your Classes NOW!
              </h1>
              <p style ={{fontSize:'15px', textAlign:'center'}}className="headerDesc">
              <span style={{color:'orange',fontSize:'20px'}}>Get rewarded for your effort </span> – unlock instant savings of <span style={{color:'orange',fontSize:'20px'}}>10%</span>  or
                more with a free<span style={{color:'orange',fontSize:'20px'}}> DMM-FITNESS</span> Account
              </p>
              
              <div className="headerSearch">
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faLocationDot} className="headerIcon" />
                  <input 
                    type="text"
                    placeholder="Your Fitness Location"
                    className="headerSearchInput"
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
                {destination.length===0? "true" :"false"}
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                  <span
                    onClick={() => setOpenDate(!openDate)}
                    className="headerSearchText"
                  >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                    dates[0].endDate,
                    "MM/dd/yyyy"
                  )}`}</span>
                  {openDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDates([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={dates}
                      className="date"
                      minDate={new Date()}
                    />
                  )}
                </div>
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                  <span
                    onClick={() => setOpenOptions(!openOptions)}
                    className="headerSearchText"
                  >{`${options.adult} adult`}</span>
                  {openOptions && (
                    <div className="options">
                      <div className="optionItem">
                        <span className="optionText">Adult</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.adult <= 1}
                            className="optionCounterButton"
                            onClick={() => handleOption("adult", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.adult}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("adult", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      
                    </div>
                  )}
                </div>
                <div className="headerSearchItem">
                  <button className="headerBtn" onClick={handleSearch}>
                    Search
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  };
  
  export default Header;