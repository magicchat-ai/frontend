// MiddleWare to handle requests to and fro client and server
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const config = {
    matcher: '/api/:path*',
}