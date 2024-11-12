'use client';
import React, { useState } from 'react'
import Image from 'next/image'

const ImageUploadSection = () => {
   const [selectedImage, setSelectedImage] = useState<string | null>(null);
   const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <div className="w-full md:w-1/3">
                <div className="mb-4">
                  <div className="border-2 border-dashed border-secondary rounded-md p-4 text-center">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      id="image-upload"
                      onChange={handleImageUpload}
                    />
                    {selectedImage ? (
                      <div className="relative w-full aspect-square">
                        <Image
                          src={selectedImage}
                          alt="Selected food image"
                          layout="fill"
                          objectFit="cover"
                          className="rounded-md"
                        />
                        <button
                          type="button"
                          onClick={() => setSelectedImage(null)}
                          className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    ) : (
                      <label htmlFor="image-upload" className="cursor-pointer text-secondary hover:text-primary">
                        <div className="flex flex-col items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                          <span>Click to upload image</span>
                        </div>
                      </label>
                    )}
                  </div>
                </div>
              </div>

  )
}

export default ImageUploadSection
