"use client";

import React, { useState, useRef } from 'react';

export default function AddMenusPage() {
  const [menuItem, setMenuItem] = useState({
    name: '',
    category: '',
    section: '',
    priceType: 'full',
    fullPrice: '',
    halfPrice: '',
    description: '',
  });
  const [images, setImages] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setMenuItem({ ...menuItem, [name]: value });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add logic to save the menu item and images
    console.log('Menu item submitted:', menuItem);
    console.log('Images:', images);
  };

  return (
    <div className="container mx-auto p-4" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
      <h1 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)' }}>Add Menu Item</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={menuItem.name}
            onChange={handleInputChange}
            className="w-full rounded px-2 py-1"
            style={{ 
              border: '1px solid var(--secondary)', 
              background: 'var(--accent)', 
              color: 'var(--foreground)',
              opacity: 0.8
            }}
            required
          />
        </div>

        <div>
          <label htmlFor="category" className="block mb-1">Category</label>
          <select
            id="category"
            name="category"
            value={menuItem.category}
            onChange={handleInputChange}
            className="w-full border rounded px-2 py-1"
            required
          >
            <option value="">Select category</option>
            <option value="veg">Vegetarian</option>
            <option value="non-veg">Non-Vegetarian</option>
          </select>
        </div>

        <div>
          <label htmlFor="section" className="block mb-1">Section</label>
          <select
            id="section"
            name="section"
            value={menuItem.section}
            onChange={handleInputChange}
            className="w-full border rounded px-2 py-1"
            required
          >
            <option value="">Select section</option>
            <option value="appetizers">Appetizers</option>
            <option value="main-course">Main Course</option>
            <option value="desserts">Desserts</option>
            <option value="beverages">Beverages</option>
          </select>
        </div>

        <div>
          <label className="block mb-1">Price</label>
          <div className="flex space-x-4">
            <label>
              <input
                type="radio"
                name="priceType"
                value="full"
                checked={menuItem.priceType === 'full'}
                onChange={handleInputChange}
              /> Full
            </label>
            <label>
              <input
                type="radio"
                name="priceType"
                value="half"
                checked={menuItem.priceType === 'half'}
                onChange={handleInputChange}
              /> Half
            </label>
          </div>
        </div>

        {menuItem.priceType === 'full' ? (
          <div>
            <label htmlFor="fullPrice" className="block mb-1">Full Price</label>
            <input
              type="number"
              id="fullPrice"
              name="fullPrice"
              value={menuItem.fullPrice}
              onChange={handleInputChange}
              className="w-full rounded px-2 py-1"
              style={{ 
                border: '1px solid var(--secondary)', 
                background: 'var(--accent)', 
                color: 'var(--foreground)',
                opacity: 0.8
              }}
              required
            />
          </div>
        ) : (
          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="fullPrice" className="block mb-1">Full Price</label>
              <input
                type="number"
                id="fullPrice"
                name="fullPrice"
                value={menuItem.fullPrice}
                onChange={handleInputChange}
                className="w-full rounded px-2 py-1"
                style={{ 
                  border: '1px solid var(--secondary)', 
                  background: 'var(--accent)', 
                  color: 'var(--foreground)',
                  opacity: 0.8
                }}
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="halfPrice" className="block mb-1">Half Price</label>
              <input
                type="number"
                id="halfPrice"
                name="halfPrice"
                value={menuItem.halfPrice}
                onChange={handleInputChange}
                className="w-full rounded px-2 py-1"
                style={{ 
                  border: '1px solid var(--secondary)', 
                  background: 'var(--accent)', 
                  color: 'var(--foreground)',
                  opacity: 0.8
                }}
                required
              />
            </div>
          </div>
        )}

        <div>
          <label htmlFor="description" className="block mb-1">Description</label>
          <textarea
            id="description"
            name="description"
            value={menuItem.description}
            onChange={handleInputChange}
            className="w-full border rounded px-2 py-1"
            rows={3}
          ></textarea>
        </div>

        <div>
          <label htmlFor="images" className="block mb-1">Images (Optional)</label>
          <input
            type="file"
            id="images"
            name="images"
            onChange={handleImageUpload}
            accept="image/*"
            multiple
            className="hidden"
            ref={fileInputRef}
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="px-4 py-2 rounded"
            style={{ background: 'var(--secondary)', color: 'var(--background)' }}
          >
            Select Images
          </button>
          {images.length > 0 && (
            <div className="mt-2">
              <p>{images.length} image(s) selected</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(image)}
                    alt={`Preview ${index + 1}`}
                    className="w-20 h-20 object-cover rounded"
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        <button 
          type="submit" 
          className="px-4 py-2 rounded"
          style={{ background: 'var(--primary)', color: 'var(--background)' }}
        >
          Add Menu Item
        </button>
      </form>
    </div>
  );
}
