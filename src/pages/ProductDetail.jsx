import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../redux/services/productApi";
import { Rating } from "@mantine/core";
import { BiMinus, BiPlus } from "react-icons/bi";
import { PiTruckLight } from "react-icons/pi";
import { AiOutlineCalendar } from "react-icons/ai";

const ProductDetail = () => {
  const { id } = useParams();
  const { data, isLoading, isSuccess } = useGetSingleProductQuery(id);

  isSuccess && console.log("sig product ---", data);
  return (
    <div className=" flex gap-10">
      {/* left  */}
      <section className=" py-10 w-1/2">
        <div className=" mb-7 rounded-lg w-full aspect-square bg-gray-100">
          <img
            className=" w-full h-full object-contain"
            src={data?.thumbnail}
            alt={data?.title}
          />
        </div>

        <div className="w-full grid grid-cols-4 items-center gap-5">
          {data?.images?.map((el) => (
            <div className=" w-full aspect-square bg-gray-100 rounded" key={el}>
              <img className=" w-full h-full object-contain" src={el}></img>
            </div>
          ))}
        </div>
      </section>

      {/* right  */}
      <article className=" w-1/2 py-10 text-slate-800">
        <section className=" flex flex-col gap-3 border-b border-black border-opacity-30 pb-7">
          <h1 className=" text-2xl font-bold font-2">{data?.title}</h1>
          <p className=" truncate text-sm font-1 opacity-85">
            {data?.description}
          </p>
          <p className=" text-cyan-800 font-1">${data?.price}</p>
          <Rating
            color="rgb(17 94 89)"
            fractions={3}
            defaultValue={Math.round(data?.rating)}
            readOnly 
          />
        </section>

        <section className=" py-7">
          <div className=" inline-flex mr-5 text-cyan-800 w-fit bg-gray-100 rounded-full py-2 px-4 text-lg gap-5 items-center">
            <span>
              <BiMinus />
            </span>
            <span>1</span>
            <span>
              <BiPlus />
            </span>
          </div>
          <h6 className=" inline-block text-sm text-slate-800">
            <span>
              Only{" "}
              <span className=" text-orange-500">
                {data?.stock} item{data?.stock > 1 && "s"}
              </span>{" "}
              left!
            </span>
            <span className=" block"> Don&apos;t miss it</span>
          </h6>
          <br />
          <button className="mt-7 active:scale-95 transition duration-200 mr-5 text-sm btn-1 w-[10rem] text-slate-50 bg-cyan-800 capitalize">
            buy now
          </button>
          <button className="btn-1 active:scale-95 transition duration-200 w-[10rem] text-sm ring-1 ring-inset ring-cyan-800 text-cyan-800 ">
            Add to Cart
          </button>
        </section>

        <section className=" p-3 border shadow-1">
          <span className=" flex gap-3 text-sm mb-7">
            <div className=" m-1">
              <PiTruckLight className=" text-orange-500 text-lg" />
            </div>
            <div>
              <p className=" font-bold">Free Delivery</p>
              <h4 className="">
                <span className=" relative after-underline w-fit border-opacity-0">
                  Enter your Postal code for Delivery Availability
                </span>
              </h4>
            </div>
          </span>

          <span className=" flex gap-3 text-sm">
            <div className=" m-1">
              <AiOutlineCalendar className=" text-orange-500 text-lg" />
            </div>
            <div>
              <p className=" font-bold">Return Delivery</p>
              <p className=" inline-block mr-1">
                Free 30days Delivery Returns.
              </p>
              <h4 className=" inline-block relative after-underline w-fit border-opacity-0">
                Details
              </h4>
            </div>
          </span>
        </section>
      </article>
    </div>
  );
};

export default ProductDetail;
