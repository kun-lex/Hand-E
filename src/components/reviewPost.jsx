import { useState } from 'react';
import './App.css'
import profile_pic from './images/profilepic.png';
import StarRating from './starrate';

const ReviewPost = ({username, imageUrl}) => {
    return (
        // install material ui and use the avatar component
        <div className=''>
          <div className='block-1'>
            <div className='flex items-center p-6 '>
              <a class="navbar-brand mr-[5px] " href="/">
                <img src={profile_pic} alt="Avatar Logo" style={{width:"40px"}} class="rounded-pill"/> 
              </a>
              <div>
                <h6 className='text-[12px]'>{username}</h6>
                <p className='text-[10px] text-black '>Wrote a review</p>
              </div>
            </div>
            <div style={{
              backgroundSize:'contain',
            }}>
              <img 
                src={ imageUrl }
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