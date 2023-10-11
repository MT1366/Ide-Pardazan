import { HiArrowLeft } from "react-icons/hi2";
import { HiBanknotes } from "react-icons/hi2";
import Button from "./Button";
import { NavLink } from "react-router-dom";

function Review() {
  return (
    <div className="w-390 h-844 border m-auto mt-8 p-5 gap-5 flex flex-col">
      <div className="flex flex-row items-center gap-2">
        <NavLink to="/payment">
          <HiArrowLeft />
        </NavLink>
        <p>Review</p>
      </div>
      <div className="border border-calendar-primary rounded-3xl shadow-lg">
        <div className="flex flex-row justify-between p-4">
          <p>Service</p>
          <p className="font-bold">House cleaning</p>
        </div>
        <div className="flex flex-row justify-between p-4">
          <p>Category</p>
          <p className="font-bold">Cleaning</p>
        </div>
        <div className="flex flex-row justify-between p-4">
          <p>Worker name</p>
          <p className="font-bold">Joulia Fox</p>
        </div>
        <div className="flex flex-row justify-between p-4">
          <p>Date and time</p>
          <p className="font-bold">Dec 23, 2024 | 10:00 AM</p>
        </div>
        <div className="flex flex-row justify-between p-4">
          <p>Working hours</p>
          <p className="font-bold">2 Hours</p>
        </div>
      </div>
      <div className="border border-calendar-primary rounded-3xl shadow-lg">
        <p className="p-4">House Cleaning Details</p>
      </div>

      <div className="border border-calendar-primary rounded-3xl shadow-lg">
        <div className="flex flex-row justify-between p-4">
          <p>House Cleaning</p>
          <p className="font-bold">123 $</p>
        </div>{" "}
        <div className="flex flex-row justify-between p-4">
          <p>Promo</p>
          <p className="font-bold text-primary-color">- 20 $</p>
        </div>{" "}
        <hr className="ml-3 mr-3" />
        <div className="flex flex-row justify-between p-4">
          <p>Total</p>
          <p className="font-bold text-primary-color">103 $</p>
        </div>{" "}
      </div>

      <div className="flex flex-row items-center justify-between pl-4 border border-calendar-primary rounded-3xl shadow-lg">
        <div className="flex items-center">
          <HiBanknotes className="text-primary-color text-xl" />
          <p className="p-4">Cash Money</p>
        </div>
        <div className="pr-4">
          <p>Cash Money</p>
        </div>
      </div>

      <Button />
    </div>
  );
}

export default Review;
