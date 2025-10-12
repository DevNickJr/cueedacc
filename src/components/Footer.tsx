import React from 'react'
import Image from 'next/image'
import Logo from '@/assets/logo-white.svg'
import { MdLocationPin, MdMail, MdPhone } from 'react-icons/md'

const Footer = () => {
  return (
    <footer id='footer' className='flex flex-col py-5 w-full text-white bg-black lg:flex-row md:py-10 lg:py-28 section'>
        <div className='flex flex-col w-full text-lg border border-white flex-[3_0_200px]'>
            <div className='flex flex-col gap-4 p-6 border-b'>
                <Image
                    className="text-white dark:invert md:w-56 md:h-14"
                    src={Logo}
                    alt="Logo"
                    width={224} 
                    height={50}
                    priority
                />
            </div>
            <div className='flex flex-col gap-4 p-6 border-b'>
                <MdLocationPin size={18} color='#fff' />
                <p>Lane 4 Ohia Igbogo Muolu Ozuoba, Cornerstone Road by Zita Spring Extension Port Harcourt, Rivers State, Nigeria.</p>
            </div>
            <div className='flex flex-col gap-4 p-6 border-b'>
                <MdMail size={18} color='#fff' />
                <div className="flex flex-col gap-2">
                    <a href="mailto:info@cueedacc.com">
                        Info@cueedacc.com
                    </a>
                    <a href="mailto:info@cueedacc.com">
                        Info@cueedacc.com
                    </a>
                </div>
            </div>
            <div className='flex flex-col gap-4 p-6'>
                <MdPhone size={18} color='#fff' />
                <div className="flex flex-col gap-2">
                    <a href="tel:+23408033281239">
                        +234(0)8033281239
                    </a>
                    <a href="tel:+23408033281239">
                        +234(0)8033281239
                    </a>
                </div>
            </div>
        </div>
        <div className='flex flex-col gap-6 justify-center text-center items-center p-4 w-full border border-t-0 lg:border-t lg:border-l-0 border-white  flex-[2_0_200px]'>
            <span className='text-lg'>CAC registration number:</span>
            <Image
                className=""
                src={'/cac.jpg'}
                alt="Logo"
                width={142}
                height={140}
                priority
            />
        </div>
    </footer>
  )
}

export default Footer