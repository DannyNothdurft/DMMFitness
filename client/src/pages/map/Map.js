import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Footer from '../../../src/components/footer/Footer.js'
import MailList from '../../../src/components/mailList/MailList.js'

import L from "leaflet";

import "leaflet/dist/leaflet.css";
import osm from "./osm-providers";


  import cities from "../../cities.json"; 



const markerIcon = new L.Icon({
  iconUrl: require("../../images/marker.png"),
  iconSize: [40, 40],
  iconAnchor: [17, 46], //[left/right, top/bottom]
  popupAnchor: [0, -46], //[left/right, top/bottom]
});

const MarkersMap = () => {
  const [center, setCenter] = useState({ lat: 50.1106444, lng: 8.6820917});
  const ZOOM_LEVEL = 9;
  const mapRef = useRef();

const images = [
  "https://evofitness.at/wp-content/uploads/2019/02/EVO_Banner_February_05-1200x675.jpg",
  "https://media.istockphoto.com/photos/empty-gym-picture-id1132006407?k=20&m=1132006407&s=612x612&w=0&h=Z7nJu8jntywb9jOhvjlCS7lijbU4_hwHcxoVkxv77sg=",
  "https://media.timeout.com/images/105613744/750/422/image.jpg",
  "https://whateveryourdose.com/wp-content/uploads/2019/04/MOVE-2.001.jpeg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGRSnv3cWGAiKw5UppI7yFGwragAqnh3Rexg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKHKa9RYTo54CM-cbnni-QWW0sabJpyjCmjg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdGcGYlLojr3D5t_itkRWykmcv4VASRt2NoA&usqp=CAU",
  "https://images.squarespace-cdn.com/content/v1/574c4fb3b6aa60d843a68222/1595068795022-MMKW1KF8ATUX6K38H7BR/Wide_v003.jpg?format=2500w"
]

  return (
    <>
     
      <div className="row" style={{backgroundColor: "#485461", backgroundImage: 'linear-gradient(315deg, #2f4353 0%, #d2ccc4 74%)', width:'99.860vw'}}>
        <div className="col text-center">
          <h2  style={{fontWeight:'bold'}}>Our Locations</h2>
          <p style={{color:'red', fontSize:'1.5rem', fontWeight:'bold', textDecoration:'underline'}}>You can find us all over Europe</p>
          <div className="col">
            <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
              <TileLayer
                url={osm.maptiler.url}
                attribution={osm.maptiler.attribution}
              />

              {cities.map((city, idx) => (
                <Marker
                  position={[city.lat, city.lng]}
                  icon={markerIcon}
                  key={idx}
                >
                  <Popup>
                    {<img style={{width: '100%'}} src={images[idx]} alt=""/>}
                    <b>
                   {city.address},{" "}{city.postalCode}<br/>   {city.city}, {city.country}
                    </b>
                  </Popup>
                </Marker>
              ))} 
           
            </MapContainer>
            <MailList/>
            <Footer/>

          </div>
        </div>
      </div>
    </>
  );
};

export default MarkersMap;