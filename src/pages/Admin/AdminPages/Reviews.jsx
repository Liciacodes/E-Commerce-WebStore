import React from "react";
import Input from "../../../components/Input";
import arrow from "../../../assets/icons/arrow up-down.png";
import search from "../../../assets/icons/Search.png";

export default function Review() {
  const reviews = [
    {
      name: "Esther Howard",
      reviews:
        "Completed the task and added the required documentation, can someone please ....",
    },
    {
      name: "Wade Warren",
      reviews:
        "Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers.",
    },
    {
      name: "Brooklyn Simmons",
      reviews:
        "Twenty 30-second applications within half an hour is well in excess.",
    },
    {
      name: "Robert Fox",
      reviews:
        "An interesting implication of the 2007 study concerns the use of hand sanitizers.",
    },
    {
      name: "Dianne Russell",
      reviews: "dianne.russell@gmail.com",
    },
    {
      name: "Ralph Edwards",
      reviews:
        "I found a 2007 study on effects of hand sanitizers on blood alcohol level in adults. ",
    },
    {
      name: "Theresa Webb",
      reviews:
        "The principal alcohol in Purell hand sanitizer (to take the most talked-about brand) ",
    },
    {
      name: "Arlene McCoy",
      reviews:
        "Alcohol based exposures through inadvertently consuming hand sanitize",
    },
    {
      name: "Arlene McCoy",
      reviews:
        "I'm grateful for the supportive work environment during personal challenges.",
    },
    {
      name: "Arlene McCoy",
      reviews: "arlene.mccoy@gmail.com",
    },
  ];

  function getInitials(name) {
    const nameParts = name.split(" ");
    const firstInitial = nameParts[0].charAt(0);
    const lastInitial =
      nameParts.length > 1 ? nameParts[nameParts.length - 1].charAt(0) : "";
    return firstInitial + lastInitial;
  }
  return (
    <div className="bg-white h-full rounded-lg shadow-md p-6">
      <header className="flex items-center justify-between gap-1">
        <h1 className="text-[#0E1422] font-interFont font-medium text-3xl">
          Reviews
        </h1>
        <div className="flex items-center ">
          <div className="relative flex items-center ">
            <img
              src={search}
              alt="search icon"
              className="absolute w-5 h-5 ml-2 "
            />

            <Input placeholder="Search reviews" className="rounded-full" />
          </div>
        </div>
      </header>
      <div className="overflow-x-auto mt-6 h-[calc(100vh-200px)]">
        <table className="w-full min-w-[1000px] text-left mt-6">
          <thead className="border-t border-b border-[#E9E9EB] text-[#5C5F6A]">
            <tr className="text-[#5C5F6A]">
              <th className="p-4">
                <img src={arrow} />
              </th>
              <th className="p-1">Name</th>
              <th className="p-1">Review</th>
              <th className="p-1">Action</th>
            </tr>
          </thead>
          <tbody className="text-[#5C5F6A] font-semibold ">
            {reviews.map((review, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 transition duration-300 ease-in-out"
              >
                <td className="">
                  <div className="bg-[#F6F6F6] text-[#4078FF] flex justify-center items-center w-12 h-12 rounded gap-2 m-1">
                    {getInitials(review.name)}
                  </div>
                </td>
                <td className=" font-semibold">{review.name}</td>
                <td className="font-semibold">{review.reviews}</td>

                <td className="">
                  <button className="text-gray-600 hover:text-gray-800">
                    •••
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
