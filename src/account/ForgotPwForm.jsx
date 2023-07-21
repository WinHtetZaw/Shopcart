import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const ForgotPwForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "johndoe@gmail.com" },
  });

  // * UAI ---> user account information
  const onSubmit = (data) => {
    const UAI = JSON.parse(localStorage.getItem("shopcart-UAI"));
    if (UAI && data.email === UAI.email && data.password === UAI.password) {
      UAI.auth = true;
      localStorage.setItem("shopcart-UAI", JSON.stringify(UAI));
      toast.success("Successfully Log in!");
      navigate("/products");
      //   console.log(UAI);
    } else {
      setLoginErr("Email or password wrong");
      toast.error("Cannot Log in");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" max-w-[350px] mx-auto w-full p-5 sm:p-10 flex flex-col gap-5 glass-2 rounded-3xl"
    >
      {/* title  */}
      <h1 className=" text-2xl font-2 font-bold w-full text-center">
        Password Recovery
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
        {/* {loginErr && <span className=" text-red-600">{loginErr}</span>} */}
      </div>

      {/* old password  */}
      <div className=" flex flex-col gap-2">
        <label className=" opacity-80 capitalize" htmlFor="old_password">
          Old Password
        </label>
        <input
          {...register("old_password", { required: true, minLength: 6 })}
          type="password"
          className="form-input-2"
        />
        {errors.old_password && errors.old_password.type === "required" && (
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

      {/* new password  */}
      <div className=" flex flex-col gap-2">
        <label className=" opacity-80 capitalize" htmlFor="new_password">
          New Password
        </label>
        <input
          {...register("new_password", { required: true, minLength: 6 })}
          type="password"
          className="form-input-2"
        />
        {errors.new_password && errors.new_password.type === "required" && (
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
      {/* 
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
      </section> */}

      <button className=" mt-3 uppercase btn-1 bg-teal-800 w-fit text-slate-50 mx-auto">
        Register now
      </button>
    </form>
  );
};

export default ForgotPwForm;
