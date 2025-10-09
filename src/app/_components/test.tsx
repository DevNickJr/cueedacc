'use client'
import { Dot, MoveLeft, MoveRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const services = [
    {
        title: 'construction services',
        description: 'Executing complex projects with accuracy, safety, and efficiency. Our teams deliver civil, mechanical, and structural works seamlessly. We turn engineering blueprints into sustainable infrastructure.',
        image: '/construction.png',
        slug: 'construction',
    },
    {
        title: 'Procurement services',
        description: 'Reliable sourcing of equipment, materials, and technology worldwide. We ensure cost-effective, timely, and quality-controlled supply chains. Our procurement process reduces risks and maximizes project value.',
        image: '/procure.jpg',
        slug: 'procurement',
    },
    {
        title: 'Installation services',
        description: 'Onshore and offshore installation expertise across multiple sectors. We deploy modern equipment and skilled teams for flawless execution. From pipelines to platforms, our installations stand the test of time.',
        image: '/install.jpg',
        slug: 'installation',
    },
    {
        title: 'Commissioning services',
        description: 'Ensuring every system functions as designed before handover. We conduct rigorous testing, validation, and quality checks. Delivering operational readiness with zero compromise on safety.',
        image: '/commission.jpg',
        slug: 'commissioning',
    },
    {
        title: 'Engineering services',
        description: 'our engineering services helps companies to solve all of this countries problems in a type of way.',
        image: '/engineer.jpg',
        slug: 'engineering',
    },
]

const Services = () => {
    const [curr, setCurr] = React.useState(0);

    const handleClick = (next: number) => {
        setCurr(() => {
            if (next > services.length - 1) {
                return 0
            } else if (next < 0) {
                return services.length - 1
            } else {
                return next
            }
        })
    }
    
    // React.useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurr((curr) => {
    //             const next = curr + 1
    //             if (next > services.length - 1) {
    //                 return 0
    //             } else if (next < 0) {
    //                 return services.length - 1
    //             } else {
    //                 return next
    //             }
    //         })
    //     }, 3000)
    //     return () => clearInterval(interval)
    // })

    return (
        <section className='lg:min-h-[calc(100vh)] relative flex'>
            {
                curr == 0 && (
                    <Service
                        key={0}
                        item={services[0]}
                        goTo={(index) => handleClick(index)}
                        next={() => handleClick(1)}
                        prev={() => handleClick(4)}
                    />
                )
            }
            {
                curr == 1 && (
                    <Service
                        key={1}
                        item={services[1]}
                        goTo={(index) => handleClick(index)}
                        next={() => handleClick(2)}
                        prev={() => handleClick(curr-0)}
                    />
                )
            }
            {
                curr == 2 && (
                    <Service
                        key={2}
                        item={services[2]}
                        goTo={(index) => handleClick(index)}
                        next={() => handleClick(3)}
                        prev={() => handleClick(1)}
                    />
                )
            }
            {
                curr == 3 && (
                    <Service
                        key={3}
                        item={services[3]}
                        goTo={(index) => handleClick(index)}
                        next={() => handleClick(4)}
                        prev={() => handleClick(2)}
                    />
                )
            }
            {
                curr == 4 && (
                    <Service
                        key={4}
                        item={services[4]}
                        goTo={(index) => handleClick(index)}
                        next={() => handleClick(0)}
                        prev={() => handleClick(3)}
                    />
                )
            }
        </section>
    )
}

export default Services


const Service = ({
    item,
    goTo,
    next,
    prev,
}: {
    item: {
        title: string;
        description: string;
        image: string;
        slug: string;
    },
    goTo?: (index: number) => void;
    next?: () => void;
    prev?: () => void;
}) => {
  return (
    <>
        <Image 
            width="320"
            height="240"
            alt={item.title}
            className='object-cover absolute top-0 left-0 z-0 w-full h-full'
            src={item.image}
        />
        <Image 
            width="320"
            height="240"
            alt="Blur"
            className='object-cover absolute top-0 left-0 z-0 w-full h-full bg-transparent'
            src={"/blur.png"}
        />
        <div className='flex relative flex-1 items-end py-6 w-full text-white md:py-12 lg:py-18 z-1'>
            <div className="flex gap-4 items-end pl-4 md:gap-10 lg:gap-20 md:pl-12 lg:pl-20">
                <div className="mb-24 max-w-[330px] shrink-0">
                <div className="flex items-center gap-0.5 rounded-full py-2.5 pr-3 border border-white w-fit">
                    <Dot />
                    <span>Our Sevices</span>
                </div>
                <h2 className="mt-12 text-3xl font-bold">
                    {item?.title}
                </h2>
                <p className="mt-5 mb-28 text-lg font-medium">
                    {item?.description}
                </p>
                <div className="flex gap-2 items-center">
                    <span className="flex justify-center items-center p-1.5 rounded-full bg-white">
                    <MoveLeft onClick={() => prev?.()} size={11} color="#000" className="text-xs" />
                    </span>
                    <span className="flex justify-center items-center p-1.5 rounded-full bg-white">
                    <MoveRight onClick={() => next?.()} size={11} color="#000" className="text-xs" />
                    </span>
                </div>
                </div>
                <div className="flex overflow-auto flex-1 gap-7 pr-20 no-scrollbar">
                {
                    services.map((item, i) => (
                    <div 
                        onClick={() => goTo?.(i)}
                        key={i} className="flex relative flex-col justify-end w-[188px] h-[237px] rounded-lg overflow-hidden shrink-0 cursor-pointer"
                    >
                        <Image
                        width="320"
                        height="240"
                        alt="Blur"
                        className='object-cover absolute top-0 left-0 z-0 w-full h-full bg-transparent rounded-lg'
                        src={item.image}
                        />
                        <div className="backdrop-blur-xs z-1">
                            <span className="block px-3 py-8 text-lg font-semibold text-whit">{item.slug}</span>
                        </div>
                    </div>
                    ))
                }
                </div>
            </div>
        </div>
    </>
  )
}