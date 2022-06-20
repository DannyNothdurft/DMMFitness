import "../styles/classes.css";


const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2017_36/2144546/170905-working-out-group-ac-512p.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Group Workout</span>
        <span className="fpCity"></span>
        <span className="fpPrice">Starting from €50</span>
     
      </div>
      <div className="fpItem">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ZT6uWI65XnbMMN7xXpecVtb5NMKlVbim_A&usqp=CAU"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Personal Training</span>
        <span className="fpCity"></span>
        <span className="fpPrice">Starting from €80</span>
     
      </div>
      <div className="fpItem">
        <img 
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQScBHR8elMDam7r_zshMMaAyjsFGaocivIDSk2QW5IA3ZIOMdoBTh4edisu_gyETxbnyM&usqp=CAU'
          alt=""
          className="fpImg"
        />
        <span className="fpName">HIIT Workout</span>
        <span className="fpCity"></span>
        <span className="fpPrice">Starting from €69</span>
       
      </div>
      <div className="fpItem">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQInndbXA4vIn0_k-MioIs8rgioQdvDt_Fcw&usqp=CAU"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Spinning Classes</span>
        <span className="fpCity"></span>
        <span className="fpPrice">Starting from €99</span>
       
      </div>
    </div>
  );
};

export default FeaturedProperties;