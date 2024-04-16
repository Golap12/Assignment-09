import { useContext, useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { Tower } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import avatar from "../../assets/images/avatar.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";
// ..
AOS.init();

const Profile = () => {
  const { user, setUser, updateUserProfile } = useContext(Tower);

  const [name, setName] = useState(user?.displayName || '');
  const [email, setEmail] = useState(user?.email || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photoURL = form.get("photoURL");

    updateUserProfile(name, photoURL)
      .then(() => {
        setUser({displayName:name, photoURL:photoURL});
        console.log("Profile Updated");
        toast("Profile Updated");
      })
      .catch();
  };

  return (
    <div className="text-center p-5 text-white">
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

      <div className="flex gap-5 flex-col lg:flex-row">
        <div className="flex-1 border border-[#08ccc4] mt-5 pb-5 rounded-lg p-5 flex flex-col gap-5 justify-center items-center">
          <div data-aos="fade-right" data-aos-duration="1000">
            {user?.photoURL ? (
              <img
                className="rounded-full border-4 border-[#55c2ca] w-[80px]"
                src={user?.photoURL}
                alt=""
              />
            ) : (
              <img
                className="rounded-full border-4 border-[#55c2ca] w-[80px]"
                src={avatar}
                alt=""
              />
            )}
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="space-y-2 *:border *:p-2 *:border-[#55c2ca] w-full *:overflow-auto"
          >
            <p>
              Name :{" "}
              {user?.displayName ? (
                <span>{user.displayName}</span>
              ) : (
                <span>Update Your Profile Name</span>
              )}
            </p>
            <p data-aos="fade-right" data-aos-duration="1000">
              Email : {user?.email}
            </p>
            <p data-aos="fade-right" data-aos-duration="1000">
              PhotoURL :{" "}
              {user?.photoURL ? (
                <span>{user.photoURL}</span>
              ) : (
                <span>Update Your PhotoURL</span>
              )}
            </p>
          </div>
        </div>

        <div className=" flex-1 border border-[#08ccc4] mt-5 pb-5 rounded-lg">
          <h1 className=" text-yellow-300 mt-5 text-sm">
            <span className=" text-lg font-bold ">Note :</span>{" "}
            <span className="text-gray-400">
              You Can Only Edit Your Name And Photo URL
            </span>
          </h1>
          <form
            onSubmit={handleUpdateProfile}
            className="md:mt-10 mt-5 px-5 text-white"
          >
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="form-control"
            >
              <label className="label">
                <span className="label-text text-xl font-semibold text-white">
                  Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder={user?.photoURL || "Enter photo URL"}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered bg-[#0f3338]"
              />
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="form-control"
            >
              <label className="label">
                <span className="label-text text-xl font-semibold text-white">
                  Email
                </span>
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={user?.email}
                className="input input-bordered bg-[#0f3338]"
              />
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="form-control"
            >
              <label className="label">
                <span className="label-text text-xl font-semibold text-white">
                  Photo URL
                </span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder={user?.photoURL || "Enter photo URL"}
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                className="input input-bordered bg-[#0f3338]"
              />
            </div>
            <div
              data-aos="flip-up"
              data-aos-duration="1000"
              className="form-control mt-6"
            >
              <AwesomeButton type="primary">
                <p>Update Profile</p>
              </AwesomeButton>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Profile;
