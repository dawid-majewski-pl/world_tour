import React from 'react';
import Austria from '../assets/austria.jpg';

const Home = () => {

    return (
        <div className='max-w-[1640px] mx-auto p-4'>
            <div className='max-h-[500px] relative'>
                <div className='absolute w-full h-full text-gray-200 max-g-[500px] bg-black/40 flex flex-col justify-center'>
                    <h2 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl lg:text-center font-bold text-orange-300'>Latest <span className='text-blue-300'>Travels</span></h2>
                </div>
                <img className='w-full h-300px md:h-[500px] object-cover' src={Austria} alt='/' />
            </div>
        </div>
    )
}

export default Home;