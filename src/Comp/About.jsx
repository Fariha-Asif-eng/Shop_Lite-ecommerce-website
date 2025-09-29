import React from "react";
import Contact from "./ContactForm";
import H2Styles from "../MiniParts/H2Styles";

const About = () => {
  return (
    <div className="min-h-screen w-full mx-auto text-white flex flex-col pt-6 my-16">
     

      <main className="flex-grow container mx-auto px-6 py-12">
        
        <section className="mb-12  ">
          <h2 className="text-2xl text-amber-200 font-semibold mb-4 border-b border-zinc-700 inline-block pb-2">
            About ShopLite:
          </h2>
          <p className="text-lg leading-relaxed ">
            ShopLite is a demo e-commerce project developed as part of our{" "}
            <span className="font-semibold">FullStack Development Course</span> under the guidance 
            of <span className="font-semibold">Sir SaifUllah Khan</span>. 
            This project was assigned to sharpen our skills in modern web technologies 
            such as React, Node.js, and databases while also learning to design 
            user-friendly shopping platforms.
          </p>
        </section>

       
        <section>
          <h2 className="text-2xl text-amber-200 font-semibold mb-4 border-b border-zinc-700 inline-block pb-2">
            Why ShopLite?
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg  ">
            <li>
              <span className="font-semibold">Simplicity:</span> A clean and easy-to-use 
              shopping experience.
            </li>
            <li>
              <span className="font-semibold">Learning Focused:</span> Built as a real-world 
              project to practice full-stack development.
            </li>
            <li>
              <span className="font-semibold">Scalable Design:</span> Structured to expand 
              with more features like carts, payments, and order tracking.
            </li>
            <li>
              <span className="font-semibold">Modern Tech Stack:</span> Powered by React, 
              Tailwind CSS, and backend technologies to mimic real-world apps.
            </li>
            <li>
              <span className="font-semibold">Guided by Expertise:</span> Developed under 
              the supervision of an experienced instructor.
            </li>
          </ul>
        </section>
        
      </main>
<Contact/>
     
    </div>
  );
};

export default About;
