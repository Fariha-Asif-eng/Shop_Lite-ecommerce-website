import React, { useState } from "react";
import { CiCamera } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";

function ProPicture() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[50vh]">
      <div className="relative w-40 h-40">
        {/* Profile Image OR User Icon */}
        {preview ? (
          <img
            src={preview}
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover border-4 border-gray-300"
          />
        ) : (
          <div className="w-40 h-40 rounded-full bg-gray-300 flex items-center justify-center border-4 border-gray-300">
            <FaRegUserCircle className="h-16 w-16 text-gray-600" />
          </div>
        )}

        {/* Hidden file input */}
        <input
          type="file"
          accept="image/*"
          id="profilePicUpload"
          onChange={handleImageChange}
          className="hidden"
        />

        <label
          htmlFor="profilePicUpload"
          className="absolute bottom-[-16px] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white rounded-full p-2 cursor-pointer hover:bg-gray-900 transition"
        >
          <CiCamera className="h-6 w-6" />
        </label>
      </div>
    </div>
  );
}

export default ProPicture;
