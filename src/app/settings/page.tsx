"use client";
import Footer from "@/components/modules/Footer/Footer";
import NavBar from "@/components/modules/NavBar/NavBar";
import Billing from "@/components/modules/Settings/Billing";
import { ChangePassword } from "@/components/modules/Settings/ChangePassword";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const Settings = () => {
  const [selected, setSelected] = useState<string>("Settings");

  /**
   * This function is used to select an interest to handle filtering events by user's interests
   * @param {string} item - A user's interest
   */
  const toggle = (item: string) => {
    setSelected(item);
  };

  return (
    <>
      <NavBar />
      <div className="mx-4 max-w-screen-xl sm:mx-8 xl:mx-auto relative">
        <h1 className="border-b py-6 text-4xl font-semibold">Settings</h1>
        <div className="grid grid-cols-8 pt-3 pb-10 sm:grid-cols-10 ">
          <div className=" my-4 w-80 sm:hidden">
            <Select onValueChange={(value) => toggle(value)} value={selected}>
              <SelectTrigger className="h-14 w-full rounded-[16px] border-none bg-gray-100">
                <SelectValue placeholder="Select a Location" />
              </SelectTrigger>

              <SelectContent className="border-none bg-white">
                <SelectItem value={"Settings"}>{"Settings"}</SelectItem>

                <SelectItem value={"Billing"}>{"Billing"}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-2 hidden lg:block sticky top-10">
            <ul>
              {["Settings", "Billing"].map((item) => (
                <li
                  key={item}
                  onClick={() => toggle(item)}
                  className={`mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:bg-blue-100 hover:text-blue-700 ${
                    selected === item && "border-l-blue-700 text-blue-700"
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-8 overflow-hidden rounded-xl sm:bg-gray-50 sm:px-8 sm:shadow">
            {selected === "Settings" ? <ChangePassword /> : <Billing />}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Settings;
