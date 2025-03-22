'use client'

import React, { useEffect, useState } from 'react'

const PromoBanner = () => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) return; // Stop countdown at 0

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

    // Convert seconds into MM:SS format
    const formatTime = (seconds:number) => {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${String(minutes).padStart(2, "0")} : ${String(remainingSeconds).padStart(2, "0")}`;
    };

    
  return (
    <div className='bg-[#2323fd] text-white sticky top-0 z-50'>
        <p className='py-[10px] max-md:text-[14px] text-center leading-[16px] font-semibold tracking-[0.6px]'>
        30% OFF if you order in the next {formatTime(timeLeft)}
        </p>
    </div>
  )
}

export default PromoBanner