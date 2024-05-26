// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import { Wrapper } from "./styles";

// import {
//   LoadScript,
//   GoogleMap,
//   Marker,
//   DirectionsRenderer,
// } from "@react-google-maps/api";
// import { TbSearch } from "react-icons/tb";
// import { FaDirections } from "react-icons/fa";
// // const apiKey = "AIzaSyAPtCM5bphHcvOTdLa7A-UQhhTify4XiB0";

// const Map = () => {
//   const [map, setMap] = useState(null);
//   const [directions, setDirections] = useState(null);
//   const [origin, setOrigin] = useState(null);
//   const [destination, setDestination] = useState(null);

//   const onLoad = (map) => {
//     setMap(map);
//   };

//   const onDirectionsLoad = (directions) => {
//     setDirections(directions);
//   };
//   const OnOriginChanged = (place) => {
//     setOrigin(place);
//   };
//   const OnDestinationChanged = (place) => {
//     setDestination(place);
//   };
//   const directionsCallback = (response) => {
//     if (response !== null && response.status === "oK") {
//       setDirections(response);
//     }
//   };
//   return (
//     <Wrapper>
//       <form type="submit" className="search">
//         <input type="text" placeholder="search for campus map"></input>
//         <div className="buttons">
//           <button className="btns btn-search">
//             <TbSearch />
//           </button>
//           <button className="btns btn-direction">
//             <FaDirections />
//           </button>
//         </div>
//       </form>
//       <LoadScript googleMapsApiKey="AIzaSyDKqPU_I4U0CDznIotEnvx5WHu7B86YDkQ">
//         <GoogleMap
//           mapContainerStyle={{ height: "100%", width: "100%" }}
//           zoom={15}
//           center={{ lat: 10.615705, lng: 7.370929 }} // Default center, you can adjust it
//           onLoad={onLoad}
//         >
//           {/* Marker for present location */}
//           {origin && (
//             <Marker className="maker" position={origin.geometry.location} />
//           )}

//           {/* Marker for searched location */}
//           {destination && (
//             <Marker
//               className="maker"
//               position={destination.geometry.location}
//             />
//           )}

//           {/* DirectionsService for calculating the route */}
//           {origin && destination && (
//             <DirectionsService
//               options={{
//                 destination: destination,
//                 origin: origin,
//                 travelMode: "DRIVING",
//               }}
//               callback={directionsCallback}
//             />
//           )}
//           {/* DirectionsRenderer for displaying the route on the map */}
//           {directions && <DirectionsRenderer directions={directions} />}
//           {/* Search bar, handle onPlacesChanged event */}
//           {/* Example: */}
//           {/* <SearchBar onPlacesChanged={onPlacesChanged} /> */}
//           {/* <SearchBar onPlacesChanged={OnDestinationChanged} /> */}
//         </GoogleMap>
//       </LoadScript>
//     </Wrapper>
//   );
// };

// export default Map;

import React, { useState, useEffect, useRef } from "react";
import { Wrapper } from "./styles";
import dynamic from "next/dynamic";

import {
  // LoadScript,
  GoogleMap,
  Marker,
  DirectionsRenderer,
  DirectionsService,
} from "@react-google-maps/api";
import { TbSearch } from "react-icons/tb";
import { FaDirections } from "react-icons/fa";

const libraries = ["places"]; // Include the Places library

