"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
const GroupCards = ({ groups, show }: { groups: any;show:boolean }) => {
  let itemsPerPage = 5;
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = groups?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(groups?.length / itemsPerPage);
  console.log(currentItems);
  /**
   * This function handles the pagination of the groups to prevent rendering excess data.
   * @param event
   */
  const handlePageClick = (event: { selected: any }) => {
    const newOffset = (event.selected * itemsPerPage) % groups?.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`,
    );
    setItemOffset(newOffset);
  };
  return (
    <div>
      {" "}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentItems.map(
          (
            group: {
              name: string;
              location: string;
              description: string;
              topics: any[];
            },
            index: React.Key | null | undefined,
          ) => (
            <Card key={index} className="p-4">
              <div>
                <h2 className="text-lg font-bold">{group.name}</h2>
                <p className="text-sm text-gray-500">{group.location}</p>
              </div>
              <div>
                <p className="text-gray-700 mb-2 text-sm">
                  {group.description}
                </p>
                <ul className="flex flex-wrap gap-2 text-sm text-gray-600">
                  {group.topics.map((topic, idx) => (
                    <li
                      className="px-2 py-2 rounded-full border border-gray-300 text-xs font-medium bg-green-200 cursor-pointer hover:bg-primary hover:text-white"
                      key={idx}
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
               {show && <div className="flex items-end pt-3 justify-end">
                  <Button className="   bg-primary text-white  p-2 flex justify-center items-center gap-2 ">
                    Join Group
                  </Button>
                </div>}
              </div>
            </Card>
          ),
        )}
      </div>
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

export default GroupCards;
