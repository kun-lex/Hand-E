import { useState, useEffect } from 'react';
import './App.css'

const ImageSlider = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [images.length, interval]);

  return (
    <div className="slider">
      <img src={images[currentIndex]} alt="join us" />
    </div>
  );
};

export default ImageSlider;
