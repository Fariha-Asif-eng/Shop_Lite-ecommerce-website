import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import H2Styles from "../MiniParts/H2Styles";
import InpLable from "../MiniParts/inpLable";
import InputStyle from "../MiniParts/InputStyles";

const Contact = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Data:", values);
    resetForm();
    alert("Your message has been sent!");
  };

  return (

      
      <main className="flex-grow container mt-8  mx-auto px-6 py-12 flex justify-center  border-t border-zinc-700  w-full ">
        <div className="bg-zinc-900 p-6 rounded-lg shadow-lg  max-w-[60%]">
          
          <H2Styles h2Texts={"Fill the Form"}/>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="space-y-4">
                
                  <InpLable labelFor={'name'} labelName={'Name'} />
                  <InputStyle  inpID={'name'} inpName={"name"} inpType={'text'} inpPlaceHolder={"Your name"}/>
      
                  <InpLable labelFor={'email'} labelName={'Email'} />
                  <InputStyle inpID={'email'} inpName={'email'} inpType={'email'} inpPlaceHolder={'Your email'} />
                 
               

                <div>
                  <InpLable labelFor={"message"} labelName={"Message"} />
                  <textarea
                  id={'message'} name={'Message'} placeholder={"Your message"} rows={4}
                  className="w-full border border-zinc-700 rounded-md p-2 my-2 outline-0 bg-zinc-800 text-amber-200"
                  >
                  </textarea>
                 </div>
                

                    
                <button
                  type="submit"
                  className="py-3 cursor-pointer bg-blue-800 hover:bg-blue-100 hover:text-blue-800 w-[36%] 
                  left-[30%] to-0% relative rounded-md font-semibold transition"
                >
                  Send Message
                </button>
               
              </Form>
            )}
          </Formik>
        </div>
      </main>

  );
};

export default Contact;
