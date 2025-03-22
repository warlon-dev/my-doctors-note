import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <div className='py-[30px] max-lg:px-[15px] max-w-[1200px] mx-auto'>
      <div className='flex flex-col'>
        <div className='w-[530px] max-md:w-full mx-auto'>
          <div className='flex flex-col items-center'>
            <h2 className='text-[48px] text-center font-semibold max-md:leading-[48px] leading-[58px] max-md:text-[32px] tracking-[0.6px]'>
              Get Peace of Mind With {" "}
              <span className='text-[#2323FD]'>My {" "}</span>
              <span className='text-[#2323FD]'>Doctors Note</span>
            </h2>
            <Image className='mb-4' src={'/678b383926e210a9cdedefc3_Vector 6601.svg'} alt='line' width={263} height={8}/>
            <p className='text-[18px] leading-[23px] tracking-[0.6px] text-[#585858] mb-5'>
              My Doctor’s Note provides a fast, hassle-free solution for obtaining excuse notes. Focus on your recovery while we take care of the paperwork, delivering your note in minutes.
            </p>
          </div>
        </div>
        <div className='grid grid-cols-2 max-md:grid-cols-1 gap-4 mx-[6px] mb-[28px]'>
          <div className='flex flex-col'>
            <div className='bg-[#dae9fd] p-6 pb-0 mb-4 rounded-[10px]'>
              <p className='mb-6 text-2xl leading-[34px] tracking-[0.6px] font-semibold'>
              Trusted by Thousands Across the USA
              </p>
              <div className='mb-[22px]'>
                <ul className='inline-flex flex-col gap-5 list-disc'>
                  <li className='text-[#585858] tracking-[0.6px] leading-[21px]'>
                    <b>Professional & Reliable –</b> Includes key medical absence details in a format widely recognized by workplaces..
                  </li>
                  <li className='text-[#585858] tracking-[0.6px] leading-[21px]'>
                    <b>Essential Information Included –</b> Clearly structured while protecting your privacy.
                  </li>
                  <li className='text-[#585858] tracking-[0.6px] leading-[21px]'>
                    <b>Instant & Hassle-Free –</b> No appointments, no waiting. Receive your document within seconds via email.
                  </li>
                </ul>

              </div>
              <div className='pb-5'>
                <div className='grid grid-cols-3 gap-2 h-[38.42] '>
                  <Image className='w-[80%]' src={'/gempages_552571548410578040-9a2cfbe1-9947-4a93-8b87-51daab807ae9.svg'} width={300} height={300}  alt='Alt image'/>
                  <Image className='w-[65%]' src={'/gempages_552571548410578040-6817383f-7f4d-4e15-8e1c-05fed29356e4.svg'} width={300} height={300}  alt='Alt image'/>
                  <Image className='w-[80%]' src={'/gempages_552571548410578040-90e43877-7d57-4219-af6e-0dd369345276.webp'} width={300} height={300}  alt='Alt image'/>
                  
                </div>
              </div>
            </div>
            <div className='bg-[#dae9fd] p-6 pb-8 rounded-[10px]'>
              <p className='mb-6 text-2xl leading-[34px] tracking-[0.6px] font-semibold'>
              Customer Support That Puts You First
              </p>
              <div className='mb-[22px]'>
                <ul className='inline-flex flex-col gap-5 list-disc'>
                  <li className='text-[#585858] tracking-[0.6px] leading-[21px]'>
                    <b>Adjustable to Your Needs</b> – Easily modify details to match your situation.
                  </li>
                  <li className='text-[#585858] tracking-[0.6px] leading-[21px]'>
                    <b>Always Here for You –</b> Get assistance whenever you need it, day or night.
                  </li>
                  <li className='text-[#585858] tracking-[0.6px] leading-[21px]'>
                    <b>Real People, Real Support –</b> Our team is here to help, every step of the way.
                  </li>
                </ul>

              </div>
              <div>
                <div className='flex gap-8 h-[50px] '>
                  <Image src={'/6789e26f1ee5aa607faa42ac_Frame 2147207361.png'} width={234} height={50} className='h-full'  alt='Alt image'/>
                  <p className='text-[22px] leading-[32px] tracking-[0.6px] text-[#00c48c]'><b>We're ready to help!</b></p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='bg-[#dae9fd] px-4 pt-6 pb-8 mb-4 rounded-[10px]'>
              <p className='mb-6 text-2xl leading-[34px] tracking-[0.6px] font-semibold'>
                Get Your Note In Under 1 Minute
              </p>
              <div className='mb-[22px]'>
                <ul className='inline-flex flex-col gap-5 pl-4 list-disc'>
                  <li className='text-[#585858] tracking-[0.6px] leading-[21px]'>
                    <b>Skip the Wait –</b> No appointments, no delays. Get what you need instantly, anytime.
                  </li>
                  <li className='text-[#585858] tracking-[0.6px] leading-[21px]'>
                    <b>Available 24/7 –</b> No need to schedule weeks in advance. Access your document on demand, day or night.
                  </li>
                  <li className='text-[#585858] tracking-[0.6px] leading-[21px]'>
                    <b>Instant Email Delivery –</b> Receive your note directly in your inbox, ready to use.
                  </li>
                </ul>
              </div>
            </div>
            <div className='bg-[#dae9fd] px-4 pt-6 pb-8 flex flex-col items-center rounded-[10px]'>
              <p className='mb-6 text-2xl leading-[34px] text-center tracking-[0.6px] font-semibold'>
              The Best Price In The Market
              </p>
              <p className='text-[30px] font-semibold tracking-[0.6px] leading-[40px] text-[#585858] mb-[37px] line-through'>$42.99</p>
              <div className='text-[70px] leading-[70px] font-semibold tracking-[0.6px] mb-[37px]'>
               $29.99
              </div>
                <p className='text-[24px] leading-[43.2px] tracking-[0.6px] text-[#00c48c]'><b>30% Discount - Limited Time!</b></p>
            </div>
          </div>
        </div>
        <div className=' flex flex-col justify-center items-center mt-8'>
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

export default Features