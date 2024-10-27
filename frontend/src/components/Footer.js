import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-slate-800 text-white'>
      <div className='container mx-auto py-10'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>

          {/* Logo and About Section */}
          <div className='px-5'>
            <h4 className='font-bold text-lg mb-4'>About Us</h4>
            <p>
              Welcome to our e-commerce store where you can find the best products at affordable prices.
              We are committed to providing excellent customer service and the best shopping experience.
            </p>
          </div>

          {/* Links Section */}
          <div className='px-5 text-center'>
            <h4 className='font-bold text-lg mb-4 '>Quick Links</h4>
            <ul>
              <li className='mb-2'>
                <a href='#' className='hover:underline'>Home</a>
              </li>
              <li className='mb-2'>
                <a href='#' className='hover:underline'>Shop</a>
              </li>
              <li className='mb-2'>
                <a href='#' className='hover:underline'>About Us</a>
              </li>
              <li className='mb-2'>
                <a href='#' className='hover:underline'>Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className='px-5'>
            <h4 className='font-bold text-lg mb-4 '>Contact Info</h4>
            <p>Email: support@ecommerce.com</p>
            <p>Phone: +91-1234567890</p>
            <p>Address: 123 Street Name, City, Country</p>
          </div>

          {/* Social Media Section */}
          <div className=''>
            <h4 className='font-bold text-lg mb-4'>Follow Us</h4>
            <div className='flex space-x-4 text-center'>
              <a href='https://www.facebook.com/profile.php?id=100066574772107' className='hover:text-blue-500'>
                <FaFacebook size={24} />
              </a>
              <a href='https://x.com/YogeshKumaruvi' className='hover:text-blue-400'>
                <FaTwitter size={24} />
              </a>
              <a href='https://www.instagram.com/yogeshkumaruvi/' className='hover:text-pink-500'>
                <FaInstagram size={24} />
              </a>
              <a href='https://www.linkedin.com/in/yogeshkumaryuvi/' className='hover:text-blue-700'>
                <FaLinkedin size={24} />
              </a>
              <a href='https://github.com/Yogesh-kumar-uvi/' className='hover:text-gray-700'>
                <FaGithub size={24} />
              </a>

            </div>
          </div>
        </div>
        <div className='text-center mt-10'>
          <p>&copy; 2024 E-Commerce Store. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
