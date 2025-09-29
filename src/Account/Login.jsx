import React, { useState } from 'react';
import InputStyle from '../MiniParts/InputStyles';
import BTNstyles from '../MiniParts/BTNstyles';
import H2Styles from '../MiniParts/H2Styles';
import InpLable from '../MiniParts/InpLable';
import { useNavigate } from 'react-router-dom';
import { account } from '../Auth/Config';
import { toast } from 'sonner';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useAuth } from '../Auth/AuthContext';

function Login() {
  let [email, saveEmail] = useState('');
  let [pass, savePass] = useState('');
  const [loading, setLoading] = useState(false);
  let Navigate = useNavigate();
  
  const { login } = useAuth();

  const validationSchema = yup.object({
    email: yup.string().email("Enter valid email!").required("Email is required!"),
    password: yup.string().required("Password is required!")
  });

  const handleLogin = async () => {
    if (!email || !pass) {
      toast.warning("Fill all fields.");
      return;
    }

    setLoading(true);
    try {
      // Appwrite login
      let theUser = await account.createEmailPasswordSession(email, pass);
      
      if (theUser) {
        // Get user details from Appwrite
        const userDetails = await account.get();
        
        // Prepare user data for context
        const userData = {
          id: userDetails.$id,
          name: userDetails.name || email.split('@')[0],
          email: userDetails.email,
          role: 'customer'
        };

        // Login to auth context
        login(userData, theUser.secret);
        
        toast.success("Logged in Successfully!");
        console.log("User logged in:", userData);
        
        Navigate("/");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Login failed! Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Formik
        validationSchema={validationSchema}
        initialValues={{ email: '', password: '' }}
      >
        {({ errors, touched }) => (
          <form
            className="
              flex flex-col max-w-[480px] w-full 
              border border-zinc-700 rounded-lg 
              py-8 px-6 
              bg-zinc-800 text-white 
              shadow-lg shadow-black/40
              transition-all duration-300 ease-in-out 
              hover:shadow-xl hover:scale-[1.01]
            "
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <H2Styles h2Texts={"Login Form!"} />

            <InpLable labelName={"Email"} labelFor={"email"} />
            <InputStyle
              inVal={email}
              handleEvent={(e) => saveEmail(e.target.value)}
              inpName={"email"}
              inpType={"email"}
              inpPlaceHolder={"Enter email"}
            />
            {errors.email && touched.email && (
              <div className="text-red-400 text-sm mt-1">{errors.email}</div>
            )}

            <InpLable labelFor={"password"} labelName={"Password"} />
            <InputStyle
              inVal={pass}
              handleEvent={(p) => savePass(p.target.value)}
              inpName={"password"}
              inpType={"password"}
              inpPlaceHolder={"Enter password"}
            />
            {errors.password && touched.password && (
              <div className="text-red-400 text-sm mt-1">{errors.password}</div>
            )}
            
            <BTNstyles
              callFun={handleLogin}
              btnText={loading ? "Logging in..." : "Login →"}
              disabled={loading}
            />

            <p className="my-3 mx-auto w-full text-sm text-zinc-300 text-center">
              Don't have an account?{" "}
              <span
                onClick={() => Navigate("/signup")}
                className="underline cursor-pointer text-amber-400 transition-colors duration-300 hover:text-amber-300"
              >
                Signup Now
              </span>
            </p>

            {/* Demo Credentials Info */}
            <div className="mt-4 p-3 bg-zinc-700 rounded-lg">
              <p className="text-sm text-zinc-300 text-center">
                <strong>Demo:</strong> Use your Appwrite registered account
              </p>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Login;