import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { HiArrowLeft } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Button from "./Button";

function Location() {
  const mapStyles = {
    height: "110vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 41.40338,
    lng: 41.40338,
  };

  return (
    <>
      <div className=" relative w-390 h-844 border m-auto mt-8 flex flex-col">
        <div className="flex flex-row pl-5 pt-3 pb-2 items-center gap-2">
          <HiArrowLeft />
          <p className="font-bold">Your address/Location</p>
        </div>
        <LoadScript
          className="z-0"
          googleMapsApiKey="https://www.google.com/maps/@35.7476896,51.4204603,15z?entry=ttu"
        >
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={13}
            center={defaultCenter}
          />
        </LoadScript>
        <div className="absolute bottom-0 w-360 h-500 rounded-t-3xl shadow-lg z-10 bg-white ">
          <p className="text-center ml-4 mr-4 border-b font-bold pt-5 pb-4">
            Location Details
          </p>
          <div className="flex flex-col gap-5 m-4">
            <p className="font-bold">Address</p>
            <div className="flex flex-row items-center gap-5">
              <input className="bg-textarea-primary-color p-3 w-308 rounded-xl shadow-md focus:border-0" />
              <FaLocationDot className="text-primary-color bg-calendar-primary p-1 rounded-full" />
            </div>
            <NavLink to="/payment">
              <Button />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Location;
