import React from 'react'
import Logo from '@/assets/logo.svg'
import Image from 'next/image'
import { Button } from './ui/button'

const Header = () => {
  return (
    <header className='flex gap-3 justify-between items-center py-5 w-full section'>
        <Image
          className="w-36 h-9 dark:invert md:w-42 md:h-11"
          src={Logo}
          alt="Logo"
          width={142}
          height={34}
          priority
        />
        <a href="#footer">
          <Button className='rounded-none'>
              Send us a message
          </Button>
        </a>
    </header>
  )
}

export default Header