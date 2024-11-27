import Footer from "@/components/modules/Footer/Footer";
import NavBar from "@/components/modules/NavBar/NavBar";
import { Edit2Icon, UsersIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Profile = () => {
  return (
    <div className="bg-gray-200">
      <NavBar />
      <div className="bg-white md:mx-auto rounded shadow-xl my-5 px-3 lg:px-0 lg:my-10 w-full md:w-1/2 overflow-hidden">
        <div className="h-[140px] bg-gradient-to-r from-cyan-500 to-blue-500"></div>
        <div className="px-5 py-2 flex flex-col gap-3 pb-6">
          <div className="h-[90px] shadow-md w-[90px] rounded-full border-4 overflow-hidden -mt-14 border-white">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              className="w-full h-full rounded-full object-center object-cover"
            />
          </div>
          <div className="">
            <h3 className="text-xl text-slate-900 relative font-bold leading-6">
              Dadda Hicham
            </h3>
            <p className="text-sm text-gray-600">@daddasoft</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <span className="rounded-[20px] bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">
              Developer
            </span>
            <span className="rounded-[20px] bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
              Design
            </span>
            <span className="rounded-[20px] bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
              Managements
            </span>
            <span className="rounded-[20px] bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-800">
              Projects
            </span>
          </div>
          <div className="flex gap-2">
            <Link
              href="/profile/edit"
              className="inline-flex gap-2 w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 transition hover:border-gray-300 active:bg-white hover:bg-gray-100 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              <Edit2Icon size={12} /> Edit Profile
            </Link>
          </div>
          <h4 className="text-md font-medium leading-3">About</h4>
          <p className="text-sm text-stone-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
            dolores aliquid sequi sunt iusto ipsum earum natus omnis asperiores
            architecto praesentium dignissimos pariatur, ipsa cum? Voluptate
            vero eius at voluptas?
          </p>
          <h4 className="text-md font-medium leading-3">Groups</h4>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 px-2 py-3 bg-white rounded border w-full ">
              <UsersIcon />
              <div className="leading-3">
                <p className=" text-sm font-bold text-slate-700">
                  Tech Asociation
                </p>
              </div>
              <p className="text-sm text-slate-500 self-start ml-auto">
                Joined, March 4, 2024
              </p>
            </div>
            <div className="flex items-center gap-3 px-2 py-3 bg-white rounded border w-full ">
              <UsersIcon />
              <div className="leading-3">
                <p className=" text-sm font-bold text-slate-700">
                  Ui Designers Canada
                </p>
              </div>
              <p className="text-sm text-slate-500 self-start ml-auto">
                Joined, March 4, 2024
              </p>
            </div>
            <div className="flex items-center gap-3 px-2 py-3 bg-white rounded border w-full ">
              <UsersIcon />
              <div className="leading-3">
                <p className=" text-sm font-bold text-slate-700">
                  Doughlas Uni Grads
                </p>
              </div>
              <p className="text-sm text-slate-500 self-start ml-auto">
                Joined, March 4, 2024
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
