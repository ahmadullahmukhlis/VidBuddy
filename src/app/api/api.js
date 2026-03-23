const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000/api';

const parseJsonResponse = async (response) => {
  const data = await response.json().catch(() => null);
  if (!response.ok) {
    throw new Error(data?.error || 'Request failed');
  }
  return data;
};

export const buildDownloadUrl = (videoUrl, formatId) => {
  const trimmedUrl = videoUrl?.trim();
  if (!trimmedUrl) return null;
  const params = new URLSearchParams({ url: trimmedUrl });
  if (formatId) {
    params.set('format_id', formatId);
  }
  return `${API_BASE}/download?${params.toString()}`;
};

export const triggerDownload = (downloadUrl) => {
  if (!downloadUrl || typeof document === 'undefined') return;
  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  iframe.src = downloadUrl;
  document.body.appendChild(iframe);
  setTimeout(() => {
    iframe.remove();
  }, 10000);
};

const showToast = (message, variant = 'info') => {
  if (typeof document === 'undefined') return;
  const existing = document.getElementById('download-toast');
  if (existing) return;
  const toast = document.createElement('div');
  toast.id = 'download-toast';
  toast.textContent = message;
  toast.style.position = 'fixed';
  toast.style.right = '20px';
  toast.style.bottom = '20px';
  toast.style.background = variant === 'error' ? '#DC2626' : '#FF6B00';
  toast.style.color = '#fff';
  toast.style.padding = '12px 16px';
  toast.style.borderRadius = '12px';
  toast.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
  toast.style.fontWeight = '600';
  toast.style.zIndex = '9999';
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
  }, 1200);
  setTimeout(() => {
    toast.remove();
  }, 1600);
};

export const startDownloadWithToast = (downloadUrl) => {
  if (!downloadUrl) return;
  showToast('Download started');
  triggerDownload(downloadUrl);
  setTimeout(() => {
    showToast('If download did not start, try again', 'error');
  }, 6000);
};

/**
 * Search YouTube using the Laravel Backend
 */
export const searchVideos = async (query) => {
  const response = await fetch(`${API_BASE}/search?q=${encodeURIComponent(query)}`);
  return await parseJsonResponse(response);
};

export const getTrendingVideos = async () => {
  const response = await fetch(`${API_BASE}/trending`);
  return await parseJsonResponse(response);
};

export const getShorts = async (page = 1, perPage = 5) => {
  const params = new URLSearchParams({
    page: String(page),
    per_page: String(perPage),
  });
  const response = await fetch(`${API_BASE}/shorts?${params.toString()}`);
  return await parseJsonResponse(response);
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
  return await parseJsonResponse(response);
};
