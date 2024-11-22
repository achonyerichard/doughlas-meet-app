"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const RegisterForm = () => {
  return (
    <div className="">
      <form action="#" className="flex flex-col gap-y-5">
        <h1 className="text-white font-black text-3xl">Register</h1>
        <div className="">
          <Input
            className={`transition3  h-14 border-2  border-white bg-transparent text-white rounded-lg`}
            placeholder="Full Name"
            name="email"
          />{" "}
        </div>
        <div className="">
          <Input
            className={`transition3  h-14 border-2  border-white bg-transparent text-white rounded-md `}
            placeholder="Email address"
            name="email"
          />{" "}
        </div>

        <div className="">
          <Input
            className={`transition3  h-14 border-2  border-white bg-transparent text-white rounded-lg`}
            placeholder="Password"
            name="email"
          />{" "}
        </div>
        <div className="items-top flex space-x-2">
          <Checkbox id="terms1" className="border-2 accent-white"/>
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms1"
              className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Confirm your age
            </label>
            <p className="text-sm  text-gray-100 font-thin">
              You have to be 18 years or older to use this platform.
            </p>
          </div>
        </div>
        <Button
          variant="default"
          className="h-10 w-full active:bg-primary text-white hover:bg-black rounded-[20px] shadow-lg"
          type="submit"
          disabled={false}
        >
          Login
          {/* {false ? <Spinner size="2" loading={true} /> : <>Log In</>} */}
        </Button>
        <div className="flex items-center justify-center">
          <p className="text-center text-white">
            Already got an account? <br />{" "}
            <Link href="/login" className="font-bold underline">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
