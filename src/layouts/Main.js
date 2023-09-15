import '../components/App.css';
import ImageSlider from '../components/imageSlider';
import slide1 from '../components/images/join-us pic.png'
import slide2 from '../components/images/slide 2.png'
import slide3 from '../components/images/slide 3.png'
import { Link } from 'react-router-dom';
import carRepair from '../components/icons/carrepairlogo.svg';
import ReviewBtn from '../components/ReviewBtn';
import cleanIcon from '../components/icons/arcticons_cache-cleaner.png';
import tapIcon from '../components/icons/game-icons_tap.png';
import schoolIcon from '../components/icons/ic_outline-school.png';
import foodIcon from '../components/icons/mdi_food-outline.png';
import autoIcon from '../components/icons/mdi_mechanic.png';
import moverIcon from '../components/icons/mdi_truck-outline.png';
import hotelIcon from '../components/icons/ri_hotel-line.png';
import moreIcon from '../components/icons/ri_more-fill.png';

export default function Main() {
  const images = [
    slide1, slide2, slide3,
  ];

  return(
    <main>
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

        <div className="flex justify-center items-center mt-[30px] ">
          <div className='mr-[50px] '>
            <div>
              <h1 className='work-text' >Work with us</h1>
              <h2 className='text-black'>Get More From Your <br/> 
                Profession
              </h2>
              <Link to='/reba-agent'><button className=' w-[130px] h-[35px] bg-[#1D5EBF] rounded-[15px] items-center justify-center text-white '>Learn More</button></Link>
            </div>
          </div>
          <ImageSlider 
            className='object-contain'
            images={images} 
            interval={4000}
          />
        </div>
        <div className='bg-[#9d9d9d] '>
          <div className='flex items-center justify-center'>
            <div className='flex justify-between items-center space-x-20 text-white mt-5 '>
              <button>Nearby</button>
              <button>Following</button>
            </div>
          </div>
          <div className='flex items-center justify-center mt-5'>
          {/* {
            reviews.map((id, review) => (
              <ReviewPost id={id.id} key={review.id} username={review.username} imageUrl={review.imageUrl} />
            ))
          } */}
          </div>
        </div>
      <div className=' hidden lg:block ' >
        {/* categories and svgs */}
        <div className='flex justify-center space-x-20 mb-[20px] m-[50px] ' >

          <div className=' flex flex-col justify-center items-center w-[250px] h-[250px] bg-[#acacac]' >
            <h3 className=' text-blue-800 text-[20px] '>Auto Repair</h3>
            <img className='mt-[20px]' src={autoIcon} alt='auto' /> 
          </div>

          <div className=' flex flex-col justify-center items-center w-[250px] h-[250px] bg-[#acacac]' >
            <h3>Plumber</h3>
            <img className='mt-[20px]' src={tapIcon} alt='auto' /> 
          </div>

          <div className=' flex flex-col justify-center items-center w-[250px] h-[250px] bg-[#acacac]' >
            <h3>Towing Service</h3>
            <img className='mt-[20px]' src={carRepair} alt='auto' /> 
          </div>

        </div>

        <div className='flex justify-center space-x-20 m-[50px] ' >

          <div className=' flex flex-col justify-center items-center w-[250px] h-[250px] bg-[#acacac]' >
            <h3>Electrican</h3>
            <img className='mt-[20px]' src={carRepair} alt='auto' /> 
          </div>

          <div className=' flex flex-col justify-center items-center w-[250px] h-[250px] bg-[#acacac]' >
            <h3>Contractor</h3>
            <img className='mt-[20px]' src={carRepair} alt='auto' /> 
          </div>

          <div className=' flex flex-col justify-center items-center w-[250px] h-[250px] bg-[#acacac]' >
            <h3>Home Cleaner</h3>
            <img className='mt-[20px]' src={cleanIcon} alt='auto' /> 
          </div>

        </div>
      </div>
      <ReviewBtn/>
    </main>
  )
}
