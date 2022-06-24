import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
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

  return (
    <>
     
      <div className="row" style={{backgroundColor: "#485461", backgroundImage: 'linear-gradient(315deg, #2f4353 0%, #d2ccc4 74%)', height: '100vh'}}>
        <div className="col text-center">
          <h2 style={{fontWeight:'bold'}}>Our Locations</h2>
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
                    <b>
                   {city.address},{" "}{city.postalCode}<br/>   {city.city}, {city.country}
                    </b>
                  </Popup>
                </Marker>
              ))} 
            </MapContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarkersMap;