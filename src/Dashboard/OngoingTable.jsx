import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Title from "../API's/Title";

const OngoingTable = () => {

    const {user}=useAuth()
    const axiosSecure = useAxiosSecure();

    const { data: fetchedTasks = [] } = useQuery({
        queryKey: ['task'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tasks`);
            return res.data;
        },
    });

    const task=fetchedTasks.filter(task=> task.email==user?.email)

    // console.log(task);
    const ongoing=task.filter(item=>item.status=='ongoing')

    // console.log(ongoing);

    return (
        <div>
          <Title heading={'Not Completed Tasks'}></Title>
          <h1 className="text-lg">Total incomplete Task : {ongoing.length}</h1>
             <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Priority</th>
        <th>Status</th>
        <th>Added  by</th>
      </tr>
    </thead>
    <tbody>
      {
      ongoing.map((item,idx)=> <tr key={item._id}>
      <th>{idx+1}</th>
      <td>{item?.Title}</td>
      <td>{item?.Priority}</td>
      <td>{item?.status}</td>
      <td>{item?.email}</td>
    </tr>)
      
      }
     
     
      
    </tbody>
  </table>
</div> 
        </div>
    );
};

export default OngoingTable;