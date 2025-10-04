import React from 'react'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <div className='py-20 w-full text-white section bg-black/70'>
        <div className='flex flex-col gap-6 max-w-[666px]'>
            <h1 className='text-3xl font-semibold leading-[100%] tracking-[-4%]'>Engineering the Future, Powered by Technology. Built by Trust</h1>
            <p className='text-lg font-medium'>CUEEDACC  is an indigenous Nigerian company, driven by technology in providing Engineering, Procurement, Construction, Onshore and Offshore Installation (EPCI) to various sectors</p>
            <Button className='font-medium rounded-none w-fit'>
                Explore our Services
            </Button>
        </div>
        <div className="flex mt-24 w-full max-w-[777px] border border-white">
            <div className='flex flex-col md:flex-1 px-6 py-4 leading-[100%] tracking-[-4%]'>
                <span className='text-4xl font-semibold'>5+</span>                
                <span className='text-base font-medium'>years of service</span>                
            </div>
            <div className='flex flex-col md:flex-1 px-6 py-4 leading-[100%] tracking-[-4%] border-x'>
                <span className='text-4xl font-semibold'>15+</span>                
                <span className='text-base font-medium'>companies</span>                
            </div>
            <div className='flex flex-col md:flex-1 px-6 py-4 leading-[100%] tracking-[-4%]'>
                <span className='text-4xl font-semibold'>15+</span>                
                <span className='text-base font-medium'>projects completed</span>                
            </div>
        </div>
    </div>
  )
}

export default Hero