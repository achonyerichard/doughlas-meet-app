"use client";
import Events from "@/components/modules/home/Events";
import NavBar from "@/components/modules/NavBar/NavBar";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FilterIcon, SlidersHorizontal } from "lucide-react";
import Footer from "@/components/modules/Footer/Footer";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
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
    {
      id: "3",
      coverImage:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Startup Founders Meetup",
      time: "2024-11-25T18:00:00Z",
      speaker: "Ms. Amanda Carter",
      totalAttendees: 200,
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
      location: "TechHub Downtown, San Francisco",
    },
    {
      id: "4",
      coverImage:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "AI and Future of Work",
      time: "2024-12-10T09:00:00Z",
      speaker: "Dr. James Smith",
      totalAttendees: 750,
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
      id: "5",
      coverImage:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Health and Wellness Workshop",
      time: "2024-12-08T12:00:00Z",
      speaker: "Dr. Emily Stone",
      totalAttendees: 150,
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
      location: "Sunrise Hotel, LA",
    },
    {
      id: "6",
      coverImage:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Blockchain Innovations",
      time: "2024-11-28T16:00:00Z",
      speaker: "Mr. Alan Brown",
      totalAttendees: 600,
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
    {
      id: "10",
      coverImage: "/images/login-banner.jpg",
      name: "Green Energy Conference",
      time: "2024-12-20T10:00:00Z",
      speaker: "Dr. Richard Clark",
      totalAttendees: 1000,
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
  ];

  const [startDate, setStartDate] = useState<any>(new Date());
  const [interests, setInterests] = useState([
    "Technology",
    "Art",
    "Music",
    "Science",
    "Sports",
  ]);
  const [selectedInterests, setSelectedInterests] = useState<string>("");

  /**
   * This function is used to select an interest to handle filtering events by user's interests
   * @param {string} interest - A user's interest
   */
  const toggleInterest = (interest: string) => {
    setSelectedInterests(interest);
  };

  return (
    <div className="relative">
      <NavBar />
      <main className="flex items-start lg:gap-6 max-w-[1440px] lg:px-20 px-5  lg:mx-0 py-10 lg:py-20 min-h-screen">
        <div className="hidden lg:block w-[30%] sticky top-28">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            startDate={startDate}
            inline
          />
          <Card className="p-5 w-[250px]">
            <p className="text-black font-bold pb-3">Your Interest</p>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <button
                  key={interest}
                  onClick={() => toggleInterest(interest)}
                  className={`px-2 py-2 rounded-full border border-gray-300 text-xs font-medium  hover:bg-primary hover:text-white ${
                    selectedInterests.includes(interest)
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-gray-700"
                  } transition-colors duration-300`}
                >
                  {interest}
                </button>
              ))}
            </div>
            <Button variant="ghost" className="mt-4 underline">
              Add More Interests
            </Button>
          </Card>
        </div>
        <div className="w-full lg:w-[70%]">
          <Events events={events} show={true} />
        </div>
        <Dialog>
          <DialogTrigger
            asChild
            className="fixed bottom-10 right-[35%]  lg:hidden"
          >
            <Button
              variant="default"
              className="h-7 w-24 rounded-[20px] bg-primary cursor-pointer text-white hover:bg-black  shadow-lg"
            >
              <SlidersHorizontal />
              Filter
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Filter</DialogTitle>
              <DialogDescription>Filter events by data.</DialogDescription>
            </DialogHeader>
            <Tabs defaultValue="interest" className="w-full">
              <TabsList className="flex justify-center mb-4">
                <TabsTrigger value="interest" className="w-full">
                  Interest
                </TabsTrigger>
                <TabsTrigger value="date" className="w-full">
                  Date
                </TabsTrigger>
              </TabsList>
              <TabsContent value="interest">
                {" "}
                <Card className="p-5 w-full">
                  <p className="text-black font-bold pb-3">Your Interest</p>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((interest) => (
                      <button
                        key={interest}
                        onClick={() => toggleInterest(interest)}
                        className={`px-2 py-2 rounded-full border border-gray-300 text-xs font-medium  hover:bg-primary hover:text-white ${
                          selectedInterests.includes(interest)
                            ? "bg-primary text-white"
                            : "bg-gray-200 text-gray-700"
                        } transition-colors duration-300`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                  <Button variant="ghost" className="mt-4 underline">
                    Add More Interests
                  </Button>
                </Card>
              </TabsContent>
              <TabsContent value="date">
                {" "}
                <div className="flex justify-center">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    startDate={startDate}
                    inline
                  />
                </div>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      </main>
      <Footer />
    </div>
  );
}
