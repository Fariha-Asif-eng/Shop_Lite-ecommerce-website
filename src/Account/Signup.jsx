import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ID } from 'appwrite';
import { account } from '../Auth/Config.js';
import { Toaster, toast } from 'sonner';
import * as yup from "yup"
import { Formik } from 'formik';
import { useAuth } from '../Auth/AuthContext';

function SignUp() {
  let [name, saveName] = useState('')
  let [email, saveEmail] = useState('')
  let [pass, savePass] = useState('')
  let navigate = useNavigate()
  const { register } = useAuth();

  const validationSchema = yup.object({
    name: yup.string().required("User must have name!"),
    email: yup.string().email("Enter valid email!").required("Email is required!"),
    pass: yup.string().min(8, "Must be at least 8 characters!").required("Password is required!")
  });

  const initVal = {
    name: '',
    email: '',
    pass: ''
  }

  const [loading, setLoading] = useState(false)

  const handleSignup = async (e) => {
    // ✅ Prevent default form submission
    if (e) e.preventDefault();
    
    if (!email || !pass || !name) {
      toast.warning("Fill the form properly.")
      return;
    }

    setLoading(true);
    try {
      console.log("Attempting signup with:", { name, email }); // ✅ Debug log
      
      // Appwrite signup
      let theUser = await account.create(
        ID.unique(),
        email,
        pass,
        name
      );

      if (theUser) {
        console.log("Signup successful:", theUser); // ✅ Debug log
        
        // Auto login after successful signup
        const session = await account.createEmailPasswordSession(email, pass);
        const userDetails = await account.get();
        
        // Prepare user data for context
        const userData = {
          id: userDetails.$id,
          name: userDetails.name,
          email: userDetails.email,
          role: 'customer'
        };

        // Register in auth context
        register(userData, session.secret);
        
        toast.success("Account created successfully!");
        console.log("User created and logged in:", userData);
        
        // Redirect to home page
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.error("Appwrite signup error:", error);
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen mt-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col items-center justify-center py-8'>
      <Toaster position='top-center' richColors />

      //Logo 
      <div className="mb-6 text-center">
        <div className="flex justify-center items-center">
          <div className='w-auto cursor-pointer bg-transparent flex justify-center items-center'>
            <p className='text-3xl font-semibold bg-transparent text-[#fd366e]'>Shop</p> 
            <span className='text-gray-800 animate-bounce bg-transparent ml-[-30px] mb-2 text-xl'>Lite</span>
          </div>
        </div>
        <p className="text-gray-600 text-lg">Create your account and start shopping</p>
      </div>

      <Formik
        initialValues={initVal}
        validationSchema={validationSchema}
        onSubmit={handleSignup} // ✅ Direct form submission
      >
        {({ errors, touched }) => (
          <form
            onSubmit={handleSignup} // ✅ Direct form submission
            className="
              flex flex-col max-w-[480px] w-full 
              rounded-2xl 
              p-6
              bg-white/90 backdrop-blur-sm
              shadow-2xl hover:shadow-3xl
              transition-all duration-300 ease-in-out 
              hover:scale-[1.01]
              border border-white/20
            " >

            <h2 className="text-2xl font-black text-gray-800 text-center mb-8">
              Create Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Account</span>
            </h2>

            {/* Name Field */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 text-sm">
                👤 Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(a) => saveName(a.target.value)}
                className="w-full p-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white text-gray-800 placeholder-gray-500"
                required
              />
              {errors.name && touched.name && (
                <div className="text-red-500 text-sm mt-2 font-medium">{errors.name}</div>
              )}
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 text-sm">
                📧 Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => saveEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white text-gray-800 placeholder-gray-500"
                required
              />
              {errors.email && touched.email && (
                <div className="text-red-500 text-sm mt-2 font-medium">{errors.email}</div>
              )}
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-semibold mb-2 text-sm">
                🔒 Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Create a strong password"
                value={pass}
                onChange={(p) => savePass(p.target.value)}
                className="w-full p-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 bg-white text-gray-800 placeholder-gray-500"
                required
              />
              {errors.pass && touched.pass && (
                <div className="text-red-500 text-sm mt-2 font-medium">{errors.pass}</div>
              )}
            </div>

            {/* Sign Up Button - Changed to submit type */}
            <button
              type="submit" // ✅ Changed to submit
              disabled={loading}
              className={`
                max-w-[50%] mx-auto cursor-pointer p-2 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105
                ${loading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                } text-white
              `}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Creating Account...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Create Account
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              )}
            </button>

            {/* Login Link */}
            <p className='mt-6 text-center text-gray-600 text-sm'>
              Already have an account?{" "}
              <span 
                onClick={() => navigate("/login")} 
                className='text-blue-600 text-sm font-bold cursor-pointer hover:text-blue-700 transition-colors duration-300 underline'
              >
                Login Now
              </span>
            </p>

            {/* Password Requirements */}
            <div className="mt-6 p-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
              <p className="text-sm text-gray-700 text-center font-medium">
                <span className="font-bold">🔐 Password must be at least 8 characters long</span>
              </p>
            </div>
          </form>
        )}
      </Formik>

      {/* Background Elements */}
      <div className="fixed top-20 left-10 w-16 h-16 bg-blue-200 rounded-full blur-2xl opacity-30 animate-float -z-10"></div>
      <div className="fixed bottom-20 right-10 w-12 h-12 bg-purple-200 rounded-full blur-2xl opacity-30 animate-float delay-1000 -z-10"></div>
    </div>
  )
}

export default SignUp