const ShippingForm = () => {
  return (
    <>
      <form className=" accent-teal-800 border shadow-4 rounded-lg p-5 md:p-10 w-full h-fit flex flex-col gap-5">
        <h1 className="">Shipping Methods</h1>

        {/* Free shipping */}
        <section className="text-sm bdr-1 rounded-md">
          <div className="flex justify-between items-center p-3">
            <h2 className="flex items-center gap-2">
              <input type="radio" name="shipping" />
              <span>Free shipping</span>
            </h2>
            <p>$0</p>
          </div>
          <p className="pb-3 px-3 ml-5 opacity-70">7-30 business days</p>
        </section>

        {/* Regular shipping */}
        <section className="text-sm bdr-1 rounded-md">
          <div className="flex justify-between items-center p-3">
            <h2 className="flex items-center gap-2">
              <input type="radio" name="shipping" />
              <span>Regular shipping</span>
            </h2>
            <p>$22.50</p>
          </div>
          <p className="pb-3 px-3 ml-5 opacity-70">1-3 business days</p>
        </section>

        {/* Express shipping */}
        <section className="text-sm bdr-1 rounded-md">
          <div className="flex justify-between items-center p-3">
            <h2 className="flex items-center gap-2">
              <input type="radio" name="shipping" />
              <span>Express shipping</span>
            </h2>
            <p>$7.50</p>
          </div>
          <p className="pb-3 px-3 ml-5 opacity-70">3-14 business days</p>
        </section>
      </form>
    </>
  );
};

export default ShippingForm;
