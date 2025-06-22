import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated for React Router v6+
import { Eye, EyeOff } from 'lucide-react';


const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // For toggling password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // For toggling confirm password visibility
  const navigate = useNavigate(); // useNavigate instead of useHistory

  const handleRegister = (e) => {
    e.preventDefault();

    // Simple validation: Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Handle registration logic (for example, an API call)
    if (name && email && password) {
      // Navigate to the login page or dashboard after successful registration
      navigate('/login');
    } else {
      setError('Please fill out all fields');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <div className="bg-white p-8 rounded-3xl shadow-lg w-96">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Register</h2>

        {error && <div className="text-red-600 mb-4 text-sm text-center">{error}</div>}

        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none transition duration-300"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none transition duration-300"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none transition duration-300"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                className="absolute top-1/2 right-3 transform -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.774 5 12 5c3.226 0 6.268 2.943 7.542 7-1.274 4.057-4.316 7-7.542 7-3.226 0-6.268-2.943-7.542-7zM12 9c-.795 0-1.5.325-2 1-1 1.267-2 2.333-3 2.333-.5 0-.9-.2-1.2-.5-.3-.3-.5-.7-.5-1.2 0-.267.15-.5.4-.667.4-.267.7-.6.9-1 .2-.4.4-.9.6-1.3.2-.4.5-.7.9-1.2 1-.7 2.3-1 3.5-1 .5 0 1 .2 1.5.5s.7 1 .7 1.5c0 .5-.1.9-.3 1.2-.2.4-.5.7-.8 1.1-.4.6-.7 1.2-.9 1.8-.1.5-.1.9-.1 1.4z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none transition duration-300"
                placeholder="Confirm your password"
                required
              />
              <button
                type="button"
                className="absolute top-1/2 right-3 transform -translate-y-1/2"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.774 5 12 5c3.226 0 6.268 2.943 7.542 7-1.274 4.057-4.316 7-7.542 7-3.226 0-6.268-2.943-7.542-7zM12 9c-.795 0-1.5.325-2 1-1 1.267-2 2.333-3 2.333-.5 0-.9-.2-1.2-.5-.3-.3-.5-.7-.5-1.2 0-.267.15-.5.4-.667.4-.267.7-.6.9-1 .2-.4.4-.9.6-1.3.2-.4.5-.7.9-1.2 1-.7 2.3-1 3.5-1 .5 0 1 .2 1.5.5s.7 1 .7 1.5c0 .5-.1.9-.3 1.2-.2.4-.5.7-.8 1.1-.4.6-.7 1.2-.9 1.8-.1.5-.1.9-.1 1.4z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-3 mt-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Register
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <span className="text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-blue-500 font-semibold hover:underline">
              Login here
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
