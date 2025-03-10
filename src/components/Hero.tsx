import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState<string | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleError = () => {
      const error = video.error;
      console.error('Video error:', error?.message || 'Unknown error');
      setVideoError(`Failed to load video: ${error?.message || 'Unknown error'}`);
    };

    const handleCanPlay = async () => {
      try {
        video.loop = true;
        video.muted = true;
        await video.play();
        setVideoError(null);
      } catch (error) {
        console.error('Video playback failed:', error);
        setVideoError('Failed to play video');
      }
    };

    // Add event listeners
    video.addEventListener('error', handleError);
    video.addEventListener('canplay', handleCanPlay);

    // Set initial properties
    video.loop = true;
    video.muted = true;
    video.playsInline = true;

    // Attempt to load and play
    try {
      video.load();
    } catch (error) {
      console.error('Video load failed:', error);
      setVideoError('Failed to load video');
    }

    // Cleanup
    return () => {
      video.removeEventListener('error', handleError);
      video.removeEventListener('canplay', handleCanPlay);
      video.pause();
      video.removeAttribute('src');
      video.load();
    };
  }, []);

  return (
    <div className="relative h-screen pt-20">
      {/* Video Background */}
      <div className="absolute inset-0 top-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-10 backdrop-blur-[2px]" />
        {videoError ? (
          <div className="absolute inset-0 bg-gray-900 flex items-center justify-center text-white">
            <p>{videoError}</p>
          </div>
        ) : (
          <video 
            ref={videoRef}
            autoPlay 
            loop 
            muted 
            playsInline
            preload="auto"
            className="w-full h-full object-cover scale-105 transform transition-transform duration-1000"
          >
            <source src="/videos/video-startscreen-new-2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      {/* Centered Content */}
      <div className="relative z-20 h-[calc(100vh-5rem)] flex items-center justify-center">
        <div className="px-8 md:px-16 py-12 text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-8 tracking-wider">
            TIMELESS<br />ELEGANCE
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 font-light tracking-wide">
            The destination to mix, match & perfect your stack
          </p>
          <Link 
            to="/collections/all" 
            className="inline-block px-12 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 tracking-widest text-lg uppercase hover:scale-105"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;