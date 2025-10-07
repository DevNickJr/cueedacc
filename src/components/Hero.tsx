import React from 'react'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <section className='relative'>
        <video 
            width="320"
            height="240"
            className='object-cover absolute top-0 left-0 z-0 w-full h-full'
            autoPlay
            src={"/people_person.mp4"}
        />
        <div className='relative py-6 w-full text-white md:py-14 lg:py-24 section z-1 bg-black/60 lg:min-h-[calc(100vh-72px)]'>
            <div className='flex flex-col gap-6 max-w-[666px] relative'>
                <h1 className='text-5xl font-semibold leading-[100%] tracking-[-4%]'>Engineering the Future, Powered by Technology. Built by Trust</h1>
                <p className='text-xl font-medium'>CUEEDACC  is an indigenous Nigerian company, driven by technology in providing Engineering, Procurement, Construction, Onshore and Offshore Installation (EPCI) to various sectors</p>
                <Button className='font-medium rounded-none w-fit'>
                    Explore our Services
                </Button>
            </div>
            <div className="flex mt-24 w-full max-w-[777px] border border-white relative">
                <div className='flex flex-col md:flex-1 px-6 py-4 leading-[100%] tracking-[-4%]'>
                    <span className='text-5xl font-semibold'>5+</span>                
                    <span className='text-base font-medium'>years of service</span>                
                </div>
                <div className='flex flex-col md:flex-1 px-6 py-4 leading-[100%] tracking-[-4%] border-x'>
                    <span className='text-5xl font-semibold'>15+</span>                
                    <span className='text-base font-medium'>companies</span>                
                </div>
                <div className='flex flex-col md:flex-1 px-6 py-4 leading-[100%] tracking-[-4%]'>
                    <span className='text-5xl font-semibold'>15+</span>                
                    <span className='text-base font-medium'>projects completed</span>                
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero