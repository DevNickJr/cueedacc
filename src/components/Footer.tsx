import React from 'react'
import Image from 'next/image'
import { LocateIcon, Mail, MailIcon, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='flex py-5 w-full text-white bg-black md:py-10 lg:py-28 section'>
        <div className='flex flex-col w-full text-lg border border-white flex-[3_0_200px]'>
            <div className='flex flex-col gap-4 p-6 border-b'>
                <LocateIcon size={18} color='#fff' />
                <p>Lane 4 Ohia Igbogo Muolu Ozuoba, Cornerstone Road by Zita Spring Extension Port Harcourt, Rivers State, Nigeria.</p>
            </div>
            <div className='flex flex-col gap-4 p-6 border-b'>
                <MailIcon size={18} color='#fff' />
                <div className="flex flex-col gap-2">
                    <span>Info@cueedacc.com</span>
                    <span>Info@cueedacc.com</span>
                </div>
            </div>
            <div className='flex flex-col gap-4 p-6'>
                <Phone size={18} color='#fff' />
                <div className="flex flex-col gap-2">
                    <span>+234(0)8033281239</span>
                    <span>+234(0)8033281239</span>
                </div>
            </div>
        </div>
        <div className='flex flex-col gap-6 justify-center items-center p-4 w-full border border-l-0 border-white  flex-[2_0_200px]'>
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