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
            loop
            muted
            playsInline
            src={"/people_person.mp4"}
        />
        <div className='relative py-15 w-full text-white md:py-14 lg:py-24 section z-1 bg-black/60 lg:min-h-[calc(100vh-72px)]'>
            <div className='flex flex-col gap-6 max-w-[720px] relative'>
                <h1 className='text-5xl font-semibold leading-tight tracking-[-0.05em] md:tracking-normal'>Engineering the Future, Powered by Technology. Built by Trust</h1>
                <p className='text-xl font-medium leading-tight tracking-[-0.04em]'>CUEEDACC  is an indigenous Nigerian company, driven by technology in providing Engineering, Procurement, Construction, Onshore and Offshore Installation (EPCI) to various sectors</p>
                <a href="#services">
                    <Button className='mt-6 font-medium rounded-none w-fit'>
                        Explore our Services
                    </Button>
                </a>
            </div>
            <div className="flex mt-[5.5rem] w-full max-w-[777px] border border-white relative">
                <div className='flex flex-col flex-1 p-2 py-3 leading-tight shrink-0 md:px-6 md:py-4 tracking-[-0.04em]'>
                    <span className='text-4xl font-semibold md:text-5xl'>5+</span>                
                    <span className='text-sm font-medium md:text-base'>years of service</span>                
                </div>
                <div className='flex flex-col flex-1 p-2 py-3 leading-tight shrink-0 md:px-6 md:py-4 tracking-[-0.04em] border-x'>
                    <span className='text-4xl font-semibold md:text-5xl'>15+</span>                
                    <span className='text-sm font-medium md:text-base'>companies</span>                
                </div>
                <div className='flex flex-col flex-1 p-2 py-3 leading-tight shrink-0 md:px-6 md:py-4 tracking-[-0.04em]'>
                    <span className='text-4xl font-semibold md:text-5xl'>15+</span>                
                    <span className='text-sm font-medium md:text-base'>projects completed</span>                
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero