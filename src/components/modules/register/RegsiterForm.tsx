"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
interface IFormInput {
  name: string;
  email: string;
  password: string;
  gender: string;
  age: string;
}
const RegisterForm = () => {
  const [passwordtoggle, setPasswordToggle] = useState(true);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>({
    defaultValues: {
      gender: "", // Default value for the select
    },
  });

  /**
   * Function handles user registration and submitting user data
   * @param data - User regsiter data
   */
  const onSubmit = (data: any) => {
    const { age, ...newData } = data;
    console.log(newData);
  };
  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
        <h1 className="text-white font-black text-3xl">Register</h1>
        <div className="">
          <Input
            className={`transition3  h-14 border-2  border-white bg-transparent text-white rounded-lg placeholder:text-gray-200`}
            placeholder="Full Name"
            {...register("name", { required: "Name is required" })}
          />{" "}
          {errors?.name && (
            <span className="duration-1500 text-xs text-red-500 transition-all ease-out font-bold">
              {errors?.name.message}
            </span>
          )}
        </div>
        <div className="">
          <Input
            className={`transition3  h-14 border-2  border-white bg-transparent text-white rounded-md placeholder:text-gray-200`}
            placeholder="Email address"
            {...register("email", { required: "Email is required" })}
          />{" "}
          {errors?.email && (
            <span className="duration-1500 text-xs text-red-500 transition-all ease-out font-bold">
              {errors?.email.message}
            </span>
          )}
        </div>
        <div>
          <Controller
            name="gender"
            control={control}
            rules={{ required: "Gender is required" }}
            render={({ field: { onChange, value } }) => (
              <Select onValueChange={onChange} value={value}>
                <SelectTrigger
                  className={`transition3  h-14 border-2  border-white bg-transparent text-white rounded-lg`}
                >
                  <SelectValue placeholder="Select a gender" />
                </SelectTrigger>

                <SelectContent className="border-none bg-white">
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="others">Others</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.gender && (
            <p className="mt-2 text-sm text-red-600">{errors.gender.message}</p>
          )}
        </div>
        <div className="">
          <div className="relative">
            <Input
              className={`transition3  h-14 border-2  border-white bg-transparent text-white rounded-lg placeholder:text-gray-200`}
              placeholder="Password"
              type={passwordtoggle ? "password" : "text"}
              {...register("password", { required: "Password is required" })}
            />{" "}
            <div className="absolute inset-y-0 right-0 top-2 flex items-center pr-3 text-sm leading-5">
              <span
                onClick={() => setPasswordToggle(!passwordtoggle)}
                className="cursor-pointer"
              >
                {!passwordtoggle ? (
                  <svg
                    className="h-6 fill-white"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="EyeOutlineIcon"
                  >
                    <path d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z"></path>
                  </svg>
                ) : (
                  <svg
                    className="h-6 fill-white"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="EyeOffOutlineIcon"
                  >
                    <path d="M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z"></path>
                  </svg>
                )}
              </span>
            </div>
          </div>
          {errors?.password && (
            <span className="duration-1500 text-xs text-red-500 transition-all ease-out font-bold">
              {errors?.password.message}
            </span>
          )}
        </div>

        <div className="items-top flex space-x-2">
          <Controller
            name="age"
            control={control}
            rules={{ required: "You must be 18 or older" }}
            render={({ field: { onChange, value } }) => (
              <Checkbox
                onCheckedChange={(checked) => {
                  onChange(checked);
                }}
                value={value}
                id="age"
                className="border-2 accent-white"
              />
            )}
          />
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
            {errors?.age && (
              <span className="duration-1500 text-xs text-red-500 transition-all ease-out font-bold">
                {errors?.age.message}
              </span>
            )}
          </div>
        </div>
        <Button
          variant="default"
          className="h-10 w-full bg-[#ABBB00] text-white hover:bg-black rounded-[20px] shadow-lg"
          type="submit"
          disabled={false}
        >
          Register
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
