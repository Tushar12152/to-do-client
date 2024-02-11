import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
    const [show,setShow]=useState(false)
   const {SignIn}=useAuth()
  const navigate=useNavigate()





    const handleLogin=(e)=>{
         e.preventDefault()
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;




         SignIn(email,password)
         .then(res=>{
            if(res.user){
                 toast.success('Logged in')
                navigate('/dashboard')
            }
         })
         .catch(err=>{
            console.log(err);
         })
    }



    return (
        <div>
            <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          
      <form onSubmit={handleLogin} className="card-body">


    

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
            <p> Have no Account? please <Link className=" text-[#6069a6]" to='/register'>Register</Link></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#6069a6] text-white ">Log In</button>
        </div>
      </form>
      
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Login;