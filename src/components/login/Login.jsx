/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Tower } from "./../../providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import loginImg from "../../assets/images/171.jpg";

const Login = () => {
  const { signInUser, googleLogin, githubLogin } = useContext(Tower);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");

    signInUser(email, password)
      .then((result) => {
        navigate(location?.state ? location.state : "/");
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const continueWithGoogle = () => {
    googleLogin().then((result) => {
      navigate(location?.state ? location.state : "/");
      console.log(result);
    });
  };

  const continueWithGithub = () => {
    githubLogin().then((result) => {
      navigate(location?.state ? location.state : "/");
      console.log(result);
    });
  };

  return (
    <div className="mt-10">
      <div className="text-center lg:text-left">
        <h1 className="text-3xl font-bold text-center">Login Now!</h1>
      </div>

      <div className="md:flex flex-row-reverse p-9 border mt-5 rounded-lg gap-5">


        <div className=" flex-1">
          <div className=" border-2 mt-5 pb-5 rounded-lg">
            <form onSubmit={handleLogin} className="card-body">
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
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <AwesomeButton type="primary">
                  <p>Login</p>
                </AwesomeButton>
              </div>
            </form>
            <p className="label-text-alt text-center ">
              Don't have an account? Please{" "}
              <span className="link font-bold text-blue-500">
                <Link to="/register">Register</Link>
              </span>
            </p>
          </div>

          <div className=" flex flex-col justify-center items-center gap-2 mt-5 ">
            <div className="flex flex-col w-2/4 border-opacity-50">
              <div className="divider">OR</div>
            </div>
            <button
              onClick={continueWithGoogle}
              className="w-full shadow-sm flex gap-2 items-center p-2 border-2 rounded-lg hover:bg-gray-200"
            >
              <span>
                <FcGoogle size={25} />
              </span>
              <span>Continue With Google</span>
            </button>

            <button
              onClick={continueWithGithub}
              className="w-full shadow-sm flex gap-2 items-center p-2 border-2 rounded-lg hover:bg-gray-200"
            >
              <span>
                <FaGithub size={25} />
              </span>
              <span>Continue With Github</span>
            </button>
          </div>

        </div>


        <div className="flex-1 mt-5">
          <img src={loginImg} alt="" />
        </div>


      </div>
    </div>
  );
};

export default Login;
