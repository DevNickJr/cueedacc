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
        <section id='services' className='flex relative flex-col gap-10 items-center pl-6 w-full md:pl-12 lg:px-20 overflow-x-clip no-scrollbar'>
            <div className="flex items-center font-semibold gap-0.5 rounded-full py-2.5 pr-3 border border-[#CDCDCD] w-fit">
              <Dot />
              <span>Our Services</span>
            </div>
            <div ref={ref} className='overflow-clip flex overflow-x-auto relative gap-6 pr-6 w-full md:gap-9 min-h-[450px] md:min-h-[500px]'>
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
      <div className='flex flex-col flex-1 w-full h-full min-w-80 md:min-w-96 max-w-[450px]'>
        <motion.div
          ref={ref}
          key={item.slug} // ✅ unique key for each slide
          className="flex flex-col flex-1 w-full min-w-80 md:min-w-96 max-w-[450px] relative justify-end p-7 pb-16 min-h-[450px] md:min-h-[500px] shadow cursor-pointer "
          initial={"initial"}
          animate={"animate"}
          exit={"exit"}
          whileHover={"hover"}
          transition={{ duration: 1 }}
          // on parent hover
          variants={{
            initial: { opacity: 0.3 },
            animate: { opacity: 1 },
            exit: { opacity: 0.3 },
            hover: {
              transition: {
                // after child
                duration: 0.2,
                when: "afterChildren",
              },
            },
          }}
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
            src="/blur2.png"
            alt="Blur"
            className="object-cover absolute top-0 left-0 z-0 w-full h-full bg-transparent"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.3 }}
            transition={{ duration: 1 }}
          />
          {/* <div className="flex absolute inset-0 flex-col justify-end p-6 z-1 md:p-12 lg:p-18 bg-black/60" /> */}
          {/* Content */}
          <div
            key={`${item.slug}-content`}
            className="flex relative z-10 flex-col flex-1 justify-end items-center w-full h-full text-white cursor-pointer md:items-end"
          >
            <div className="max-w-[380px] w-full shrink-0">
              <motion.h2 
                key={`${item.slug}-h1`}
                variants={{
                  initial: { 
                    opacity: 0.3,
                    y: 130,
                  },
                  animate: { 
                    opacity: 1,
                    y: 135,
                  },
                  exit: { opacity: 0.3, y: 4 },
                  hover: {
                    y: 0,
                  },
                }}
                transition={{ duration: 0.3, delay: 0.15 }}
                className="text-2xl font-bold leading-tight -tracking-[0.02em]"
              >
                {item.title}
              </motion.h2>
              <motion.p
                key={`${item.slug}-p`}
                variants={{
                  initial: {
                    y: 400,
                  },
                  hover: {
                    opacity: 1,
                    y: 0,
                  }
                }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mt-3 text-base font-medium leading-tight min-h-24 -tracking-[0.02em]"
              >
                {item.description}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    );
};
  