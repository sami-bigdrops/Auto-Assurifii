import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    
    // Extract tracking parameters
    const utmSource = searchParams.get('utm_source')
    const utmId = searchParams.get('utm_id')
    const utmS1 = searchParams.get('utm_s1')
    const subid = searchParams.get('subid')
    const subid2 = searchParams.get('subid2')
    const c1 = searchParams.get('c1')
    
    // Create response
    const response = NextResponse.json({ 
      success: true, 
      message: 'Tracking cookies set successfully' 
    })
    
    // Set cookies for tracking parameters
    if (utmSource) {
      response.cookies.set('utm_source', utmSource, {
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 30 * 24 * 60 * 60 // 30 days
      })
    }
    
    if (utmId) {
      response.cookies.set('utm_id', utmId, {
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 30 * 24 * 60 * 60 // 30 days
      })
    }
    
    if (utmS1) {
      response.cookies.set('utm_s1', utmS1, {
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 30 * 24 * 60 * 60 // 30 days
      })
    }
    
    if (subid) {
      response.cookies.set('affiliate_id', subid, {
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 30 * 24 * 60 * 60 // 30 days
      })
    }
    
    if (subid2) {
      response.cookies.set('transaction_id', subid2, {
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 30 * 24 * 60 * 60 // 30 days
      })
    }
    
    if (c1) {
      response.cookies.set('sub1', c1, {
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 30 * 24 * 60 * 60 // 30 days
      })
    }
    
    return response
  } catch {
    return NextResponse.json(
      { success: false, error: 'Failed to set tracking cookies' },
      { status: 500 }
    )
  }
}
