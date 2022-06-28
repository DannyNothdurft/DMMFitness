import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/studios?limit=3");
  const comments = [{
    name: 'Megan Whatley', 
   comment: "This is by far my favorite gym I've been to. Gyms are always a bit intimidating, to me at least, but from the moment you walk through the door they are welcoming and willing to explain how everything works. The instructors are super friendly and are able to modify anything you might have difficulty with or are unable to do for other reasons. Will recommend to anyone."
           },
           {
     name:"KT Kay",
     comment:"Love this fitness studio! The classes are fun and engaging and I love how the days are split up to keep it fresh and workout every muscle group. The best part is you get your own bench, rower, space, and dumbbells. DUMBELLS are 7.5-30 lbs and I like you get your own set so you don’t feel like your hogging them all. They have 2 showers which are busy after the 5 AM classes. Both the staff and other members are super friendly and welcoming. Just sign up for the free week already! I waited a month just thinking if I should try it out when I joined about a year ago and wish I stared sooner.",
           },
           {
            name:"Sam Hough",
            comment:"This is by far my favorite gym I've been to. Gyms are always a bit intimidating, to me at least, but from the moment you walk through the door they are welcoming and willing to explain how everything works. The instructors are super friendly and are able to modify anything you might have difficulty with or are unable to do for other reasons. Will recommend to anyone.",
           }
   ]
  return (
    <div className="fp">
      {console.log(loading)}
      {loading ? (
        "Loading"
      ) : (
        <>
        {console.log(comments[1])}
          {data.map((item, idx) => (
            <div className="fpItem" key={item._id}>
             {/*  <img
                src={item.photos[0]}
                alt=""
                className="fpImg"
              /> */}
             
              <span className="fpName">{comments[idx].name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">{comments[idx].comment}</span>
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