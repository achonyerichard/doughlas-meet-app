"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
interface IFormInput {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}
export const ChangePassword = () => {
  const [passwordtoggle, setPasswordToggle] = useState(true);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>({
    defaultValues: {},
  });

  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
  const validatePassword = (value: string) =>
    passwordPattern.test(value) ||
    "Password must be 8 characters long and have at least one special character, one number and one capital letter .";

  const handleChangePassword = (data: any) => {
    console.log("data to back", data);

    reset();
  };

  return (
    <>
      <h2 className="text-black text-3xl font-semibold">Change Password</h2>
      <form
        className="lg:w-[500px]"
        onSubmit={handleSubmit(handleChangePassword)}
      >
        <div className="flex flex-col gap-x-2 w-full h-auto lg:pt-10 pt-5 space-y-4 ">
          <div className={`text-black flex flex-col items-start `}>
            <label
              className={`ml-1 mb-2 text-md text-black `}
              htmlFor="password"
            >
              Old Password
            </label>
            <div className="relative w-full">
              <Input
                id="old_password"
                type={passwordtoggle ? "password" : "text"}
                placeholder="*******"
                className="border w-full h-10 md:h-10 px-5 text-base md:text-lg rounded-lg outline-none focus:border-slate-400 "
                {...register("oldPassword", {
                  required: "Old Password is required",
                })}
              />

              <div className="absolute inset-y-0 right-0 top-0 pr-3 flex items-center text-sm leading-5">
                <span
                  onClick={() => setPasswordToggle(!passwordtoggle)}
                  className="cursor-pointer"
                >
                  {!passwordtoggle ? (
                    <svg
                      className="h-6  fill-black"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="EyeOutlineIcon"
                    >
                      <path d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z"></path>
                    </svg>
                  ) : (
                    <svg
                      className="h-6  fill-black"
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
            {errors && errors?.oldPassword && (
              <span className="text-xs text-red-500 ease-out duration-1500 transition-all">
                {errors?.oldPassword?.message}
              </span>
            )}
          </div>

          <div className={`text-black flex flex-col items-start `}>
            <label
              className={`ml-1 mb-2 text-md text-black `}
              htmlFor="password"
            >
              New Password
            </label>
            <div className="relative w-full">
              <Input
                id="new_password"
                type={passwordtoggle ? "password" : "text"}
                placeholder="*******"
                className="border w-full h-10 md:h-10 px-5 text-base md:text-lg rounded-lg outline-none focus:border-slate-400 "
                {...register("newPassword", {
                  required: "New Password is required",
                  validate: validatePassword,
                })}
              />

              <div className="absolute inset-y-0 right-0 top-0  pr-3 flex items-center text-sm leading-5">
                <span
                  onClick={() => setPasswordToggle(!passwordtoggle)}
                  className="cursor-pointer"
                >
                  {!passwordtoggle ? (
                    <svg
                      className="h-6  fill-black"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="EyeOutlineIcon"
                    >
                      <path d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z"></path>
                    </svg>
                  ) : (
                    <svg
                      className="h-6  fill-black"
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
            {errors && errors?.newPassword && (
              <span className="text-xs text-red-500 ease-out duration-1500 transition-all">
                {errors?.newPassword?.message}
              </span>
            )}
          </div>

          <div className={`text-black flex flex-col items-start `}>
            <label
              className={`ml-1 mb-2 text-md text-black `}
              htmlFor="password"
            >
              Confirm Password
            </label>
            <div className="relative w-full">
              <Input
                id="confirm_password"
                type={passwordtoggle ? "password" : "text"}
                placeholder="*******"
                className="border w-full h-10 md:h-10 px-5 text-base md:text-lg rounded-lg outline-none focus:border-slate-400 "
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: validatePassword,
                })}
              />

              <div className="absolute inset-y-0 right-0 top-0  pr-3 flex items-center text-sm leading-5">
                <span
                  onClick={() => setPasswordToggle(!passwordtoggle)}
                  className="cursor-pointer"
                >
                  {!passwordtoggle ? (
                    <svg
                      className="h-6  fill-black"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="EyeOutlineIcon"
                    >
                      <path d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z"></path>
                    </svg>
                  ) : (
                    <svg
                      className="h-6  fill-black"
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
            {errors && errors?.confirmPassword && (
              <span className="text-xs text-red-500 ease-out duration-1500 transition-all">
                {errors?.confirmPassword?.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex justify-start">
          <Button className="px-5 py-2 w-40 text-white bg-black rounded-sm mt-[50px] ml-4">
            {"Save"}
          </Button>
        </div>
      </form>
    </>
  );
};
