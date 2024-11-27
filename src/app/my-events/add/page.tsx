"use client";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Footer from "@/components/modules/Footer/Footer";
import NavBar from "@/components/modules/NavBar/NavBar";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Trash2Icon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

interface IFormInput {
  name: string;
  description: string;
  location: string;
  type: string;
  time: string;
  speaker: string;
  totalAttendees: number;
  coverImage: string;
  link: string;
}
export default function CreateEventForm() {
  const [attendees, setAttendees] = useState<any[]>([]);
  const [currentAttendee, setCurrentAttendee] = useState<any>({
    name: "",
    profileImage: "",
    role: "attendee",
  });

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCurrentAttendee((prev: any) => ({ ...prev, [name]: value }));
  };

  // Add an attendee
  const handleAddAttendee = () => {
    if (currentAttendee.name && currentAttendee.profileImage) {
      setAttendees((prev) => [...prev, { ...currentAttendee }]);
      setCurrentAttendee({ name: "", profileImage: "", role: "attendee" }); // Reset input
    } else {
      alert("Please fill in all fields before adding an attendee.");
    }
  };

  // Remove an attendee
  const handleRemoveAttendee = (index: number) => {
    setAttendees((prev) => prev.filter((_, i) => i !== index));
  };

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>({
    defaultValues: {
      type: "", // Default value for the select
    },
  });

  const onSubmit = (data: any) => {
    const newEvent = {
      ...data,
      id: Date.now().toString(),
      attendees: attendees,
      time: new Date(data.time).toISOString(),
    };

    console.log("New Event:", newEvent);
    // TODO: Add logic to save/submit the event
    reset();
    setAttendees([]);
  };

  // const addAttendee = () => {
  //     try {
  //         const validatedAttendee = attendeeSchema.parse(currentAttendee);
  //         setAttendees([...attendees, validatedAttendee]);
  //         setCurrentAttendee({ name: '', profileImage: '', role: 'attendee' });
  //         resetAttendee();
  //     } catch (error) {
  //         console.error('Attendee validation failed', error);
  //     }
  // };

  const removeAttendee = (index: number) => {
    const newAttendees = attendees.filter((_: any, i: number) => i !== index);
    setAttendees(newAttendees);
  };

  return (
    <>
      <NavBar />
          <main className="bg-gray-100 py-5 lg:py-10">
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg ">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Create New Event
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Event Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Event Name
              </label>
              <Input
                {...register("name", { required: "Name is required" })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              {errors?.name && (
                <span className="duration-1500 text-xs text-red-500 transition-all ease-out">
                  {errors?.name.message}
                </span>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <Textarea
                {...register("description", {
                  required: "Descrption is required",
                })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              {errors.description && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Event Type and Location */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Controller
                  name="type"
                  control={control}
                  rules={{ required: "Type is required" }}
                  render={({ field: { onChange, value } }) => (
                    <Select onValueChange={onChange} value={value}>
                      <SelectTrigger className="h-14 w-full rounded-[16px] border-none bg-gray-100">
                        <SelectValue placeholder="Select a Type" />
                      </SelectTrigger>

                      <SelectContent className="border-none bg-white">
                        <SelectItem value="virtual">Virtual</SelectItem>
                        <SelectItem value="physical">
                          MontPhysicalhly
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.type && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.type.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Location
                </label>
                <Input
                  {...register("location", {
                    required: "Location is required",
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Enter location (optional)"
                />
              </div>
            </div>

            {/* Time, Speaker, Total Attendees */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Event Time
                </label>
                <input
                  type="datetime-local"
                  {...register("time", {
                    setValueAs: (v) =>
                      v ? new Date(v).toISOString() : undefined,
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                {errors.time && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.time.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Speaker
                </label>
                <Input
                  {...register("speaker", {
                    required: "Speaker is required",
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                {errors.speaker && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.speaker.message}
                  </p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Cover Image URL
                </label>
                <Input
                  {...register("coverImage", {
                    required: "Image is required",
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                {errors.coverImage && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.coverImage.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Event Link (optional)
                </label>
                <Input
                  {...register("link", {
                    required: "Link is required",
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Enter event link"
                />
                {errors.link && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.link.message}
                  </p>
                )}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">Attendees</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">Name</label>
                  <Input
                    type="text"
                    name="name"
                    value={currentAttendee.name}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    placeholder="Enter attendee's name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">
                    Profile Image URL
                  </label>
                  <Input
                    type="text"
                    name="profileImage"
                    value={currentAttendee.profileImage}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    placeholder="Enter profile image URL"
                  />
                </div>
              </div>

              <span className="flex justify-end ">
                <Button
                  onClick={handleAddAttendee}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 "
                >
                  Add Attendee
                </Button>
              </span>
              {attendees.length > 0 ? (
                <ul className="space-y-2 mt-4">
                  {attendees.map((attendee, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between bg-gray-100 p-3 rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <img
                          src={attendee.profileImage}
                          alt={attendee.name}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <p className="font-medium">{attendee.name}</p>
                          <p className="text-sm text-gray-500">
                            {attendee.role}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleRemoveAttendee(index)}
                        className="text-red-500 hover:underline"
                      >
                        <Trash2Icon />
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-gray-500 text-center">
                  No attendees added yet.
                </p>
              )}
            </div>
            {/* Cover Image and Link */}

            {/* Submit Button */}
            <div className="text-center mt-6">
              <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-green-600 lg:w-[500px]">
                Create Event
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
