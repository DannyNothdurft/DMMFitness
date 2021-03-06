import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import "./reserve.css";
import useFetch from "../../hooks/useFetch";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext} from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Reserve = ({ setOpen, studioId}) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { data, loading, error } = useFetch(`/studios/room/${studioId}`);
  const { dates } = useContext(SearchContext);
 const { user } = useContext(AuthContext)
  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      alldates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  const handleSelect = (e) => {
    
   
    const checked = e.target.checked;
    const value = e.target.value;
   
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const navigate = useNavigate();
  
  const handleClick = async () => {
    try {
      console.log('selected',selectedRooms.roomNumbers)
     /*  await Promise.all(
        selectedRooms.map((roomId) => {
          
          const res = axios.put(`/rooms/availability/${roomId}`, {
            dates: alldates,
          });
          return res.data;
        })
      ); */
      user.booking.push(selectedRooms)
      setOpen(false);
      navigate("/");
    } catch (err) {}
  };
  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span style={{fontWeight:'bold',fontSize:'1.2rem'}}>Select your Workout:</span>
        {data.map((item) => (
          
          <div className="rItem" key={item._id}>
            <div className="rItemInfo">
            {console.log("mamaas",selectedRooms)}
              <div className="rTitle">{item.title}</div>
              <div className="rDesc">{item.desc}</div>
             
              <div className="rPrice">{item.price}</div>
            </div>
            <div className="rSelectRooms">
              
              {item.roomNumbers.map((roomNumber) => (
                <div className="room">
                  <label>{roomNumber.number}</label>
                  <input
                    type="checkbox"
                    value={item.title}
                    onChange={handleSelect}
                    /* disabled={!isAvailable(roomNumber)}  */
                  />
                </div>
              ))}
            </div>
          </div>
        ))} 
        <button onClick={handleClick} className="rButton">
          Reserve Now!
        </button>
      </div>
    </div>
  );
};

export default Reserve;