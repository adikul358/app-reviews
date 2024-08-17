import React from 'react';

export default function StarRating ({ rating, className }) {
  const ratingfmt = Math.round(rating*20) + "%";

  return (
    <div className={`star-ratings ${className}`}>
      <div className="fill-ratings" style={{"width": ratingfmt}}>
        <span>★★★★★</span>
      </div>
      <div className="empty-ratings">
        <span>★★★★★</span>
      </div>
    </div>
  );
};
