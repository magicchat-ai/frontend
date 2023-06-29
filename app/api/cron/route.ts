import { NextResponse } from 'next/server';

export async function GET() {
    try {
        await fetch("https://magicchat-api.onrender.com/", {
            method: 'GET'
        });
        return NextResponse.json({ ok: true });
    } catch {
        return NextResponse.json({ ok: true });
    }
}