/* eslint-disable react/no-unescaped-entities */
<<<<<<< HEAD
import { useContext, useState } from "react";
=======
import { useContext } from "react";
>>>>>>> origin/main
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Tower } from "./../../providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import loginImg from "../../assets/images/171.jpg";
import { Helmet } from "react-helmet-async";


const Login = () => {
  const { signInUser, googleLogin, githubLogin } = useContext(Tower);
  const [loginError, setLoginError] = useState("");

<<<<<<< HEAD
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
=======
    const { signInUser, googleLogin, githubLogin, user } = useContext(Tower);
    console.log('login a user', user);
    const location = useLocation();
    const navigate = useNavigate();
>>>>>>> origin/main

    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");

<<<<<<< HEAD
    setLoginError("");
=======
        const form = new FormData(e.currentTarget);

        const email = form.get('email');
        const password = form.get('password');

        signInUser(email, password)
            .then(result => {
                navigate(location?.state ? location.state : '/');
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
    }
>>>>>>> origin/main

    signInUser(email, password)
      .then((result) => {
        navigate(location?.state ? location.state : "/");
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
        setLoginError("Invalid Email or Password!");
      });
  };

<<<<<<< HEAD
  const continueWithGoogle = () => {
    googleLogin().then((result) => {
      navigate(location?.state ? location.state : "/");
      console.log(result);
    });
  };
=======
    const continueWithGoogle = () => {
        googleLogin()
            .then(result => {
                navigate(location?.state ? location.state : '/');
                console.log(result);
            })
    }

    const continueWithGithub = () => {
        githubLogin()
            .then(result => {
                navigate(location?.state ? location.state : '/');
                console.log(result);
            })
    }
>>>>>>> origin/main

  const continueWithGithub = () => {
    githubLogin().then((result) => {
      navigate(location?.state ? location.state : "/");
      console.log(result);
    });
  };

  return (
    <div className="mt-10">
      <Helmet>
        <title>New Home-Login</title>
      </Helmet>
      <div className="text-center lg:text-left">
        <h1 className="text-3xl font-bold text-center">Login Now!</h1>
      </div>

<<<<<<< HEAD
      <div className="flex md:flex-row-reverse flex-col sm:flex-col p-9 border mt-5 rounded-lg gap-5">
        <div className=" flex-1">
          <div className=" border-2 mt-5 pb-5 rounded-lg bg-[#effbff]">
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
                  {loginError && (
                    <small className="text-red-800">{loginError}</small>
                  )}
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
=======
    return (

        <div className="">
>>>>>>> origin/main

          <div className=" flex flex-col justify-center items-center gap-2 mt-5 ">
            <div className="flex flex-col w-2/4 border-opacity-50">
              <div className="divider">OR</div>
            </div>

<<<<<<< HEAD
            <p className="w-full" onClick={continueWithGoogle}>
              <AwesomeButton className="w-full" type="whatsapp">
                <span>
                  <FcGoogle size={30} />
                </span>
                <span className="ml-3">Continue With Google</span>
              </AwesomeButton>
            </p>
=======
            <div className="lg:w-2/4 xl:w-1/3 md:w-2/4 mx-auto border-2 mt-5 pb-5 rounded-lg">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="label-text-alt text-center ">Don't have an account? Please <span className="link font-bold text-blue-500"><Link to='/register'>Register</Link></span></p>
            </div>

            <div className="px-[2rem] flex flex-col justify-center items-center gap-2 mt-5 lg:w-2/4 xl:w-1/3 md:w-2/4 mx-auto">
                <div className="flex flex-col w-2/4 border-opacity-50">
                    <div className="divider">OR</div>
                </div>
                <button onClick={continueWithGoogle} className="w-full shadow-sm flex gap-2 items-center p-2 border-2 rounded-lg hover:bg-gray-200"><span><FcGoogle size={25} /></span><span>Continue With Google</span></button>

                <button onClick={continueWithGithub} className="w-full shadow-sm flex gap-2 items-center p-2 border-2 rounded-lg hover:bg-gray-200"><span><FaGithub size={25} /></span><span>Continue With Github</span></button>

            </div>
>>>>>>> origin/main

            <p className="w-full" onClick={continueWithGithub}>
              <AwesomeButton className="w-full" type="github">
                <span>
                  <FaGithub size={30} />
                </span>
                <span className="ml-3">Continue With Github</span>
              </AwesomeButton>
            </p>
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
