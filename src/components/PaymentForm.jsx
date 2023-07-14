import React from "react";

const PaymentForm = () => {
  return (
    <>
      <form className=" shadow-4 rounded-lg p-5 md:p-10 w-full h-fit flex flex-col gap-5">
        <h1 className="">Select Payment Methods</h1>

        <section className="bdr-1 rounded-md">
          {/* top  */}
          <div className="flex justify-between items-center border-b-[1.5px] border-black border-opacity-[0.15] p-3">
            <span className="flex items-center gap-2">
              <input type="radio" name="card_type" />
              <h2>Credit Card</h2>
            </span>
            <img className=" w-7" src="/png/visa.png" alt="visa_png" />
          </div>

          <div className=" flex flex-col gap-3 px-3 py-5">
            {/* card number  */}
            <input
              placeholder="Card Number"
              type="number"
              className="form-input"
            />

            {/* Cardholder name  */}
            <input
              placeholder="Cardholder name"
              type="text"
              className="form-input"
            />

            {/* card number && cvv */}
            <span className=" w-full flex gap-3">
              <input
                placeholder="Card Number"
                type="date"
                className="form-input w-full"
              />
              <input
                placeholder="CVV"
                type="text"
                className="form-input w-full"
              />
            </span>
          </div>
        </section>

        {/* paypal  */}
        <section className="flex justify-between items-center bdr-1 rounded-md">
          <div className="flex items-center gap-2 p-3">
            <input type="radio" name="card_type" />
            <h2>Paypal</h2>
          </div>

          <img className=" w-12 mr-3" src="/png/paypal.png" alt="" />
        </section>

        {/* amazon  */}
        <section className="flex items-center justify-between bdr-1 rounded-md">
          <div className="flex items-center gap-2 p-3">
            <input type="radio" name="card_type" />
            <h2>Amazon</h2>
          </div>
          <div className="mr-3 pt-2">
            <img className="w-10 " src="/png/amazon.png" alt="" />
          </div>
        </section>
      </form>
    </>
  );
};

export default PaymentForm;
