"use client"
import Events from "@/components/modules/home/Events";
import NavBar from "@/components/modules/NavBar/NavBar";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Home() {
  const events = [
    {
      coverImage: "https://images.unsplash.com/photo-1731848358192-e0c766b66031?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Tech Summit 2024",
      time: "2024-12-01T10:00:00Z",
      speaker: "Dr. Sarah Johnson",
      totalAttendees: 500,
      type: "Virtual",
      location: "Online",
    },
    {
      coverImage: "/images/login-banner.jpg",
      name: "Marketing Strategies Expo",
      time: "2024-12-05T14:00:00Z",
      speaker: "Mr. David Lee",
      totalAttendees: 300,
      type: "Physical",
      location: "Hilton Conference Hall, NYC",
    },
    {
      coverImage: "/images/login-banner.jpg",
      name: "Startup Founders Meetup",
      time: "2024-11-25T18:00:00Z",
      speaker: "Ms. Amanda Carter",
      totalAttendees: 200,
      type: "Physical",
      location: "TechHub Downtown, San Francisco",
    },
    {
      coverImage: "/images/login-banner.jpg",
      name: "AI and Future of Work",
      time: "2024-12-10T09:00:00Z",
      speaker: "Dr. James Smith",
      totalAttendees: 750,
      type: "Virtual",
      location: "Online",
    },
    {
      coverImage: "/images/login-banner.jpg",
      name: "Health and Wellness Workshop",
      time: "2024-12-08T12:00:00Z",
      speaker: "Dr. Emily Stone",
      totalAttendees: 150,
      type: "Physical",
      location: "Sunrise Hotel, LA",
    },
    {
      coverImage: "/images/login-banner.jpg",
      name: "Blockchain Innovations",
      time: "2024-11-28T16:00:00Z",
      speaker: "Mr. Alan Brown",
      totalAttendees: 600,
      type: "Virtual",
      location: "Online",
    },
    {
      coverImage: "/images/login-banner.jpg",
      name: "Leadership Bootcamp",
      time: "2024-12-15T08:30:00Z",
      speaker: "Ms. Rebecca Green",
      totalAttendees: 100,
      type: "Physical",
      location: "Grandview Center, Chicago",
    },
    {
      coverImage: "/images/login-banner.jpg",
      name: "Cybersecurity Trends 2024",
      time: "2024-12-02T11:00:00Z",
      speaker: "Mr. Michael Turner",
      totalAttendees: 400,
      type: "Virtual",
      location: "Online",
    },
    {
      coverImage: "/images/login-banner.jpg",
      name: "Creative Writing Workshop",
      time: "2024-11-30T15:00:00Z",
      speaker: "Ms. Laura Benson",
      totalAttendees: 80,
      type: "Physical",
      location: "Community Arts Center, Austin",
    },
    {
      coverImage: "/images/login-banner.jpg",
      name: "Green Energy Conference",
      time: "2024-12-20T10:00:00Z",
      speaker: "Dr. Richard Clark",
      totalAttendees: 1000,
      type: "Virtual",
      location: "Online",
    },
  ];

  const [startDate, setStartDate] = useState<any>(new Date());

  return (
    <>
      <NavBar />
      <main className="flex items-start gap-6 max-w-[1440px] lg:px-20 px-10 mx-5 lg:mx-0 py-10 lg:py-20 min-h-screen">
        <div className="hidden lg:block w-[30%] sticky top-28">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            startDate={startDate}
            inline
          />
        </div>
        <div className="w-full lg:w-[70%]">
          <Events events={events} />
        </div>
      </main>
    </>
  );
}
