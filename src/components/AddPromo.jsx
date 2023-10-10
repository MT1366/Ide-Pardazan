import { HiArrowLeft } from "react-icons/hi2";
import { HiMagnifyingGlass } from "react-icons/hi2";
import PromoCard from "./PromoCard";
import { NavLink } from "react-router-dom";
import Button from "./Button";

function AddPromo() {
  return (
    <div className="w-390 h-844 border m-auto mt-8 p-5 gap-5 flex flex-col">
      <div className="flex flex-row items-center gap-2 justify-between">
        <div className="flex items-center gap-2">
          <HiArrowLeft />
          <p className="font-bold">Add Promo</p>
        </div>
        <HiMagnifyingGlass className="text-lg" />
      </div>{" "}
      <div className="flex flex-col gap-5">
        <PromoCard />
        <PromoCard />
        <PromoCard />
        <PromoCard />
        <PromoCard />
      </div>
      <div className="absolute bottom-0">
        <NavLink to="/location">
          <Button />
        </NavLink>
      </div>
    </div>
  );
}
export default AddPromo;
