import useFetch from "../../hooks/useFetch";
import "./workoutList.css";

const WorkoutList = () => {
  const { data, loading, error } = useFetch("/studios/countByType");

  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0tELLr2Tt1BYvfHP3BG6K8wL8NlIijemJ1w&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTReahZ2dZooUxOQ4UCpHxHjUcCyfH6EuV3mA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT74LIfkTWQ50yQxs9lqRYqbSN7DjfOlV4uIA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOqqWnP_WhgIacIWTEM3UH7SlJbP3HD_74-A&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK69qz3nZP7GFy41eA8n51Np_guhhMD5_rdA&usqp=CAU",
  ];

  
  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img data-aos="slide-down"
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div data-aos="zoom-in-left" className="pListTitles">
                   <h1>{data[i]?.type}</h1> 
                  {/* <h2>{data[i]?.count} {data[i]?.type}</h2> */}
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default WorkoutList;