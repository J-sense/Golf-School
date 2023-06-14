import Swal from "sweetalert2";

export const saveUser = user =>{
    const curretUser = {
        email : user.email
    }
    fetch(`http://localhost:5000/${user?.email}`,{
        method: 'PUT',
        headers:{
            'content-type' :'application/json'
        },
        body: JSON.stringify(curretUser)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if (data.insertedId){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Sign Up successfully',
                showConfirmButton: false,
                timer: 1500
              });
        }

    }
    )
}