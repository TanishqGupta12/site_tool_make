import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export { default } from 'next-auth/middleware';

export async function middleware(request: any) {
  const token = await getToken({ req: request }); 
  const url = request.nextUrl;
  console.log(token);
  
  if (token && (url.pathname.startsWith('/signup') || url.pathname.startsWith('/login'))) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/signup",
    "/login",
    // "/error", 
    "/verify-request", 
    "/signout",
  ],
};
