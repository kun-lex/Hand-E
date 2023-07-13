import './App.css';
import profile_pic from './images/profilepic.png';
import ImageSlider from './imageSlider';
import slide1 from './images/join-us pic.png'
import slide2 from './images/slide 2.png'
import slide3 from './images/slide 3.png'
import ReviewPost from './reviewPost';
import styled  from 'styled-components';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { onSnapshot, collection } from 'firebase/firestore';
import groupdesign from './icons/gruopdesign.png';


export default function Main() {
  const [ reviews, setReviews ] = useState([]);
  const images = [
    slide1, slide2, slide3,
  ];

  useEffect(()=> 
    onSnapshot(collection(db, "posts"), (snapshot) => 
      setReviews(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
    )
  , [])

  return(
    <main>
      <div className="flex justify-center items-center mt-[30px] ">
        <div className='mr-[50px] '>
          <div>
            <h1 className='work-text' >Work with us</h1>
            <h2 className='text-black'>Get More From Your <br/> 
              Profession
            </h2>
            <button className=' w-[130px] h-[35px] bg-[#081E40] rounded-[15px] items-center justify-center text-white '>Learn More</button>
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
          <h2 style={{color:"white"}}>Recent Activity</h2>
        </div>
        <div className='flex items-center justify-center'>
          <div className='flex flex-row justify-between items-center m-0 w-[20%] text-white '>
            <button>Nearby</button>
            <button>Friends</button>
            <button>Following</button>
          </div>
        </div>
        <div className='flex items-center justify-center'>
        {
          reviews.map((review) => (
            <ReviewPost key={review.id} username={review.username} imageUrl={review.imageUrl} />
          ))
        }
        </div>
      </div>
      <div>
        <img src={groupdesign} alt='group-design' className='' />
      </div>
    </main>
  )
}
