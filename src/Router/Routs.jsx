import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Home from "../Pages/Home";
import Login from "../Component/Login";
import Register from "../Component/Register";
import Benefit from "../Component/Benifit";
import About from "../Component/About";
import Others from "../Component/Others";
import Dashboard from "../Dashboard/Dashboard";
import Profile from "../Dashboard/Profile";
import CreateTask from "../Dashboard/CreateTask";
import TodoTableList from "../Dashboard/TodoTableList";
import OngoingTable from "../Dashboard/OngoingTable";
import Previous from "../Dashboard/Previous";
import CompletedTable from "../Dashboard/CompletedTable";
import Update from "../Dashboard/Update";




const Routs = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:'/',
                element:<Home/>
                
            },
            {
                path:'/benifit',
                element:<Benefit/>
            },
            {
                path:"/others",
                element:<Others/>
            },
            {
                path:'/about',
                element:<About/>
            }
        ]
    },
    {
        path:'/login',
        element:<Login/>
   },
   {
       path:"/register",
       element:<Register/>
   },
   {
    path:'/dashboard',
    element:<Dashboard/>,
    children:[
        {
            path:'/dashboard/createTask',
            element:<CreateTask/>
        },
        {
            path:'/dashboard/todo',
            element:<TodoTableList/>
        },
        {
            path:'/dashboard/ongoing',
            element:<OngoingTable/>
        },
        {
            path:'/dashboard/complete',
            element:<CompletedTable/>
        },
        {
            path:'/dashboard/previous',
            element:<Previous/>
        },
        {
             path:'/dashboard/Profile',
             element:<Profile/>
        },
        {
            path:'/dashboard/update/:id',
            element:<Update/>,
            loader:({params})=>fetch(`https://task-management-server-brown-nu.vercel.app/tasks/${params.id}`)
        }
    ]
   }
])
export default Routs;