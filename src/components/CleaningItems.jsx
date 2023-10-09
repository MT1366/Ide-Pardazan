function CleaningItems() {
  return (
    <div className="flex fle-row justify-between p-5 items-center rounded-2xl w-350 h-58 shadow bg-items-bg-primary">
      <div>
        <h2>Living room</h2>
      </div>
      <div className="flex gap-5 items-center ">
        <button className="text-primary-color rounded-full p-1 bg-secondary-color">
          -
        </button>
        <p className="text-primary-color">0</p>
        <button className="text-primary-color rounded-full p-1 bg-secondary-color">
          +
        </button>
      </div>
    </div>
  );
}

export default CleaningItems;
