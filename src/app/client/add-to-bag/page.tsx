"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import FoodImage from "../../assets/food-image.jpg";
import { useBucketStore } from "../../stores/bucketStore";
import { IItem } from "@/app/models/Item";
import ImageHeader from "@/app/Component/ImageHeader";
import { useOrderStore } from "@/app/stores/OrderStore";
import PersonalInfoForm from "@/app/Component/PersonalInfoForm";

const AddToBag = () => {
  const {
    fetchMenus,
    bucketMenus,
    processing,
    errorMessage,
    removeMenuItem,
    isItemDeleted,
  } = useBucketStore();
  const { togglePersonalInfoForm, isPersonalInfoFormOpen } = useOrderStore();

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  useEffect(() => {
    fetchMenus();
  }, [fetchMenus]);

  if (errorMessage) {
    return <div className="items-center">{errorMessage}</div>;
  }

  if (processing) {
    return <div className="items-center">Bucket loading...</div>;
  }

  return (
    <div className="overflow-x-hidden">
      <ImageHeader title={"In your Bucket"} subtitle="" />
      <div className=" relative max-w-7xl mx-auto md:p-4 font-sans px-4 sm:px-6 lg:px-12 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {bucketMenus.map((item: IItem, index: number) => {
            return (
              <div key={item.name} className="relative">
                <button
                  className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
                  onClick={() => {
                    removeMenuItem(item.itemId);
                  }}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <div className="lg:col-span-2">
                  {/* Product Details */}
                  <div className="bg-white rounded-lg shadow-md p-2 md:p-6 mb-6">
                    <div className="flex flex-row">
                      <Image
                        src={FoodImage.src}
                        alt="FoodImage"
                        width={200}
                        height={150}
                        className="rounded-lg mr-6 mb-4 md:mb-0  w-[35%] h-[100px] md:h-full md:w-[40%] "
                      />
                      <div className="w-full">
                        <h2 className="text-xl md:text-2xl font-bold text-onSurface">
                          {item.name}
                        </h2>
                        <p className="md:w-4/5 w-1/2 text-gray-500 text-sm md:text-base mb-0 md:mb-2 overflow-hidden text-ellipsis whitespace-nowrap">
                          {item.description.split("\n")[0]}
                        </p>
                        {/* <div className="w-[50vw] md:w-full"> */}
                        <p className=" text-lg md:text-xl font-bold text-onSurface mb-0 md:mb-3">
                          {`\u20b9${item.fullPrice}${
                            item.halfPrice
                              ? ` | \u20b9${item.halfPrice} (half)`
                              : ""
                          }`}
                        </p>
                        {/* </div> */}
                        {/* Quantity Selector */}
                        <div className="flex items-center mb-4">
                          <span className="mr-3 text-sm text-gray-600">
                            Qty:
                          </span>
                          <button
                            onClick={decreaseQuantity}
                            className="bg-gray-200 text-gray-600 hover:bg-gray-300 px-2 py-1 rounded-l"
                          >
                            -
                          </button>
                          <span className="bg-gray-100 px-4 py-1">
                            {quantity}
                          </span>
                          <button
                            onClick={increaseQuantity}
                            className="bg-gray-200 text-gray-600 hover:bg-gray-300 px-2 py-1 rounded-r"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {isItemDeleted ? (
            <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded shadow-lg">
              Item deleted successfully!
            </div>
          ) : (
            <></>
          )}

          <div>
            {/* Order Summary */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg mb-4">ORDER SUMMARY</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal : </span>
                  <span>Rs. 47579</span>
                </div>
                {/* <div className="flex justify-between ">
                <span>Discount : </span>
                <span className='text-secondary'>-Rs. 3500</span>
              </div> */}
                <div className="flex justify-between">
                  <span>SGST :</span>
                  <span className="text-onPrimary">FREE</span>
                </div>
                <div className="border-t border-gray-300 my-6"></div>
                <div className="flex justify-between font-bold">
                  <span>
                    TOTAL <br />
                    <span className="text-xs text-gray-500 font-normal">
                      (Incl of all Taxes.)
                    </span>
                  </span>
                  <span>Rs 44079.00</span>
                </div>
                <div className="flex justify-between text-green-600 font-bold">
                  <span>YOU SAVE</span>
                  <span>Rs. 4000</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="sticky bottom-0 left-0 right-0 bg-cardColor p-4 mt-8 flex justify-between items-center">
          <div className="md:text-xl text-sm font-bold text-onSurface">
            Total Amount : Rs {47579 * quantity}.00
          </div>
          <button
            onClick={() => {
              togglePersonalInfoForm();
            }}
            className={`bg-secondary md:text-lg text-sm  text-white px-6 py-2 rounded-full hover:bg-secondary transition duration-300`}
          >
            Proceed to order
          </button>
        </div>
        {isPersonalInfoFormOpen ? <PersonalInfoForm /> : <></>}
      </div>
    </div>
  );
};

export default AddToBag;
