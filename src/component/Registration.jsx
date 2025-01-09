import { useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie-player";
import registerlogo from "../assets/Registration.json";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    nidNumber: "",
    passward: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, nidNumber, password, confirmPassword } = formData;

    if (!name || !phone || !email || !nidNumber || !password || !confirmPassword) {
      setformData((prev) => ({
        ...prev,
        error: "Please fill out all fields",
      }));
    } else {
      console.log("Registered:", { name, phone, email, nidNumber, password, confirmPassword });
      alert("Registration Successful");
      setformData({
        name: "",
        phone: "",
        nidNumber: "",
        password: "",
        confirmPassword: "",
        error: "",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#407d94] bg-opacity-15 px-4 md:px-10">
      <div className="w-full max-w-5xl flex flex-col lg:flex-row items-center justify-between">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-200 w-full max-w-md py-10 shadow-md rounded-lg lg:w-1/2 md:p-6 mt-8"
        >
          <h1 className="text-xl font-bold text-cyan-700 mb-2 p-3 text-center">Registration Form</h1>

          {/* Name Field */}
          <div className="mb-2">
            <label htmlFor="name" className="block text-gray-700">
              Name <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:border-gray-700"
              placeholder="Enter Name"
            />
          </div>

          {/* Phone Number Field */}
          <div className="mb-2">
            <label htmlFor="phone" className="block text-gray-700">
              Phone <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:border-gray-700"
              placeholder="Enter Number"
            />
          </div>

          {/* Email Address Field */}
          <div className="mb-2">
            <label htmlFor="email" className="block text-gray-700">
              Email <span className="text-red-700">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:border-gray-700"
              placeholder="Enter Email"
            />
          </div>

          {/* NID Number Field */}
          <div className="mb-2">
            <label htmlFor="nidNumber" className="block text-gray-700">
              NID Number <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              id="nidNumber"
              name="nidNumber"
              value={formData.nidNumber}
              onChange={handleChange}
              required
              className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:border-gray-700"
              placeholder="Enter NID Number"
            />
            <span className="text-gray-500 mt-6 text-xs">
              If you don't have NID card or/ if you are under 18 years old or a foreign passport holder, 
              you can register with your birth certificate or passport.
            </span>
          </div>

          {/* Password Field */}
          <div className="mb-2">
            <label htmlFor="password" className="block text-gray-700">
              Password <span className="text-red-700">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:border-gray-700"
              placeholder="Enter Password"
            />
          </div>

          {/* Confirm Password Field */}
          <div className="mb-2">
            <label htmlFor="confirmPassword" className="block text-gray-700">
              Confirm Password <span className="text-red-700">*</span>
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:border-gray-700"
              placeholder="Confirm Password"
            />
          </div>

          <p className="text-gray-500 text-xs text-center">
            By creating an account you agree to our{" "}
            <Link to="#" className="text-cyan-600">
              Terms & Conditions
            </Link>
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#407d94] text-white py-3 rounded font-semibold hover:bg-[#3eb4c2] transition duration-300 mt-4"
          >
            Register
          </button>

          <div className="text-center mt-4">
            <span className="text-gray-500 text-sm">Already have an account? </span>
            <Link to="/" className="text-[#3fc5d4] hover:underline">Login Here</Link>
          </div>
        </form>

        {/* Animation Section */}
        <div className="w-full lg:w-1/2 flex justify-center mt-5 lg:mt-0">
          <Lottie
            animationData={registerlogo}
            play
            style={{
              width: "100%", maxWidth: "400px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Registration;
