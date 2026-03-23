const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000/api';

/**
 * Search YouTube using the Laravel Backend
 */
export const searchVideos = async (query) => {
  const response = await fetch(`${API_BASE}/search?q=${encodeURIComponent(query)}`);
  return await response.json();
};

/**
 * Get download links for any social media URL (YouTube, TikTok, etc.)
 */
export const getDownloadInfo = async (videoUrl) => {
  const response = await fetch(`${API_BASE}/extract`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url: videoUrl }),
  });
  return await response.json();
};
