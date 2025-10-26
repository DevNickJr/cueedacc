import React from 'react'
import Image from 'next/image'
import Logo from '@/assets/logo-white.svg'
import { MdLocationPin, MdMail, MdPhone } from 'react-icons/md'

const Footer = () => {
  return (
    <footer id='footer' className='flex flex-col py-5 w-full text-white bg-black md:py-10 lg:py-28 section'>
        <div className='flex flex-col gap-4 p-6 border border-b-0'>
            <Image
                className="text-white dark:invert md:w-56 md:h-14"
                src={Logo}
                alt="Logo"
                width={224} 
                height={50}
                priority
            />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 w-full text-lg border border-white flex-[3_0_200px]'>
            <div className='flex flex-col gap-4 p-6 border-b lg:border-b-0 lg:border-r'>
                <MdLocationPin size={18} color='#fff' />
                <p>
                    Lane 4 Ohia Igbogo Muolu Ozuoba, Cornerstone Road by Zita Spring Extension, Port Harcourt, Rivers State, Nigeria.
                </p>
            </div>
            <div className='flex flex-col gap-4 p-6 border-b lg:border-b-0 lg:border-r'>
                <MdMail size={18} color='#fff' />
                <div className="flex flex-col gap-2">
                    <a href="mailto:info@cueedacc.com">
                        info@cueedacc.com 
                    </a>
                    <a href="mailto:cueedacc@yahoo.com">
                        cueedacc@yahoo.com
                    </a>
                </div>
            </div>
            <div className='flex flex-col gap-4 p-6'>
                <MdPhone size={18} color='#fff' />
                <div className="flex flex-col gap-2">
                    <a href="tel:+2348033281239">
                        +234(0)8033281239
                    </a>
                    <a href="tel:+2347059777542">
                        +234(0)7059777542
                    </a>
                </div>
            </div>
        </div>
        {/* <div className='flex flex-col gap-6 justify-center text-center items-center p-4 w-full border border-t-0 lg:border-t lg:border-l-0 border-white  flex-[2_0_200px]'>
            <span className='text-lg'>CAC registration number:</span>
            <Image
                className=""
                src={'/cac.jpg'}
                alt="Logo"
                width={142}
                height={140}
                priority
            />
        </div> */}
    </footer>
  )
}

export default Footer