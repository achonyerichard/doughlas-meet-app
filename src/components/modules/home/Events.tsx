"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BellRing, Calendar, Check, MapPinCheck, UsersIcon } from "lucide-react";
import { format } from "date-fns";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import ReactPaginate from "react-paginate";


const Events = ({ events }: any) => {
    let itemsPerPage = 5;
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;

    const currentItems = events?.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(events?.length / itemsPerPage);
console.log(currentItems)
    // Invoke when user click to request another page.
    const handlePageClick = (event: { selected: any }) => {
        const newOffset = (event.selected * itemsPerPage) % events?.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`,
        );
        setItemOffset(newOffset);
    };
  return (
    <div className="w-full">
      <div className="flex gap-2 items-center">
        <Select>
          <SelectTrigger className="w-[150px] rounded-[20px] border-none bg-gray-200">
            <SelectValue placeholder="Event Location" />
          </SelectTrigger>
          <SelectContent className="border-none bg-gray">
            <SelectItem value="light">Virtual</SelectItem>
            <SelectItem value="dark">Physical</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[150px] rounded-[20px] border-none bg-gray-200">
            <SelectValue placeholder="Event Type" />
          </SelectTrigger>
          <SelectContent className="border-none bg-gray">
            <SelectItem value="light">Educational</SelectItem>
            <SelectItem value="dark">Entertainment</SelectItem>
            <SelectItem value="light">Sports</SelectItem>
            <SelectItem value="dark">Tech</SelectItem>
            <SelectItem value="dark">Politics</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {currentItems.map((item: {
          type: string;
          totalAttendees: number; time: string; name: string; coverImage: string 
}) => (
        <Card
          key={item.name}
          className="w-full flex  flex-col gap-y-3 mt-5 p-3 lg:p-5 "
        >
          <div className="flex gap-x-2 items-center pb-2">
            <Image
              src="https://images.unsplash.com/photo-1731848358192-e0c766b66031?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                    <UsersIcon/>
                      <p className="text-sm text-black font-semibold">
                          {item.totalAttendees} attendees
                      </p>
                </span>
                 
                  <span className="flex gap-2 items-center font-medium text-base text-black">
                     <MapPinCheck/>
                     <p>{item.type}</p>
                  </span>
              </div>
        </Card>
      ))}
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
