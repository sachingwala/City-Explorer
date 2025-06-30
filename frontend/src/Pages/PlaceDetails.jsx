import React from "react";
import { useParams } from "react-router-dom";
import PlaceHeader from "../components/PlaceDetails/PlaceHeader";
import Navbar from "../components/common/Navbar";
import placesData from "../Data/placesData";
// import ActionButtons from "./ActionButtons";
// import AboutSection from "./AboutSection";
import MapSection from "../components/PlaceDetails/MapSection";
import ReviewsSection from "../components/PlaceDetails/ReviewsSection";

const PlaceDetails = () => {
  const { placeId } = useParams();

  // Find the correct place by id from placesData
  let selectedPlace = null;

  for (const category in placesData) {
    selectedPlace = placesData[category].find((place) => place.id === placeId);
    if (selectedPlace) break;
  }

  if (!selectedPlace) return <div>Loading...</div>;


  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Navbar />
      <PlaceHeader place={ selectedPlace } />
      <div style={{ padding: "1.5rem", maxWidth: "1200px", margin: "auto" }}>
        {/* <ActionButtons /> */}
        {/* <AboutSection place={place} /> */}
        <MapSection place={ selectedPlace } />
        <ReviewsSection reviews={selectedPlace.reviews || []} />
      </div>
    </div>
  );
};

export default PlaceDetails;
