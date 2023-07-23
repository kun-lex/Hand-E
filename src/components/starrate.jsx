import { useState } from 'react';

const StarRating = ({ totalStars, initialRating, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
    onRatingChange(selectedRating);
  };

  return (
    <div className="flex items-center">
      {[...Array(totalStars)].map((_, index) => (
        <Star
          key={index}
          isSelected={index < rating}
          onClick={() => handleStarClick(index + 1)}
        />
      ))}
    </div>
  );
};

const Star = ({ isSelected, onClick }) => {
  return (
    <svg
      onClick={onClick}
      className={`w-6 h-6 fill-current ${
        isSelected ? 'text-blue-500' : 'text-gray-400'
      }`}
      viewBox="0 0 20 20"
    >
      <path d="M19.653 7.56l-5.91-.51L10.708.306A1.23 1.23 0 0 0 9.266.3a1.22 1.22 0 0 0-1.043.596L5.256 7.05l-5.91.51a1.215 1.215 0 0 0-.663 2.094l4.442 4.087-1.244 6.7a1.225 1.225 0 0 0 1.785 1.292l5.873-3.195 5.872 3.195a1.225 1.225 0 0 0 1.785-1.292l-1.243-6.7 4.442-4.088a1.214 1.214 0 0 0-.66-2.094zm0 0" />
    </svg>
  );
};

export default StarRating;
