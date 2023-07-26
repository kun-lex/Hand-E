import React, { useState } from 'react';
import { db, storage } from '../firebase';
import  {ref}  from 'firebase/storage';
import NavbarOne from '../components/navbarOne';

const PostReview = () => {
  const [title, setTitle] = useState('');
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);

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
      <form className='flex flex-col justify-start items-center mt-[50px] ' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="caption">Business Name:</label>
          <input
            type="text"
            id="caption"
            value={title}
            onChange={handleTitleChange}
            required
            style={{
              width: '200px',
              height: '30px',
              border: '1px solid lightgray',
              backgroundColor: 'white',
              borderRadius: '5px'
            }}
          />
        </div>
        <div className='flex'>
          <label htmlFor="caption">Review:</label>
          <input
            type="text"
            id="caption"
            value={caption}
            onChange={handleCaptionChange}
            required
            style={{
              width: '500px',
              height: '250px',
              border: '1px solid lightgray',
              backgroundColor: 'white',
              borderRadius: '5px'
            }}
          />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            accept="image/*"
            id="image"
            onChange={handleImageChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostReview;
