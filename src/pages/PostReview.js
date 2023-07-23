import React, { useState } from 'react';
import { db, storage } from '../firebase';
import  ref  from 'firebase/storage';

const PostReview = () => {
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);

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
      const storageRef = storage.ref(); 
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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="caption">Caption:</label>
        <input
          type="text"
          id="caption"
          value={caption}
          onChange={handleCaptionChange}
          required
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
  );
};

export default PostReview;
