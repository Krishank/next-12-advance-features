// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  
  
  if (request.nextUrl.pathname.startsWith('/redirect')) {
    // The URL is same but response is from someother URL other URL
    return NextResponse.redirect(new URL('/csr', request.url))
  }

  if (request.nextUrl.pathname.startsWith('/rewrite')) {
    // The URL is same but response is from someother URL other URL
    return NextResponse.rewrite(new URL('https://github.com/Krishank/next-12-advance-features/blob/main/README.md', request.url))
  }


  // Demo 4 Talk about UUID Cokkies example

  if (request.nextUrl.pathname.startsWith('/slug-example')) {
    // The URL is same but response is from someother URL
    console.log('Inside Middleware cookies')
    const response = NextResponse.next()
    response.cookies.set('uuid', '2837498273984723987')
    return response
  }
  
}


// Insted of conditional statement you can use match like below

// export const config = {
//   matcher: ['/redirect'],
// }

// Demo 2 Pass multiple paths to match See "Matching Paths" below to learn more
// export const config = {
//   matcher: ['/slug-example/ssr', '/slug-example/isr', '/slug-example/:path*'],
// }








