import { NextResponse } from "next/server";
import type { NextRequest } from 'next/server'


export function middleware(request: NextRequest) {

    //areas we have to checkout
    const path = request.nextUrl.pathname 
    const isPublicPath = path === '/login' || path === '/signup'
    const token = request.cookies.get('token')?.value || ''

    //if they are here, we redirect now
    if (isPublicPath && token) {
        return NextResponse.redirect(new URL('/', request.nextUrl))
    }

    //
    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }

}

export const config = {
    matcher: [
        '/',
        '/profile',
        '/login',
        '/signup'
    ]
}