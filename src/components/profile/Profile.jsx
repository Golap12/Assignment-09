import { useContext } from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { Tower } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/* eslint-disable react/prop-types */
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { Helmet } from "react-helmet-async";
// ..
AOS.init();

const Profile = () => {
  const { user, updateUserProfile } = useContext(Tower);

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photoURL = form.get("photoURL");

    updateUserProfile(name, photoURL)
      .then(() => {
        console.log("Profile Updated");
        toast("Profile Updated");
      })
      .catch();
  };

  return (
    <div className="text-center p-5">
      <Helmet>
        <title>New Home-Profile</title>
      </Helmet>
      <h1
        data-aos="flip-up"
        data-aos-duration="1000"
        className="md:text-4xl text-2xl font-bold mt-10"
      >
        Update Your Profile
      </h1>
      <hr className="w-2/4 mx-auto mt-5 border border-[#08ccc4] border-dashed" />

      <div className=" lg:w-2/4 xl:w-1/3 md:w-2/4 mx-auto border border-[#08ccc4] mt-5 pb-5 rounded-lg">
        <h1 className=" text-[#00000061] mt-5 text-sm">
          <span className="text-black text-lg font-bold">Note :</span> You Can
          Only Edit Your Name And Photo URL
        </h1>
        <form onSubmit={handleUpdateProfile} className="md:mt-10 mt-5 px-5">
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="form-control"
          >
            <label className="label">
              <span className="label-text text-xl font-semibold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder={user?.displayName}
              className="input input-bordered bg-[#edfefd]"
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="form-control"
          >
            <label className="label">
              <span className="label-text text-xl font-semibold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder={user?.email}
              className="input input-bordered bg-[#edfefd]"
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="form-control"
          >
            <label className="label">
              <span className="label-text text-xl font-semibold">
                Photo URL
              </span>
            </label>
            <input
              type="text"
              name="photoURL"
              placeholder={user?.photoURL}
              className="input input-bordered bg-[#edfefd]"
            />
          </div>
          <div
            data-aos="flip-up"
            data-aos-duration="1000"
            className="form-control mt-6"
          >
            <AwesomeButton type="secondary">
              <p>Update Profile</p>
            </AwesomeButton>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Profile;
