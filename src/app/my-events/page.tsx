"use client";
import NavBar from "@/components/modules/NavBar/NavBar";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Events from "@/components/modules/home/Events";
import Footer from "@/components/modules/Footer/Footer";
import Link from "next/link";
const events = [
  {
    id: "1",
    coverImage:
      "https://images.unsplash.com/photo-1731848358192-e0c766b66031?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Tech Summit 2024",
    time: "2024-12-01T10:00:00Z",
    speaker: "Dr. Sarah Johnson",
    totalAttendees: 500,
    type: "Virtual",
    link: "https://meet.google.com/tech-summit-2024",
    attendees: [
      {
        name: "John Doe",
        profileImage:
          "https://images.unsplash.com/photo-1521566652839-697aa473761a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        name: "Jane Smith",
        profileImage:
          "https://images.unsplash.com/photo-1521566652839-697aa473761a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        role: "speaker",
      },
      {
        name: "Alice Brown",
        profileImage:
          "https://unsplash.com/photos/a-man-with-a-beard-and-a-green-shirt-ZgwIEWcvlKo",
      },
      {
        name: "Bob White",
        profileImage:
          "https://unsplash.com/photos/a-man-with-a-beard-and-a-green-shirt-ZgwIEWcvlKo",
      },
      {
        name: "Angela Smith",
        profileImage:
          "https://unsplash.com/photos/woman-near-green-leafed-plants-R8bNESnnKR8",
      },
    ],
    description:
      "Join industry leaders to discuss the latest trends in technology and innovation.",
    location: "Online",
  },
  {
    id: "12",
    coverImage:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Marketing Strategies Expo",
    time: "2024-12-05T14:00:00Z",
    speaker: "Mr. David Lee",
    totalAttendees: 300,
    type: "Physical",
    attendees: [
      {
        name: "John Doe",
        profileImage:
          "https://images.unsplash.com/photo-1521566652839-697aa473761a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        name: "Jane Smith",
        profileImage:
          "https://unsplash.com/photos/woman-near-green-leafed-plants-R8bNESnnKR8",
      },
      {
        name: "Alice Brown",
        profileImage:
          "https://unsplash.com/photos/a-man-with-a-beard-and-a-green-shirt-ZgwIEWcvlKo",
      },
      {
        name: "Bob White",
        profileImage:
          "https://unsplash.com/photos/a-man-with-a-beard-and-a-green-shirt-ZgwIEWcvlKo",
        role: "speaker",
      },
    ],
    description:
      "Join industry leaders to discuss the latest trends in technology and innovation.",
    location: "Hilton Conference Hall, NYC",
  },
];
const hosted = [
  {
    id: "7",
    coverImage: "/images/login-banner.jpg",
    name: "Leadership Bootcamp",
    time: "2024-12-15T08:30:00Z",
    speaker: "Ms. Rebecca Green",
    totalAttendees: 100,
    type: "Physical",
    attendees: [
      {
        name: "John Doe",
        profileImage:
          "https://images.unsplash.com/photo-1521566652839-697aa473761a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        gender: "male",
      },
      {
        name: "Jane Smith",
        profileImage:
          "https://unsplash.com/photos/woman-near-green-leafed-plants-R8bNESnnKR8",
        role: "speaker",
        gender: "female",
      },
      {
        name: "Alice Brown",
        profileImage:
          "https://unsplash.com/photos/a-man-with-a-beard-and-a-green-shirt-ZgwIEWcvlKo",
        gender: "female",
      },
      {
        name: "Bob White",
        profileImage:
          "https://unsplash.com/photos/a-man-with-a-beard-and-a-green-shirt-ZgwIEWcvlKo",
        gender: "female",
      },
    ],
    description:
      "Join industry leaders to discuss the latest trends in technology and innovation.",
    location: "Grandview Center, Chicago",
  },
  {
    id: "8",
    coverImage: "/images/login-banner.jpg",
    name: "Cybersecurity Trends 2024",
    time: "2024-12-02T11:00:00Z",
    speaker: "Mr. Michael Turner",
    totalAttendees: 400,
    type: "Virtual",
    link: "https://meet.google.com/tech-summit-2024",
    attendees: [
      {
        name: "John Doe",
        profileImage:
          "https://images.unsplash.com/photo-1521566652839-697aa473761a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        gender: "male",
      },
      {
        name: "Jane Smith",
        profileImage:
          "https://unsplash.com/photos/woman-near-green-leafed-plants-R8bNESnnKR8",
        role: "speaker",
        gender: "female",
      },
      {
        name: "Alice Brown",
        profileImage:
          "https://unsplash.com/photos/a-man-with-a-beard-and-a-green-shirt-ZgwIEWcvlKo",
        gender: "female",
      },
      {
        name: "Bob White",
        profileImage:
          "https://unsplash.com/photos/a-man-with-a-beard-and-a-green-shirt-ZgwIEWcvlKo",
        gender: "female",
      },
    ],
    description:
      "Join industry leaders to discuss the latest trends in technology and innovation.",
    location: "Online",
  },
  {
    id: "9",
    coverImage: "/images/login-banner.jpg",
    name: "Creative Writing Workshop",
    time: "2024-11-30T15:00:00Z",
    speaker: "Ms. Laura Benson",
    totalAttendees: 80,
    type: "Physical",
    attendees: [
      {
        name: "John Doe",
        profileImage:
          "https://images.unsplash.com/photo-1521566652839-697aa473761a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        gender: "male",
      },
      {
        name: "Jane Smith",
        profileImage:
          "https://unsplash.com/photos/woman-near-green-leafed-plants-R8bNESnnKR8",
        role: "speaker",
        gender: "female",
      },
      {
        name: "Alice Brown",
        profileImage:
          "https://unsplash.com/photos/a-man-with-a-beard-and-a-green-shirt-ZgwIEWcvlKo",
        gender: "female",
      },
      {
        name: "Bob White",
        profileImage:
          "https://unsplash.com/photos/a-man-with-a-beard-and-a-green-shirt-ZgwIEWcvlKo",
        gender: "female",
      },
    ],
    description:
      "Join industry leaders to discuss the latest trends in technology and innovation.",
    location: "Community Arts Center, Austin",
  },
];
const MyEvents = () => {
  return (
    <div>
      <NavBar />
     
      <main className="flex flex-col w-full items-start lg:gap-6 max-w-[1440px] lg:px-20 px-5  lg:mx-0 py-10 lg:py-16 min-h-screen">
        <header className="flex flex-col w-full items-center justify-center gap-2 mb-2">

          <h2 className="text-2xl font-bold ">
           Events
          </h2>
          <div className="flex justify-end items-end">
            <Link href="/my-events/add" className=" bg-primary w-auto p-2 text-white text-xs">Create Event</Link>
          </div>
        </header>
        <Tabs defaultValue="attending" className="w-full ">
          <TabsList className="grid w-full grid-cols-2 w-[400px] mx-auto">
            <TabsTrigger value="attending">Attending</TabsTrigger>
            <TabsTrigger value="hosting">Hosting</TabsTrigger>
          </TabsList>
          <TabsContent
            value="attending"
            className="max-w-xl mx-auto flex justify-center"
          >
            {" "}
            <Events events={events} show={false} />
          </TabsContent>
          <TabsContent
            value="hosting"
            className="lg:max-w-xl mx-auto flex flex-col justify-center"
          >
            {" "}
           
           
            <Events events={hosted} show={false} />
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default MyEvents;
