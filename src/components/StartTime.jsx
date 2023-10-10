function StartTime() {
  return (
    <div>
      <p className="font-bold">Choose start time</p>
      <div className="flex gap-5 items-center flex-nowrap text-center text-primary-color mt-2">
        <p className=" w-100 rounded-full border-2 p-2 pt-1 pb-1 text-sm">
          09:00 AM
        </p>
        <p className=" w-100 rounded-full border-2 p-2 pt-1 pb-1 text-sm">
          10:00 AM
        </p>
        <p className=" w-100 rounded-full border-2 p-2 pt-1 pb-1 text-sm">
          11:00 AM
        </p>
      </div>
    </div>
  );
}

export default StartTime;
