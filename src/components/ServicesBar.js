import React from 'react'
import cleanIcon from '../components/icons/arcticons_cache-cleaner.png';
import tapIcon from '../components/icons/game-icons_tap.png';
import schoolIcon from '../components/icons/ic_outline-school.png';
import foodIcon from '../components/icons/mdi_food-outline.png';
import autoIcon from '../components/icons/mdi_mechanic.png';
import moverIcon from '../components/icons/mdi_truck-outline.png';
import hotelIcon from '../components/icons/ri_hotel-line.png';
import moreIcon from '../components/icons/ri_more-fill.png';

export default function ServicesBar() {
  return (
    <div>
        <div className='flex flex-col justify-center items-center mt-10 lg:hidden' >
            <div className='flex space-x-10 ' >

            <div className=' flex flex-col justify-center items-center cursor-pointer' >
                <img className='object-contain w-10 h-10' src={foodIcon} alt='auto' />
                <h3 className=' text-blue-800 text-[12px] '>Take Out</h3>
            </div>

            <div className=' flex flex-col justify-center items-center cursor-pointer' >
                <img className='object-contain w-10 h-10' src={hotelIcon} alt='auto' />
                <h3 className=' text-blue-800 text-[12px] '>Hotels</h3>
            </div>

            <div className=' flex flex-col justify-center items-center cursor-pointer' >
                <img className='object-contain w-10 h-10' src={schoolIcon} alt='auto' />
                <h3 className=' text-blue-800 text-[12px] '>Education</h3>
            </div>

            <div className=' flex flex-col justify-center items-center cursor-pointer' >
                <img className='object-contain w-10 h-10' src={autoIcon} alt='auto' />
                <h3 className=' text-blue-800 text-[12px] '>Auto Repair</h3>
            </div>
            </div>

            <div className='flex space-x-10 mt-10 ' >
            
            <div className=' flex flex-col justify-center items-center cursor-pointer' >
                <img className='object-contain w-10 h-10' src={moverIcon} alt='auto' />
                <h3 className=' text-blue-800 text-[12px] '>Movers</h3>
            </div>
            

            <div className=' flex flex-col justify-center items-center cursor-pointer' >
                <img className='object-contain w-10 h-10' src={tapIcon} alt='auto' />
                <h3 className=' text-blue-800 text-[12px] '>Plumber</h3>
            </div>

            <div className=' flex flex-col justify-center items-center cursor-pointer' >
                <img className='object-contain w-10 h-10' src={cleanIcon} alt='auto' />
                <h3 className=' text-blue-800 text-[12px] '>Home cleaner</h3>
            </div>

            <div className=' flex flex-col justify-center items-center cursor-pointer' >
                <img className='object-contain w-10 h-10' src={moreIcon} alt='auto' />
                <h3 className=' text-blue-800 text-[12px] '>more</h3>
            </div>
            </div>
        </div>
    </div>
  )
}
