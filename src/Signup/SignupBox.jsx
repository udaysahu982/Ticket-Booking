import { Link } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // later connect API
  };

  return (
    <div className="w-full max-w-sm bg-white rounded-xl shadow-lg ">
        <div className=" w-full h-8 flex justify-end ">
           <Link to="/"> <div className=" w-8 h-full bg-black flex justify-center items-center">❌</div></Link> 
        </div>
        <div className="p-6">
      <h2 className=" text-2xl font-semibold text-center mb-6">
        Create Account
      </h2>
      

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
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
            <Link >
          Login
            </Link>
        </span>
      </p>
      </div>
    </div>
  );
};

export default Signup;
