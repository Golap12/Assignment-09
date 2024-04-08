import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Tower } from './../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoEyeOffSharp } from "react-icons/io5";
import { MdRemoveRedEye } from "react-icons/md";


const Register = () => {
    const { createUser } = useContext(Tower);
    const [error, setError] = useState("");
    const [registerError, setRegisterError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        setRegisterError('');

        if (password.length < 6) {
            setError("Password should be at least 6 Character!")
            return
        }

        if (!/[A-Z]/.test(password)) {
            setError("Password must contain at least 1 uppercase character!")
            return
        }

        if (!/[a-z]/.test(password)) {
            setError("Password must contain at least 1 lowercase character!")
            return
        }

        setError("");


        createUser(email, password)
            .then(result => {
                console.log(result.user);
                toast('Registered Successfully')

            })
            .catch(error => {
                console.log(error);
                setRegisterError(error.message)
            })
    }

    return (


        <div>

            <div className="text-center lg:text-left">
                <h1 className="text-3xl font-bold text-center">Create An Account</h1>
            </div>

            <div className="lg:w-2/4 xl:w-1/3 md:w-2/4 mx-auto border-2 mt-5 pb-5 rounded-lg">
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

                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            placeholder="Password"
                            className="input input-bordered"
                            required />

                            <span onClick={()=> setShowPassword(!showPassword)} className="cursor-pointer absolute top-[3.3rem] right-[11px]">{showPassword ? <IoEyeOffSharp></IoEyeOffSharp> : <MdRemoveRedEye></MdRemoveRedEye>}</span>
                    </div>

                    {
                        error && <small className="text-red-800">{error}</small>

                    }
                    {
                        registerError && <small className="text-red-700">{registerError}</small>
                    }

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>

                <p className="label-text-alt text-center ">Already have an account? Please <span className="link font-bold text-blue-500"><Link to='/login'>Login</Link></span></p>
            </div>
            <ToastContainer />
        </div>

    );
};

export default Register;