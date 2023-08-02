// * react
import { useState } from "react";

// * react router dom
import { Link, useNavigate } from "react-router-dom";

// * react hook form
import { useForm } from "react-hook-form";

// * react hot toast
import { toast } from "react-hot-toast";

const ForgotPwForm = () => {
  const [loginErr, setLoginErr] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "johndoe@gmail.com" },
  });

  // ? UAI ---> user account information
  const onSubmit = (data) => {
    const UAI = JSON.parse(localStorage.getItem("shopcart-UAI"));
    // console.log(UAI);
    // console.log(data);
    if (
      UAI &&
      data.email === UAI.email &&
      data.old_password === UAI.password &&
      UAI.auth === true
    ) {
      UAI.password = data.new_password;
      localStorage.setItem("shopcart-UAI", JSON.stringify(UAI));
      toast.success("Successfully password changed!");
      navigate("/log-in");
    } else {
      setLoginErr("Email or password wrong");
      toast.error("Password didn't change!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" max-w-[350px] mx-auto w-full p-7 xs:p-10 flex flex-col gap-5 glass-2 rounded-3xl"
    >
      {/* title  */}
      <h1 className=" text-2xl font-2 font-bold w-full text-center">
        Password Recovery
      </h1>

      {/* email  */}
      <div className=" flex flex-col gap-2">
        <label className="  capitalize" htmlFor="email">
          Email
        </label>
        <input
          {...register("email", { required: true })}
          type="email"
          className="form-input-2"
          placeholder="Enter email"
        />
        {errors.email && (
          <span className=" text-red-600 text-sm">
            The email field is required
          </span>
        )}
        {loginErr && <span className=" text-red-600">{loginErr}</span>}
      </div>

      {/* old password  */}
      <div className=" flex flex-col gap-2">
        <label className="  capitalize" htmlFor="old_password">
          Old Password
        </label>
        <input
          {...register("old_password", { required: true, minLength: 6 })}
          type="password"
          className="form-input-2"
          placeholder="Password . . . "
        />
        {errors.old_password && errors.old_password.type === "required" && (
          <span className=" text-red-600 text-sm">
            The password field is required
          </span>
        )}
        {errors.old_password && errors.old_password.type === "minLength" && (
          <span className=" text-red-600 text-sm text-start">
            Password must be at least 6 characters
          </span>
        )}
      </div>

      {/* new password  */}
      <div className=" flex flex-col gap-2">
        <label className="  capitalize" htmlFor="new_password">
          New Password
        </label>
        <input
          {...register("new_password", { required: true, minLength: 6 })}
          type="password"
          className="form-input-2 placeholder:text-slate-600"
          placeholder="Password . . . "
        />
        {errors.new_password && errors.new_password.type === "required" && (
          <span className=" text-red-600 text-sm">
            The password field is required
          </span>
        )}
        {errors.new_password && errors.new_password.type === "minLength" && (
          <span className=" text-red-600 text-sm text-start">
            Password must be at least 6 characters
          </span>
        )}
      </div>

      <div className="flex gap-3 text-sm">
        <Link to={"/log-up"}>
          <span className="underline select-none cursor-pointer">Register</span>
        </Link>
        <Link to={"/log-in"}>
          <span className="underline select-none cursor-pointer">Log in</span>
        </Link>
      </div>

      <button className="uppercase btn-1 bg-teal-800 w-fit text-slate-50 mx-auto">
        Save changes
      </button>
    </form>
  );
};

export default ForgotPwForm;
