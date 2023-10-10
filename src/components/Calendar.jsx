import { HiArrowLeft } from "react-icons/hi2";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import CleaningItems from "./CleaningItems";
import StartTime from "./StartTime";
import PromoCode from "./PromoCode";

function Calendar() {
  return (
    <div className="w-390 h-844 border m-auto mt-8 p-5 gap-5 flex flex-col">
      <div className="flex flex-row items-center gap-2">
        <HiArrowLeft />
        <p className="font-bold">Booking Details</p>
      </div>
      <div className="flex flex-col gap-6">
        <p className="">Select date</p>
        <DateCalendar className="shadow-lg bg-calendar-primary" />
      </div>
      <CleaningItems />
      <StartTime />
      <PromoCode />
    </div>
  );
}

export default Calendar;
