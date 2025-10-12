import React from 'react'
import Logo from '@/assets/logo.svg'
import Image from 'next/image'
import { Button } from './ui/button'

const Header = () => {
  return (
    <header className='flex gap-3 justify-between items-center py-5 w-full section'>
        <Image
          className="w-28 h-7 dark:invert md:w-36 md:h-8"
          src={Logo}
          alt="Logo"
          width={142}
          height={34}
          priority
        />
        <a href="#footer">
          <Button>
              Send us a message
          </Button>
        </a>
    </header>
  )
}

export default Header