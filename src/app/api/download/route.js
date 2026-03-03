import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const videoUrl = searchParams.get('url');

  if (!videoUrl) return NextResponse.json({ error: 'No URL provided' }, { status: 400 });

  try {
    // 1. Fetch the remote video/file
    const response = await fetch(videoUrl);
    if (!response.ok) throw new Error('Failed to fetch video');

    const fileBlob = await response.blob();

    // 2. Return the file with headers that force a browser download
    return new NextResponse(fileBlob, {
      headers: {
        'Content-Disposition': 'attachment; filename="downloaded-video.mp4"',
        'Content-Type': 'video/mp4',
      },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Download failed' }, { status: 500 });
  }
}
