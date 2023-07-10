import React, { useState } from 'react'
import {HiMenu} from 'react-icons/hi'

const Navbar = () => {

    const [isVisible, setIsVisible] = useState(true)

    const toggleNavbar = () => {
        setIsVisible(!isVisible)
    }

  return (
    <div className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto bg-yllow-900'>
        <h1 className='w-full text-3xl text-[#00df9a] font-bold px-10'>REACT.</h1>
        <ul className='hidden md:flex'>
            <li className='px-4'>Home</li>
            <li className='px-4'>Company</li>
            <li className='px-4'>Resources</li>
            <li className='px-4'>Contact</li>
            <li className='px-4'>About</li>
        </ul>
        <div className='px-10'><HiMenu size={20} onClick={toggleNavbar} className='block md:hidden'/></div>
        <div className={!isVisible ? 'fixed left-0 top-0 w-80 h-full p-8 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className='text-3xl text-[#00df9a] font-bold'>REACT.</h1>
            <ul className='py-6'>
                <li className='py-4 border-b border-b-gray-800'>Home</li>
                <li className='py-4 border-b border-b-gray-800'>Company</li>
                <li className='py-4 border-b border-b-gray-800'>Resources</li>
                <li className='py-4 border-b border-b-gray-800'>Contact</li>
                <li className='py-4'>About</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar