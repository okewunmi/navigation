import React, { useState, useEffect, useRef, useCallback } from "react";
import dynamic from "next/dynamic"; // Correct import for dynamic from next/dynamic
import { Wrapper } from "./styles";
import { GoogleMap, Marker, DirectionsRenderer } from "@react-google-maps/api";
import { TbSearch } from "react-icons/tb";
import { FaDirections } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { MdDriveEta } from "react-icons/md";

const libraries = ["places"]; // Include the Places library
const apiKey = "AIzaSyDKqPU_I4U0CDznIotEnvx5WHu7B86YDkQ";
const predefinedPlaces = [
  {
    name: "Abyssinia Battalion",
    address: "Abyssinia Battalion, Kaduna, Nigeria",
  },
  {
    name: "Academy Library",
    address: "J989+72J, Kaduna 802151, Nigeria",
  },
  {
    name: "Department of Geography",
    address: "Department of Geography, Kaduna 802151, Kaduna",
  },

  {
    name: "GT Bank -NDA",
    address: "J98F+Q2W Crock city 800283, Kaduna, Nigeria",
  },
  {
    name: "NDA Gymnasium",
    address: "J97F+5HV, Alaka 802151, Kaduna",
  },
  {
    name: "Mallam Sule Utility centre",
    address: "J96G+M9V, Alaka 802151, Kaduna",
  },
  {
    name: "Prof Mahmood Hall",
    address: "J98F+9M2, Alaka 802151, Kaduna",
  },
  {
    name: "Protestant Church NDA Afaka",
    address: "J97P+V76, Alaka 802151, Kaduna",
  },
  {
    name: "NDA Catholic Church",
    address: "J97M+VM8, Alaka 802151, Kaduna",
  },

  {
    name: "NDA Fire Station",
    address:
      "J97G+3WG Nigerian Defence Academy, Ahmadu Bello Way, Kaduna, Nigeria",
  },
  {
    name: "NDA Mosque",
    address: "J97J+RQ8, Alaka, Kaduna",
  },
  {
    name: "Mogadishu BT",
    address: "Mogadishu BT, Unnamed Road, Kaduna, Nigeria",
  },
  {
    name: "NDA AUditorium",
    address: "J97F+HVR NDA permanent site, Afaka 802151, Kaduna, Nigeria",
  },
  {
    name: "Burma battalion nda",
    address: "Burma battalion nda, Kaduna, Nigeria",
  },
  {
    name: "Headquartres NDA",

    address: "Headquartres NDA alaka, Kaduna, Nigeria",
  },
  {
    name: "Playground",

    address: "J97C+G2Q, Kaduna, Nigeria",
  },
  {
    name: "Hospital",

    address: "J97H+MQ3 Kaduna, Nigeria",
  },
  {
    name: "Military Transport Yard",

    address: "Military Transport Yard alaka, Nigeria",
  },
  {
    name: "Mallam Sule Utility Center",

    address: "Mallam Sule Utility Center, Unnamed Road, Kaduna, Nigeria",
  },
  {
    name: "Dalet Battalion",

    address: "Dalet Battalion, Kaduna, Nigeria",
  },
];

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
  const [isDirectionsVisible, setIsDirectionsVisible] = useState(false);
  const [directionsFetched, setDirectionsFetched] = useState(false);
  const searchInputRef = useRef(null);
  const [duration, setDuration] = useState(null);

  const onLoad = useCallback((mapInstance) => {
    setMap(mapInstance);
  }, []);

  const directionsCallback = (response) => {
    if (response !== null && response.status === "OK") {
      setDirections(response);
      const leg = response.routes[0].legs[0];
      setDuration(leg.duration.text); // Extract duration from the response
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
            icon: <MdLocationPin />,
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
    if (isDirectionsVisible) {
      // Clear the directions
      setDirections(null);
      setIsDirectionsVisible(false);
    } else {
      if (origin && destination) {
        const directionsService = new window.google.maps.DirectionsService();
        directionsService.route(
          {
            origin: origin,
            destination: destination,
            travelMode: window.google.maps.TravelMode.DRIVING,
          },
          directionsCallback
        );
        setIsDirectionsVisible(true);
      } else {
        alert("Please specify both origin and destination.");
      }
    }
  };

  const handleOriginChange = async (e) => {
    const selectedPlace = predefinedPlaces.find(
      (place) => place.name === e.target.value
    );
    if (selectedPlace) {
      if (window.google) {
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode(
          { address: selectedPlace.address },
          (results, status) => {
            if (status === "OK") {
              setOrigin(results[0].geometry.location);
            } else {
              alert(
                "Geocode was not successful for the following reason: " + status
              );
            }
          }
        );
      }
    }
  };

  const handleDestinationChange = async (e) => {
    const selectedPlace = predefinedPlaces.find(
      (place) => place.name === e.target.value
    );
    if (selectedPlace) {
      if (window.google) {
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode(
          { address: selectedPlace.address },
          (results, status) => {
            if (status === "OK") {
              setDestination(results[0].geometry.location);
            } else {
              alert(
                "Geocode was not successful for the following reason: " + status
              );
            }
          }
        );
      }
    }
  };

  const handleCancel = () => {
    setDirections(null);
    setOrigin(null);
    setDestination(null);
    setDuration(null); // Clear duration on cancel
    setIsDirectionInputVisible(false);
  };

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
          <div className="travel">
            <div className="direction-inputs">
              <select onChange={handleOriginChange} className="select">
                <option value="">origin</option>
                {predefinedPlaces.map((place) => (
                  <option
                    className="options"
                    key={place.name}
                    value={place.name}
                  >
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
            {duration && (
              <>
                <div className="card">
                  <MdDriveEta className="car" /> <p>: {duration}</p>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      <LoadScript
        googleMapsApiKey="AIzaSyDKqPU_I4U0CDznIotEnvx5WHu7B86YDkQ"
        libraries={libraries}
        id="google-map-script" // Added id prop
      >
        <GoogleMap
          mapContainerStyle={{ height: "100%", width: "100%" }}
          zoom={15}
          center={{ lat: 10.615705, lng: 7.370929 }}
          onLoad={onLoad}
        >
          {origin && <Marker position={origin} />}
          {destination && <Marker position={destination} />}
          {searchMarker && (
            <Marker position={searchMarker.position} icon={searchMarker.icon} />
          )}
          {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
      </LoadScript>
    </Wrapper>
  );
};

export default Map;
