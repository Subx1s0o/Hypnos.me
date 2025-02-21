import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const isAuthenticated = cookies().get('isAuthenticated')?.value

  if (isAuthenticated) {
    if (
      url.pathname === '/sign-in' ||
      url.pathname === '/sign-up' ||
      url.pathname === '/reset-password'
    ) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  } else {
    if (url.pathname === '/profile') {
      return NextResponse.redirect(new URL('/sign-in', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/sign-in', '/sign-up', '/reset-password', '/profile/:path*']
}
