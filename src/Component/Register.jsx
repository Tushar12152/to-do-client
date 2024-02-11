import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible, AiFillGithub, AiOutlineGoogle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

import { imageUpload } from "../API's/ImageUpload";
import toast from "react-hot-toast";

import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";




const Register = () => {

    const [show,setShow]=useState(false)
   

    const axiosSecure=useAxiosSecure() 


      const {createUser,googlepopUp,logOut}=useAuth()
       const navigate= useNavigate()
      //  const userMail=user?.email;
      // user
      //  console.log(userMail);
     

       const handleRegister=async(e)=>{
        e.preventDefault()
        const form=e.target;
 
       
 
 
         const name= form.name.value;
         const photo= form.photo.files[0]
         const img= await imageUpload(photo)
         const image=img?.data?.display_url
         const email=form.email.value;
         const password=form.password.value;
 
         const usersInfo={
                      image,
                      email,
                      name,
                      
                  }
 
 
                  const result = await createUser(email, password)
                  // console.log(result.user);
 
                          if(result?.user){
                             
                              axiosSecure.post('/users',usersInfo)
                              .then(res=>{
                                   if(res?.data?.insertedId){
                                    toast.success('Your Registration Compleate')
                                    logOut()
                                    .then(()=>{
                                        navigate('/login')})
                                   }
                              })
              
                             
                          }
 
       
 
 
         
         // console.log(name,image,email,password);
 }
  
  
 const { data= [] } = useQuery({
  queryKey: ['user'],
  queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
  },
});
  
// console.log(data);
  
  
      const handleGooglePopup=()=>{
        googlepopUp()
        .then(res=>{
            // console.log(res.user);
  
           
            if(res.user){
  
              const usersInfo={
                image:res?.user?.photoURL,
                email:res?.user?.email,
                name:res.user.displayName,
              
            }
  
            const sendData=data.find(item=>item.email===res?.user?.email)
            // console.log(!sendData);
            if(!sendData){
              axiosSecure.post('/users',usersInfo)
            }
            
  
                toast.success('You are Signed Up')
                navigate('/')
               
            }
        })
        .catch(err=>{
            toast.error(err.message);
        })
    }
  












    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          
      <form onSubmit={handleRegister} className="card-body">

      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Upload Photo</span>
          </label>
          <input
                required
                type='file'
                id='image'
                name='photo'
                accept='image/*'
              />
         
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"  name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="relative ">
          <input type={show?"text":"password"} name="password" placeholder="password" className="input input-bordered w-full" required />
           <span onClick={()=>setShow(!show)} className="absolute top-4 right-1">{ show? <AiFillEye/>:<AiFillEyeInvisible/>}</span>
          </div>
          <label className="label">
            <p> Already have an Account? please <Link className=" text-[#6069a6]" to='/login'>Log In</Link></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#6069a6] text-white ">Register</button>
        </div>
      </form>
       <div>
           <h1 className="text-center font-bold text-lg text-[#6069a6] border-b-2  border-[#6069a6] w-60 mx-auto pb-2">Sign Up With</h1>

           <div className="ml-32 flex p-2 gap-5"> 
              <button onClick={handleGooglePopup} className=" text-2xl  text-[#6069a6]"> <AiOutlineGoogle/></button>
              <button className=" text-2xl  text-[#6069a6]"> <AiFillGithub/></button>
           </div>
       </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;