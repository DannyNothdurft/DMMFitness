import "./hotel.css";
import Header from "../../../components/classesHeader/Header";
import MailList from "../../../components/mailList/MailList";
import Footer from "../../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../../context/SearchContext";
import { AuthContext } from "../../../context/AuthContext";
import Reserve from "../../../components/reserve/Reserve";

const Studio = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { data, loading, error } = useFetch(`/studios/find/${id}`);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { dates, options } = useContext(SearchContext);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates[0].endDate, dates[0].startDate);
  
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  const handleClick = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };
   
  
  const plural = (num, str)=>{
    if(num===1){
      return num+" "+ str.split('').splice(0,3).join('')
    }else {
      return num+" "+ str
    }
  }
   const capitalize = () => {
    if(data.city){
      return data.city.charAt(0).toUpperCase() + data.city.slice(1,data.city.length)
    }else {
      return 'no'
    }
   }
 
  const price = () => {
    if(days===0){
      return days+data.cheapestPrice
    }
      else{
       return  days * data.cheapestPrice
      }
  }
  
  return (
    <div>
  
      <Header type="list" />
      {loading ? (
        "loading"
      ) : (
        <div className="hotelContainer">
          {open && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove("l")}
              />
              <div className="sliderWrapper">
                <img
                  src={data.photos[slideNumber]}
                  alt=""
                  className="sliderImg"
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove("r")}
              />
            </div>
          )}
          <div data-aos="zoom-in-left" style={{border: "1px solid black", padding: "100px", marginLeft:'-500px'}} className="hotelWrapper">
            <h1 className="hotelTitle">Fitness Studio in {capitalize(data.city)}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            
            <span className="hotelPriceHighlight">
              Book a Workout over €{data.cheapestPrice} and get a
              10% discount!!!
            </span>
            <div className="hotelImages">
              {data.photos?.map((photo, i) => (
                <div className="hotelImgWrapper" key={i}>
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo}
                    alt=""
                    className="hotelImg"
                  />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">{data.title}</h1>
                <p className="hotelDesc">{data.desc}</p>
              </div>
              <div data-aos="fade-up" style={{color:'white',backgroundColor: "#485461"}} className="hotelDetailsPrice">
                <h1 style={{color:'white'}}>{plural(days+1,"Days")} Workout!</h1>
                <span>
                  Located in the real heart of {capitalize(data.city)}, this Fitness Studio has an
                  excellent score of {data.rating} ! 
                </span>
                <h2>
                  <b>€{price()}</b> ({plural(days+1,"Days")}{" "}
                 Workout)
                </h2>
                <button style={{backgroundColor:'rgb(209, 138, 5)',color:'black',fontSize:'1.3rem'}} onClick={handleClick}>Book Your Training</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
      {openModal && <Reserve setOpen={setOpenModal} studioId={id}/>}
    </div>
  );
};

export default Studio;