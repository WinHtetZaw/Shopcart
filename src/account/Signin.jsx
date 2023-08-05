// * react
import { useState } from "react";

// * react router dom
import { Link, useNavigate } from "react-router-dom";

// * react hook form
import { useForm } from "react-hook-form";

// * react hot toast
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setIsLogin } from "../redux/features/generalSlice";
import { setUaiToStorage } from "../components/helper";

const Signin = () => {
  const [loginErr, setLoginErr] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "johndoe@gmail.com", password: "aaaaaaaa" },
  });

  // * UAI ---> user account information
  const onSubmit = (data) => {
    // const UAI = JSON.parse(localStorage.getItem("shopcart-UAI"));
    const UAI = JSON.parse(localStorage.getItem("shopcart-UAI"));
    if (UAI && data.email === UAI.email && data.password === UAI.password) {
      UAI.auth = true;
      setUaiToStorage(UAI);
      // localStorage.setItem("shopcart-UAI", JSON.stringify(UAI));
      toast.success("Successfully Log in!");
      dispatch(setIsLogin(true));
      navigate("/products");
    } else {
      setLoginErr("Email or password wrong");
      toast.error("Cannot log in");
    }
  };

  return (
    <>
      <div className=" bg-[url(https://images.pexels.com/photos/236910/pexels-photo-236910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] relative flex items-center justify-center p-3 xs:p-10 w-screen h-screen bg-cover bg-center bg-no-repeat overflow-hidden overflow-y-scroll">
        <Link to={"/products"}>
          <button className="absolute top-5 left-10 text-slate-50 tracking-widest font-light italic">
            Go to shop . . .
          </button>
        </Link>

        {/* log in form  */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-[350px] mx-auto w-full h-fit p-7 xs:p-10 flex flex-col gap-5 glass-2 rounded-3xl"
        >
          {/* title  */}
          <h1 className=" text-2xl font-2 font-bold w-full text-center">
            Log in from
          </h1>

          {/* email  */}
          <div className=" flex flex-col gap-2">
            <label className=" opacity-80 capitalize" htmlFor="email">
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              className="form-input-2"
            />
            {errors.email && (
              <span className=" text-red-600 text-sm">
                The email field is required
              </span>
            )}
            {loginErr && <span className=" text-red-600">{loginErr}</span>}
          </div>

          {/* password  */}
          <div className=" flex flex-col gap-2">
            <label className=" opacity-80 capitalize" htmlFor="password">
              Password
            </label>
            <input
              {...register("password", { required: true, minLength: 6 })}
              type="password"
              className="form-input-2"
            />
            {errors.password && errors.password.type === "required" && (
              <span className=" text-red-600 text-sm">
                The password field is required
              </span>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <span className=" text-red-600 text-sm text-start">
                Password must be at least 6 characters
              </span>
            )}
          </div>

          {/* <div className="flex flex-col">
            <span className="flex gap-3 items-center">
              <input
                {...register("isChecked", { required: true })}
                className=" accent-teal-800"
                type="checkbox"
              />
              <p className="opacity-80 tracking-wide">
                I accept the Terms of Use & Privacy Policy
              </p>
            </span>
            {errors.isChecked && errors.isChecked.type === "required" && (
              <span className=" text-red-600 text-sm">
                You must agree to the terms and privacy policy
              </span>
            )}
          </div> */}

          <section>
            <Link to={"/register"}>
              <div className=" text-sm flex gap-2">
                <p>Don&apos;t have an account?</p>
                <span className="underline select-none cursor-pointer">
                  Register
                </span>
              </div>
            </Link>

            <Link to={"/password-recovery"}>
              <p className=" text-sm underline">Forgot password</p>
            </Link>
          </section>

          <button className=" w-[10rem] uppercase btn-1 bg-teal-800 text-slate-50 mx-auto">
            Log in
          </button>
        </form>
        {/* </div> */}
      </div>
    </>
  );
};

export default Signin;
