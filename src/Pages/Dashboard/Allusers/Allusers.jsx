import { useQuery } from '@tanstack/react-query';
// import Swal from 'sweetalert2';
// import React from 'react';

const Allusers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    })
    const makeAdmin = user =>{
        fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method:'PATCH',
    
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                console.log(data)
                // Swal.fire(
                //     'Good job!',
                //     'You clicked the button!',
                //     'success'
                //   )
            }
        })
    }
    const makeInstructor = user =>{
        fetch(`http://localhost:5000/users/instructor/${user._id}`,{
            method:'PATCH',
    
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                console.log(data)
                // Swal.fire(
                //     'Good job!',
                //     'You clicked the button!',
                //     'success'
                //   )
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
                            <th>Instructor</th>
                            <th>Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user,index)=>
                                <tr key={user._id}>
                                <th>{index +1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user.role === 'instructor' ? 'instructor' :  <button
                                        onClick={() => makeInstructor(user)}
                                      
                                      >
                                        Make Instructor
                                      </button>
                                    }
                                    </td>
                                <td>
                                    {
                                        user.role ==='admin' ? 'admin' :  <button
                                        onClick={() => makeAdmin(user)}
                                      
                                      >
                                        Make Instructor
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