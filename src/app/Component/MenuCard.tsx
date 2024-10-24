// src/app/Component/MenusGrid.tsx

import React, { useState } from 'react';
import Image from 'next/image'; 
import FoodImage from '../assets/food-image.jpg';
import { FaChevronDown, FaChevronUp, FaStar } from 'react-icons/fa'; // Importing arrow and star icons
import { IItem } from '../models/Item';
import { useBucketStore } from "../stores/bucketStore";





const MenuCard = ({menus: item}:{menus: IItem}) => {
    const { addMenuToBucket } = useBucketStore();

    const [isExpanded, setIsExpanded] = useState(false);
    const toggleDescription = () => setIsExpanded(!isExpanded);

    return (
        <div className="border border-cardColor rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
            <Image src={FoodImage.src} alt={item.name} className="menu-image rounded-md" width={500} height={300} />
            <h3 className="text-xl font-semibold mt-2">{item.name}</h3>
            <p className="text-gray-600">Full Price: <span className="font-bold">${item.fullPrice}</span></p>
            {/* <p className="text-gray-600">Half Price: <span className="font-bold">${menus.halfPrice}</span></p> */}
            <p className="text-gray-600">{item.section}
            <span className="ml-2 text-gray-500 font-semibold">| {40} Orders</span> {/* Display number of orders */}
            </p>

            <div className='flex justify-between items-center mt-4'>
                <button 
                   onClick={()=>{
                      addMenuToBucket(item)
                   }}
                    className="bg-primary text-white py-2 px-4 rounded-lg shadow hover:bg-secondary transition duration-300">Add to Bag</button> {/* Add to Bag button */}
                <div className="flex items-center">
                    <span className="text-yellow-500 text-2xl">
                        <FaStar /> {/* Rating icon here */}
                    </span>
                </div>
            </div>
            <div className='md:flex hidden justify-between items-center'>
                <div className='flex justify-between items-center'>
                <p className=" text-gray-500">{item.description.split('\n')[0]}</p>
                <p onClick={toggleDescription} className="cursor-pointer text-blue-500 hover:underline">
                {isExpanded ? <FaChevronUp /> : <FaChevronDown />} {/* Arrow icon */}
                </p>
           
                </div>
             {isExpanded && (
                <p className="mt-2 text-gray-700">{item.description}</p>
            )}
            </div>
            
        </div>
    );
};


export default MenuCard;
