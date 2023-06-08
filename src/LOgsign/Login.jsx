import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const Login = () => {

    const {user,signIn} =useContext(AuthContext)
    const handelLogin = event => {
        event.preventDefault();
        const form = event.target
        const email = form.email.value;
        const password= form.password.value;
        console.log(email,password)
        signIn(email,password)
        .then(result => {
            const logged =result.user
            console.log(logged)
            navigate(from,{replace : true})
        })
        .catch(err => console.log(err))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
           
            <form onSubmit={handelLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" name='password' placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                
                    <div className="form-control mt-6">
                        {/* <button className="btn btn-primary">Login</button> */}
                        <input type="submit" className='btn btn-primary' value="Login" />
                    </div>
                    <p>
                        New to here please <Link to='/signup'>Login </Link>
                    </p>
                </div>
            </form>
        </div>
    </div>
    );
};

export default Login;