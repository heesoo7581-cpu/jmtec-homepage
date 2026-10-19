const site = 'https://jmtec-homepage.vercel.app';
const cookieName = 'jmtec_visit';
const endpoint = 'https://jmtekerp.duckdns.org/public/site-visits';

// Only the dedicated website counter is contacted. ERP login cookies and ERP
// business data are never forwarded to this endpoint.
export async function countVisit(request: Request) {
  const headers: Record<string, string> = {
    'Cache-Control': 'no-store',
    'Content-Type': 'application/json; charset=utf-8',
    'Vary': 'Origin, Cookie',
  };
  const requestUrl = new URL(request.url);
  const expectedOrigin = process.env.NODE_ENV === 'development' ? requestUrl.origin : site;
  if (request.headers.get('origin') !== expectedOrigin || request.headers.get('sec-fetch-site') === 'cross-site') {
    return Response.json({ error: 'Forbidden' }, { status: 403, headers });
  }
  if (/bot|crawler|spider|headless/i.test(request.headers.get('user-agent') || '')) {
    return new Response(null, { status: 204, headers });
  }
  const value = (request.headers.get('cookie') || '').split(';').map(part => part.trim()).find(part => part.startsWith(cookieName + '='))?.slice(cookieName.length + 1);
  const cookie = value && /^[\d]{4}-\d{2}-\d{2}\.[a-f0-9]{32}\.[a-f0-9]{64}$/.test(value) ? value : '';
  try {
    const result = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Origin': site, 'Content-Type': 'application/json' },
      body: JSON.stringify({ cookie }),
      cache: 'no-store',
      signal: AbortSignal.timeout(5000),
    });
    if (!result.ok) throw new Error('Unavailable');
    const data = await result.json();
    if (!Number.isSafeInteger(data.today) || data.today < 0 || !Number.isSafeInteger(data.total) || data.total < data.today || !/^\d{4}-\d{2}-\d{2}$/.test(data.since) || !/^\d{4}-\d{2}-\d{2}\.[a-f0-9]{32}\.[a-f0-9]{64}$/.test(data.cookie) || !Number.isSafeInteger(data.maxAge) || data.maxAge < 1 || data.maxAge > 86400) throw new Error('Invalid response');
    headers['Set-Cookie'] = `${cookieName}=${data.cookie}; Path=/; Max-Age=${data.maxAge}; HttpOnly; SameSite=Lax${requestUrl.protocol === 'https:' ? '; Secure' : ''}`;
    return Response.json({ today: data.today, total: data.total, since: data.since }, { headers });
  } catch {
    // Never substitute invented counts during a server outage.
    return Response.json({ error: 'Unavailable' }, { status: 503, headers });
  }
}
