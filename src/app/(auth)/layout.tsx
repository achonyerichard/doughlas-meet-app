"use client";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`flex items-center justify-center p-5 w-full lg:p-9 min-h-screen  lg:gap-x-11 bg-blend-multiply  from bg-gray-300 bg-cover bg-center bg-[url("/images/login-banner.jpg")]`}
    >
      <div className="w-full bg-glassLight  backdrop-blur-md shadow-lg p-6 rounded-lg border border-gray-700/20  lg:w-[500px] ">
        {children}
      </div>
      {/* <section className="lg:block hidden lg:w-7/12 h-full">
        <Image
          src={image}
          alt="auth_layout_image"
          className="w-full h-full object-cover rounded-3xl"
        />
      </section> */}
    </div>
  );
};

export default Layout;
