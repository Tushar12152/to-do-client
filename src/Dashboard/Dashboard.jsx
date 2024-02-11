import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
              <div className="grid grid-cols-12 h-full">
             
            <div className="col-span-5 md:col-span-3  min-h-screen bg-[#6069a6] text-white">
                <ul className="menu p-4">
                    
                       <div>
                            <li>
                                <NavLink to="/dashboard/Profile">
                            
                                   Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/createTask">
                            
                                create new tasks</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/todo">
                            
                                to-do list</NavLink>
                            </li>


                            <li>
                                <NavLink to="/dashboard/previous">
                                    
                                see previous tasks</NavLink>
                            </li>
                            
                            <li>
                                <NavLink to="/dashboard/ongoing">
                                    
                               Not completed list</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/complete">
                                
                                Completed list </NavLink>
                            </li>
                           
                        </div>
                           
                 




                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                          
                            Home</NavLink>
                    </li>
                   
                </ul>
            </div>
            {/* dashboard content */}
            <div className="col-span-7 md:col-span-9  p-4 md:p-8">

                <Outlet></Outlet>

            </div>
        </div>
        </div>
    );
};

export default Dashboard;