import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios'
import { LogIn } from "lucide-react";

const Signup = () => {
  
const navigate=useNavigate();

let [err, setErr]= useState({})

  let [formData, setFormData] = useState({
    name: "",
    email: "",
    number:"",
    password: ""
  });



  let handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  let handleSubmit = async(e) => {
    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const strongPass=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

    e.preventDefault();

    let newErr={};

    let api="http://localhost:3000/movie";


    if( formData.name.trim()==""){
      newErr.name="Name is required"
    }
    if(formData.number.length != 10){
     newErr.number="Phone number must be 10 digits"
    }
    if(!emailPattern.test(formData.email)){
      newErr.email="Enter a vaild Email"
    }
    if(!strongPass.test(formData.password)){
      newErr.pass="Password must contain uppercase, lowercase, number & special character"
    }

    if(Object.keys(newErr).length>0){
      setErr(newErr);
      return;
    }

    setErr({});  //clear preious errors


     let res= await axios.get(`${api}?email=${formData.email}`)
     let res1= await axios.get(`${api}?number=${formData.number}`)

     if(res.data.length>0){
       return alert("Email Already Exists")
     }
     else if(res1.data.length>0){
      return alert("Number Already Exists")
     }
     else{
      axios.post(api,formData).then(()=>{
       alert("Signup Successfull");
      navigate("/login")

    })
     }
 
    
  };

  return (
    <div className="w-full max-w-sm bg-white rounded-xl shadow-lg ">
        <div className=" w-full h-8  flex justify-end ">
           <div onClick={()=>navigate(-1)} className=" w-8 h-full rounded-full bg-black flex justify-center items-center text-white font-extrabold cursor-pointer"> ✕</div> 
        </div>
        <div className="p-6">
      <h2 className=" text-2xl font-semibold text-center mb-6">
        Create Account
      </h2>
      

      <form onSubmit={handleSubmit} className="space-y-4">
        {err.name &&  <p className="text-red-500 text-sm">{err.name}</p>}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          // required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
        />
         {err.email &&  <p className="text-red-500 text-sm">{err.email}</p>}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          // required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
        />
         {err.number &&  <p className="text-red-500 text-sm">{err.number}</p>}
        <input
          type="number"
          name="number"
          placeholder="Phone Number"
          value={formData.number}
          onChange={handleChange}
          // required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
        />
         {err.pass &&  <p className="text-red-500 text-sm">{err.pass}</p>}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          // required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
        />

        <button
          type="submit"
          className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg transition"
        >
          Sign Up
        </button>

      </form>

      <p className="text-sm text-center mt-4">
        Already have an account?{" "}
        <span className="text-red-500 cursor-pointer">
            <Link to="/login">
          Login
            </Link>
        </span>
      </p>
      </div>
    </div>
  );
};

export default Signup;
