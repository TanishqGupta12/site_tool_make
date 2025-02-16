import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

function getDomain(req) {
  
    return host;
  }
 
// This function can be marked `async` if using `await` inside
export  async function middleware(request: NextRequest) {
    const response = await fetch('/api/getDomain');
    getDomain()
//   return NextResponse.redirect(new URL('/home', request.url))
}
 
// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }