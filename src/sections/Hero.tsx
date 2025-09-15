import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <div className='w-full py-20 min-h-content sm:min-h-[800px] xl:min-h-[400px]  bg-gradient-to-b from-[#8EC4F6] to-[#FFF] flex flex-col relative'>
      {/* Background Illustration */}
      <div className='absolute right-0 top-3/4 lg:top-1/2 sm:top-1/2 transform lg:-translate-y-1/2 z-0'>
        <Image
          src='/landing-illustration.svg'
          alt='Modern city skyline with eco-friendly buildings'
          width={800}
          height={600}
          className='h-auto max-h-[500px] sm:max-h-[300px] xl:max-h-[500px]'
          priority
        />
      </div>

      {/* Main Content Section */}
      <div className='w-full flex-1 flex items-start sm:items-start lg:items-center justify-center lg:justify-start px-8 sm:px-24 lg:px-32 py-12 relative z-10'>
        <div className='w-full'>
          {/* Content */}
          <div className='max-w-2xl space-y-8 mx-auto lg:mx-0'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1E3A8A] leading-tight text-center lg:text-left'>
              Let&apos;s drop your rate in Mumbai today!
            </h1>
            
            <div className='bg-[#1E3A8A] rounded-xl p-6 sm:p-8 max-w-lg mx-auto lg:mx-0 shadow-2xl'>
              <p className='text-white text-lg sm:text-xl font-semibold mb-6 text-center lg:text-left'>
                What is your ZIP Code?
              </p>
              <div className='relative'>
                <input
                  type='text'
                  placeholder='Enter your ZIP code'
                  defaultValue='10001'
                  className='w-full px-4 py-4 pr-36 text-gray-900 text-lg rounded-lg border-2 border-transparent bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-200 h-14'
                />
                <button className='absolute right-1 top-1 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold transition-all duration-200 flex items-center gap-2 text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:scale-105 h-12'>
                  Continue <ArrowRight className='w-4 h-4' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero