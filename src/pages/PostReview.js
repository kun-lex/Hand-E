import React, { useState } from 'react';
import NavbarOne from '../components/navbarOne';
import StarRating from '../components/starrate';

const PostReview = () => {
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div>
      <NavbarOne/>
      <form className=' mt-40 ml-52 ' onSubmit={''}>
        <StarRating
          totalStars={5}
          initialRating={rating}
          onRatingChange={handleRatingChange}
        />
        <div className='flex mt-5'>
          <input
            placeholder='Write a review'
            type="text"
            id="caption"
            value={caption}
            onChange={handleCaptionChange}
            required
            style={{
              width: '500px',
              height: '250px',
              border: '1px solid gray',
              backgroundColor: 'transparent',
              borderRadius: '5px'
            }}
          />
        </div>
        <div className='mt-10' >
          <h3><strong>Attach Photos</strong></h3>
          <input
            type="file"
            accept="image/*"
            id="image"
            value={image}
            onChange={handleImageChange}
            required
          />
        </div>
        <button 
          type="submit" 
          style={{
            height: "35px",
            width: "130px",
            backgroundColor: "#081E40",
            color: "white",
            borderRadius: "15px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostReview;
