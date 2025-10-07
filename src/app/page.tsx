import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Logo from '@/assets/logo.svg'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Dot } from "lucide-react";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="leading-[100%] tracking-[-4%]">
        <Hero />
        <section className="section leading-[100%] tracking-[-4%] text-black py-20">
          <div className="max-w-[1000px] mx-auto">
            <div className="flex flex-col gap-6 items-center">
              <h2 className="text-lg font-medium text-center">We are trusted by top companies such as this</h2>
              <div className="flex flex-wrap gap-6">
                {
                  [...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      src={Logo}
                      width={161}
                      height={50}
                      alt="Logo" 
                    />
                  ))
                }
              </div>
            </div>
            <p className="font-bold text-[#444444] text-5xl mt-32">
            Our mission is to dominate our selected industries and disciplines, maintain a market position ahead of our competitors in these areas, and be the acknowledged Performance Leader in our industry.
            </p>
          </div>
        </section>
        <section className='relative'>
          <Image 
              width="320"
              height="240"
              alt="Construction"
              className='object-cover absolute top-0 left-0 z-0 w-full h-full'
              src={"/constructions.png"}
          />
          <Image 
              width="320"
              height="240"
              alt="Blur"
              className='object-cover absolute top-0 left-0 z-0 w-full h-full bg-transparent'
              src={"/blur.png"}
          />
          <div className='relative py-6 w-full text-white md:py-14 lg:py-24 z-1 lg:min-h-[calc(100vh-72px)] flex items-center'>
            <div className="flex gap-4 items-end pl-4 md:gap-10 lg:gap-20 md:pl-12 lg:pl-20">
              <div className="mb-24 max-w-[330px] shrink-0">
                <div className="flex items-center gap-0.5 rounded-full py-2.5 pr-2 border border-white w-fit">
                  <Dot />
                  <span>Our Sevices</span>
                </div>
                <h2 className="mt-12 text-3xl font-bold">
                  construction services
                </h2>
                <p className="mt-5 mb-28 text-lg font-medium">
                Executing complex projects with accuracy, safety, and efficiency. Our teams deliver civil, mechanical, and structural works seamlessly. We turn engineering blueprints into sustainable infrastructure.
                </p>
                <div className="flex gap-2 items-center">
                  <span className="flex justify-center items-center p-1.5 rounded-full bg-white">
                    <ChevronRight size={11} color="#000" className="text-xs" />
                  </span>
                  <span className="flex justify-center items-center p-1.5 rounded-full bg-white">
                    <ChevronLeft size={11} color="#000" className="text-xs" />
                  </span>
                </div>
              </div>
              <div className="flex overflow-auto flex-1 gap-7">
                {
                  Array(9).fill(0).map((_, i) => (
                    <div key={i} className="flex relative flex-col justify-end w-[188px] h-[237px] rounded-lg overflow-hidden shrink-0">
                      <Image 
                        width="320"
                        height="240"
                        alt="Blur"
                        className='object-cover absolute top-0 left-0 z-0 w-full h-full bg-transparent rounded-lg'
                        src={"/construction.png"}
                      />
                      <span className="px-3 py-8 text-lg font-semibold text-white to-black bg-linear-to-b from-[#000000] z-1">Procurement</span>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </section>
        <section className="section leading-[100%] tracking-[-4%] text-black py-20">
          <div className="mx-auto">
            <div className="flex flex-col gap-6 items-center">
              <div className="flex items-center gap-0.5 rounded-full py-2.5 pr-2 border border-white w-fit">
                <Dot />
                <span>Our core values</span>
              </div>
              <div className="flex w-full max-w-[1278px] border border-white relative">
                {
                  [
                    {
                      name: 'Q',
                      meaning: 'Quality',
                    },
                    {
                      name: 'R',
                      meaning: 'Relationship',
                    },
                    {
                      name: 'I',
                      meaning: 'Integrity',
                    },
                    {
                      name: 'C',
                      meaning: 'Commitment',
                    },
                    {
                      name: 'E',
                      meaning: 'Ethics',
                    },
                    {
                      name: 'S',
                      meaning: 'Safety',
                    },
                  ].map((item, i) => (
                    <div key={i} className={`flex flex-col gap-4 items-center md:flex-1 px-6 py-4 leading-[96px] tracking-[-4%] flex-1 border-y border-r border-[#CDCDCD] ${i == 0 ? "border-l" : ""}`}>
                      <span className='text-[96px] font-bold'>{item.name}</span>                
                      <span className='text-lg font-medium text-[#FB4808]'>{item.meaning}</span>                
                    </div>
                  ))
                }
              
              </div>
            </div>
            <p className="font-bold text-[#444444] text-5xl mt-24 max-w-[970px] mx-auto">
            Our vision is to look into the future to maintain a market position ahead of our rivals in the disciplines and sectors we have chosen.
            </p>
            <div className="relative mt-20 rounded-2xl bg-[url(/procurement.jpg)] overflow-hidden bg-cover">
              {/* <Image
                width="320"
                height="240"
                alt="Construction"
                className='object-cover absolute top-0 left-0 z-0 w-full h-full rounded-2xl'
                src={"/procurement.jpg"}
              /> */}
                <div 
                  className='absolute top-0 left-0 w-full max-w-[882px] h-full bg-linear-to-r from-[#FB4808] to-[#FB480800] mix-blend-multiply'
                />
              <div className='relative w-full text-white z-1 lg:min-h-[calc(100vh-72px)] flex items-center'>
                <div className='flex flex-col gap-6 max-w-[550px] relative section z-1  py-6 md:py-14 lg:py-24'>
                    <h3 className='text-5xl font-semibold leading-[100%] tracking-[-4%]'>Building tomorrow&apos;s energy infrastructure, today</h3>
                    <Button className='px-8 font-semibold text-black bg-white rounded-none w-fit'>
                      Partner with us
                    </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
