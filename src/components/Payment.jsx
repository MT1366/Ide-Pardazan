import { HiArrowLeft } from "react-icons/hi2";
import { HiShoppingCart } from "react-icons/hi2";
import { HiBanknotes } from "react-icons/hi2";
import { FaApplePay } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { PiGoogleCardboardLogoFill } from "react-icons/pi";

import Button from "./Button";

function Payment() {
  return (
    <div className=" relative w-390 h-844 border m-auto mt-8 p-5 gap-5 flex flex-col">
      <div className="flex flex-row items-center gap-2">
        <HiArrowLeft />
        <p className="font-bold">Payment Methods</p>
      </div>
      <div className="flex flex-col gap-10">
        <p>Select the payment method you want to use</p>
        <div className="flex items-center border border-calendar-primary justify-start rounded-2xl gap-3 mt-3 p-5 w-350 h-58 shadow-md">
          <HiShoppingCart className="text-primary-color text-xl" />
          <p>Paypal</p>
        </div>
        <div className="flex items-center border border-calendar-primary justify-start rounded-2xl gap-3 mt-3 p-5 w-350 h-58 shadow-md">
          <PiGoogleCardboardLogoFill className="text-primary-color text-xl" />
          <p>Google pay</p>
        </div>
        <div className="flex items-center border border-calendar-primary justify-start rounded-2xl gap-3 mt-3 p-5 w-350 h-58 shadow-md">
          <FaApplePay className="text-primary-color text-4xl" />
          <p>Cash Money</p>
        </div>
        <div className="flex items-center border border-calendar-primary justify-start rounded-2xl gap-3 mt-3 p-5 w-350 h-58 shadow-md">
          <HiBanknotes className="text-primary-color text-xl" />
          <p>Cash Money</p>
        </div>
      </div>
      <NavLink className="absolute bottom-8" to="/review">
        <Button />
      </NavLink>
    </div>
  );
}

export default Payment;
