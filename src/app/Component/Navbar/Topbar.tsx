import React from 'react'
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaTwitter, FaYoutube } from 'react-icons/fa'
import Container from '../Container'

const Topbar = ({ isScrolled }: { isScrolled: boolean }) => {
  return (
    <div className={`bg-primary  transition-all duration-300 ${isScrolled ? 'opacity-0 -translate-y-full' : 'opacity-100'}`}>
      <Container className='py-2 h-10 flex justify-between items-center text-onSurface text-sm'>
        <div className="hidden lg:flex space-x-6">
          <span className="flex items-center space-x-1">
            <FaMapMarkerAlt className="text-tertiary" />
            <span>Dariyapur,Kurthoul,Patna-804453,Bihar</span>
          </span>
          <span className="flex items-center space-x-1">
            <FaPhoneAlt className="text-tertiary" />
            <span>+91-9060924752</span>
          </span>
          <span className="flex items-center space-x-1">
            <FaEnvelope className="text-tertiary" />
            <span>ygsd2024@gmail.com</span>
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="hidden lg:inline">Follow Us On:</span>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-tertiary transition-colors duration-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-tertiary transition-colors duration-300"><FaTwitter /></a>
            <a href="#" className="hover:text-tertiary transition-colors duration-300"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-tertiary transition-colors duration-300"><FaInstagram /></a>
            <a href="#" className="hover:text-tertiary transition-colors duration-300"><FaYoutube /></a>
          </div>
        </div>
      </Container>
    </div>

  )
}

export default Topbar
