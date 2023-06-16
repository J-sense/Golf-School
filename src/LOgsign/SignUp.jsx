import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2'
import useAxiosSecure from '../hook/useAxiosSecure';
// const Swal = require('sweetalert2')


const SignUp = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user,createUser,updateUSerProfile } = useContext(AuthContext)
    const [error, setError] = useState('')
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        if (data.password !== data.confirm) {
            setError('password didnot matched')
           return
            
        }
        createUser(data.email, data.password)
            .then(resul => {
                const loggedUser = resul.user;
                console.log(loggedUser)
                const saveUSer = {name:data.name , email:data.email}
                updateUSerProfile(data.name,data.photourl)
                .then(()=>{
                    console.log('profile updated')
                 axiosSecure.post('/users',saveUSer)
                  .then(res =>{
                    if (res.data.insertedId){
                        reset()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Sign Up successfully',
                            showConfirmButton: false,
                            timer: 1500
                          });
                    }
                  })

                })
                // navigate('/')
            
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" {...register("name")} placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-500'>This field is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true, minLength: 6, pattern: /^[A-Z]+$/i })} placeholder="password" className="input input-bordered" />
                                {errors.password && <span className='text-red-500'>password at least six charecter</span>}
                                {errors.password && <span className='text-red-500'>Your password must contain at least one capital letter and a special charecter.</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="confirm" {...register("confirm")} placeholder="Confirm Password" className="input input-bordered" />
                                <p className='text-red-500'>
                                    {error}
                                </p>

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo-Url</span>
                                </label>
                                <input type="Photourl" {...register("Photourl")} placeholder="Photourl" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>

                        </form >
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;