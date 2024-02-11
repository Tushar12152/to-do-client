import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Title from "../API's/Title";

const Profile = () => {
const {user}=useAuth()
const axiosSecure = useAxiosSecure();

const { data: users = [] } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
        const res = await axiosSecure.get(`/users/${user?.email}`)
        return res.data;
    },
});


console.log(users);
 
const {name,image,email}=users



    return (
        <div className="p-10 border-4 min-h-screen w-full md:w-[90%] mx-auto">
        <Title heading={`${name}'s Profile`} />
  
        <div className="flex flex-col md:flex-row items-center md:gap-24 w-full">
            <div className="md:w-1/2">
                <div className="avatar">
                    <div className="w-24 rounded-full ring ml-4 mt-20 ring-[#f76042] ring-offset-base-100 ring-offset-2">
                        <img src={image} alt="Profile" />
                    </div>
                </div>
                <h1 className="text-xl font-bold mt-2">Email: <span className="lg:text-xl text-sm">{email}</span></h1>
                <h1 className="text-xl font-bold mt-2">Name:  <span className="lg:text-xl text-sm">{name}</span></h1>
                
            </div>
     
         
        </div>
    </div>
    );
};

export default Profile;