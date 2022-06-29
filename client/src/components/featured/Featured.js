import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/studios/countByCity?cities=berlin,madrid,london"
  );
  

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div data-aos='fade-left'className="featuredItem">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRl51H8h70N9eSKBhK-spgOOjcjJ78tbqWG-dNP8MdB8cH0yhvQEMZ9LT69JYFCMD-APg&usqp=CAU"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1 style={{fontWeight: "bold", color: "white", textShadow: "2px 2px 5px whitesmoke"}}>Berlin</h1>
              <h2 style={{marginTop:'10px', color: 'white'}}>{data[0]} studios</h2>
            </div>
          </div>

          <div data-aos='fade-down' className="featuredItem">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAI4A7ZU_o_qzqWf1elf9RtsphpY0UlWu-yQ&usqp=CAU"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1 style={{fontWeight: "bold", color: "white", textShadow: "2px 2px 5px whitesmoke"}}>Madrid</h1>
              <h2 style={{marginTop:'10px', color: 'white'}}>{data[1]} studios</h2>
            </div>
          </div>
          <div data-aos='fade-right' className="featuredItem">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2IfdwUu3t15C56sZvHYIGOlZYF4PMLBXcbg&usqp=CAU"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1 style={{fontWeight: "bold", color: "white", textShadow: "2px 2px 5px whitesmoke"}}>London</h1>
              <h2 style={{marginTop:'10px', color: 'white'}}>{data[2]} studios</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;