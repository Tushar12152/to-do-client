import axios from "axios";


const axiosSecure=axios.create({
     baseURL:'https://task-management-server-brown-nu.vercel.app'
})


const useAxiosSecure = () => {


    return axiosSecure;
};

export default useAxiosSecure;