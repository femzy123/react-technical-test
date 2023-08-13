import Image from 'next/image';
import React from 'react';

const ReviewCard = ({rating, comment, author}) => {
  return (
    <div className='bg-white border border-[#111] p-[30px] flex flex-col items-center justify-between'>
      <div>
        {rating}
      </div>
      <div>{comment}</div>

      <div className='flex items-center justify-start gap-[15px]'>
        <div>
          <Image src={author.image} alt='photo' width={43} height={43} className='rounded-full' />
        </div>
        <div>
          <p>{author.name}</p>
          <p>{author.title}</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
