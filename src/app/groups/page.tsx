"use client";
import Footer from "@/components/modules/Footer/Footer";
import GroupCards from "@/components/modules/groups/GroupCards";
import NavBar from "@/components/modules/NavBar/NavBar";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Controller, useForm } from "react-hook-form";
import { continents, countries, languages } from "countries-list";
// Utils
import {
  getCountryCode,
  getCountryData,
  getCountryDataList,
  getEmojiFlag,
} from "countries-list";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
const groups = [
  {
    name: "Tech Enthusiasts",
    location: "San Francisco, CA",
    description: "A group for tech lovers to discuss the latest trends.",
    topics: ["AI", "Blockchain", "Web Development"],
  },
  {
    name: "Art and Creativity",
    location: "New York, NY",
    description: "A group for artists and creative minds.",
    topics: ["Painting", "Photography", "Graphic Design"],
  },
  {
    name: "Fitness Freaks",
    location: "Los Angeles, CA",
    description: "A group for fitness enthusiasts to share tips and routines.",
    topics: ["Yoga", "Cardio", "Strength Training"],
  },
  {
    name: "Foodies United",
    location: "Chicago, IL",
    description: "A group for people who love exploring new cuisines.",
    topics: ["Street Food", "Fine Dining", "Recipes"],
  },
  {
    name: "Travel Explorers",
    location: "Seattle, WA",
    description: "A group for travelers to share experiences and tips.",
    topics: ["Adventure Travel", "Budget Travel", "Luxury Travel"],
  },
  {
    name: "Music Lovers",
    location: "Austin, TX",
    description: "A group for music enthusiasts to share playlists and more.",
    topics: ["Rock", "Pop", "Classical"],
  },
  {
    name: "Book Club",
    location: "Boston, MA",
    description: "A group for book lovers to discuss their favorite reads.",
    topics: ["Fiction", "Non-Fiction", "Mystery"],
  },
  {
    name: "Startup Founders",
    location: "Silicon Valley, CA",
    description: "A group for startup founders to network and share ideas.",
    topics: ["Pitching", "Funding", "Scaling"],
  },
  {
    name: "Gaming Community",
    location: "Las Vegas, NV",
    description: "A group for gamers to discuss and play together.",
    topics: ["Console Gaming", "PC Gaming", "eSports"],
  },
  {
    name: "Wellness Warriors",
    location: "Portland, OR",
    description: "A group focused on mental and physical wellness.",
    topics: ["Meditation", "Mental Health", "Nutrition"],
  },
];
const mine = [
   
    {
        name: "Gaming Community",
        location: "Las Vegas, NV",
        description: "A group for gamers to discuss and play together.",
        topics: ["Console Gaming", "PC Gaming", "eSports"],
    },
    {
        name: "Wellness Warriors",
        location: "Portland, OR",
        description: "A group focused on mental and physical wellness.",
        topics: ["Meditation", "Mental Health", "Nutrition"],
    },
];
const INTERESTS = [
  "Technology",
  "Travel",
  "Fitness",
  "Cooking",
  "Photography",
  "Music",
  "Art",
  "Gaming",
  "Reading",
  "Dancing",
];
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
const Page = () => {
  const countries = getCountryDataList();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>({
    defaultValues: {
     
      location: "",
    },
  });
  const [selectedInterests, setSelectedInterests] = useState<any>([]);
const router = useRouter()
  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev: string[]) =>
      prev.includes(interest)
        ? prev.filter((item) => item !== interest)
        : [...prev, interest],
    );
  };
  const onSubmit = (data: any) => {
      console.log(data);
      const ints = [selectedInterests]
      const newData = { ints, ...data }
      console.log(newData)
      if (data) {
          router.push("/billing")
      }
  };
  return (
    <div>
      <NavBar />
      <main className="flex flex-col items-start lg:gap-6 max-w-[1440px] lg:px-20 px-5  lg:mx-0 py-10 lg:py-20 min-h-screen">
        <Dialog>
          <DialogTrigger asChild>
            <div className="flex flex-col lg:flex-row justify-center gap-y-4 lg:justify-between items-center w-full py-4">
              <h2 className="text-2xl lg:text-4xl font-bold ">Groups</h2>
              <Button className="   bg-black text-white  p-2 flex justify-center items-center gap-2 ">
                Add Group
              </Button>
            </div>
          </DialogTrigger>

          {/* Dialog Content */}
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-center pb-2">Add Group</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Group Name
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
                <div>
                  <Controller
                    name="location"
                    control={control}
                    rules={{ required: "Location is required" }}
                    render={({ field: { onChange, value } }) => (
                      <Select onValueChange={onChange} value={value}>
                        <SelectTrigger className="h-14 w-full rounded-[16px] border-none bg-gray-100">
                          <SelectValue placeholder="Select a Location" />
                        </SelectTrigger>

                        <SelectContent className="border-none bg-white">
                          {countries?.map((country) => (
                            <SelectItem
                              value={country?.name}
                              key={country?.name}
                            >
                              {country?.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.location && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.location.message}
                    </p>
                  )}
                </div>
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
                <div className="mb-2">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                  >
                    Your Interests
                  </label>
                  <div className="flex gap-2 items-center flex-wrap">
                    {INTERESTS.map((interest) => (
                      <button
                        key={interest}
                        onClick={() => toggleInterest(interest)}
                        className={`
              px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 
              ${
                selectedInterests.includes(interest)
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }
            `}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <Button className="w-full">Add Group</Button>
              </div>
            </form>
          </DialogContent>
              </Dialog>
              <Tabs defaultValue="attending" className="w-full ">
                  <TabsList className="grid w-full grid-cols-2 w-[400px] mx-auto">
                      <TabsTrigger value="attending">All</TabsTrigger>
                      <TabsTrigger value="hosting">My Groups</TabsTrigger>
                  </TabsList>
                  <TabsContent
                      value="attending"
                      className="w-full mx-auto flex justify-center"
                  >
                      {" "}
                      <GroupCards groups={groups} show={true} />
                  </TabsContent>
                  <TabsContent
                      value="hosting"
                      className="lg:w-full mx-auto flex flex-col justify-center"
                  >
                      {" "}


                      <GroupCards groups={mine} show={false} />
                  </TabsContent>
              </Tabs>
       
      </main>
      <Footer />
    </div>
  );
};

export default Page;
