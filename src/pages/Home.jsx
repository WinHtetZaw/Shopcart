import { Link } from "react-router-dom";
// bg-[#bd3435]
const Home = () => {
  return (
    <div className=" w-full relative">
      <div className="">
        <img
          className=" w-full h-full absolute inset-0 object-cover blur-sm"
          src="https://images.pexels.com/photos/5264909/pexels-photo-5264909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
      </div>
      <article className="h-[90vh] bg-sky-500 bg-opacity-20 relative flex gap-5 p-40 text-slate-50 bg-no-repeat bg-cover">
        <h1 className="flex font-2 flex-col  absolute top-14 left-14 text-[5rem] w-1/2">
          <span>Choose</span>
          <span className=" whitespace-nowrap">Your Clothing</span>
          <span>Style!</span>
        </h1>
        <div className="w-[30%]"></div>
        <section className="aspect-video">
          <img
            className=" "
            src="https://images.pexels.com/photos/5264909/pexels-photo-5264909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </section>
        <section className="flex flex-col gap-5">
          <h1 className=" text-4xl font-mono">Fashion 23</h1>
          <p className=" opacity-80 tracking-wider text-sm line-clamp-3 w-full">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            iure deserunt nam aperiam? Illum ipsam consequuntur facilis
            cupiditate nihil, aut repellat consequatur, eius saepe accusantium
            labore eveniet! Eligendi, officiis officia.
          </p>
          <Link to={"/products"}>
            <button className="rounded-sm active:scale-95 transition duration-200 border opacity-70 hover:opacity-100 w-[8rem] py-2 px-4 text-sm">
              Explore
            </button>
          </Link>
        </section>
      </article>
    </div>
  );
};

export default Home;