// Dynamically import LoadScript to ensure async loading
const LoadScript = dynamic(
  () => import("@react-google-maps/api").then((mod) => mod.LoadScript),
  { ssr: false }
);
const Map = () => {
  const [map, setMap] = useState(null);
  const [directions, setDirections] = useState(null);
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [isDirectionInputVisible, setIsDirectionInputVisible] = useState(false);
  const [searchMarker, setSearchMarker] = useState(null);

  const searchInputRef = useRef(null);
  const originInputRef = useRef(null);
  const destinationInputRef = useRef(null);

  const onLoad = (map) => {
    setMap(map);
  };

  const directionsCallback = (response) => {
    if (response !== null && response.status === "OK") {
      setDirections(response);
    }
  };

  useEffect(() => {
    if (searchInputRef.current && window.google) {
      const autocomplete = new window.google.maps.places.Autocomplete(
        searchInputRef.current
      );
      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (place.geometry) {
          map.panTo(place.geometry.location);
          setSearchMarker({
            position: place.geometry.location,
            icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
          });
        } else {
          alert("No details available for input: '" + place.name + "'");
        }
      });
    }
  }, [map]);

  const handleSearch = async (e) => {
    e.preventDefault();
    // Triggered by the form submission
    // Autocomplete handles the rest
  };

  const handleDirections = async () => {
    if (origin && destination) {
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: origin,
          destination: destination,
          travelMode: window.google.maps.TravelMode.DRIVING,
          travelMode: window.google.maps.TravelMode.WALKING,
        },
        directionsCallback
      );
    } else {
      alert("Please specify both origin and destination.");
    }
  };
  const handleOriginChange = (e) => {
    const selectedPlace = predefinedPlaces.find(
      (place) => place.name === e.target.value
    );
    if (selectedPlace) {
      setOrigin(selectedPlace.location);
    }
  };

  const handleDestinationChange = (e) => {
    const selectedPlace = predefinedPlaces.find(
      (place) => place.name === e.target.value
    );
    if (selectedPlace) {
      setDestination(selectedPlace.location);
    }
  };

  const predefinedPlaces = [
    {
      name: "Administrative Block",
      location: { lat: 10.61, lng: 7.3983 },
    },
    { name: "Parade Ground", location: { lat: 10.6125, lng: 7.3955 } },
    { name: "Officers' Mess", location: { lat: 10.611, lng: 7.397 } },
    { name: "Cadets' Mess", location: { lat: 10.613, lng: 7.393 } },
    { name: "Academic Complex", location: { lat: 10.614, lng: 7.3905 } },
    { name: "Hostels/Barracks", location: { lat: 10.613, lng: 7.391 } },
    { name: "Sports Complex", location: { lat: 10.616, lng: 7.3875 } },
    { name: "Hospital", location: { lat: 10.61408, lng: 7.377111 } },
    { name: "Training Grounds", location: { lat: 10.617, lng: 7.38 } },
    { name: "Rifle Ranges", location: { lat: 10.62, lng: 7.38 } },
    { name: "Engineering Workshops", location: { lat: 10.615, lng: 7.395 } },
    { name: "Chapels and Mosques", location: { lat: 10.613, lng: 7.394 } },
    { name: "Recreational Areas", location: { lat: 10.614, lng: 7.392 } },
    { name: "Officers' Quarters", location: { lat: 10.611, lng: 7.396 } },
    { name: "Cadets' Barracks", location: { lat: 10.614, lng: 7.392 } },
    { name: "Library", location: { lat: 10.614, lng: 7.39 } },
    // { name: "Lecture Theatres", location: { lat: 10.614, lng: 7.3905 } },
    { name: "Mogadishu BT", location: { lat: 10.61731, lng: 7.3581228 } },
  ];

  return (
    <Wrapper>
      <div>
        <form type="submit" className="search" onSubmit={handleSearch}>
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search for campus map"
          />
          <div className="buttons">
            <button type="submit" className="btns btn-search">
              <TbSearch />
            </button>
            <button
              type="button"
              className="btns btn-direction"
              onClick={() =>
                setIsDirectionInputVisible(!isDirectionInputVisible)
              }
            >
              <FaDirections />
            </button>
          </div>
        </form>
        {isDirectionInputVisible && (
          <div className="direction-inputs">
            {/* <div className="inputs">
              <input
                ref={originInputRef}
                type="text"
                placeholder="Enter origin"
                onBlur={() => setOrigin(originInputRef.current.value)}
              />
              <input
                ref={destinationInputRef}
                type="text"
                placeholder="Enter destination"
                onBlur={() => setDestination(destinationInputRef.current.value)}
              />
            </div> */}
            <select onChange={handleOriginChange} className="select">
              <option value="">origin</option>
              {predefinedPlaces.map((place) => (
                <option key={place.name} value={place.name}>
                  {place.name}
                </option>
              ))}
            </select>
            <select onChange={handleDestinationChange} className="select">
              <option value="">destination</option>
              {predefinedPlaces.map((place) => (
                <option key={place.name} value={place.name}>
                  {place.name}
                </option>
              ))}
            </select>

            <button onClick={handleDirections} className="get">
              Get
            </button>
          </div>
        )}
      </div>
      <LoadScript
        googleMapsApiKey="AIzaSyDKqPU_I4U0CDznIotEnvx5WHu7B86YDkQ"
        libraries={libraries}
        id="google-map-script"
      >
        <GoogleMap
          mapContainerStyle={{ height: "100%", width: "100%" }}
          zoom={15}
          center={{ lat: 10.615705, lng: 7.370929 }}
          onLoad={onLoad}
        >
          {origin && <Marker position={origin} />}

          {searchMarker && (
            <Marker position={searchMarker.position} icon={searchMarker.icon} />
          )}
          {destination && <Marker className="maker" position={destination} />}
          {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
      </LoadScript>
    </Wrapper>
  );
};

export default Map;
