import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

interface ICenter {
  lat: number;
  lng: number;
}

const MyMap: React.FC = () => {
  const mapStyles = {        
    height: "100%",
    width: "100%"
  };

  const defaultCenter: ICenter = {
    lat: 41.3851, 
    lng: 2.1734
  };
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyBzHPKcYzqx03ytl08YouIVfM7ZKIuOULw'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
     </LoadScript>
  )
}

export default MyMap;
