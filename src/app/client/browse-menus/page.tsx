import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const BrowseMenu = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Browse Menu</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Example of grid items */}
                {menuItems.map(item => (
                    <motion.div 
                        className="bg-white border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-48 object-cover" 
                            width={500} // specify the width
                            height={200} // specify the height
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">{item.title}</h2>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

// Sample menu items (replace with actual data)
const menuItems = [
    { id: 1, title: 'Item 1', description: 'Description 1', image: 'image1.jpg' },
    { id: 2, title: 'Item 2', description: 'Description 2', image: 'image2.jpg' },
    // ... more items
];

export default BrowseMenu;
