'use client'

import { useEffect } from 'react'

const TrackingHandler = () => {
  useEffect(() => {
    const setTrackingCookies = async () => {
      // Check if we're in the browser
      if (typeof window === 'undefined') return
      
      // Get URL parameters
      const urlParams = new URLSearchParams(window.location.search)
      const hasTrackingParams = urlParams.has('utm_source') || 
                               urlParams.has('utm_id') || 
                               urlParams.has('utm_s1') ||
                               urlParams.has('subid') ||
                               urlParams.has('subid2') ||
                               urlParams.has('c1')
      
      // Only set cookies if tracking parameters are present
      if (hasTrackingParams) {
        try {
          const response = await fetch('/api/set-tracking-cookies?' + urlParams.toString())
          const result = await response.json()
          
          if (result.success) {
            console.log('Tracking cookies set successfully')
            
            // Clean the URL by removing tracking parameters
            const cleanUrl = window.location.origin + window.location.pathname
            window.history.replaceState({}, document.title, cleanUrl)
            console.log('URL cleaned successfully')
          }
        } catch (error) {
          console.error('Failed to set tracking cookies:', error)
        }
      }
    }

    setTrackingCookies()
  }, [])

  return null // This component doesn't render anything
}

export default TrackingHandler
