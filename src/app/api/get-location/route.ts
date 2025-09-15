import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // Get client IP address using the same method as LeadProsper
    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown'

    // For local development, try to get real IP from external service
    if (ip === 'unknown' || ip === '127.0.0.1' || ip === '::1') {
      try {
        const ipResponse = await fetch('https://api.ipify.org?format=json')
        const ipData = await ipResponse.json()
        const realIp = ipData.ip
        
        if (realIp && realIp !== '127.0.0.1') {
          // Use the real IP for geolocation
          return await getLocationFromIP(realIp)
        }
      } catch {
        // Continue with local IP
      }
      
      return NextResponse.json({
        city: '',
        zipCode: '',
        state: '',
        country: '',
        ip: ip
      })
    }

    return await getLocationFromIP(ip)
  } catch {
    // Return empty location on error
    return NextResponse.json({
      city: '',
      zipCode: '',
      state: '',
      country: '',
      ip: 'unknown'
    })
  }
}

async function getLocationFromIP(ip: string) {
  // Try multiple free APIs for better reliability
  const apis = [
    `https://ipapi.co/${ip}/json/`,
    `https://ip-api.com/json/${ip}`,
    `https://ipinfo.io/${ip}/json`
  ]

  for (const apiUrl of apis) {
    try {
      const response = await fetch(apiUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; Assurifii/1.0)'
        }
      })
      
      if (!response.ok) {
        continue
      }
      
      const data = await response.json()

      // Handle different API response formats
      let city = ''
      let zipCode = ''
      let state = ''
      let country = ''

      if (apiUrl.includes('ipapi.co')) {
        city = data.city || ''
        zipCode = data.postal || ''
        state = data.region || ''
        country = data.country_name || ''
      } else if (apiUrl.includes('ip-api.com')) {
        city = data.city || ''
        zipCode = data.zip || ''
        state = data.regionName || ''
        country = data.country || ''
      } else if (apiUrl.includes('ipinfo.io')) {
        city = data.city || ''
        zipCode = data.postal || ''
        state = data.region || ''
        country = data.country || ''
      }

      if (city && zipCode) {
        return NextResponse.json({
          city: city,
          zipCode: zipCode,
          state: state,
          country: country,
          ip: ip
        })
      }
    } catch {
      continue
    }
  }

  // If all APIs fail, return empty location
  return NextResponse.json({
    city: '',
    zipCode: '',
    state: '',
    country: '',
    ip: ip
  })
}
