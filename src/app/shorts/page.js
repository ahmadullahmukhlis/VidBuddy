"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { searchVideos } from "@/app/api/api";
import Navbar from "@/components/sections/Navbar";
import TopAlertBar from "@/components/sections/TopAlertBar";
import Footer from "@/components/sections/Footer";

export default function ShortsPage() {
  const [query, setQuery] = useState("shorts");
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const loadShorts = useCallback(async (searchTerm) => {
    setIsLoading(true);
    setError("");
    try {
      const data = await searchVideos(searchTerm);
      setVideos(data || []);
    } catch (err) {
      setError(err?.message || "Failed to load shorts");
      setVideos([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadShorts(query);
  }, [loadShorts, query]);

  return (
    <main>
      <TopAlertBar />
      <Navbar />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Shorts</h1>
              <p className="text-gray-600 mt-2">Quick videos, easy downloads.</p>
            </div>

            <div
              className="bg-white p-2 rounded-2xl shadow-xl flex flex-col sm:flex-row max-w-3xl primary-border"
              style={{ border: "2px solid #FF6B00" }}
            >
              <input
                type="text"
                placeholder="Search shorts..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    loadShorts(query);
                  }
                }}
                className="flex-1 px-4 py-4 text-gray-800 outline-none rounded-xl sm:rounded-none sm:rounded-l-xl"
              />
              <button
                type="button"
                onClick={() => loadShorts(query)}
                className="px-8 py-4 text-white font-semibold rounded-xl sm:rounded-none sm:rounded-r-xl transition hover:opacity-90"
                style={{ background: "#FF6B00" }}
              >
                Search
              </button>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">Showing: {query}</p>
              {isLoading ? <p className="text-sm text-gray-500">Loading...</p> : null}
            </div>

            {error ? <p className="text-sm text-red-600">{error}</p> : null}

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {videos.map((video) => (
                <div
                  key={video.id || video.url}
                  className="bg-white rounded-2xl shadow-lg border"
                  style={{ borderColor: "#FFE4D6" }}
                >
                  {video.thumbnail ? (
                    <img
                      src={video.thumbnail}
                      alt={video.title || "Video"}
                      className="w-full h-48 object-cover rounded-t-2xl"
                    />
                  ) : null}
                  <div className="p-4">
                    <p className="font-semibold text-gray-900 line-clamp-2">{video.title}</p>
                    {video.views ? <p className="text-sm text-gray-500 mt-1">{video.views} views</p> : null}
                    <div className="mt-4 flex gap-3">
                      {video.url ? (
                        <Link
                          href={`/download?url=${encodeURIComponent(video.url)}`}
                          className="px-4 py-2 text-white rounded-xl text-sm font-semibold"
                          style={{ background: "#FF6B00" }}
                        >
                          Get Formats
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
