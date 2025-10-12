'use client'
import { Dot, MoveLeft, MoveRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { AnimatePresence, motion } from "motion/react"

const services = [
      {
        id: 0,
        title: 'Engineering services',
        description: 'Innovative designs that combine efficiency, safety, and sustainability. From feasibility studies to detailed engineering, we deliver precision. Every solution is tailored to meet international standards and local need.',
        image: '/engineer.jpg',
        slug: 'engineering',
    },
    {
      id: 1,
      title: 'Procurement services',
      description: 'Reliable sourcing of equipment, materials, and technology worldwide. We ensure cost-effective, timely, and quality-controlled supply chains. Our procurement process reduces risks and maximizes project value.',
      image: '/procure.jpg',
      slug: 'procurement',
    },
    {
        id: 2,
        title: 'Construction services',
        description: 'Executing complex projects with accuracy, safety, and efficiency. Our teams deliver civil, mechanical, and structural works seamlessly. We turn engineering blueprints into sustainable infrastructure.',
        image: '/construction.png',
        slug: 'construction',
    },
    {
        id: 3,
        title: 'Installation services',
        description: 'Onshore and offshore installation expertise across multiple sectors. We deploy modern equipment and skilled teams for flawless execution. From pipelines to platforms, our installations stand the test of time.',
        image: '/install.jpg',
        slug: 'installation',
    },
    {
        id: 4,
        title: 'Commissioning services',
        description: 'Ensuring every system functions as designed before handover. We conduct rigorous testing, validation, and quality checks. Delivering operational readiness with zero compromise on safety.',
        image: '/commission.jpg',
        slug: 'commissioning',
    },
]

const Services = () => {
    // const [curr, setCurr] = React.useState(0);
    const timer = React.useRef<NodeJS.Timeout>(null)
    const [reset, setReset] = React.useState(false)
    const ref = React.useRef<HTMLDivElement>(null)
    const cardRef = React.useRef<HTMLDivElement>(null) 

    const handleClick = (next: number) => {
      if (ref.current) {
        // ref.current.scrollLeft is the current scroll position
        // ref.current.offsetWidth is the width of the container
        // the cards are 320px on small screens and 480px on large screens

        const cardWidth = ((cardRef.current?.offsetWidth || 320) + 24) * next
        console.log(cardWidth, cardRef.current?.offsetWidth, ref.current.scrollLeft, ref.current.offsetWidth)
        ref.current.scrollTo({
          left: ref.current.scrollLeft + cardWidth,
          behavior: 'smooth',
        });
      }
        // setCurr(() => {
        //     if (next > services.length - 1) {
        //         return 0
        //     } else if (next < 0) {
        //         return services.length - 1
        //     } else {
        //         return next
        //     }
        // })
        // setReset(prev => !prev)
    }

    
    
    // React.useEffect(() => {
    //     if (timer.current) {
    //         clearInterval(timer.current)
    //     }
    //     timer.current = setInterval(() => {
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
    //     }, 7000)
    //     return () => {
    //         if (timer.current) {
    //             clearInterval(timer.current)
    //         }
    //     }
    // }, [reset])

    return (
        <section id='services' className='relative pl-6 md:pl-12 lg:px-20 flex flex-col items-center gap-3.5 overflow-x-clip w-full no-scrollbar'>
            <div className="flex items-center gap-0.5 rounded-full py-2.5 pr-3 border border-[#CDCDCD] w-fit">
              <Dot />
              <span>Our Services</span>
            </div>
            <div ref={ref} className='flex overflow-auto relative gap-6 pr-6 w-full md:gap-9'>
                {
                    services?.map((item, i) => (  
                        <Service
                            ref={cardRef}
                            key={i}
                            item={item}
                            // goTo={(index) => handleClick(index)}
                            // next={() => handleClick(curr+1)}
                            // prev={() => handleClick(curr-1)}
                        />
                    )
                )}
            </div>
            <div className="flex gap-2 items-center">
              <motion.span 
                  whileTap={{ scale: 1.2 }}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => handleClick(-1)} className="flex justify-center cursor-pointer items-center p-1.5 rounded-full bg-[#F5F5F5] h-16 w-16 shrink-0 flex-1">
                <MoveLeft className='cursor-pointer'size={12} color="#FB4808" />
              </motion.span>
              <motion.span 
                  whileTap={{ scale: 1.2 }}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => handleClick(+1)} className="flex justify-center cursor-pointer items-center p-1.5 rounded-full bg-[#F5F5F5] h-16 w-16 shrink-0 flex-1">
                <MoveRight className='cursor-pointer' size={12} color="#FB4808" />
              </motion.span>
            </div>
        </section>
    )
}

export default Services

const Service = ({
    item,
    ref,
  }: {
    // current: number;
    item: {
      id: number;
      title: string;
      description: string;
      image: string;
      slug: string;
    };
    ref: React.RefObject<HTMLDivElement | null>
  }) => {
    return (
      <motion.div
        ref={ref}
        key={item.slug} // ✅ unique key for each slide
        className="flex flex-col flex-1 w-full min-w-80 md:min-w-96 md:w-full max-w-[450px] relative justify-end p-7 pb-20 h-[550px] md:h-[600px] shadow"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      >
        {/* Background image */}
        <motion.img
          key={`${item.slug}-bg`} // ✅ unique key
          src={item.image}
          alt={item.title}
          className="object-cover absolute top-0 left-0 z-0 w-full h-full"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
          // on parent hover
        />
        {/* Blur overlay */}
        <motion.img
          key={`${item.slug}-blur`}
          src="/blur.png"
          alt="Blur"
          className="object-cover absolute top-0 left-0 z-0 w-full h-full bg-transparent"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
        />
        <div className="flex absolute inset-0 flex-col justify-end p-6 z-1 md:p-12 lg:p-18 bg-black/60" />
        {/* Content */}
        <motion.div
          key={`${item.slug}-content`}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
          className="flex relative z-10 flex-col flex-1 justify-end items-center w-full h-full text-white cursor-pointer md:items-end"
        >
          <div className="max-w-[380px] w-full shrink-0">
            <motion.h2 
              key={`${item.slug}-h1`}
              initial={{ opacity: 0.3, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0.3, y: 4 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-3xl font-bold"
            >
                  {item.title}
              </motion.h2>
            <p className="mt-5 text-lg font-medium leading-tight min-h-40 -tracking-tight">
              {item.description}
            </p>
          </div>
        </motion.div>
      </motion.div>
    );
};
  