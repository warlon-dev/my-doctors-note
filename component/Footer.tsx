import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='py-9 font-assistant border-t border-t-[#efefef] max-w-[1200px] mx-auto'>
      <div className='px-[50px] pb-[50px] max-md:px-[40px]'>
        <div className='flex flex-wrap max-md:flex-col gap-x-2 gap-y-15'> 
          <div className='text-[#4f4f4f] flex-1'>
            <Image src={'/bcnjac0hn1ggv3xvmavh.avif'} width={165} height={20.2} className='mb-5' alt=''/>
            <div>
              <p className='leading-[28.8px]'><b>Support</b> (Mon-Fri, 9am-6pm EST)</p>
              <p className='mt-4'><b>Email:</b> help@urgentsupport.co</p>
            </div>
          </div>
          <div className=' flex-1' >
            <h2 className='mb-5 text-[18px]  max-md:text-[16px] tracking-[0.6px] leading-[23.2px]'>Customer service</h2>
            <div className='text-[#4f4f4f] flex flex-col'>
              <ul>
                <li>
                  <a href='/pages/contact' className='pb-[5px] block text-[14px] leading-[25.2px] tracking-[0.6px] '>Contact Us</a>
                </li>
                <li>
                  <a href='mailto:help@urgentsupport.co' className='py-[5px] block text-[14px] leading-[25.2px] tracking-[0.6px] '>Refund Requests</a>
                </li>
                <li>
                  <a href='/pages/frequently-asked-questions' className='py-[5px] block text-[14px] leading-[25.2px] tracking-[0.6px] '>Frequently Asked Questions</a>
                </li>
              </ul>
            </div>
          </div>
          <div className=' flex-1' >
            <h2 className='mb-5 text-[18px] max-md:text-[16px] tracking-[0.6px] leading-[23.2px]'>Policies</h2>
            <div className='text-[#4f4f4f] flex flex-col'>
              <ul>
                <li>
                  <a href='/pages/terms-of-service' className='pb-[5px] block text-[14px] leading-[25.2px] tracking-[0.6px] '>Terms Of Service</a>
                </li>
                <li>
                  <a href='/pages/refund-policy' className='py-[5px] block text-[14px] leading-[25.2px] tracking-[0.6px] '>Refund Policy</a>
                </li>
                <li>
                  <a href='/pages/privacy-policy' className='py-[5px] block text-[14px] leading-[25.2px] tracking-[0.6px] '>Privacy Policy</a>
                </li>
                <li>
                  <a href='/pages/disclaimer-policy' className='py-[5px] block text-[14px] leading-[25.2px] tracking-[0.6px] '>Disclaimer Policy</a>
                </li>
                <li>
                  <a href='/pages/intellectual-property-policy' className='py-[5px] block text-[14px] leading-[25.2px] tracking-[0.6px] '>Intellectual Property Policy</a>
                </li>
                <li>
                  <a href='/pages/jurisdiction-policy' className='py-[5px] block text-[14px] leading-[25.2px] tracking-[0.6px] '>Jurisdiction Policy</a>
                </li>
                <li>
                  <a href='/pages/limitation-of-liability-policy' className='py-[5px] block text-[14px] leading-[25.2px] tracking-[0.6px] '>Limitation of Liability Policy</a>
                </li>
                <li>
                  <a href='/pages/indemnification-policy' className='py-[5px] block text-[14px] leading-[25.2px] tracking-[0.6px] '>Indemnification Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className=' flex-1' >
            <h2 className='mb-5 text-[18px]  max-md:text-[16px] tracking-[0.6px] leading-[23.2px]'>Company Details</h2>
            <div className='text-[#4f4f4f] flex flex-col'>
              <ul>
                <li>
                  <p className='pb-[5px] block text-[16px] leading-[28.8px] tracking-[0.6px] '>COMPANY NAME & ADDRESS</p>
                </li>
                <li>
                  <p  className='py-[5px] block text-[16px] leading-[28.8px] tracking-[0.6px] '>Company registration number: 000000</p>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
      <div className='pt-[30px] max-md:pt-0 border-t border-t-[#efefef]'>
        <div className='px-[50px]'>
          <div className='mt-[15px] text-center'>
            <small className='text-[11px] text-[#121212BF]'>© 2025, My Doctors Note</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer