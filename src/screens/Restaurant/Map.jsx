import React, { useState } from "react";
import GoogleMapReact from 'google-map-react';
import { mapOptions } from "./option";
import LocationOnIcon from '@mui/icons-material/LocationOn';


export default function SimpleMap(){
  const [coordinates, setcoordinates] = useState({
    lat: 40.75247880005407,
    lng: 72.36285272026008,
  });

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '400px', width: '100%',maxWidth:1430,margin:"auto",marginTop: '80px'}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB8NHCF-5fMix0w2363RhC3V4vcyw8SHSM" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={16}
        margin={[50, 50, 50, 50]}
        options={mapOptions}
      >
       
        <LocationOnIcon style={{color:"red",fontSize:50}}
          lat={coordinates.lat}
          lng={coordinates.lng}
        />
      </GoogleMapReact>
    </div>
  );
}

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.433976291466!2d72.36285272026008!3d40.75247880005407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bced91ccce77f9%3A0xf07c16e5c23a5945!2sNavruz%20Mall!5e0!3m2!1sru!2s!4v1696572963826!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>