"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BellRing,
  Bookmark,
  Calendar,
  Check,
  MapPinCheck,
  ShareIcon,
  UsersIcon,
} from "lucide-react";
import { format } from "date-fns";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import ReactPaginate from "react-paginate";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
const Events = ({ events, show }: { events: any; show: boolean }) => {
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
  let itemsPerPage = 5;
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = events?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(events?.length / itemsPerPage);
  console.log(currentItems);
  /**
   * This function handles the pagination of the events to prevent rendering excess data.
   * @param event
   */
  const handlePageClick = (event: { selected: any }) => {
    const newOffset = (event.selected * itemsPerPage) % events?.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`,
    );
    setItemOffset(newOffset);
  };
  return (
    <div className="w-full">
      {show && (
        <div className="flex  w-full gap-2 items-center">
          <Select>
            <SelectTrigger className="w-1/2 lg:w-[150px] rounded-[20px] border-none bg-gray-200">
              <SelectValue placeholder="Event Location" />
            </SelectTrigger>
            <SelectContent className="border-none bg-white">
              <SelectItem value="light">Virtual</SelectItem>
              <SelectItem value="dark">Physical</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-1/2 lg:w-[150px] rounded-[20px] border-none bg-gray-200">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent className="border-none bg-white">
              <SelectItem value="light">Educational</SelectItem>
              <SelectItem value="dark">Entertainment</SelectItem>
              <SelectItem value="light">Sports</SelectItem>
              <SelectItem value="dark">Tech</SelectItem>
              <SelectItem value="dark">Politics</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}
      {currentItems.map(
        (item: {
          speaker: string;
          id: string;
          type: string;
          totalAttendees: number;
          time: string;
          name: string;
          coverImage: string;
        }) => (
          <Link
            onClick={() => {
              window?.localStorage.setItem("singleEvent", JSON.stringify(item));
            }}
            key={item.name}
            href={`/${item.id}`}
          >
            <Card className="w-full flex  flex-col gap-y-3 mt-5 p-3 lg:p-5 ">
              <div className="flex gap-x-2 items-center pb-2">
                <Image
                  src={"/images/event-banner.jpg"}
                  alt=""
                  width={500}
                  height={200}
                  className="block h-16 w-16 object-cover rounded-[10px] "
                />
                <p className="font-bold text-xl text-black">{item.name}</p>
              </div>
              <hr className="border-t-2 border-primary w-full" />
              <div className="flex gap-x-2 items-center pb-2">
                <span className="bg-black p-2   rounded-lg">
                  <Calendar color="white" size={10} />
                </span>
                <p className="font-medium text-base text-black">
                  {format(item.time, "EEEE, MMMM do, yyyy, h:mm a ")}
                </p>
              </div>
              <hr className="border-t-2 border-primary w-full" />
              <div className="flex gap-x-2 items-center justify-between pb-2">
                <span className="flex gap-2 items-center">
                  <UsersIcon />
                  <p className="text-sm text-black font-semibold">
                    {item.totalAttendees} attendees
                  </p>
                </span>

                <span className="flex gap-2 items-center font-medium text-base text-black">
                  <MapPinCheck />
                  <p>{item.type}</p>
                </span>
              </div>
              <hr className="border-t-2 border-primary w-full" />
              <div className="flex gap-x-2 items-center justify-between pb-2">
                <span className="flex gap-2 items-center">
                  <Image
                    src={"/images/speaker.png"}
                    alt=""
                    width={500}
                    height={200}
                    className="block h-12 w-12 object-cover rounded-[10px] "
                  />
                  <p className="text-sm text-black font-semibold">
                    {item.speaker}
                  </p>
                </span>
                <span className="flex items-center gap-2">
                   
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant={"ghost"}
                        className="   border-primary p-2 flex justify-center items-center gap-2 text-primary"
                      >
                        <ShareIcon /> 
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
                  {show && <Bookmark />
                  }
                </span>
              </div>
            </Card>
          </Link>
        ),
      )}
      <ReactPaginate
        breakLabel="....."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="previous-item"
        previousLinkClassName="previous-link"
        nextClassName="next-item"
        nextLinkClassName="next-link"
        breakClassName="break-item"
        breakLinkClassName="break-link"
        activeClassName="active-link"
      />
    </div>
  );
};

export default Events;
