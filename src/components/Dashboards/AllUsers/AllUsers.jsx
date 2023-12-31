import { useEffect, useState } from "react";



const AllUsers = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('https://newspaper-server-wheat.vercel.app/user')
            .then(res => res.json())
            .then(data => setUser(data));
    }, [])

    
   
    return (
        <div>
            <h1 className="text-4xl text-center my-10">All Users</h1>

            <div className="overflow-x-auto ml-5">
                <table className="table  w-full ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                SL.
                            </th>


                            <th>Email</th>
                            <th>Image</th>
                            <th>Role</th>
                            

                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((user,index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                
                                <td>
                                    {user.email}
                                   
                                </td>

                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="https://i.ibb.co/Vg80T5P/profile.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        
                                    </div>
                                </td>
                                <td>
                              <button  className="btn btn-active btn-primary"> Make Admin</button>
                                   
                                </td>
                              
                            </tr>)
                        }
                        

                    </tbody>
                </table>
                <div className="join mx-96 my-10">
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="1" checked />
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
</div>
            </div>
        </div>


    );
};

export default AllUsers;

