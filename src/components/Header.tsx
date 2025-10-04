import React from 'react'
import Logo from '@/assets/logo.svg'
import Image from 'next/image'
import { Button } from './ui/button'

const Header = () => {
  return (
    <header className='flex gap-3 justify-between items-center py-5 w-full section'>
        <Image
          className="dark:invert"
          src={Logo}
          alt="Logo"
          width={142}
          height={34}
          priority
        />
        <Button>
          Send us a message
        </Button>
    </header>
  )
}

export default Header