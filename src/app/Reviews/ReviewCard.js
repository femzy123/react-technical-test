import Image from 'next/image';
import React from 'react';
import Rating from './Rating';
import { DM_Sans, Space_Grotesk } from "next/font/google";


const dm_sans = DM_Sans({ subsets: ["latin"] });
const space_grotesk = Space_Grotesk({ subsets: ["latin"]})
const ReviewCard = ({rating, comment, author}) => {
  return (
    <div className="bg-white border-[2px] border-[#111] p-[30px] flex flex-col items-start justify-between gap-[30px]">
      <Rating rating={rating} />
      <div
        className={`${dm_sans.className} mb-[10px] text-[16px]`}
      >{`"${comment}"`}</div>

      <div className="flex items-center justify-start gap-[15px]">
        <div>
          <Image
            src={author.image}
            alt="photo"
            width={43}
            height={43}
            className="rounded-full"
          />
        </div>
        <div>
          <p className={`${space_grotesk.className} text-[16px]`}>
            {author.name}
          </p>
          <p className='text-sm'>{author.title}</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
