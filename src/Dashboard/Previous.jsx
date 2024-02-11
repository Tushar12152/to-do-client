import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import toast from "react-hot-toast";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import Title from "../API's/Title";

const Previous = () => {

    const {user}=useAuth()
    const axiosSecure = useAxiosSecure();

    const { data: fetchedTasks = [],refetch } = useQuery({
        queryKey: ['task'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tasks`);
            return res.data;
        },
    });

    const task=fetchedTasks.filter(task=> task.email==user?.email)

    // console.log(task);


    const handleDelete=(id,title)=>{



        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
             
                axiosSecure.delete(`/tasks/${id}`)
                .then((res)=>{
                   if(res.data.deletedCount>0){
                       toast.success(`${title} deleted success`)
                       refetch()
                   }
                })


            } else {
              swal("Your imaginary file is safe!");
            }
          });




         
    }




    return (
        <div>

<Title heading={'All  Tasks'}></Title>

              <div>
             <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Priority</th>
        <th>Status</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
      task.map((item,idx)=> <tr key={item._id}>
      <th>{idx+1}</th>
      <td>{item?.Title}</td>
      <td>{item?.Priority}</td>
      <td>{item?.status}</td>
      <td><Link to={`/dashboard/update/${item._id}`}><button  className="text-xl text-[#6069a6]"><AiFillEdit/></button></Link></td>
      <td><button onClick={()=>handleDelete(item?._id,item?.Title)} className="text-xl text-[#6069a6]"><AiFillDelete/></button></td>
    </tr>)
      
      }
     
     
      
    </tbody>
  </table>
</div> 
        </div>
        </div>
    );
};

export default Previous;