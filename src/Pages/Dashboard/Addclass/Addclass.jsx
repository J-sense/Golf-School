import React from 'react'; import { useForm } from "react-hook-form";
import useAxiosSecure from '../../../hook/useAxiosSecure';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const Addclass = () => {
    const{user} =useContext(AuthContext)
    // console.log(user)
    const { register, reset, formState: { errors }, handleSubmit } = useForm();

    const [axiosSecure] = useAxiosSecure();

    const onSubmit = (data) => {
        // console.log(data);
        const { className, instructorEmail, instructorName, price, availableSeats, image } = data;
        const newClass = {
            className: className,
            image: image,
            instructorName: instructorName,
            instructorEmail: instructorEmail,
            enrolled: 0,
            status: 'pending',
            availableSeats: parseFloat(availableSeats),
            price: parseFloat(price)
        };
        console.log(newClass)

        
        axiosSecure.post('/addClasses', newClass)
            .then((data) => {
                console.log('after adding new data', data.data)
                if (data.data.insertedId) {
                    reset();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Class added successfully',
                        showConfirmButton: true,
                        // timer: 1500,
                        confirmButtonText: 'Ok'
                    })
                }
            })

    }


    return (
        <div className='text-center bg-slate-100 p-16' >
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='ClassName' className='w-[500px] rounded p-3'
                    {...register("className", { required: true })}

                />

                <br />
                <input placeholder='PhotUrl' className='w-[500px] my-3 rounded p-3'
                    {...register("image", { required: true })}

                />
                <br />

                <input placeholder='Instructor' readOnly defaultValue={user.displayName} className='w-[500px] my-3 rounded p-3'
                    {...register("instructorName", { required: true })}

                />
                <br />
                <input placeholder='Email' readOnly defaultValue={user.email} className='w-[500px] my-3 rounded p-3'
                    {...register("instructorEmail", { required: true })}

                />
                <br />
                <div className=' flex justify-center items-center gap-4'>
                    <input placeholder='Available Seats' type='number' className='w-[240px] my-3 rounded p-3'
                        {...register("availableSeats", { required: true })}

                    />
                    <input placeholder='Price' type='number' className='w-[240px] my-3 rounded p-3'
                        {...register("price", { required: true })}

                    />
                </div>




                <input type="submit" className='border border-0 px-8 py-2 rounded-md bg-red-200' />
            </form>
        </div>
    );
};

export default Addclass;