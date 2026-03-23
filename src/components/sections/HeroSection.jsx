"use client";

import { useMemo, useState } from "react";
import { buildDownloadUrl, getDownloadInfo } from "@/app/api/api";

export default function HeroSection() {
  const [videoUrl, setVideoUrl] = useState("");
  const [videoInfo, setVideoInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const encodedUrl = useMemo(() => encodeURIComponent(videoUrl.trim()), [videoUrl]);
  const canDownload = encodedUrl.length > 0;

  const handleDownload = async () => {
    if (!canDownload) return;
    setIsLoading(true);
    setError("");
    try {
      const data = await getDownloadInfo(videoUrl);
      setVideoInfo(data);
    } catch (err) {
      setError(err?.message || "Failed to load video info");
      setVideoInfo(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormatDownload = (formatId) => {
    const downloadUrl = buildDownloadUrl(videoUrl, formatId);
    if (!downloadUrl) return;
    window.location.href = downloadUrl;
  };


  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleDownload();
    }
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #FFF1E6 0%, #FFE4D6 100%)" }}
    >
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <span
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{ background: "#FFE4D6", color: "#FF6B00" }}
            >
              <i className="fas fa-check-circle mr-2" style={{ color: "#FF6B00" }}></i>
              Trusted by 50M+ Users Worldwide
            </span>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Download Any Video
              <br />
              With <span style={{ color: "#FF6B00" }}>Lightning Speed</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              The fastest and most reliable video downloader. Support for 1000+ platforms including YouTube,
              Facebook, Instagram, and more.
            </p>

            <div
              className="bg-white p-2 rounded-2xl shadow-xl flex flex-col sm:flex-row max-w-2xl primary-border"
              style={{ border: "2px solid #FF6B00" }}
            >
              <input
                type="text"
               
                placeholder="please click on the download button ..."
                value={videoUrl}
                onChange={(event) => setVideoUrl(event.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 px-4 py-4 text-gray-800 outline-none rounded-xl sm:rounded-none sm:rounded-l-xl"
              />
              <button
                type="button"
                onClick={handleDownload}
                disabled={!canDownload || isLoading}
                className="px-8 py-4 text-white font-semibold rounded-xl sm:rounded-none sm:rounded-r-xl transition hover:opacity-90 disabled:opacity-50"
                style={{ background: "#FF6B00" }}
              >
                {isLoading ? "Loading..." : "Download Now"} <i className="fas fa-download ml-2"></i>
              </button>
            </div>

            {error ? (
              <p className="mt-4 text-sm text-red-600">{error}</p>
            ) : null}

            {videoInfo ? (
              <div className="mt-6 bg-white p-4 rounded-2xl shadow-lg">
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  {videoInfo.thumbnail ? (
                    <img
                      src={videoInfo.thumbnail}
                      alt={videoInfo.title || "Video thumbnail"}
                      className="w-full sm:w-40 rounded-xl object-cover"
                    />
                  ) : null}
                  <div>
                    <p className="text-lg font-semibold text-gray-900">{videoInfo.title}</p>
                    <p className="text-sm text-gray-500">{videoInfo.duration}</p>
                  </div>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {videoInfo.formats?.map((format) => {
                    const isAudioOnly = format.vcodec === "none";
                    const label = `${format.quality} • ${format.ext} • ${format.filesize}`;
                    return (
                      <button
                        key={format.format_id}
                        type="button"
                        onClick={() => handleFormatDownload(format.format_id)}
                        className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl border hover:shadow transition text-left"
                        style={{ borderColor: "#FFE4D6" }}
                      >
                        <span className="text-sm font-medium text-gray-800">{label}</span>
                        <span className="text-xs text-gray-500">{isAudioOnly ? "Audio" : "Video"}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : null}

            <div className="flex flex-wrap gap-3 mt-6">
           
              <button className="px-4 py-2 bg-white rounded-full text-sm font-medium shadow-sm hover:shadow transition" style={{ color: "#FF6B00" }}>
                <i className="fab fa-youtube mr-1"></i> YouTube
              </button>
              <button className="px-4 py-2 bg-white rounded-full text-sm font-medium shadow-sm hover:shadow transition" style={{ color: "#FF6B00" }}>
                <i className="fab fa-instagram mr-1"></i> Instagram
              </button>
              <button className="px-4 py-2 bg-white rounded-full text-sm font-medium shadow-sm hover:shadow transition" style={{ color: "#FF6B00" }}>
                <i className="fab fa-facebook mr-1"></i> Facebook
              </button>
              <button className="px-4 py-2 bg-white rounded-full text-sm font-medium shadow-sm hover:shadow transition" style={{ color: "#FF6B00" }}>
                <i className="fab fa-tiktok mr-1"></i> TikTok
              </button>
            </div>

            <div className="flex items-center gap-8 mt-8">
              <div>
                <p className="text-3xl font-bold" style={{ color: "#FF6B00" }}>
                  50M+
                </p>
                <p className="text-sm text-gray-500">Downloads</p>
              </div>
              <div>
                <p className="text-3xl font-bold" style={{ color: "#FF6B00" }}>
                  1000+
                </p>
                <p className="text-sm text-gray-500">Sites Supported</p>
              </div>
              <div>
                <p className="text-3xl font-bold" style={{ color: "#FF6B00" }}>
                  4.9★
                </p>
                <p className="text-sm text-gray-500">User Rating</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative floating">
              <img
                src="https://via.placeholder.com/500x600/FF6B00/FFFFFF?text=VidBuddy+App"
                className="rounded-3xl shadow-2xl mx-auto"
                alt="App Preview"
                style={{ border: "4px solid #FF6B00" }}
              />

              <div className="absolute -top-5 -left-5 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl" style={{ background: "#FFE4D6" }}>
                  <i className="fas fa-video text-xl flex items-center justify-center h-full" style={{ color: "#FF6B00" }}></i>
                </div>
                <div>
                  <p className="font-bold text-gray-800">HD Quality</p>
                  <p className="text-sm text-gray-500">4K, 1080p, 720p</p>
                </div>
              </div>

              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl" style={{ background: "#FFE4D6" }}>
                  <i className="fas fa-bolt text-xl flex items-center justify-center h-full" style={{ color: "#FF6B00" }}></i>
                </div>
                <div>
                  <p className="font-bold text-gray-800">Fast Speed</p>
                  <p className="text-sm text-gray-500">Up to 10MB/s</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 100L60 91.7C120 83.3 240 66.7 360 58.3C480 50 600 50 720 54.2C840 58.3 960 66.7 1080 70.8C1200 75 1320 75 1380 75L1440 75V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
