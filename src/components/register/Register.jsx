import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Tower } from "./../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoEyeOffSharp } from "react-icons/io5";
import { MdRemoveRedEye } from "react-icons/md";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import regImg from "../../assets/images/172.png";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Register = () => {
  const navigate = useNavigate();

  const { createUser, updateUserProfile } = useContext(Tower);
  const [error, setError] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const name = form.get("name");
    const photoURL = form.get("photoUrl");
    // console.log(name,photoURL);
    setRegisterError("");

    if (password.length < 6) {
      setError("Password should be at least 6 Character!");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least 1 uppercase character!");
      return;
    }

    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least 1 lowercase character!");
      return;
    }

    setError("");

    createUser(email, password)
    .then((result) => {
      console.log(result.user);
      toast("Successfully Registered");
      updateUserProfile(name, photoURL)
        .then(() => {
          setTimeout(() => {
            navigate('/login');
          }, 2000);
        })
        .catch((error) => {
          console.error("Error updating user profile:", error);
        });
    })
    .catch((error) => {
      console.error("Registration error:", error);
      setRegisterError(error.slice(22, 50));
    });
  };

  return (
    <div
      data-aos="fade-down"
      data-aos-duration="1000"
      className="mt-10 p-5"
    >
      <Helmet>
        <title>New Home-Register</title>
      </Helmet>

      <div className="text-center lg:text-left">
        <h1 className="text-3xl font-bold text-center">Create An Account!</h1>
      </div>

      <div className=" flex flex-col md:flex-row-reverse mt-5 md:p-9 p-4 gap-5 space-y-5 border rounded-lg">
        <div className="flex-1 border-2 rounded-lg bg-slate-100 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <h1 className="text-center text-xl md:text-3xl font-bold mt-10">
            Provide Your Information
          </h1>
          <hr className="w-3/4 mx-auto mt-2 border-dashed border-2" />

          <form
            data-aos="zoom-in"
            data-aos-duration="1000"
            onSubmit={handleRegister}
            className="card-body p-4 md:p-8 "
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered "
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL (optional)</span>
              </label>
              <input
                type="text"
                name="photoUrl"
                placeholder="Photo Url"
                className="input input-bordered"
              />
            </div>

            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer absolute top-[3.3rem] right-[11px]"
              >
                {showPassword ? (
                  <IoEyeOffSharp></IoEyeOffSharp>
                ) : (
                  <MdRemoveRedEye></MdRemoveRedEye>
                )}
              </span>
            </div>

            {error && <small className="text-red-800">{error}</small>}
            {registerError && (
              <small className="text-red-700">{registerError}</small>
            )}

            <div className="form-control mt-6">
              <AwesomeButton>
                <p>Register</p>
              </AwesomeButton>
            </div>
          </form>

          <p className="label-text-alt text-center mb-4 ">
            Already have an account? Please{" "}
            <span className="link font-bold text-blue-500">
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>

        <div className="flex-1">
          <div>
            <img src={regImg} alt="" />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
