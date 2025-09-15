'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  const [zipCode, setZipCode] = useState('')
  const [cityName, setCityName] = useState('')
  const [isLoadingLocation, setIsLoadingLocation] = useState(true)

  // Function to fetch user location using server-side IP detection (same as LeadProsper)
  const fetchUserLocation = async () => {
    try {
      // Use our API route that uses the same IP detection method as LeadProsper
      const response = await fetch('/api/get-location')
      
      if (!response.ok) {
        throw new Error(`API returned ${response.status}: ${response.statusText}`)
      }
      
      const data = await response.json()
      
      if (data.city && data.zipCode) {
        setCityName(data.city)
        setZipCode(data.zipCode)
      } else {
        // Keep empty if location not available
        setCityName('')
        setZipCode('')
      }
    } catch {
      // Keep empty on error
      setCityName('')
      setZipCode('')
    } finally {
      setIsLoadingLocation(false)
    }
  }

  // Fetch location on component mount
  useEffect(() => {
    fetchUserLocation()
  }, [])

  // Function to get cookie value
  const getCookie = (name: string): string | null => {
    if (typeof document === 'undefined') return null
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) return parts.pop()?.split(';').shift() || null
    return null
  }

  // Function to handle redirect
  const handleContinue = () => {
    // Get parameters from cookies
    const affiliateId = getCookie('affiliate_id') || ''
    const transactionId = getCookie('transaction_id') || ''
    const sub1 = getCookie('sub1') || ''

    // Build the redirect URL
    const baseUrl = 'https://quote.assurifii.com'
    const params = new URLSearchParams({
      zip_code: zipCode,
      referrer: 'auto.assurifii.com',
      tid: '3108',
      subid: affiliateId,
      subid2: transactionId,
      c1: sub1
    })

    const redirectUrl = `${baseUrl}/form?${params.toString()}`
    
    // Redirect to the quote page
    window.location.href = redirectUrl
  }

  // Handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleContinue()
    }
  }

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
              {isLoadingLocation ? (
                'Let\'s drop your rate today!'
              ) : cityName ? (
                `Let's drop your rate in ${cityName} today!`
              ) : (
                'Let\'s drop your rate today!'
              )}
            </h1>
            
            <div className='bg-[#1E3A8A] rounded-xl p-6 sm:p-8 max-w-lg mx-auto lg:mx-0 shadow-2xl'>
              <p className='text-white text-lg sm:text-xl font-semibold mb-6 text-center lg:text-left'>
                What is your ZIP Code?
              </p>
              <div className='relative'>
                <input
                  type='text'
                  placeholder={isLoadingLocation ? 'Detecting your location...' : 'Enter your ZIP code'}
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={isLoadingLocation}
                  className={`w-full px-4 py-4 pr-36 text-gray-900 text-lg rounded-lg border-2 border-transparent bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-200 h-14 ${
                    isLoadingLocation ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                />
                <button 
                  onClick={handleContinue}
                  disabled={isLoadingLocation}
                  className={`absolute right-1 top-1 px-6 py-3 rounded-md font-semibold transition-all duration-200 flex items-center gap-2 text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:scale-105 h-12 ${
                    isLoadingLocation 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-orange-500 hover:bg-orange-600'
                  }`}
                >
                  {isLoadingLocation ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Loading...
                    </>
                  ) : (
                    <>
                      Continue <ArrowRight className='w-4 h-4' />
                    </>
                  )}
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