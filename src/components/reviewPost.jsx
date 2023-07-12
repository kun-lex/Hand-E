import { useState } from 'react';
import './App.css'
import profile_pic from './images/profilepic.png';
import StarRating from './starrate';

const ReviewPost = ( username, review, imageUrl ) => {
    const [ post, setPost ] = useState (
        {
            username:"",
            imageUrl: "",
            review: ""
        },
    )
    return (
        // install material ui and use the avatar component
        <div className=''>
          <div className='block-1'>
            <div className='flex items-center p-[6px,6px,0,0] '>
              <a class="navbar-brand mr-[5px] " href="/">
                <img src={profile_pic} alt="Avatar Logo" style={{width:"40px"}} class="rounded-pill"/> 
              </a>
              <div>
                <h6 className='text-[12px]'>David A.</h6>
                <p className='text-[10px] text-black '>Wrote a review</p>
              </div>
            </div>
            <div style={{
              backgroundSize:'contain',
            }}>
              <img 
                src='https://people.com/thmb/FO4NDK7oKqf3_bUtYnXR1cmrZM0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(451x313:453x315)/kfc-double-down-sandwich-030123-e342464c09264136b35afaadbad05334.jpg' 
                alt='review-pic' 
                style={{
                  width:'100%',
                  height:'101px',
                  backgroundSize:'contain',
                }}
              />
            </div>
            {/* <StarRating/> */}
          </div>
        </div>
    )
}
export default ReviewPost;