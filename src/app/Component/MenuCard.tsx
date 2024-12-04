import React, { useState } from "react";
import Image from "next/image";
import FoodImage from "../assets/food-image.jpg";
import { FaChevronDown, FaChevronUp, FaStar } from "react-icons/fa";
import { IItem } from "../models/Item";
import { useBucketStore } from "../stores/bucketStore";
import toast from "react-hot-toast";

const notify = () =>
  toast.success("Added to Bag", { position: "bottom-right" });

const MenuCard = ({ menus: item }: { menus: IItem }) => {
  const { addMenuToBucket, isItemAdded } = useBucketStore();

  const [isExpanded, setIsExpanded] = useState(false);
  const toggleDescription = () => setIsExpanded(!isExpanded);

  return (
    <div className="border border-cardColor bg-white rounded-lg shadow-md p-3 hover:shadow-lg transition-shadow duration-300 flex flex-col">
      {/* Image Section */}
      <div className="flex-shrink-0 w-full h-[150px] ">
        <Image
          src={FoodImage.src}
          alt={item.name}
          className="object-cover w-full h-full"
          width={500}
          height={300}
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between flex-grow mt-3 sm:mt-0 sm:ml-4">
        {/* Name and Section */}
        <div>
          <h3 className="text-lg font-semibold text-center sm:text-left">{item.name}</h3>
          <p className="text-gray-600 text-center sm:text-left">
            Full Price: <span className="font-bold">${item.fullPrice}</span>
          </p>
          <p className="text-gray-600 text-center sm:text-left">
            {item.section}
            <span className="ml-2 text-gray-500 font-semibold">| {40} Orders</span>
          </p>
        </div>

        {/* Description */}
        <div className="flex flex-col mt-2">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 text-sm line-clamp-1">
              {item.description.split("\n")[0]}
            </p>
            <p
              onClick={toggleDescription}
              className="cursor-pointer text-blue-500 hover:underline flex items-center"
            >
              {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
            </p>
          </div>
          {isExpanded && <p className="mt-2 text-gray-700">{item.description}</p>}
        </div>

        {/* Action Section */}
        <div className="flex items-center justify-between mt-4">
          <button
            onClick={() => {
              addMenuToBucket(item);
              notify();
            }}
            className="bg-primary text-white py-2 px-4 rounded-lg shadow hover:bg-secondary transition duration-300 w-full sm:w-auto"
          >
            {isItemAdded(item.name) ? "Added" : "Add to Bag"}
          </button>
          <div className="flex items-center ml-3">
            <FaStar className="text-yellow-500 text-xl" /> {/* Rating Icon */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
