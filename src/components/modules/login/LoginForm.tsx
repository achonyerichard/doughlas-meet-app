"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const LoginForm = () => {
  return (
    <div className="">
      <form action="#" className="flex flex-col gap-y-5">
        <h1 className="text-white font-black text-3xl">Login</h1>
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

        <Button
          variant="default"
          className="h-10 w-full active:bg-[#ABBB00] text-white hover:bg-black rounded-[20px] shadow-lg"
          type="submit"
          disabled={false}
        >
          Login
          {/* {false ? <Spinner size="2" loading={true} /> : <>Log In</>} */}
        </Button>
        <div className="flex items-center justify-center">
          <p className="text-center text-white">
            Don&apos;t have an account? <br />{" "}
            <Link href="/register" className="font-bold underline">
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
