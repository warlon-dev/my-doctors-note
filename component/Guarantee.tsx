import Image from 'next/image'
import React from 'react'

const Guarantee = () => {
  return (
    <div className='py-[30px] max-lg:px-[15px] max-w-[1200px] mx-auto'>
      <div className='py-[30px] bg-[#b9eedf] rounded-xl '>
       <div className='flex items-center max-md:flex-col gap-[30px] mx-auto w-[742px] max-md:w-full max-md:text-center'>
        <Image src={'/6790d778b0c1c07478996883_Group 1321319131.svg'} width={144} height={179} alt='alt'/>
          <div className='flex flex-col'>
            <h2 className='mb-4 text-[32px] leading-[42px] tracking-[0.6px] font-semibold max-md:text-[24px]'>Money Back Guarantee!</h2>
            <p className='font-medium text-[18px] leading-[23px] tracking-[0.6px] max-md:text-[16px]'>We will refund 100% of your payment, in case you're not 100% satisfied with our service.</p>
          </div>
       </div>
      </div>
    </div>
  )
}

export default Guarantee