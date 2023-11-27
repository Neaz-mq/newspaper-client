import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateUser = () => {
    const user = useLoaderData();
    const {_id, email} = user;

    const handleUpdateUser = event => {
        event.preventDefault();


        const form = event.target;
       
        const email = form.email.value;
      
      
      


        const UpdateUser = { email }

        console.log(UpdateUser);

         // send data to the server

         fetch(`http://localhost:5000/user/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User Information Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }
    return (
        <div className="bg-emerald-100 p-24">
        <h2 className="text-3xl font-extrabold text-center">Update User Information</h2>
        <div className='lg:ml-96 -mr-16 mt-8'>
        <form onSubmit={handleUpdateUser}>
            
           
          
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Email</span>
                    </label>
                    <label className="input-group">

                        <input type="email" name="email" defaultValue={email} placeholder="Email" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
          
            
           
           

            <div className="form-control md:w-1/2">
          
                <input type="submit" value="Update User" className="btn btn-block mt-10 btn-accent text-xl font-semibold" />
               
            </div>
        </form>
        </div>
    </div>
    );
};

export default UpdateUser;