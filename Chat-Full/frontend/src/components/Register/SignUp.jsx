// Icons
import OpenEye from "../../icons/OpenEye";
import CloseEye from "../../icons/CloseEye";
import Profile from "../../icons/Profile";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../slices/user.slice";
const SignUp = () => {

  const usernameRef = useRef();
  const fullNameRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userName = usernameRef.current.value.trim();
    const fullName = fullNameRef.current.value.trim();
    const password = passwordRef.current.value.trim();
    const confirmPassword = confirmRef.current.value.trim();
    try {
      const response = await fetch('/api/auth/signup', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userName,
          fullName,
          password,
          confirmPassword,
          gender: "male",
          profilePic: "https://avatar.iran.liara.run/public/boy",
        }),
      });

      const data = await response.json();

      if (response.ok) {
        dispatch(setUser(data));
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/")
      };

      if (!response.ok) {
        console.log(`Error, ${data.error}`);;
      }

    } catch (error) {
      console.log(`Fetch error`, error);
    }
  }

  return (
    <div className="h-[600px]  mx-auto w-1/4 flex items-center justify-center flex-col">
      <div className="text-center mb-5">
        <h1 className="text-3xl text-bold">Welcome</h1>
        <h5 className="text-xs text-neutral-500 ">Create your account</h5>
      </div>
      <form onSubmit={handleSubmit} className="w-full space-y-5">
        {/* fullName */}
        <div className="w-full">
          <label className="text-gray-500 text-sm" htmlFor="fullName">
            Full Name
          </label>
          <div className="relative h-10">
            <input
              ref={fullNameRef}
              type="fullName"
              id="fullName"
              placeholder="Huseyn Mirzayev"
              className="absolute w-full h-full text-sm py-3 top-0 left-0 focus:outline-none bg-transparent border-b-2 border-gray-300 focus:border-lightOrange "
            />
            <Profile
              color="gray"
              className="w-5 h-5 absolute top-1/2 -translate-y-1/2 right-0"
            />
          </div>
        </div>

        {/* Username */}
        <div className="w-full">
          <label className="text-gray-500 text-sm" htmlFor="username">
            Username
          </label>
          <div className="relative h-10">
            <input
              ref={usernameRef}
              type="text"
              id="username"
              placeholder="hsynmrzyv"
              className="absolute w-full h-full text-sm py-3 top-0 left-0 focus:outline-none bg-transparent border-b-2 border-gray-300 focus:border-lightOrange "
            />
            <Profile
              color="gray"
              className="w-5 h-5 absolute top-1/2 -translate-y-1/2 right-0"
            />
          </div>
        </div>

        {/* Password */}
        <div className="w-full">
          <label className="text-gray-500 text-sm" htmlFor="password">
            Password
          </label>
          <div className="relative h-10">
            <input
              ref={passwordRef}
              type="password"
              id="password"
              placeholder="6+ strong character"
              className="absolute w-full h-full text-sm py-3 top-0 left-0 focus:outline-none bg-transparent border-b-2 border-gray-300 focus:border-lightOrange"
            />
            <span
              // onClick={toggleShowPassword}
              className="w-5 h-5 absolute top-1/2 -translate-y-1/2 right-0 cursor-pointer"
            >
              {/*!showPassword &&*/ <CloseEye color="gray" className="w-5 h-5 " />}
              {/*showPassword &&*/ <OpenEye color="gray" className="w-5 h-5 " />}
            </span>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="w-full">
          <label className="text-gray-500 text-sm" htmlFor="confirmassowrd">
            Confirm Password
          </label>
          <div className="relative h-10">
            <input
              ref={confirmRef}
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              className="absolute w-full h-full text-sm py-3 top-0 left-0 focus:outline-none bg-transparent border-b-2 border-gray-300 focus:border-lightOrange"
            />
            <span
              // onClick={toggleShowConfirmPassword}
              className="w-5 h-5 absolute top-1/2 -translate-y-1/2 right-0 cursor-pointer"
            >
              {/*showConfirmPassword && */(
                <CloseEye color="gray" className="w-5 h-5 " />
              )}
              {/*!showConfirmPassword && */(
                <OpenEye color="gray" className="w-5 h-5 " />
              )}
            </span>
          </div>
        </div>

        <button className="w-full bg-lightOrange text-white p-2 rounded-xl hover:scale-95 transition-all duration-200">
          Sign Up
        </button>
        <p className="text-center text-xs">
          Do you have an account?{" "}
          <Link className="text-lightOrange" to="/sign-in">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
