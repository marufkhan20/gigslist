import { LatLngTuple } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const SellerLocation = () => {
  const position: LatLngTuple = [51.505, -0.09]; // Default position [latitude, longitude]

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "370px", width: "100%", borderRadius: "4px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default SellerLocation;
