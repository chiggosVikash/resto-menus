"use client";
// pages/index.tsx
import React, { useState } from "react";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const defaultImageUrl = "https://png.pngtree.com/png-clipart/20220903/ourmid/pngtree-chef-restaurant-logo-png-image_6136204.png"; // Path to the default image in your public folder

interface SignupFormData {
  outletLogo: File | null;
  ownerName: string;
  mobileNo: string;
  outletName: string;
  outletType: string;
  email: string;
  city: string;
  password: string;
  confirmPassword: string;
}

const HomePage: React.FC = () => {
  const methods = useForm<SignupFormData>({
    defaultValues: {
      outletLogo: null,
      ownerName: "",
      mobileNo: "",
      outletName: "",
      outletType: "restaurant",
      email: "",
      city: "",
      password: "",
      confirmPassword: "",
    },
  });

  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [image, setImage] = useState<File | null>(null); // Controlled image state

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]); // Update image state
    }
  };

  const onSubmit: SubmitHandler<SignupFormData> = (data) => {
    setIsSaving(true);
    console.log("Signup Data:", data);

    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setIsSaved(true);
    }, 1500);
  };

  const handleSuccessClose = () => {
    setIsSaved(false);
    methods.reset();
  };

  const outletTypeOptions = [
    { value: "restaurant", label: "Restaurant" },
    { value: "dhaba", label: "Dhaba" },
  ];

  return (
    <div className="w-full h-full flex flex-col md:flex-row bg-gray-100">
      {/* Left Section - Text Content with Diagonal Split Background */}
      <div className="flex-col justify-center w-1/2 bg-gradient-to-br from-pink-500 to-yellow-400 text-white p-8 hidden md:block">
        <div className="max-w-md mx-auto">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-red-600 rounded-full"></div>
            <h2 className="text-lg font-semibold text-gray-800">LET'S CAFE</h2>
          </div>
          <h2 className="text-5xl font-bold uppercase mt-2 text-red-600">
            Food
          </h2>
          <h3 className="text-6xl font-bold text-black mt-1">Restaurant</h3>
          <p className="mt-4 text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          {/* Updated Button */}
          <Link href="/admin/signin"> {/* Route to the Sign In page */}
            <button className="mt-6 px-6 py-3 bg-orange-600 text-white rounded-full flex items-center gap-2 hover:bg-orange-500 transition font-semibold">
              Sign In <AiOutlineArrowRight />
            </button>
          </Link>
        </div>
      </div>

      {/* Right Section - Signup Form */}
      <div className="flex items-center justify-center md:w-1/2 bg-white">
        <div className="w-full max-w-lg p-8 space-y-6">
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="space-y-4"
            >
              {/* Loading and Success Dialogs */}
              {isSaving && <div>Creating Account...</div>}
              {isSaved && <div>Success! Your account has been created.</div>}

              {/* Outlet Logo Upload */}
              <div className="flex flex-col items-center mb-4">
                {/* Image section that is clickable */}
                <div
                  className="cursor-pointer"
                  onClick={() => document.getElementById('fileInput')?.click()}
                >
                  {image ? (
                    <Image
                      src={URL.createObjectURL(image)} // Show uploaded image
                      alt="Uploaded Logo"
                      width={128}
                      height={128}
                      className="rounded-full w-32 h-32 mb-2 object-cover border border-gray-300"
                    />
                  ) : (
                    <Image
                      src={defaultImageUrl} // Default image
                      alt="Default Logo"
                      width={128}
                      height={128}
                      className="rounded-full w-32 h-32 mb-2 object-cover border border-gray-300"
                    />
                  )}
                </div>
                {/* Hidden file input triggered by clicking the image */}
                <input
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </div>

              <div className="flex-1">
                <label className="block mb-2 text-sm font-medium">
                  Owner Name
                </label>
                <input
                  name="ownerName"
                  placeholder="Owner Name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex-1">
                <label className="block mb-2 text-sm font-medium">
                  Mobile No
                </label>
                <input
                  name="mobileNo"
                  placeholder="Mobile No"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex-1">
                <label className="block mb-2 text-sm font-medium">
                  Outlet Name
                </label>
                <input
                  name="outletName"
                  placeholder="Outlet Name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex-1">
                <label className="block mb-2 text-sm font-medium">
                  Outlet Type
                </label>
                <select
                  name="outletType"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                >
                  {outletTypeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <label className="block mb-2 text-sm font-medium">Email</label>
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />

              <label className="block mb-2 text-sm font-medium">City</label>
              <input
                name="city"
                placeholder="City"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />

              <div className="flex-1">
                <label className="block mb-2 text-sm font-medium">Password</label>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex-1">
                <label className="block mb-2 text-sm font-medium">
                  Confirm Password
                </label>
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-br from-pink-500 to-orange-400 text-white font-semibold rounded-lg hover:bg-yellow-600 transition"
              >
                Sign Up
              </button>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
