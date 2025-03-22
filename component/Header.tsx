import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header className='px-[50px] py-5 flex max-[990px]:py-2.5 items-center justify-center'>
        <div className='p-[7.5px]'>
         <Image  src={"/bcnjac0hn1ggv3xvmavh.avif" }  width={240}  height={29.5} alt='My Doctors Note'/>
        </div>
    </header>
  )
}

export default Header