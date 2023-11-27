import { Link } from "react-router-dom";


const User = ({user}) => {
    const {_id, email} = user;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
       
        <figure><img src="https://i.ibb.co/Vg80T5P/profile.png"alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title text-3xl font-semibold ">{email}</h2>
             
            <Link to={`/updateUser/${_id}`}>
            <button className="btn btn-secondary">Update</button> 
            </Link>
           
        </div>
        
        
               
            
            </div>
    );
};

export default User;