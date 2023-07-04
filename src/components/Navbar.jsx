import React, {useState} from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import {BsFillCartFill} from 'react-icons/bs';

const Navbar = () => {
    const [nav, setNav] = useState(false)

    return (
        <div className='max-w-[1640px] mx-auto flex justify-between items-center gap-4 p-4'>
            <div className='flex items-center'>
                <div onClick={() => setNav(!nav)} className='cursor-pointer'>
                    <AiOutlineMenu size={30} />
                </div>
                <h1 className='text-orange-500 text-2xl sm:text-3xl lg:text-4xl px-4'>World<span className='font-bold text-blue-500'>Tour</span></h1>
                <div className='hidden lg:flex items-center bg-gray-300 rounded-full p-1 text-sm'>
                    <p className='bg-black text-white rounded-full py-2 px-4'>Departure</p>
                    <p className='py-2 px-4'>Arrival</p>
                </div>
            </div>

            <div className='bg-gray-200 rounded-full flex items-center px-2 duration-200 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={30} />
                <input className='bg-transparent p-2 w-full hover:outline-none' type='text' placeholder='Search tours' />
            </div>

            <button className='bg-gray-200 text-gray-700 hidden md:flex justify-center py-2 border-none rounded-full w-[120px]'>
                <BsFillCartFill size={18} /><p className='px-2'>Cart</p>
            </button>

            {/* Mobile Nav */}
            {nav ?  <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : '' }

            <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen z-10 duration-1000 bg-white' : 'fixed top-0 left-[-100%] w-[300px] h-screen z-10 duration-1000 bg-white'}>
                <AiOutlineClose onClick={() => setNav(!nav)} size={30} className='absolute right-4 top-4 cursor-pointer' />
                <h2 className='text-orange-500 text-2xl p-4'>World<span className='font-bold text-blue-500'>Tour</span></h2>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-900'>
                        <li className='text-xl py-4'>Home</li>
                        <li className='text-xl py-4'>Recommended</li>
                        <li className='text-xl py-4'>Travels</li>
                        <li className='text-xl py-4'>Footer</li>
                    </ul>
                </nav>

            </div>
        </div>
    )
}

export default Navbar;