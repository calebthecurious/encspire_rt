import Image from 'next/image'
import React from 'react'
import { BeakerIcon, ChevronDownIcon, HomeIcon } from '@heroicons/react/solid'
import { StarIcon } from '@heroicons/react/outline'

function Header() {
  return (
    <div className="sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm">
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Image
          objectFit="contain"
          src="https://www.designbolts.com/wp-content/uploads/2019/05/Hug-Logo-creative-logo.jpg"
          layout="fill"
        />
      </div>

      <div className="m-7 flex items-center xl:min-w-[100px]">
        <HomeIcon className="h-5 w-5" />
        <p className="ml-2 hidden flex-1 lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>
    </div>
  )
}

export default Header
