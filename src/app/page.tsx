import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Logo from '@/assets/logo.svg'
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
    </>
  );
}
