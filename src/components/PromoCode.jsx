import { NavLink } from "react-router-dom";
import Button from "./Button";
function PromoCode() {
  return (
    <>
      <div className="flex flex-row gap-5">
        <textarea className="bg-textarea-primary-color w-308 h-84 rounded-2xl shadow-md"></textarea>
        <button className="text-primary-color rounded-full p-1 pt-0 pb-0 bg-textarea-primary-color">
          +
        </button>{" "}
      </div>
      <NavLink to="/location">
        <Button />
      </NavLink>
    </>
  );
}

export default PromoCode;
