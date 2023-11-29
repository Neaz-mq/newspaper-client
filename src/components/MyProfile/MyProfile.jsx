import { useEffect, useState } from "react";
import User from "../User/User";


const MyProfile = () => {

    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch('https://newspaper-server-wheat.vercel.app/user')
            .then(res => res.json())
            .then(data => setUser(data));
    }, [])


    return (
        <div>
        <div className="text-center">
      <h2 className="text-5xl font-bold p-14 mb-5">User Profile</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2 gap-10  lg:mx-8 mx-5 md:ml-16 my-12">
    {
                user.map(user => <User
                    key={user._id}
                    user={user}
                ></User>)
            }
    </div>
    </div>
    );
};

export default MyProfile;