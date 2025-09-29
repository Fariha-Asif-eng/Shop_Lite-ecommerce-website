import React from "react";
import { FaShippingFast, FaLock, FaClipboardList, FaUndo } from "react-icons/fa";
import H2Styles from "../MiniParts/H2Styles";

const FeaturedQuality = () => {
  const features = [
    {
      icon: <FaShippingFast className="text-4xl text-zinc-300" />,
      title: "Fast Delivery",
      desc: "Get your products delivered quickly and safely.",
    },
    {
      icon: <FaLock className="text-4xl text-zinc-300" />,
      title: "Smart & Secure Billing",
      desc: "Your payments are protected with advanced security.",
    },
    {
      icon: <FaClipboardList className="text-4xl text-zinc-300" />,
      title: "Order Tracking",
      desc: "Track your orders in real-time with ease.",
    },
    {
      icon: <FaUndo className="text-4xl text-zinc-300" />,
      title: "Refund Availability",
      desc: "Easy and transparent refund policy for your comfort.",
    },
  ];

  return (
    <div className=" text-white py-10 my-10 border-t border-zinc-700 w-full flex flex-col items-center justify-center min-h-[50vh]">
      
      <H2Styles h2Texts={'Our Featured Qualities'}/>
      <div className="grid grid-cols-1 my-6 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl px-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-zinc-900 p-6 rounded-lg shadow-md text-center hover:bg-zinc-800 transition"
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-zinc-400">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedQuality;
