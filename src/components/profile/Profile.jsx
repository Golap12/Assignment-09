import { useContext } from 'react';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import { Tower } from '../../providers/AuthProvider';

const Profile = () => {

  const {user, updateUserProfile} = useContext(Tower);

  const handleUpdateProfile = (e) =>{
    e.preventDefault();

    const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photoURL = form.get('photoURL');



        updateUserProfile(name, photoURL)
        .then(() =>{
          console.log("Profile Updated")
        })
        .catch()
  }


  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mt-10">Update Your Profile</h1>
      <hr className="w-2/4 mx-auto mt-5 border-2" />

      <div className="lg:w-2/4 xl:w-1/3 md:w-2/4 mx-auto border-2 mt-5 pb-5 rounded-lg">
        <form onSubmit={handleUpdateProfile} className="mt-10 px-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder={user?.displayName}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder={user?.email}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">
                Photo URL
              </span>
            </label>
            <input
              type="text"
              name="photoURL"
              placeholder={user?.photoURL}
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <AwesomeButton type='secondary'><p>Update Profile</p></AwesomeButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
