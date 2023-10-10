function PromoCode() {
  return (
    <>
      <div className="flex flex-row gap-5">
        <textarea className="bg-textarea-primary-color w-308 h-84 rounded-2xl shadow-md"></textarea>
        <button className="text-primary-color rounded-full p-1 pt-0 pb-0 bg-textarea-primary-color">
          +
        </button>{" "}
      </div>
    </>
  );
}

export default PromoCode;
