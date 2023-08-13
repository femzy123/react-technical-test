import Image from "next/image";
import React from "react";

const Rating = ({ rating }) => {
  const totalStars = 5;
  const filledStars = Math.min(Math.max(rating, 0), totalStars);

  return (
    <div className="flex gap-[2px]">
      {[...Array(filledStars)].map((_, i) => (
        <Image
          key={i}
          src="/icons/Full_Star.svg"
          alt="filled star"
          width={16}
          height={16}
        />
      ))}
      {[...Array(totalStars - filledStars)].map((_, i) => (
        <Image
          key={i}
          src="/icons/Empty_Star.svg"
          alt="filled star"
          width={16}
          height={16}
        />
      ))}
    </div>
  );
};

export default Rating;
