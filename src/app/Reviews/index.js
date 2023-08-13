import React from 'react';
import { reviewData } from './reviewData';
import ReviewCard from './ReviewCard';

const Reviews = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-[30px]'>
      {reviewData.map((review, i) => (
        <ReviewCard key={i} rating={review.rating} comment={review.comment} author={review.author} />
      ))}
    </div>
  );
}

export default Reviews;
