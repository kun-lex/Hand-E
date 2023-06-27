import { useState, useEffect } from 'react';

const ImageSlider = ({ images, interval }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [images.length, interval]);

  return (
    <div style={{ position: 'relative', overflow : 'hidden', width: '300px',
      height: '400px' }}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`join us ${index + 1}`}
          style={{
            opacity: index === currentImageIndex ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
