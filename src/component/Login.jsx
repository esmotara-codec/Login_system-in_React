import { useState } from "react";
import { Link } from "react-router-dom";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import Lottie from "react-lottie-player";
import animatedpic from "./../assets/Animation - 1734782439866.json";

const Login = () => {
  const [formData, setformData] = useState({
    phone: "",
    password: "",
    error: "",
  });
  const [visible, setVisible] = useState(false);
  const userPhone = "123456789"; // Replace with real credentials if needed
  const userPassword = "password123";

  const handlechange = (e) => {
    const { name, value } = e.target;
    setformData((prev) => ({
      ...prev,
      [name]: value,
      error: " ",
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { phone, password } = formData;

    if (!phone || !password) {
      setformData((prev) => ({
        ...prev,
        error: "Please fill out all fields",
      }));
    } else if (phone !== userPhone || password !== userPassword) {
      setformData((prev) => ({
        ...prev,
        error: "Invalid phone number or password",
      }));
    } else {
      console.log("Logged IN :", { phone, password });
      alert("Login Successful");
      setformData({
        phone: "",
        password: "",
        error: " ",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-[#407d94] bg-opacity-15 px-4 md:px-10">
      {/* Form Section */}
      <div>
        <Link to="/home">
        <button 
        type="button"
        className="bg-blue-700 border border-slate-900 rounded-lg shadow-sm">Back to home
        </button></Link>
      </div>
      <div className="bg-gray-200 w-full lg:w-1/2 max-w-lg p-3 md:p-6 mt-8 shadow-md rounded-lg">
        <h4 className="text-2xl md:text-3xl font-bold text-cyan-700 text-center mb-6">
          Welcome to E-ticket
        </h4>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="phone" className="font-medium text-gray-700">
              Mobile Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handlechange}
              className="w-full mt-2 p-3 bg-gray-50 border border-gray-700 rounded-md focus:outline-none"
              placeholder="Enter Your Number"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="font-medium text-gray-700">
              Password
            </label>
            <div className="flex items-center mt-2 bg-gray-50 border border-gray-700 rounded-md">
              <input
                type={visible ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handlechange}
                className="w-full py-3 px-3 bg-gray-50 focus:outline-none rounded-md"
                placeholder="Enter your Password"
              />
              <div
                className="p-2 cursor-pointer"
                onClick={() => setVisible(!visible)}
              >
                {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
              </div>
            </div>
          </div>
          {/* Error Message */}
          {formData.error && (
            <p className="text-red-500 text-sm mb-4">{formData.error}</p>
          )}
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-[#407d94] text-white py-3 rounded-md font-semibold hover:bg-[#3eb4c2] transition duration-300"
            >
              Login
            </button>
            {/* Footer */}
            <p className="text-center text-sm text-gray-500 mt-6">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-[#3fc5d4] hover:underline transition"
              >
                Register Here
              </Link>
            </p>
          </div>
        </form>
      </div>
      {/* Animation Section */}
      <div className="w-full lg:w-1/4 flex justify-center mt-5 lg:mt-0">
        <Lottie
          loop
          animationData={animatedpic}
          play
          style={{ width:500 , maxWidth:400 }}
        />
      </div>
    </div>
  );
};

export default Login;
