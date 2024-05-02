import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const token = request.cookies.get('Session')?.value.split(' ')[1]
    
    const response = await fetch('http://localhost:3333/users/verification', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })

    const verify = await response.json()

    if(!token) {
      return NextResponse.redirect(new URL('/', request.url))
    }

    return NextResponse.next()
}
 
export const config = {
  matcher: '/',
}