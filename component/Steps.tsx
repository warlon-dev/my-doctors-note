import Image from 'next/image'
import React from 'react'

const Steps = () => {
  return (
    <div className='py-[30px] max-lg:px-[15px]'>
      <div className='mb-[40px] mx-auto flex flex-col justify-center w-[660px]'>
        <h2 className='text-center max-md:text-[30px] max-md:leading-10 text-[48px] font-semibold leading-[58px] tracking-[0.6px] mb-4'>
          Get An Online Doctor's
          <br/>
          Note In 3 Easy Steps
        </h2>
        <p className='text-[18px] leading-[23px] tracking-[0.6px] text-[#585858]'>
        With our online platform we make it quick and simple for you to obtain a doctors note, so you can focus on rest and recovery.
        </p>

      </div>

      <div className='flex flex-col'>

        <div className='grid grid-cols-1 md:grid-cols-3 mb-[30px] gap-5'>
          <div>
            <div className='bg-[#dae9fd] p-6 pb-12 rounded-[10px]'>
              <div className='mb-4'>
                <Image className='w-[70%] mx-auto' src={'/gempages_552571548410578040-c1052790-a784-4835-bbf2-dc4210ca3f05.webp'} width={300} height={300}  alt='Alt image'/>
              </div>
              <p className='mb-4 text-2xl text-center leading-[34px] tracking-[0.6px] font-semibold'>
                Fill In The Smart Form
              </p>
              <p className='text-[14px] tracking-[0.6px] leading-[18px] text-[#585858]'>
                Indicate your illness and the desired duration. It's quick and intuitive.
              </p>
            </div>
          </div>

          <div className='bg-[#dae9fd] pt-6 px-4 pb-12 rounded-[10px]'>
            <div className='mb-4'>
              <Image className='w-[70%] mx-auto' src={'/gempages_552571548410578040-ae65445c-763e-4dec-b480-2672ea0e576f.webp'} width={300} height={300}  alt='Alt image'/>
            </div>
            <p className='mb-4 text-2xl leading-[34px] tracking-[0.6px] font-semibold text-center'>
              Receive Your PDF In 1 Minute
            </p>
            <p className='text-[14px] tracking-[0.6px] leading-[18px] text-[#585858]'>
            After you've completed the checkout, your pre-filled sick leave will be sent by email within 1 minute, and it will be ready on the payment confirmation page.
            </p>
          </div>

          <div>
            <div className='bg-[#dae9fd] pt-6 px-4 pb-12 rounded-[10px]'>
              <div className='mb-4'>
                <Image className='w-[70%] mx-auto' src={'/gempages_552571548410578040-7f0158d3-8fcf-43b2-bf33-15090054dc8b.webp'} width={300} height={300}  alt='Alt image'/>
              </div>
              <p className='mb-4 text-2xl leading-[34px] tracking-[0.6px] text-center font-semibold'>
                100% Satisfaction Guarantee
              </p>
              <p className='text-[14px] tracking-[0.6px] leading-[18px] text-[#585858]'>
                Indicate your illness and the desired duration. It's quick and intuitive.
              </p>
            </div>
          </div>

        </div>
        <div className=' flex flex-col justify-center items-center'>
          <button className='flex mb-3 font-semibold justify-center text-white text-[18px] h-[60px] items-center bg-[#2323fe] px-5 py-[14px] rounded-xl w-[350px]'>
            <span>Get your Note Now</span>   
            <Image className='ml-[10px]' src={'/chevron-right.svg'} alt='arrow right' width={18} height={18}/>
          </button>
           <div className='h-[41px]'>
            <div className='text-[#626262] flex items-center justify-center gap-[10px] tracking-[0.6px]  '>
              <Image src={"/security-icon.svg"} alt='' width={32} height={33}/>
              <p>100% Risk-Free Money Back Guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Steps