import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Foot from "../components/Foot";
import { useSelector } from "react-redux";

// ${!scrollable ? "h-screen overflow-hidden" : "overflow-auto"}

const RootLayout = () => {
  const { scrollable } = useSelector((state) => state.generalSlice);
  // console.log("scrollable ---> ", scrollable);
  return (
    <div className="h-screen overflow-y-scroll scroll-smooth">
      <nav>
        <Navbar />
      </nav>
      {/* <main className=" min-h-[55vh] px-3 md:px-10"> */}
      <main className="min-h-[70vh]">
        <Outlet />
      </main>
      <footer>
        <Foot />
      </footer>
    </div>
  );
};

export default RootLayout;
