import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { account } from '../Auth/Config.js';
import { toast } from 'sonner';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useAuth } from '../Auth/AuthContext';

function Login() {
  let [email, saveEmail] = useState('');
  let [pass, savePass] = useState('');
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  
  const { login, isAuthenticated } = useAuth(); // ✅ isAuthenticated bhi import karen

  const validationSchema = yup.object({
    email: yup.string().email("Enter valid email!").required("Email is required!"),
    password: yup.string().required("Password is required!")
  });

  const handleLogin = async (e) => {
    // ✅ Prevent default form submission
    if (e) e.preventDefault();
    
    if (!email || !pass) {
      toast.warning("Fill all fields.");
      return;
    }

    setLoading(true);
    try {
      console.log("Attempting login with:", email); 
      
      // Appwrite login
      let theUser = await account.createEmailPasswordSession(email, pass);
      
      if (theUser) {
        console.log("Login successful:", theUser); 
        
        // Get user details from Appwrite
        const userDetails = await account.get();
        console.log("User details from Appwrite:", userDetails);        
        // Fetch user data for context
        const userData = {
          id: userDetails.$id,
          name: userDetails.name || email.split('@')[0],
          email: userDetails.email,
          role: 'customer'
        };

        console.log("Fetched user data:", userData);
      
        login(userData, theUser.secret);
        
        toast.success("Logged in Successfully!");
        console.log("User logged in and context updated"); 

        setTimeout(() => {
          console.log("Navigating to home page...");          navigate("/", { replace: true });
        }, 100);
        
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error(error.message || "Login failed! Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  // Check authentication status
  console.log("Login component - isAuthenticated:", isAuthenticated);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col items-center justify-center py-8 mt-10">
      {/* ShopLite Logo */}
      <div className="mb-4 text-center">
        <div className="flex justify-center items-center ">
          <div className='w-auto cursor-pointer bg-transparent flex justify-center items-center'>
            <p className='text-3xl font-semibold bg-transparent text-[#fd366e]'>Shop</p> 
            <span className='text-gray-800 animate-bounce bg-transparent ml-[-30px] mb-2 text-xl'>Lite</span>
          </div>
        </div>
        <p className="text-gray-600 text-lg">Welcome back! Please login to your account</p>
      </div>

      <Formik
        validationSchema={validationSchema}
        initialValues={{ email: '', password: '' }}
      >
        {({ errors, touched }) => (
          <form
            className="
              flex flex-col max-w-[480px] w-full 
              rounded-2xl 
              p-6
              bg-white/90 backdrop-blur-sm
              shadow-2xl hover:shadow-3xl
              transition-all duration-300 ease-in-out 
              hover:scale-[1.01]
              border border-white/20
            "
            onSubmit={handleLogin}
          >
            <h2 className="text-2xl font-black text-gray-800 text-center mb-6">
              Login to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Your Account</span>
            </h2>

            {/* Email Field */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 text-sm">
                📧 Email Address
              </label>
              <input
                value={email}
                onChange={(e) => saveEmail(e.target.value)}
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white text-gray-800 placeholder-gray-500"
                required
              />
              {errors.email && touched.email && (
                <div className="text-red-500 text-sm mt-2 font-medium">{errors.email}</div>
              )}
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 font-semibold mb-2 text-sm">
                🔒 Password
              </label>
              <input
                value={pass}
                onChange={(p) => savePass(p.target.value)}
                name="password"
                type="password"
                placeholder="Enter your password"
                className="w-full p-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white text-gray-800 placeholder-gray-500"
                required
              />
              {errors.password && touched.password && (
                <div className="text-red-500 text-sm mt-2 font-medium">{errors.password}</div>
              )}
            </div>
            
            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className={` mx-auto max-w-[50%]
                w-full p-4 rounded-xl cursor-pointer font-bold text-sm transition-all duration-300 transform hover:scale-105
                ${loading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                } text-white
              `}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Logging in...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Login to Account
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              )}
            </button>

            {/* Signup Link */}
            <p className="mt-6 text-center text-gray-600 text-sm">
              Don't have an account?{" "}
              <span
                onClick={() => navigate("/signup")}
                className="text-blue-600 text-sm font-bold cursor-pointer hover:text-blue-700 transition-colors duration-300 underline"
              >
                Create Account
              </span>
            </p>

            {/* Demo Info */}
            <div className="mt-6 p-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
              <p className="text-sm text-gray-700 text-center font-medium">
                <span className="font-bold">💡 Demo:</span> Use your Appwrite registered account credentials
              </p>
            </div>
          </form>
        )}
      </Formik>

      {/* Background Elements */}
      <div className="fixed top-20 left-10 w-16 h-16 bg-blue-200 rounded-full blur-2xl opacity-30 animate-float -z-10"></div>
      <div className="fixed bottom-20 right-10 w-12 h-12 bg-purple-200 rounded-full blur-2xl opacity-30 animate-float delay-1000 -z-10"></div>
    </div>
  );
}

export default Login;