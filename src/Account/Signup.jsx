import React, { useState } from 'react';
import InpLable from '../MiniParts/InpLable.jsx';
import { useNavigate } from 'react-router-dom';
import H2Styles from '../MiniParts/H2Styles';
import InputStyle from '../MiniParts/InputStyles.jsx';
import BTNstyles from '../MiniParts/BTNstyles.jsx';
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

  const handleSignup = async () => {
    if (!email || !pass || !name) {
      toast.warning("Fill the form properly.")
      return;
    }

    setLoading(true);
    try {
      // Appwrite signup
      let theUser = await account.create(
        ID.unique(),
        email,
        pass,
        name
      );

      if (theUser) {
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
        
        navigate("/");
      }
    } catch (error) {
      console.error("Appwrite signup error:", error);
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <Toaster position='top-center' richColors />

      <Formik
        initialValues={initVal}
        validationSchema={validationSchema}
        onSubmit={() => {}} // Empty function for Formik
      >
        {({ errors, touched }) => (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSignup();
            }}
            className="
              flex flex-col max-w-[480px] w-full 
              border border-zinc-800 rounded-lg 
              py-8 px-6 
              bg-zinc-800 text-white 
              shadow-lg shadow-black/40
              transition-all duration-300 ease-in-out 
              hover:shadow-xl hover:scale-[1.01]
            " >

            <H2Styles h2Texts={"Create your account"} />

            <InpLable labelName={"Name"} labelFor="name" />
            <InputStyle 
              inpID="name"
              inpName={"name"} 
              inpType={"text"} 
              inpPlaceHolder={"Enter name"}
              inVal={name} 
              handleEvent={(a) => saveName(a.target.value)} 
            />
            {errors.name && touched.name && (
              <div className="text-red-400 text-sm mt-1">{errors.name}</div>
            )}

            <InpLable labelName={"Email"} labelFor={"email"} />
            <InputStyle 
              inpID={"email"}
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
              inpID={"password"}
              inVal={pass} 
              handleEvent={(p) => savePass(p.target.value)}
              inpName={"password"} 
              inpType={"password"} 
              inpPlaceHolder={"Enter password"} 
            />
            {errors.pass && touched.pass && (
              <div className="text-red-400 text-sm mt-1">{errors.pass}</div>
            )}

            <BTNstyles
              callFun={handleSignup}
              btnText={loading ? "Creating Account..." : "Sign Up →"}
              disabled={loading}
            />

            <p className='my-2 mx-auto w-full text-amber-100 text-center text-sm'>
              Already have account?
              <span 
                onClick={() => navigate("/login")} 
                className='underline cursor-pointer ml-2 text-amber-400 transition-colors duration-300 hover:text-amber-300'
              >
                Login Now
              </span>
            </p>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default SignUp