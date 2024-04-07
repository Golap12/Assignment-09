import { useContext } from "react";
import { Link } from "react-router-dom";
import { Tower } from './../../providers/AuthProvider';


const Register = () => {
    const {createUser} = useContext(Tower);

    const handleRegister = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        // const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        createUser(email,password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (


        <div>

            <div className="text-center lg:text-left">
                <h1 className="text-4xl font-bold text-center">Register!</h1>
            </div>

            <div className="lg:px-28 xl:px-52">
                <form onSubmit={handleRegister} className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" name="photoUrl" placeholder="Photo Url" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        {/* <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label> */}
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>

                <p className="label-text-alt text-center ">Already have an account? Please <span className="link font-bold"><Link to='/login'>Login</Link></span></p>
            </div>

        </div>

    );
};

export default Register;