'use client'
import { Dot, Key, MoveLeft, MoveRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { AnimatePresence, motion } from "motion/react"

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
    const timer = React.useRef<NodeJS.Timeout>(null)
    const [reset, setReset] = React.useState(false)

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
        setReset(prev => !prev)
    }
    
    React.useEffect(() => {
        if (timer.current) {
            clearInterval(timer.current)
        }
        timer.current = setInterval(() => {
            setCurr((curr) => {
                const next = curr + 1
                if (next > services.length - 1) {
                    return 0
                } else if (next < 0) {
                    return services.length - 1
                } else {
                    return next
                }
            })
        }, 6000)
        return () => {
            if (timer.current) {
                clearInterval(timer.current)
            }
        }
    }, [reset])

    return (
        <section className='lg:min-h-[calc(100vh)] relative flex'>
            {
                services?.map((item, i) => (  
                    <Service
                        index={i}
                        current={curr}
                        key={i}
                        item={item}
                        goTo={(index) => handleClick(index)}
                        next={() => handleClick(curr+1)}
                        prev={() => handleClick(curr-1)}
                    />
                )
            )}
        </section>
    )
}

export default Services

const Service = ({
    item,
    goTo,
    next,
    prev,
    index,
    current,
  }: {
    index: number;
    current: number;
    item: {
      title: string;
      description: string;
      image: string;
      slug: string;
    };
    goTo?: (index: number) => void;
    next?: () => void;
    prev?: () => void;
  }) => {
    return (
      <AnimatePresence mode="wait">
        {current === index && (
          <motion.div
            key={item.slug} // ✅ unique key for each slide
            className="flex absolute inset-0 flex-col"
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
            {/* Content */}
            <motion.div
              key={`${item.slug}-content`}
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.3 }}
              transition={{ duration: 1 }}
              className="flex relative z-10 flex-1 items-end py-6 w-full text-white md:py-12 lg:py-18"
            >
              <div className="flex gap-4 items-end pl-4 md:gap-10 lg:gap-20 md:pl-12 lg:pl-20">
                <div className="mb-24 max-w-[380px] shrink-0">
                  <div className="flex items-center gap-0.5 rounded-full py-2.5 pr-3 border border-white w-fit">
                    <Dot />
                    <span>Our Services</span>
                  </div>
                  <motion.h2 
                    initial={{ opacity: 0.3, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0.3, y: 4 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="mt-12 text-3xl font-bold"
                  >
                        {item.title}
                    </motion.h2>
                  <p className="mt-5 mb-28 text-lg font-medium min-h-40">
                    {item.description}
                  </p>
                  <div className="flex gap-2 items-center">
                    <motion.span 
                        whileTap={{ scale: 1.2 }}
                        whileHover={{ scale: 1.1 }}
                        onClick={() => prev?.()}  className="flex justify-center cursor-pointer items-center p-1.5 rounded-full bg-white">
                      <MoveLeft className='cursor-pointer'size={11} color="#000" />
                    </motion.span>
                    <motion.span 
                        whileTap={{ scale: 1.2 }}
                        whileHover={{ scale: 1.1 }}
                        onClick={() => next?.()}  className="flex justify-center cursor-pointer items-center p-1.5 rounded-full bg-white">
                      <MoveRight className='cursor-pointer' size={11} color="#000" />
                    </motion.span>
                  </div>
                </div>
  
                {/* Thumbnails */}
                <div className="flex overflow-auto flex-1 gap-7 pr-20 no-scrollbar">
                  {services.filter((_, i) => i != current).map((thumb, i) => (
                    <motion.div
                      key={`${thumb.slug}-thumb`}
                      initial={{ opacity: 0.3, y: i * 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0.3, y: i * 4 }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => goTo?.(i)}
                      className="flex relative flex-col justify-end w-[188px] h-[237px] rounded-lg overflow-hidden shrink-0 cursor-pointer"
                    >
                      <Image
                        width="320"
                        height="240"
                        alt={thumb.slug}
                        className="object-cover overflow-hidden absolute top-0 left-0 z-0 w-full h-full bg-transparent rounded-lg"
                        src={thumb.image}
                      />
                      <div className="z-10 backdrop-blur-xs">
                        <span className="block px-3 py-8 text-lg font-semibold">
                          {thumb.slug}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
};
  