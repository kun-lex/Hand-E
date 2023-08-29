import React, { useState } from 'react';
import { db, storage } from '../firebase';
import  {ref}  from 'firebase/storage';
import NavbarOne from '../components/navbarOne';
import StarRating from '../components/starrate';

const PostReview = () => {
  const [title, setTitle] = useState('');
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Upload the image to Firebase Storage
      const storageRef = ref(storage); 
      const imageRef = storageRef.child(image.name);
      await imageRef.put(image);

      // Get the download URL of the uploaded image
      const imageUrl = await imageRef.getDownloadURL();

      // Save the data (caption and image URL) to Firebase Firestore
      await db.collection('posts').add({
        caption,
        imageUrl,
      });

      // Clear form fields after successful submission
      setCaption('');
      setImage(null);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
      <NavbarOne/>
      <form className=' mt-40 ml-52 ' onSubmit={handleSubmit}>
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
