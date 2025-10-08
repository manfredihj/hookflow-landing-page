'use client';

import { useState } from 'react';

interface VSLProps {
  videoUrl: string;
  title?: string;
}

export function VSL({ videoUrl, title }: VSLProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Extraer el ID del video de YouTube
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getYouTubeId(videoUrl);

  if (!videoId) {
    return null;
  }

  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-dark mb-8">
            {title}
          </h2>
        )}
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          {!isLoaded ? (
            // Facade: thumbnail + play button
            <button
              onClick={() => setIsLoaded(true)}
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl overflow-hidden group cursor-pointer"
              aria-label="Reproducir video"
            >
              <img
                src={thumbnailUrl}
                alt="Video thumbnail"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </button>
          ) : (
            // Iframe real con parámetros optimizados
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
              title="Video Sales Letter"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </section>
  );
}
