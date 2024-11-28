"use client";
import Footer from "@/components/modules/Footer/Footer";
import NavBar from "@/components/modules/NavBar/NavBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import Select from "react-select";
const EditProfile = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-gray-200">
        <main className="w-full min-h-screen py-1 md:w-1/2 mx-auto ">
          <div className="p-2 md:p-4 bg-white">
            <div className="w-full px-6 pb-8 mt-8  sm:rounded-lg">
              <h2 className="pl-6 text-2xl font-bold sm:text-xl text-center lg:text-left">
                Public Profile
              </h2>

              <div className="grid mt-8">
                <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                  <img
                    className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                    src={true
                      ? "/images/user-male.jpg"
                      : "/images/user-female.jpg"}
                    alt="Bordered avatar"
                  />

                </div>

                <div className="items-center mt-8 sm:mt-14 text-[#202142]">
                  <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                    <div className="w-full">
                      <label
                        htmlFor="first_name"
                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                      >
                        Your first name
                      </label>
                      <Input
                        type="text"
                        id="first_name"
                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                        placeholder="Your first name"
                        value="Jane"
                        required
                      />
                    </div>

                  
                  </div>

                  <div className="mb-2 sm:mb-6">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <Input                   
                      type="email"
                      id="email"
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                      placeholder="your.email@mail.com"
                      disabled
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                    >
                      Your Interests
                    </label>
                    <Select
                      placeholder="Select an Interest"
                      classNames={{
                        control: () =>
                          "bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full ",
                        input: () =>
                          " w-full  px-5  md:text-sm rounded-md   dark:placeholder:text-gray-100 dark:text-white text-black",
                        menu: () =>
                          "dark:bg-black dark:text-white hover:text-black",
                        singleValue: () => "text-black",
                      }}
                      //   onChange={(prop) => {
                      //       const values = prop
                      //           ? prop.map((option: any) => option.value)
                      //           : [];

                      //       setDetails((prev) => ({ ...prev, color: values }));
                      //   }}
                      options={[
                        { label: "tech", value: "tech" },
                        { label: "sports", value: "sports" },
                        { label: "school", value: "school" },
                      ]}
                      isMulti
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                    >
                      Bio
                    </label>
                    <textarea
                      id="message"
                      className="block p-2.5 w-full text-sm text-indigo-900 bg-indigo-50 rounded-lg border border-indigo-300 focus:ring-indigo-500 focus:border-indigo-500 "
                      placeholder="Write your bio here..."
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      className="text-white bg-black  hover:bg-primary focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                    >
                      Save
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default EditProfile;
