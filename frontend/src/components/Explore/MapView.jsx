import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapView = ({ places }) => {
  if (!Array.isArray(places)) {
    console.warn("MapView expected an array but got:",  places);
    return null;
  }

  places =  places.filter(
    (place) =>
      place.location &&
      typeof place.location.lat === 'number' &&
      typeof place.location.lng === 'number'
  );

  return (
    <MapContainer center={[37.7749, -122.4194]} zoom={12} className="w-full h-full z-0">
      <TileLayer
        url="/src/assets/coffee.jfif"
        attribution="&copy; OpenStreetMap contributors"
      />
      {places.map((place, i) => (
        <Marker key={i} position={[place.location.lat, place.location.lng]}>
          <Popup>
            <strong>{place.name}</strong><br />
            ⭐ {place.rating} / 5
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;
