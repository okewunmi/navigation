"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Wrapper } from './styles';

import { LoadScript, GoogleMap, Marker, DirectionsRenderer } from '@react-google-maps/api';

// AIzaSyBBCLEmA9IJW_UiN7w0OpulAwohprYgpco

const Map = ({apiKey}) => {
  
    const [map, setMap] = useState(null);
  const [directions, setDirections] = useState(null);
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);

  const onLoad = (map) => {
    setMap(map);
  };

  const onDirectionsLoad = (directions) => {
    setDirections(directions);
  };
  const OnOriginChanged = (place) =>{
    setOrigin(place)
  }
  const OnDestinationChanged = (place)=>{
    setDestination(place)

  }
  const directionsCallback = (response)=>{
    if(response !== null && response.status ==="oK"){
        setDirections(response);
    }
  }
  return (
        <Wrapper>
            <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={{ height: '100%', width: '100%' }}
        zoom={12}
        center={{ lat: 0.6163783, lng: 7.3673951}} // Default center, you can adjust it
        onLoad={onLoad}
      >
        {/* Marker for present location */}
        {origin && <Marker position={origin.geometry.location} />}
        {/* Marker for searched location */}
        {destination && <Marker position={destination.geometry.location} />}

        {/* DirectionsService for calculating the route */}
        {origin && destination && (
          <DirectionsService
            options={{
              destination: destination,
              origin: origin,
              travelMode: 'DRIVING',
            }}
            callback={directionsCallback}
          />
        )}

        {/* DirectionsRenderer for displaying the route on the map */}
        {directions && <DirectionsRenderer directions={directions} />}

        {/* Search bar, handle onPlacesChanged event */}
        {/* Example: */}
        {/* <SearchBar onPlacesChanged={onPlacesChanged} />
        <SearchBar onPlacesChanged={OnDestinationChanged} /> */}
      </GoogleMap>
    </LoadScript>
        </Wrapper>
    );
}

export default Map;


 
  