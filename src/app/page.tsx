import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Dot, MoveLeft, MoveRight } from "lucide-react";
import Footer from "@/components/Footer";
import Trust from "./_components/Trust";
import Services from "./_components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main className="">
        <Hero />
        <Trust />
        <Services />
        <section className="section leading-tight tracking-[-4%] text-black py-20">
          <div className="mx-auto">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-0.5 rounded-full py-2.5 pr-3 border border-[#CDCDCD] w-fit mb-2.5">
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
            <p className="font-bold text-[#444444] text-5xl mt-24 max-w-[1278px] mx-auto leading-tight tracking-[-4%]">
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
                <div className='flex flex-col gap-14 max-w-[680px] relative section z-1  py-6 md:py-14 lg:py-24'>
                    <h3 className='text-5xl font-semibold leading-tight tracking-[-4%]'>Building tomorrow&apos;s energy infrastructure, today</h3>
                    <Button className='px-10 py-3 font-semibold text-black bg-white rounded-none w-fit'>
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
