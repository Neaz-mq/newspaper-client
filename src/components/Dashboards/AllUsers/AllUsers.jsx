

const AllUsers = () => {
    return (
        <div>
            <h1 className="text-4xl text-center my-10">All Users</h1>

            <div className="overflow-x-auto ml-5">
                <table className="table  w-full ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                ID
                            </th>
                          
                            <th>Name</th>
                            <th>Email</th>
                            <th>Image</th>
                            <th><button className="btn btn-active btn-primary">Admin</button></th>
                          
                        </tr>
                    </thead>
                    <tbody>
                      


                    </tbody>
                </table>
            </div>
        </div>

        
    );
};

export default AllUsers;