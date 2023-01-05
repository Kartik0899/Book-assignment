import React from 'react';
import logo from '../../assets/BriBooks.svg'
import profile from '../../assets/profile.jpg'
import { BsImageFill } from 'react-icons/bs';

const Navbar = () => {
    return (
        <div className='h-full w-[80%] mx-auto mt-4 flex justify-between items-center'>
            <div className='w-[33%]'>
                <img src={logo} alt="" className='h-[2rem]' />
            </div>
            <div className='flex'>
                <div className='border cursor-pointer flex justify-center items-center px-4 py-2 bg-green-700 text-white rounded-full mr-4'>
                    <BsImageFill className='mr-2' />
                    Change Theme
                </div>
                <div class="dropdown inline-block relative">
                    <button class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 inline-flex items-center rounded-full">
                        <span class="mr-1 flex justify-center items-center">
                        <img src={profile} alt="" className='h-6 w-full rounded-full mr-2' />
                        Dropdown</span>
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;