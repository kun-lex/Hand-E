import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

// Initialize Firebase with your configuration details
firebase.initializeApp({
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
});

const db = firebase.firestore();
const storage = firebase.storage();

const ImageUploadForm = () => {
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
      await db.collection('images').add({
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

export default ImageUploadForm;
