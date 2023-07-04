import React from 'react';
import Peru from '../assets/peru.jpg';
import Canada from '../assets/canada.jpg';
import Brazil from '../assets/brazil.jpg';
import Greece from '../assets/greece.jpg';
import Rome from '../assets/rome.jpg';
import Korea from '../assets/korea.jpg';

const RecomendedCards = () => {

    return (
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {/* Card */}
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/30 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-4 pt-4'>Peru</p>
                    <p className='px-4'>12 August 2023</p>
                    <button className='border-white rounded-full p-2 bg-white text-gray-800 duration-300 hover:bg-blue-300 font-bold mx-2 absolute bottom-4 right-2'>Buy tickets</button>
                </div>
                <img className='max-h-[200px] md:max-h-[240px] w-full object-cover rounded-xl' src={Peru} alt='/' />
            </div>

            {/* Card */}
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/30 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-4 pt-4'>Canada</p>
                    <p className='px-4'>07 July 2023</p>
                    <button className='border-white rounded-full p-2 bg-white text-gray-800 duration-300 hover:bg-blue-300 font-bold mx-2 absolute bottom-4 right-2'>Buy tickets</button>
                </div>
                <img className='max-h-[200px] md:max-h-[240px] w-full object-cover rounded-xl' src={Canada} alt='/' />
            </div>

            {/* Card */}
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/30 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-4 pt-4'>Brazil</p>
                    <p className='px-4'>24 July 2023</p>
                    <button className='border-white rounded-full p-2 bg-white text-gray-800 duration-300 hover:bg-blue-300 font-bold mx-2 absolute bottom-4 right-2'>Buy tickets</button>
                </div>
                <img className='max-h-[200px] md:max-h-[240px] w-full object-cover rounded-xl' src={Brazil} alt='/' />
            </div>

                        {/* Card */}
                        <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/30 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-4 pt-4'>Greece</p>
                    <p className='px-4'>02 September 2023</p>
                    <button className='border-white rounded-full p-2 bg-white text-gray-800 duration-300 hover:bg-blue-300 font-bold mx-2 absolute bottom-4 right-2'>Buy tickets</button>
                </div>
                <img className='max-h-[200px] md:max-h-[240px] w-full object-cover rounded-xl' src={Greece} alt='/' />
            </div>

            {/* Card */}
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/30 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-4 pt-4'>Rome</p>
                    <p className='px-4'>28 July 2023</p>
                    <button className='border-white rounded-full p-2 bg-white text-gray-800 duration-300 hover:bg-blue-300 font-bold mx-2 absolute bottom-4 right-2'>Buy tickets</button>
                </div>
                <img className='max-h-[200px] md:max-h-[240px] w-full object-cover rounded-xl' src={Rome} alt='/' />
            </div>

            {/* Card */}
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/30 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-4 pt-4'>South Korea</p>
                    <p className='px-4'>10 September 2023</p>
                    <button className='border-white rounded-full p-2 bg-white text-gray-800 duration-300 hover:bg-blue-300 font-bold mx-2 absolute bottom-4 right-2'>Buy tickets</button>
                </div>
                <img className='max-h-[200px] md:max-h-[240px] w-full object-cover rounded-xl' src={Korea} alt='/' />
            </div>
        </div>
    )
}

export default RecomendedCards;