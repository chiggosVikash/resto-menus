import React from 'react'
import Container from '../Container'
import Topbar from './Topbar'
import Image  from 'next/image'
import Logo from '../../assets/food-logo.png';
import { FaSignOutAlt, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div>
        <Topbar/>
        <nav className='h-[80px] bg-cardColor w-full'>
        <Container>
            <div className='flex justify-between items-center  text-sm'>
                <div className='flex space-x-4 items-center'>
                    <Image src={Logo} alt='logo' className='w-[80px] h-[80px] object-cover' />
                    <h1 className='text-2xl font-bold'>LadySticks and Cravings</h1>
                </div>
                <div className='flex space-x-4 items-center'>
                    <h1 className='text-lg  flex items-center'>Rishabh Sinha
                            <FaUserCircle className='inline mx-2 text-xl text-secondary'/>
                    </h1>
                    <button className='bg-secondary text-onPrimary px-4 py-2 rounded-md'>Logout <FaSignOutAlt className='inline ml-2 text-sm'/></button>
                </div>
            </div>
        </Container>
        </nav>
        
    </div>
      )
}

export default Navbar
