import { useCallback, useEffect, useRef, useState } from "react";
import LazyLoadImg, { ImageLoading } from "./LazyLoadImg";

function Media() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Play the video when hovered
  const handleMouseEnter = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  // Pause the video when mouse leaves
  const handleMouseLeave = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  // Handle video click to open popup
  const handleVideoClick = useCallback(() => {
    setIsPopupOpen(true);
  }, []);

  // Close popup
  const handleClosePopup = useCallback(() => {
    setIsPopupOpen(false);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVideoLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="flex justify-center mb-8">
      <div
        className="relative w-40 h-40 md:w-48 md:h-48 group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <LazyLoadImg
          src="/profile-dp.webp"
          alt="Profile"
          classNames="w-full h-full rounded-full object-cover border-4 border-blue-600 group-hover:opacity-0 transition-opacity"
          load={ImageLoading.Eager}
        />
        {/* Render the video element only after it's in view */}
        <video
          ref={videoRef}
          preload="metadata"
          muted
          loop
          className="absolute inset-0 w-full h-full rounded-full object-cover border-4 border-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          aria-label="Intro video"
          title="Click to view full video"
        >
          {isVideoLoaded && (
            <source src="/intro-compressed.mp4" type="video/mp4" />
          )}
        </video>
        {/* Play Icon Overlay */}
        <button
          onClick={handleVideoClick}
          className="absolute inset-0 flex items-center justify-center rounded-full opacity-100 transition-opacity group-hover:opacity-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="white"
            className="w-10 h-10 rounded-full bg-black bg-opacity-50"
          >
            <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
          </svg>
        </button>
      </div>

      {isPopupOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={handleClosePopup}
        >
          <div
            className="bg-white rounded-lg overflow-hidden w-11/12 md:w-2/3 lg:w-1/2 relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <video
              controls
              autoPlay
              className="w-full"
              src="/intro.mp4"
            ></video>
          </div>
        </div>
      )}
    </div>
  );
}
export default Media;
