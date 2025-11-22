export async function GET() {
  return new Response('google-site-verification: google98d98d1bdb308aa6.html', {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}