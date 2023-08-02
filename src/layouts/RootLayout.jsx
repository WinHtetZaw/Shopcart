// * react router dom
import { Outlet, useLocation } from "react-router-dom";

// * components
import Navbar from "../navbar/Navbar";
import Foot from "../components/Foot";

const RootLayout = () => {
  // * hooks
  const location = useLocation();
  return (
    <div className="h-screen overflow-y-scroll scroll-smooth">
      <nav className={`${location.pathname === "/" && "hidden"}`}>
        <Navbar />
      </nav>
      {/* <main className=" min-h-[55vh] px-3 md:px-10"> */}
      <main className="min-h-[70vh]">
        <Outlet />
      </main>
      <footer className={`${location.pathname === "/" && "hidden"}`}>
        <Foot />
      </footer>
    </div>
  );
};

export default RootLayout;
