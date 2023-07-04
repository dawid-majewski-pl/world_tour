import React, {useState} from 'react';
import {data} from '../data/data.js';
import {categories} from '../data/data.js';

const Travels = () => {

    const [travels, setTravels] = useState(data)

    // Filter type 
    const filterType = (category) => {
        setTravels(
            data.filter((item) => {
                return item.category === category;
            })
        );
    };

        // Filter type 
        const filterPrice = (price) => {
            setTravels(
                data.filter((item) => {
                    return item.price === price;
                })
            );
        };

    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
           <h2 className='text-orange-400 font-bold text-4xl text-center'>Travels</h2>
           
           {/* Filter section */}
            <div className='flex flex-col lg:flex-row justify-between mx-2'>
                {/* Filter Type */}
                <div className='mx-auto lg:m-0'>
                    <p className='font-bold text-gray-500 py-2 text-center lg:text-left lg:pl-2'>Filter type</p>
                    <div className='flex justify-between max-w-[640px] flex-wrap gap-2'>
                        <button onClick={()=> setTravels(data)} className='border-orange-400 bg-blue-400 rounded-full duration-300 px-3 py-1 hover:text-white hover:bg-blue-500'>All</button>
                        <button onClick={()=> filterType('Europe')} className='border-orange-400 bg-blue-400 rounded-full duration-300 px-3 py-1 hover:text-white hover:bg-blue-500'>Europe</button>
                        <button onClick={()=> filterType('Asia')} className='border-orange-400 bg-blue-400 rounded-full duration-300 px-3 py-1 hover:text-white hover:bg-blue-500'>Asia</button>
                        <button onClick={()=> filterType('Africa')} className='border-orange-400 bg-blue-400 rounded-full duration-300 px-3 py-1 hover:text-white hover:bg-blue-500'>Africa</button>
                        <button onClick={()=> filterType('South America')} className='border-orange-400 bg-blue-400 rounded-full duration-300 px-3 py-1 hover:text-white hover:bg-blue-500'>South America</button>
                        <button onClick={()=> filterType('North America')} className='border-orange-400 bg-blue-400 rounded-full duration-300 px-3 py-1 hover:text-white hover:bg-blue-500'>North America</button>
                        <button onClick={()=> filterType('Australia')} className='border-orange-400 bg-blue-400 rounded-full duration-300 px-3 py-1 hover:text-white hover:bg-blue-500'>Australia</button>
                    </div>
                </div>

                {/* Filter Price */}
                <div className='mx-auto lg:m-0'>
                    <p className='font-bold text-gray-500 py-2 text-center lg:text-right lg:pr-2'>Filter Price</p>
                    <div className='flex justify-between max-w-[240px] gap-2'>
                        <button onClick={()=> filterPrice('£')} className='border-orange-400 bg-blue-400 rounded-full duration-300 px-3 py-1 hover:text-white hover:bg-blue-500'>£</button>
                        <button onClick={()=> filterPrice('££')} className='border-orange-400 bg-blue-400 rounded-full duration-300 px-3 py-1 hover:text-white hover:bg-blue-500'>££</button>
                        <button onClick={()=> filterPrice('£££')} className='border-orange-400 bg-blue-400 rounded-full duration-300 px-3 py-1 hover:text-white hover:bg-blue-500'>£££</button>
                        <button onClick={()=> filterPrice('££££')} className='border-orange-400 bg-blue-400 rounded-full duration-300 px-3 py-1 hover:text-white hover:bg-blue-500'>££££</button>
                    </div>
                </div>
            </div>

            {/* Display Travels */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
                {travels.map((item, index) => (
                    <div key={index} className='border shadow-lg overflow-hidden rounded-xl duration-300 hover:scale-105'>
                        <img className='w-full h-[200px] object-cover' src={item.image} alt={item.name} />
                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold'>{item.name}</p>
                            <p className='rounded-full bg-blue-200 px-2 text-gray-800'><span className='text-gray-700'>Price level:</span> {item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Travels;