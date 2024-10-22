'use client';
import React from 'react';
import Container from './Component/Container';
import ImageHeader from './Component/ImageHeader';
import { motion } from 'framer-motion';
import MenusGrid from './Component/MenusGrid';
// import Image from 'next/image';

const Home = () => {
    return (
        <div>
            <ImageHeader/>
            <Container>
                <motion.div
                  className='my-8'
                  >
                  <MenusGrid/>
                </motion.div>
            </Container>
        </div>
    );
};

// Sample menu items (replace with actual data)


export default Home;
