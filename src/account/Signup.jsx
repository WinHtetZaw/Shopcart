// * react router dom
import { Link, useNavigate } from "react-router-dom";

// * react hook form
import { useForm } from "react-hook-form";

// * react hot toast
import { toast } from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first_name: "John",
      last_name: "Doe",
      email: "johndoe@gmail.com",
      password: "aaaaaaaa",
      password_confirmation: "aaaaaaaa",
    },
  });

  // ? UAI ---> user account information
  const onSubmit = (data) => {
    const token = Date.now();
    const UAI = {
      name: data.name,
      email: data.email,
      password: data.password,
      auth: false,
      token,
    };
    localStorage.setItem("shopcart-UAI", JSON.stringify(UAI));
    toast.success("Successfully register!");
    navigate("/log-in");
  };

  return (
    <>
      <div className=" bg-[url(https://images.pexels.com/photos/236910/pexels-photo-236910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] relative p-3 xs:p-10 w-screen h-screen bg-cover bg-center bg-no-repeat overflow-hidden overflow-y-scroll">

        <Link to={"/products"}>
          <button className="absolute top-5 left-10 text-slate-50 tracking-widest font-light italic">
            Go to shop . . .
          </button>
        </Link>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" max-w-[500px] mx-auto w-full p-7 xs:p-10 flex flex-col gap-5 glass-2 rounded-3xl"
        >
          {/* title  */}
          <h1 className=" text-2xl font-2 font-bold mb-5 w-full text-center">
            Registration from
          </h1>

          {/* name  */}
          <div className=" flex gap-5 xs:gap-0 flex-col xs:flex-row xs:justify-between w-full">
            <span className=" flex flex-col gap-2 xs:w-[48%]">
              <label className=" opacity-80 capitalize" htmlFor="first_name">
                First Name
              </label>
              <input
                {...register("first_name", { required: true })}
                type="text"
                className="form-input-2"
                name="first_name"
              />
              {errors.first_name && (
                <span className=" text-red-600 text-sm">
                  First Name is required
                </span>
              )}
            </span>

            <span className=" flex flex-col gap-2 xs:w-[48%]">
              <label className=" opacity-80 capitalize" htmlFor="last_name">
                Last Name
              </label>
              <input
                {...register("last_name", { required: true })}
                type="text"
                className="form-input-2"
                name="last_name"
              />
              {errors.last_name && (
                <span className=" text-red-600 text-sm">
                  Last Name is required
                </span>
              )}
            </span>
          </div>

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

          {/* password_confirmation  */}
          <div className=" flex flex-col gap-2">
            <label
              className=" opacity-80 capitalize"
              htmlFor="password_confirmation"
            >
              confirm password
            </label>
            <input
              {...register("password_confirmation", {
                required: true,
                validate: (value) => value === watch("password"),
              })}
              type="password"
              className="form-input-2"
              name="password_confirmation"
            />
            {errors.password_confirmation &&
              errors.password_confirmation.type === "required" && (
                <span className=" text-red-600 text-sm">
                  Confirm Password is required
                </span>
              )}
            {errors.password_confirmation &&
              errors.password_confirmation.type === "validate" && (
                <span className=" text-red-600 text-sm text-start">
                  Password does not match
                </span>
              )}
          </div>

          <div className="flex flex-col">
            <span className="flex gap-3 items-center">
              <input
                {...register("isChecked", { required: true })}
                className=" accent-teal-800"
                type="checkbox"
                defaultChecked
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
          </div>

          <div className=" text-sm flex gap-2">
            <p>Already have an account?</p>
            <Link to={"/log-in"}>
              <span className="underline select-none cursor-pointer">
                Log in
              </span>
            </Link>
          </div>

          <button className=" uppercase btn-1 bg-teal-800 w-fit text-slate-50 mx-auto">
            Register now
          </button>
        </form>
        {/* </div> */}
      </div>
    </>
  );
};

export default Signup;
