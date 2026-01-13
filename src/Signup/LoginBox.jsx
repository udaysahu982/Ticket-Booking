import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const LoginBox = () => {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  let api = "http://localhost:3000/movie";

  try {
    let res = await axios.get(`${api}?email=${formData.email}`);
    let user = res.data[0]; // matched user

    if (!user) {
      return alert("Invalid email or password");
    } else if (user.password !== formData.password) {
      return alert("Invalid email or password");
    } else {
      // Store only the matched user object
      localStorage.setItem("loginUser", JSON.stringify(user));
      alert("Login Success");
      navigate("/");
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong. Please try again.");
  }
};


  return (
    <div className="relative w-full max-w-sm bg-white rounded-xl shadow-lg p-6">

      <div onClick={()=>navigate(-1)} className="absolute -right-0.5 top-1 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition font-extrabold cursor-pointer"
      >
        ✕
      </div>

      <h2 className="text-2xl font-semibold text-center mb-6">
        Login
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
        />

        {/* Forgot password */}
        <div className="text-right">
          <button
            type="button"
            onClick={() => navigate("/forgot-password")}
            className="text-sm text-red-500 hover:underline"
          >
            Forgot password?
          </button>
        </div>

        {/* Login button */}
        <button
          type="submit"
          className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg transition"
      
        >
          Login
        </button>

      </form>

      {/* Register link */}
      <p className="text-sm text-center mt-4">
        Don’t have an account?{" "}
        <span
          onClick={() => navigate("/signup")}
          className="text-red-500 cursor-pointer hover:underline"
        >
          Register here
        </span>
      </p>

    </div>
  );
};

export default LoginBox;
