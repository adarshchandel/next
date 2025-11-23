'use client'
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Define the map container style
const containerStyle = {
  width: '100%',
  height: '400px', // Adjust height as needed
};

// Define default center position (latitude, longitude)
const defaultCenter = {
  lat: 30.849287999999998, // San Francisco latitude
  lng: 75.41866183333333, // San Francisco longitude
};

interface GoogleMapComponentProps {
  apiKey: string; // Google Maps API key
  latitude?: number; // Optional latitude
  longitude?: number; // Optional longitude
}

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({
  apiKey,
  latitude = defaultCenter.lat,
  longitude = defaultCenter.lng,
}) => {
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: latitude, lng: longitude }}
        zoom={10} // Adjust zoom level
      >
        {/* Add a marker at the provided latitude and longitude */}
        <Marker position={{ lat: latitude, lng: longitude }} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
