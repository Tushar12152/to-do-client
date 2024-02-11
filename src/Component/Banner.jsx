import { Link } from "react-router-dom";
import Container from "../Utils/Container";
import useAuth from "../Hooks/useAuth";




const Banner = () => {

    const {user}=useAuth()

    return (
         <Container>

<div
            className="relative min-h-screen rounded-lg mt-5 z-0"
            style={{ backgroundImage: `url('https://i.ibb.co/j3tFtq7/i-Stock-518310332-300x200.jpg')`  , backgroundRepeat:'no-repeat',backgroundSize:'cover',}} 
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center py-20">
                <h1 className="text-3xl font-bold mb-4 ">To-Do app management system</h1>
                <p className="text-lg mb-4 text-center w-96">Streamline your workflow and boost productivity with our intuitive task management platform. Stay organized.</p>
                <div className="flex items-center">
                   <Link to={user?"/dashboard":'/login'}> <button className="btn bg-[#6069a6] text-white">Let’s Explore</button></Link>
                </div>
            </div>
        </div>
         </Container>
    );
};

export default Banner;