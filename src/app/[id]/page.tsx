"use client";
import Footer from "@/components/modules/Footer/Footer";
import NavBar from "@/components/modules/NavBar/NavBar";
import { Card } from "@/components/ui/card";
import { format } from "date-fns";
import {
  Bookmark,
  Clock10Icon,
  ShareIcon,
  Users,
  VideoIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { usePathname } from "next/navigation";

type ItemType = {
  speaker: string;
  id: string;
  type: string;
  totalAttendees: number;
  time: string;
  name: string;
  coverImage: string;
};
const EventDetails = () => {
  const [item, setItem] = useState<ItemType | any>({});

  /**
 * Function handles fetching events from storage
 * 
 */
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedItem = localStorage.getItem("singleEvent");
      if (storedItem) {
        try {
          setItem(JSON.parse(storedItem));
        } catch (error) {
          console.error("Failed to parse item from localStorage:", error);
        }
      }
    }
  }, []);
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  const socials = [
    {
      sm: "/icons/facebookIcon.png",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        currentUrl,
      )}`, // Facebook
    },
    {
      sm: "/icons/ig.png",
      url: `https://www.instagram.com/direct/inbox/`, // Instagram DM (doesn't support direct links with pre-filled URLs)
    },
    {
      sm: "/icons/XIcon.png",
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        currentUrl,
      )}&text=Check%20this%20out%21`, // Twitter (X)
    },
    {
      sm: "/icons/tikTok.png",
      url: `https://www.tiktok.com/inbox`, // TikTok (manual redirection)
    },
    {
      sm: "/icons/whatsappIcon.png",
      url: `https://wa.me/?text=${encodeURIComponent(
        `Check this out: ${currentUrl}`,
      )}`, // WhatsApp
    },
  ];
  return (
    <div>
      {" "}
      <NavBar />
      <section className="max-w-[1440px] relative">
        <header className="py-5 bg-white shadow-sm w-full lg:px-20 px-10 ">
          <h2 className="text-2xl lg:text-4xl font-bold ">{item.name}</h2>
          <span className="flex gap-2 items-center">
            <Image
              src={"/images/speaker.png"}
              alt=""
              width={500}
              height={200}
              className="block h-20 w-20 object-cover rounded-[10px] "
            />
            <span className="flex flex-col ">
              <p>Hosted by</p>
              <p className="text-sm text-black font-semibold">{item.speaker}</p>
            </span>
          </span>
        </header>
        <main className="bg-gray-200 min-h-screen lg:px-20 px-5 mb-10 flex flex-col-reverse gap-y-5 lg:flex-row items-start gap-x-10 py-5 lg:py-10">
          <div className="w-full lg:w-[70%]">
            <Image
              src={"/images/event-banner.jpg"}
              alt=""
              width={500}
              height={200}
              className="block h-96 w-full object-cover rounded-[10px] "
            />
            <div className="mt-5">
              <span>{item.description}</span>
            </div>
            <h2 className="text-3xl font-bold  text-black py-3">
              Attendees ({ item?.attendees?.length})
            </h2>
            <div className="bg-white p-3">
              <Carousel
                opts={{
                  align: "center",
                }}
                className="w-full "
              >
                <CarouselContent>
                  {item?.attendees?.map(
                    (
                      single: {
                        name: string;
                        profileImage: string;
                        role: string;
                        gender: string;
                      },
                      index: React.Key | null | undefined,
                    ) => (
                      <CarouselItem
                        key={index}
                        className="md:basis-1/2 lg:basis-1/4"
                      >
                        <div className="p-3">
                          <Card
                            className={`flex justify-center items-center gap-y-2 flex-col py-4 bg-white shadow-lg ${
                              index === 0 ? "blur-none" : "blur-sm"
                            }`}
                          >
                            <Image
                              src={
                                single.gender === "male"
                                  ? "/images/user-male.jpg"
                                  : "/images/user-female.jpg"
                              }
                              alt=""
                              width={500}
                              height={200}
                              className="block h-24 w-24 object-cover rounded-full "
                            />
                            <p className="text-sm text-black font-semibold">
                              {single.name}
                            </p>
                          </Card>
                        </div>
                      </CarouselItem>
                    ),
                  )}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
          <div className="flex gap-y-3 flex-col w-full lg:w-[30%] lg:sticky lg:top-28">
            <Card className="w-full flex items-start gap-x-5 p-3 lg:p-5 bg-white">
              <Users size={30} />
              <p className="text-lg text-black font-bold">Tech Group</p>
            </Card>
            <Card className="w-full flex flex-col items-start gap-x-5 p-3 lg:p-5 bg-white">
              <div className="flex items-start gap-x-5">
                <Clock10Icon size={30} />
                <span className="flex flex-col ">
                  <p className="text-lg text-black font-bold">
                    {" "}
                    {item?.time
                      ? format(item?.time, "EEEE, MMMM do, yyyy, h:mm a ")
                      : ""}
                  </p>
                  <Link
                    className="text-blue-500 underline"
                    target="_blank"
                    href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
                      item.name,
                    )}&dates=${item.time}Z&details=${encodeURIComponent(
                      item.description,
                    )}&location=${encodeURIComponent(item.link)}`}
                  >
                    Add to google calendar
                  </Link>
                </span>
              </div>
              <div className="flex items-start gap-x-5 pt-3">
                <VideoIcon size={30} />
                <span className="flex flex-col">
                  <p className="text-lg text-black font-bold">
                    {item.type} event
                  </p>
                  {item?.link && (
                    <p className="text-sm text-blue-500 font-bold">
                      {item?.link}{" "}
                    </p>
                  )}
                </span>
              </div>
            </Card>
          </div>
        </main>
        <div className="w-full sticky bottom-0 bg-white  shadow-lg py-3 lg:px-20 px-10 flex gap-x-7 justify-end items-center">
          <Button className="   bg-red-500 p-2 flex justify-center items-center gap-2 text-white">
            <Bookmark fill="#FFD700" color="#FFD700" size={12} />
            Book a Slot
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant={"outline"}
                className="   border-primary p-2 flex justify-center items-center gap-2 text-primary"
              >
                <ShareIcon fill="#ABBB00" color="#ABBB00" size={12} />
                Share
              </Button>
            </DialogTrigger>

            {/* Dialog Content */}
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-center pb-2">
                  Share via
                </DialogTitle>
              </DialogHeader>
              <div className="flex justify-between items-center px-5">
                {socials.map((social, index) => (
                  <Link
                    target="_blank"
                    href={social.url}
                    className="text-white"
                    key={social.url}
                  >
                    <Image
                      src={social.sm}
                      alt=""
                      width={500}
                      height={200}
                      className="block h-12 w-12 object-cover rounded-[10px] "
                    />
                  </Link>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default EventDetails;
