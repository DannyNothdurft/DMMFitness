import { useEffect } from "react"
import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";
import Aos from 'aos'
import 'aos/dist/aos.css'


const FeaturedProperties = () => {
      useEffect(() =>{
   Aos.init({duration:2000})
      },[]);
      
  const { data, loading, error } = useFetch("/studios?limit=3");
  const comments = [{
    name: 'Megan Whatley', 
   comment: "\"I’ve always hated going to the gym because I was so self conscious. DMM.Fitness changed that completely! It’s the most accepting and welcoming gym that I’ve ever been to. Everyone is so kind and helpful! The workouts are incredible! The vibe is amazing, it doesn’t even feel like you’re working out (you’ll definitely feel it the next day though😅)\""
           },
           {
     name:"KT Kay",
     comment:"\"Love this fitness studio! The classes are fun and engaging and I love how the days are split up to keep it fresh and workout every muscle group. The best part is you get your own bench, rower, space, and dumbbells. DUMBELLS are 7.5-30 lbs and I like you get your own set so you don’t feel like your hogging them all. They have 2 showers which are busy after the 5 AM classes. Both the staff and other members are super friendly and welcoming. Just sign up for the free week already! I waited a month just thinking if I should try it out when I joined about a year ago and wish I stared sooner.\"",
           },
           {
            name:"Sam Hough",
            comment:"\"This is by far my favorite gym I've been to. Gyms are always a bit intimidating, to me at least, but from the moment you walk through the door they are welcoming and willing to explain how everything works. The instructors are super friendly and are able to modify anything you might have difficulty with or are unable to do for other reasons. Will recommend to anyone.\"",
           }
   ]
  
  return (
    <div className="fp">
      {console.log(loading)}
      {loading ? (
        "Loading"
      ) : (
        <>
            
          {data.map((item, idx) => (
            <div className="fpItem" key={item._id}>
           
             <hr/>
              <span data-aos='fade-up' style={{fontStyle: "italic",fontSize: "1.1rem"}}className="fpName">{comments[idx].name}</span>
              <span data-aos='fade-right' style={{textDecoration:'underline', fontSize:'1.3rem'}} className="fpCity">{item.city}</span>
              <span data-aos='fade-left' style={{fontStyle:'italic',fontSize:'1.1rem'}} className="fpPrice">{comments[idx].comment}</span>
             
              {item.rating && <div className="fpRating">
                
              
              </div>}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;