import './App.css';
import ImageSlider from './imageSlider';
import slide1 from './images/join-us pic.png'
import slide2 from './images/slide 2.png'
import slide3 from './images/slide 3.png'
import ReviewPost from './reviewPost';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import groupdesign from './icons/gruopdesign.png';
import groupdesigntwo from './icons/groupdesigntwo.png'
import carRepair from './icons/carrepairlogo.svg';
import ReviewBtn from './ReviewBtn';
import ScrollUpBtn from './ScrollUpbtn';
// import LiveSearchBar from './demoSearch';

export default function Main() {
  // const [ reviews, setReviews ] = useState([]);
  const images = [
    slide1, slide2, slide3,
  ];

  // useEffect(()=> 
  //   onSnapshot(collection(db, "posts"), (snapshot) => 
  //     setReviews(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
  //   )
  // , [])

  return(
    <main>
      {/* <LiveSearchBar/> */}
      <div className="flex justify-center items-center mt-[30px] ">
        <div className='mr-[50px] '>
          <div>
            <h1 className='work-text' >Work with us</h1>
            <h2 className='text-black'>Get More From Your <br/> 
              Profession
            </h2>
            <Link to='/reba-agent'><button className=' w-[130px] h-[35px] bg-[#081E40] rounded-[15px] items-center justify-center text-white '>Learn More</button></Link>
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
      <div>
        <div
          className=' flex items-center w-full '
        >
          <div style={{ position: 'relative', display: 'flex' , alignItems: 'flex-start', justifyContent: 'start'}}>
            <img src={groupdesign} alt='group-design' className='w-[200px] h-[200px] ' />
          </div>
        </div>
        {/* categories and svgs */}
        <div className='flex justify-center space-x-20 mb-[20px] m-[50px] ' >

          <div className=' flex flex-col justify-center items-center w-[250px] h-[250px] bg-[#acacac]' >
            <h3 className=' text-blue-800 text-[20px] '>Auto Repair</h3>
            <img className='mt-[20px]' src={carRepair} alt='auto' /> 
          </div>

          <div className=' flex flex-col justify-center items-center w-[250px] h-[250px] bg-[#acacac]' >
            <h3>Plumber</h3>
            <img className='mt-[20px]' src={carRepair} alt='auto' /> 
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
            <img className='mt-[20px]' src={carRepair} alt='auto' /> 
          </div>

        </div>
        
        <div
          style={{ position: 'relative', display: 'flex' , alignItems: 'flex-end', justifyContent: 'end'}}
        >
        <img src={groupdesigntwo} alt='group-design' className='w-[200px] h-[200px]'/>
        </div>
      </div>
      <ReviewBtn/>
    </main>
  )
}
