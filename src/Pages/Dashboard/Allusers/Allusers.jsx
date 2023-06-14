import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import axios from 'axios';
import Swal from 'sweetalert2';

// import Swal from 'sweetalert2';
// import React from 'react';

const Allusers = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data
    })
    const HandleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(data => {
                if (data.data.modifiedCount) {
                    console.log(data)
                    Swal.fire(
                        'Good job!',
                        'You clicked the button!',
                        'success'
                      )
                }
            })
    }
    const HandleMakeInstructor = user => {
        axiosSecure.patch(`/users/instructor/${user._id}`)
           
            .then(data => {
                if (data.data.modifiedCount) {
                    console.log(data)
                    Swal.fire(
                        'Good job!',
                        'You clicked the button!',
                        'success'
                      )
                }
            })
    }
    return (
        <div>
            {users.length}
            <div className="w-1/2 overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Instructor</th>
                            <th>Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, index) =>
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    
                                    <td className="px-6 py-4">
                                        {
                                            user.role === 'instructor'
                                                ?
                                                <button
                                                    disabled
                                                    className="btn btn-accent w-full">
                                                    Instructor
                                                </button>
                                                :
                                                <button
                                                    disabled={user?.role === 'admin'}
                                                    onClick={() => HandleMakeInstructor(user)}
                                                    className="btn btn-accent w-full">
                                                    Make Instructor
                                                </button>
                                        }
                                    </td>
                                    <td>
                                    {
                                            user.role === 'admin'
                                                ?
                                                <button
                                                    disabled
                                                    className=" btn btn-accent w-full">
                                                    Admin
                                                </button>
                                                :
                                                <button
                                                    onClick={() => HandleMakeAdmin(user)}
                                                    className=" btn btn-accent w-full">
                                                    Make Admin
                                                </button>
                                        }
                                    </td>
                                </tr>)
                        }

                        {/* row 2 */}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allusers;