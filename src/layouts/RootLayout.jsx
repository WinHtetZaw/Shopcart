import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Foot from "../components/Foot";

const RootLayout = () => {
  return (
    <>
      <nav>
        <Navbar/>
      </nav>
      <main className=" min-h-[55vh] px-3 md:px-10">
        <Outlet />
      </main>
      <footer>
        <Foot/>
      </footer>
    </>
  );
};

export default RootLayout;
