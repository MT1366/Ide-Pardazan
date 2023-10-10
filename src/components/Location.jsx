import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { HiArrowLeft } from "react-icons/hi2";

function Location() {
  const mapStyles = {
    height: "50vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 41.40338,
    lng: 41.40338,
  };

  return (
    <>
      <div className="w-390 h-844 border m-auto mt-8 p-5 gap-5 flex flex-col">
        <div className="flex flex-row items-center gap-2">
          <HiArrowLeft />
          <p className="font-bold">Your address/Location</p>
        </div>
        <LoadScript googleMapsApiKey="https://www.google.com/maps/@35.7476896,51.4204603,15z?entry=ttu">
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={13}
            center={defaultCenter}
          />
        </LoadScript>
      </div>
    </>
  );
}

export default Location;
