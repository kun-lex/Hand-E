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
            <div className='flex'>
              <a class="navbar-brand" href="/">
                <img src={profile_pic} alt="Avatar Logo" style={{width:"40px"}} class="rounded-pill"/> 
              </a>
              <div>
                <h6>David A.</h6>
                <p>Wrote a review</p>
              </div>
            </div>
          </div>
          <StarRating/>
        </div>
    )
}
export default ReviewPost;