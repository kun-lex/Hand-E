// import './star.scss'
import React, { useState } from 'react';

const StarRating = () => {
    const ratings = [
      { id: 1, name: 'Terrible' },
      { id: 2, name: 'Bad' },
      { id: 3, name: 'OK' },
      { id: 4, name: 'Good' },
      { id: 5, name: 'Excellent' }
    ];
    const [rating, setRating] = useState(null);
  
    const updateRating = (e) => {
      const selectedRating = ratings.find((r) => r.id === parseInt(e.target.value));
      setRating(selectedRating);
    };
  
    return (
      <form className="rating">
        <div className="rating__stars">
          {ratings.map((r) => (
            <React.Fragment key={r.id}>
              <input
                id={`rating-${r.id}`}
                className={`rating__input rating__input-${r.id}`}
                type="radio"
                name="rating"
                value={r.id}
                onChange={updateRating}
                />
                <label className="rating__label" htmlFor={`rating-${r.id}`}>
                    <svg className="rating__star" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
                        <g transform="translate(16,16)">
                            <circle className="rating__star-ring" fill="none" stroke="#000" strokeWidth="16" r="8" transform="scale(0)" />
                        </g>
                        <g stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <g transform="translate(16,16) rotate(180)">
                            <polygon className="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="none" />
                            <polygon className="rating__star-fill" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="#000" />
                            </g>
                            <g transform="translate(16,16)" strokeDasharray="12 12" strokeDashoffset="12">
                            <polyline className="rating__star-line" transform="rotate(0)" points="0 4,0 16" />
                            <polyline className="rating__star-line" transform="rotate(72)" points="0 4,0 16" />
                            <polyline className="rating__star-line" transform="rotate(144)" points="0 4,0 16" />
                            <polyline className="rating__star-line" transform="rotate(216)" points="0 4,0 16" />
                            <polyline className="rating__star-line" transform="rotate(288)" points="0 4,0 16" />
                            </g>
                        </g>
                    </svg>
                    <span class="rating__sr">1 star—Terrible</span>
                </label>
                <label className="rating__label" htmlFor={`rating-${r.id}`}>
                    <svg class="rating__star" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
                        <g transform="translate(16,16)">
                            <circle class="rating__star-ring" fill="none" stroke="#000" stroke-width="16" r="8" transform="scale(0)" />
                        </g>
                        <g stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <g transform="translate(16,16) rotate(180)">
                                <polygon class="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="none" />
                                <polygon class="rating__star-fill" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="#000" />
                            </g>
                            <g transform="translate(16,16)" stroke-dasharray="12 12" stroke-dashoffset="12">
                                <polyline class="rating__star-line" transform="rotate(0)" points="0 4,0 16" />
                                <polyline class="rating__star-line" transform="rotate(72)" points="0 4,0 16" />
                                <polyline class="rating__star-line" transform="rotate(144)" points="0 4,0 16" />
                                <polyline class="rating__star-line" transform="rotate(216)" points="0 4,0 16" />
                                <polyline class="rating__star-line" transform="rotate(288)" points="0 4,0 16" />
                            </g>
                        </g>
                    </svg>
                    <span class="rating__sr">2 stars—Bad</span>
                </label>
                <label className="rating__label" htmlFor={`rating-${r.id}`}>
                    <svg class="rating__star" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
                        <g transform="translate(16,16)">
                            <circle class="rating__star-ring" fill="none" stroke="#000" stroke-width="16" r="8" transform="scale(0)" />
                        </g>
                        <g stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <g transform="translate(16,16) rotate(180)">
                                <polygon class="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="none" />
                                <polygon class="rating__star-fill" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="#000" />
                            </g>
                            <g transform="translate(16,16)" stroke-dasharray="12 12" stroke-dashoffset="12">
                                <polyline class="rating__star-line" transform="rotate(0)" points="0 4,0 16" />
                                <polyline class="rating__star-line" transform="rotate(72)" points="0 4,0 16" />
                                <polyline class="rating__star-line" transform="rotate(144)" points="0 4,0 16" />
                                <polyline class="rating__star-line" transform="rotate(216)" points="0 4,0 16" />
                                <polyline class="rating__star-line" transform="rotate(288)" points="0 4,0 16" />
                            </g>
                        </g>
                    </svg>
			        <span class="rating__sr">3 stars—OK</span>
                </label>
                <label className="rating__label" htmlFor={`rating-${r.id}`}>
                    <svg class="rating__star" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
                        <g transform="translate(16,16)">
                            <circle class="rating__star-ring" fill="none" stroke="#000" stroke-width="16" r="8" transform="scale(0)" />
                        </g>
                        <g stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <g transform="translate(16,16) rotate(180)">
                                <polygon class="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="none" />
                                <polygon class="rating__star-fill" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="#000" />
                            </g>
                            <g transform="translate(16,16)" stroke-dasharray="12 12" stroke-dashoffset="12">
                                <polyline class="rating__star-line" transform="rotate(0)" points="0 4,0 16" />
                                <polyline class="rating__star-line" transform="rotate(72)" points="0 4,0 16" />
                                <polyline class="rating__star-line" transform="rotate(144)" points="0 4,0 16" />
                                <polyline class="rating__star-line" transform="rotate(216)" points="0 4,0 16" />
                                <polyline class="rating__star-line" transform="rotate(288)" points="0 4,0 16" />
                            </g>
                        </g>
                    </svg>
			        <span class="rating__sr">4 stars—Good</span>
                </label>
                <label className="rating__label" htmlFor={`rating-${r.id}`}>
                    <svg class="rating__star" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
                        <g transform="translate(16,16)">
                            <circle class="rating__star-ring" fill="none" stroke="#000" stroke-width="16" r="8" transform="scale(0)" />
                        </g>
                        <g stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <g transform="translate(16,16) rotate(180)">
                                <polygon class="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="none" />
                                <polygon class="rating__star-fill" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="#000" />
                            </g>
                            <g transform="translate(16,16)" stroke-dasharray="12 12" stroke-dashoffset="12">
                                <polyline class="rating__star-line" transform="rotate(0)" points="0 4,0 16" />
                                <polyline class="rating__star-line" transform="rotate(72)" points="0 4,0 16" />
                                <polyline class="rating__star-line" transform="rotate(144)" points="0 4,0 16" />
                                <polyline class="rating__star-line" transform="rotate(216)" points="0 4,0 16" />
                                <polyline class="rating__star-line" transform="rotate(288)" points="0 4,0 16" />
                            </g>
                        </g>
                    </svg>
                    <span class="rating__sr">5 stars—Excellent</span>
                </label>
            </React.Fragment>
          ))}
          </div>
          </form>
          )
}
export default StarRating;