import { useLoaderData, useNavigate } from "react-router-dom";
import Title from "../API's/Title";
import swal from "sweetalert";
import { useForm } from "react-hook-form";
// import { useQuery } from "@tanstack/react-query";
// import useAuth from "../Hooks/useAuth";
import { useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const Update = () => {
    const updateData=useLoaderData()
// console.log(updateData);


const navigate=useNavigate()
const axiosSecure = useAxiosSecure();
const [priority, setPriority] = useState('');


// const {user}=useAuth()
// const userEmail=user?.email
// const { data:users=[] } = useQuery({
//     queryKey: ['users'],
//     queryFn: async () =>{
//         const res=await axiosSecure.get(`/users/${userEmail}`)

//         return res.data
//     }
    
//   })

// console.log(data.name);



const handleSelectChange = (event) => {
    setPriority(event.target.value);
};

const { register, handleSubmit, formState: { errors }, reset } = useForm();

const onSubmit = async (data) => {

    const task = { ...data, Priority: priority};
    // console.log(task);
    const res = await axiosSecure.put(`/tasks/${updateData._id}`, task);
    // console.log(res.data);
    if (res?.data?.modifiedCount>0) {
      swal("Wow!", "Your Task is updated", "success");
      reset();
      navigate(-1)

}

}





    return (
        <div>
            <Title heading={'Update Task'}></Title>
              

            <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        
    <div className="lg:flex gap-4">
    <div className="form-control w-[50%]">
        <label className="label">
          <span className="label-text">Title</span>
        </label>
        <input defaultValue={updateData.Title}   {...register("Title")} type="text" placeholder="Title" className="input input-bordered"  required />
      </div>

    <div className="form-control  w-[50%]">
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <input  defaultValue={updateData.description}  {...register("description")} type="text" placeholder="Description" className="input input-bordered" required />
      </div>
    </div>






  


    <div className="lg:flex gap-4">
<div className="form-control  w-[50%]">
        <label className="label">
          <span className="label-text">DeadLines</span>
        </label>
        <input defaultValue={updateData.date}    {...register("date")} type="date" placeholder="Date" className="input input-bordered" required />
      </div>


    <div className="form-control  w-[50%]">
        
        <label htmlFor="selectOption">Priority</label>
    <select className="input input-bordered" id="category" name="category" value={priority} onChange={handleSelectChange}>
      <option value="low">Low</option>
      <option value="moderate">Moderate</option>
      <option value="high">High</option>
  
    </select>
      </div>
    </div>


        <div className="form-control mt-2 w-[100%]">
          <input
            type="submit"
            value="Update Task"
            className="input input-bordered bg-[#6069a6] cursor-pointer text-white"
          />
        </div>
        {errors.exampleRequired && <span>This field is required</span>}
      </form>

      <div className="form-control mt-2 w-[100%]">
       
      </div>
           </div>


        </div>
    );
};

export default Update;