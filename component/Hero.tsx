import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className=' md:px-[15px] lg:px-0 px-0'>
      <div className='relative text-white'>
        <div className='absolute w-full h-full inset-0 '>
          <Image className='object-cover h-full' alt='adaptive-hero-banner' fetchPriority='high' width={3168} height={1344} src={"/gempages_552571548410578040-94723b57-4f3f-4aad-8f50-37d3ae610588.webp"} /> 
        </div>
        <div className='bg-[#121212] opacity-65 absolute inset-0'/>
        <div className='relative py-15 md:py-[112px] z-[5] block'>
          <div className='items-center justify-center h-full flex'>
            <div className='flex flex-col h-full'>
              <div className='text-center flex items-center flex-col'>
                <h2 className='tracking-[0.6px] text-[28px] md:text-[46px] lg:text-[50px] font-semibold leading-[32px] md:leading-[60px] mb-[10px]'>
                  Your Doctor's Note
                  <br/>
                  In 1 Minute, for $29,99!
                </h2>
                <Image className='max-lg:w-[250px] mb-[26px]' src={'/677ec92e3d12277fa484e390_Vector 6599.svg'} alt='line' width={434} height={10}/>
                <button className='flex mb-3 font-semibold justify-center text-[18px] h-[60px] items-center bg-[#2323fe] px-5 py-[14px] rounded-xl w-[350px]'>
                  <span>Get your Note Now</span>   
                  <Image className='ml-[10px]' src={'/chevron-right.svg'} alt='arrow right' width={18} height={18}/>
                </button>
              </div>
              <div className='h-[41px]'>
                <div className='flex items-center max-md:text-[13px] justify-center gap-[10px] tracking-[0.6px]  '>
                  <Image className='max-md:w-5' src={"/security-icon.svg"} alt='' width={32} height={33}/>
                  <p>100% Risk-Free Money Back Guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero