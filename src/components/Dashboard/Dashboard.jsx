import { NavLink, Outlet } from "react-router-dom";
import { FaAddressCard, FaAlignJustify, FaLandmark, FaStamp } from "react-icons/fa";

const Dashboard = () => {

    const isAdmin = true;


    return (
        <div className="flex">
            {/* sidebar */}
            <div className="w-64 min-h-screen bg-sky-200">
            <ul className="menu p-4">
           {
              isAdmin ? <> 
               <li><NavLink to='/dashboard/adminHome'><FaLandmark />Admin Home</NavLink></li>
            
            <li><NavLink to='/dashboard/users'><FaAddressCard />All Users</NavLink></li>
            <li><NavLink to='/dashboard/articles'><FaAlignJustify />All Articles</NavLink></li>
            <li><NavLink to='/dashboard/publishers'><FaStamp />Add Publishers</NavLink></li>   

            <li><NavLink to='/'><FaLandmark />Users Home</NavLink></li>
              </>
              :
              <>
               <li><NavLink to='/'><FaLandmark />Users Home</NavLink></li>
            
            <li><NavLink to='/dashboard/users'><FaAddressCard />All Users</NavLink></li>
            <li><NavLink to='/dashboard/articles'><FaAlignJustify />All Articles</NavLink></li>
            <li><NavLink to='/dashboard/publishers'><FaStamp />Add Publishers</NavLink></li>
              
              </>
           }
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;