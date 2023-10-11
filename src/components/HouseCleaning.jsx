import { HiArrowLeft } from "react-icons/hi2";
import CleaningItems from "./CleaningItems";
import Button from "./Button";

import { NavLink } from "react-router-dom";

function HouseCleaning() {
  return (
    <>
      <div className="w-390 h-844 border m-auto mt-8 p-5 gap-5 flex flex-col">
        <div className="flex flex-row items-center gap-2">
          <NavLink to="/">
            <HiArrowLeft />
          </NavLink>
          <p>House Cleaning</p>
        </div>
        <div>
          <p>Enter The number of terms to be cleaned</p>
        </div>

        <CleaningItems />
        <CleaningItems />
        <CleaningItems />
        <CleaningItems />
        <CleaningItems />
        <CleaningItems />
        <CleaningItems />
        <CleaningItems />
        <NavLink to="/calendar" className="relative end-0">
          <Button />
        </NavLink>
      </div>
    </>
  );
}

export default HouseCleaning;
