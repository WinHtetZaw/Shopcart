// * react router dom
import { Link } from "react-router-dom";

// * components
import ForgotPwForm from "./ForgotPwForm";

const ForgotPw = () => {
  return (
    <>
      <div className=" bg-[url(https://images.pexels.com/photos/236910/pexels-photo-236910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] relative flex justify-center items-center p-3 xs:p-10 w-screen h-screen bg-cover bg-center bg-no-repeat overflow-hidden overflow-y-scroll">
        <Link to={"/products"}>
          <button className="absolute top-5 left-10 text-slate-50 tracking-widest font-light italic">
            Go to shop . . .
          </button>
        </Link>
        <ForgotPwForm />
      </div>
    </>
  );
};

export default ForgotPw;
