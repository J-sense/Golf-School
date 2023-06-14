import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import login from '../../assets/picture/img-11.jpg'
// import { Authcontext } from '../Provider/authProvider';
import { FaBeer,FaGoogle, FaSalesforce } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';
import { saveUser } from '../api/auth';
const Login = () => {
    const { user, signIn,GoogleSignIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation()
    const from = location .state?.from?.pathname || "/"
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const password = form.password.value
        const email = form.email.value;
        console.log(password, email)
        signIn(email, password)
            .then((reult) => {
                const signed = reult.user;
                console.log(signed);
                UpdateProfile(user,name,photo)
                saveUser(reult.user)
                navigate(from, {replace : true})
                
            })
            .catch(err =>{
                const errormessage = err.message
            })

            
        const UpdateProfile = (user, name, photo) => {
            UpdateUserData(user, {
                displayName: name,
                photoURL: photo
            })
                .then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
        };


    }
    const handlegoogleLogin =()=>{
        GoogleSignIn()
        .then(result =>{
            const loggeduser = result.user;
            // saveUser(result.user)
            navigate(from,{replace: true})
        })
        .catch(err =>{
            const errormessage = err.message
        })
    }
    
  
    return (
        <form onSubmit={handleLogin}>
            <div className='md:flex '>
              
                <dir classNames='w-full'>

                    <div className="card   bg-pink-200 bg-base-100">
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
                                <input type="text" placeholder="password" name='password' className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-pink-400 border-0">Login</button>
                            </div>
                            <div className='mt-3'>
                                Don't have an account?<Link to='/signup' className='underline text-pink-900 font-bold'> Register here</Link>
                            </div>
                        </div>
                        <div className='text-center m-7'>
                            <button onClick={handlegoogleLogin} className="btn btn-outline"> <FaGoogle className='mr-3' />Button</button>
                        </div>

                    </div>
                </dir>
            </div>

        </form>


    );
};

export default Login;