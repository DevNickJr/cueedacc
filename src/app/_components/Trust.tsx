"use client"
import VerticalCutText from '@/components/VerticalCutText'
import Image from 'next/image'
import React from 'react'

const Trust = () => {

  return (
    <section className="py-20 leading-tight text-black section">
    <div className="max-w-[1200px] mx-auto">
      <div className="flex flex-col gap-6 items-center">
        <h2 className="text-base font-medium text-center md:text-lg">We are trusted by top companies such as this</h2>
        <div className="flex flex-wrap gap-5 justify-center md:gap-7">
          {
            [
              '/company_twig.png',
              '/company_hurl.png',
              '/company_honoura.png',
              '/company_potent.png',
              '/company_petra.png',
            ].map((company, i) => (
              <Image
                key={i}
                src={company}
                width={161}
                height={51}
                alt={company} 
                className='w-[120px] h-[41px] md:w-[161px] md:h-[51px]'
              />
            ))
          }
        </div>
      </div>
      <p className="font-bold text-[#444444] text-3xl md:text-5xl mt-28 leading-tight tracking-[-4%]">
        <VerticalCutText
          splitBy="characters"
          staggerDuration={0.025}
          staggerFrom="first"
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 21,
            delay: 0.5
          }}
            >
               Our mission is to dominate our selected industries and disciplines, maintain a market position ahead of our competitors in these areas, and be the acknowledged Performance Leader in our industry.
          </VerticalCutText>
       
      </p>
    </div>
  </section>
  )
}

export default Trust