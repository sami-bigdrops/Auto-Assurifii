import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {

    const footerLinks = [
        {
            name: 'Terms of use',
            link: '/terms-of-use'
        },
        {
            name: 'Privacy Policy',
            link: '/privacy-policy'
        },
        {
            name: 'Contact',
            link: '/contact'
        },
    ]
  return (
    <footer className='w-full bg-white py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Top Section - Logo and Disclaimer */}
        <div className='mb-8'>
          <div className='flex items-center mb-4'>
            <Image
              src='/Logo.svg'
              alt='Assurifii Logo'
              width={120}
              height={30}
              className='h-6 w-auto'
            />
          </div>
          <p className='text-md text-gray-700 max-w-3xl leading-relaxed'>
            For quality control purposes, your activity on this site may be monitored or recorded by Assurifii or its service providers.
          </p>
        </div>

        {/* Bottom Section - Links and Copyright */}
        <div className='text-center'>
          <div className='text-md text-gray-700 mb-4'>
            {footerLinks.map((link) => (
              <Link href={link.link} className='hover:text-gray-900 transition-colors mx-2' key={link.name}>{link.name}</Link>
            ))}
          </div>
          <p className='text-md text-gray-600'>
            Copyright &copy; {new Date().getFullYear()} Assurifii. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer