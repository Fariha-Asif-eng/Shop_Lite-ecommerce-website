import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { account, getCurrentUser, logout } from "../Auth/Config";
import { GetUser, CreateUser, UpdateUser } from "../Auth/CreateUser";

import InputStyle from "../MiniParts/InputStyles";
import H2Styles from "../MiniParts/H2Styles";
import InpLable from "../MiniParts/inpLable";
import BTNstyles from "../MiniParts/BTNstyles";
import Login from "../Account/Login";

import { Formik, Form, Field } from "formik";
import ProPicture from "./ProPicture";

function UserDetail() {
  const [initialValues, setInitialValues] = useState({
    name: "",
    email: "",
    bio: "",
  });

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const loggedUser = await getCurrentUser();
        if (!loggedUser) {
          setUser(null);
          setLoading(false);
          return;
        }

        setUser(loggedUser);

        const profile = await GetUser(loggedUser.$id);

        if (profile) {
          setInitialValues({
            name: loggedUser.name,
            email: loggedUser.email,
            bio: profile.bio || "",
          });
        } else {
          await CreateUser(loggedUser.$id, loggedUser.name, loggedUser.email , "");
          setInitialValues({
            name: loggedUser.name,
            email: loggedUser.email,
            bio: "",
          });
        }
      } catch (err) {
        console.error("Error loading user:", err);
        toast.error("Failed to load user details");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleSubmit = async (values) => {
    try {
      const loggedUser = await getCurrentUser();
      if (!loggedUser) {
        toast.error("User not logged in!");
        return;
      }

      await account.updateName(values.name);

      const profile = await GetUser(loggedUser.$id);
      if (profile) {
        await UpdateUser(profile.$id, values.bio);
      }

      toast.success("Profile updated!");
    } catch (err) {
      console.error(err);
      toast.error("Update failed");
    }
  };

  if (loading)
    return (
      <div className="w-full h-full bg-black/50 flex items-center justify-center text-2xl text-amber-500 font-semibold">
        Loading...
      </div>
    );

  if (!user) {
    return (
      <div className="w-full min-h-[80vh] flex items-center justify-center">
        <Login />
        <Toaster position="top-right" />
      </div>
    );
  }

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="w-[42%] mx-auto flex flex-col justify-center">
            <ProPicture/>
            <H2Styles h2Texts={"Personal Information"} />

            <InpLable labelFor={"name"} labelName={"Name:"} />
            <Field
              as={InputStyle}
              inpID="name"
              inpName="name"
              inpPlaceHolder="Your name here"
            />

            <InpLable labelFor={"email"} labelName={"Email:"} />
            <Field
              type="email"
              name="email"
              disabled
              readOnly
              className="w-full p-2 outline-none text-xl my-2 bg-zinc-500 text-amber-200"
            />

            <InpLable labelFor={"bio"} labelName={"Bio:"} />
            <Field
              as="textarea"
              name="bio"
              rows={3}
              placeholder="Write about yourself here..."
              className="bg-zinc-500 w-full outline-0 focus:bg-zinc-600 text-amber-200 p-2 mb-4"
            />

            <BTNstyles btnText={isSubmitting ? "Updating..." : "Update details →"} />
            <br /> 

           
          </Form>
          
        )}
        
      </Formik>
 <button 
            onClick={()=> logout()}
            className="mx-auto p-2 bg-[#fd366e] hover:bg-[#ed466d] cursor-pointer rounded-md font-semibold hover:text-black text-white transition-all duration-200"
            >Logout →</button>
      <Toaster position="top-right" />
    </>
  );
}

export default UserDetail;
