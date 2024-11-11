import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { FaGoogle } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io";
import { Link } from 'react-router-dom';

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-roboto font-extrabold text-gray-900">
            Welcome 😊
          </h2>
    
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="full-name" className="sr-only">
                Full Name
              </label>
              <input
                id="full-name"
                name="fullName"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-300 focus:border-blue-300 focus:z-10 sm:text-sm"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
           
            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-300 focus:border-blue-300 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
           
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-300 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Log In
            </button>
          </div>
        </form>
        <div className="flex items-center justify-center space-x-4 mt-4">
          <button className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <FaGoogle className="h-5 w-5 mr-2" />
           
          </button>
          <button className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <IoLogoApple className="h-5 w-5 mr-2" />
          
          </button>
        </div>
        <div className="text-sm text-center mt-4">
          <Link to="/login" className="font-medium text-blue-300 hover:text-blue-500">
            Already have an account? Log in
          </Link>
        </div>
        <div className="text-sm text-center mt-4">
          <Link to="/login" className="font-medium text-blue-300 hover:text-blue-500">
            Forgot your password?
          </Link>
        </div>
      </div>
    </div>
  );
}