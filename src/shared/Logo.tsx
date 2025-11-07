import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

interface LogoProps {
  className?: string
}

const Logo: React.FC<LogoProps> = ({ className = 'h-8 sm:h-10' }) => {
  return (
    <Link href="/" className={`inline-block focus:ring-0 focus:outline-hidden ${className}`}>
      <Image
        src="/logo-canadaimoveis.png"
        alt="Canadá Imóveis"
        width={200}
        height={92}
        className="h-full w-auto object-contain"
        priority
      />
    </Link>
  )
}

export default Logo
