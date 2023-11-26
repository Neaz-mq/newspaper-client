import { NavLink, Outlet } from "react-router-dom";
import { FaAddressCard } from "react-icons/fa";

const Dashboard = () => {
    return (
        <div className="flex">
            {/* sidebar */}
            <div className="w-64 min-h-screen bg-sky-200">
            <ul className="menu p-4">
            
                <li><NavLink to='/dashboard/users'><FaAddressCard />All Users</NavLink></li>
                <li><NavLink to='/dashboard/articles'><FaAddressCard />All Articles</NavLink></li>
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