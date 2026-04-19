import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
    try {
        const { page } = await req.json()

        // Get visitor IP — Vercel puts real IP in this header
        const ip =
            req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
            req.headers.get('x-real-ip') ||
            '0.0.0.0'

        // Skip localhost during local dev
        if (ip === '0.0.0.0' || ip === '::1' || ip === '127.0.0.1') {
            return NextResponse.json({ skipped: true })
        }

        // Lookup IP → org/company via ipapi.co (free, 1000/day, no key needed)
        const geoRes = await fetch(`https://ipapi.co/${ip}/json/`)
        const geo = await geoRes.json()

        const org = geo.org || 'Unknown Company'
        const country = geo.country_name || 'Unknown'

        // Extract clean domain guess from org name
        // org usually looks like "AS12345 Stripe Inc" — clean it up
        const orgClean = org.replace(/^AS\d+\s+/i, '').trim()

        // Build the same message format your n8n workflow already understands
        const slackMessage = {
            text: `New visitor on ${page} — ${orgClean} (${country})`,
        }

        // Post to Slack
        await fetch(process.env.SLACK_WEBHOOK_URL!, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(slackMessage),
        })

        return NextResponse.json({ ok: true })
    } catch (err) {
        console.error('track-visit error:', err)
        return NextResponse.json({ error: 'failed' }, { status: 500 })
    }
}