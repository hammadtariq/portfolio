import { useCallback, useEffect, useRef, useState } from "react";
import { ImageLoading } from "../constants/image";
import LazyLoadImg from "./LazyLoadImg";

function Media() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Play video on hover
  const playVideo = useCallback(() => {
    videoRef.current?.play();
  }, []);

  // Pause video on hover leave
  const pauseVideo = useCallback(() => {
    videoRef.current?.pause();
  }, []);

  // Open video popup on click
  const openPopup = useCallback(() => {
    setIsPopupOpen(true);
  }, []);

  // Close popup on overlay click
  const closePopup = useCallback(() => {
    setIsPopupOpen(false);
  }, []);

  // Handle lazy-loading of the video
  useEffect(() => {
    const videoElement = videoRef.current; // Capture the ref value

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoLoaded(true); // Lazy-load video when in view
          observer.disconnect(); // Cleanup observer after loading
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the video is visible
    );

    if (videoElement) observer.observe(videoElement);

    return () => {
      if (videoElement) observer.disconnect(); // Ensure cleanup uses the same ref
    };
  }, []);

  return (
    <div className="flex justify-center mb-8">
      <div
        className="relative w-40 h-40 md:w-48 md:h-48 group border-4 border-blue-600 rounded-full"
        onMouseEnter={playVideo}
        onMouseLeave={pauseVideo}
      >
        <LazyLoadImg
          src="/profile-dp.webp"
          alt="Profile"
          classNames="w-full h-full rounded-full object-cover group-hover:opacity-0 transition-opacity"
          load={ImageLoading.Eager}
        />
        {/* Render the video element only after it's in view */}
        <video
          ref={videoRef}
          preload="metadata"
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity rounded-full"
          onMouseEnter={playVideo}
          onMouseLeave={pauseVideo}
          aria-label="Intro video"
          title="Click to view full video"
        >
          {isVideoLoaded && (
            <source src="/intro-compressed.mp4" type="video/mp4" />
          )}
        </video>
        {/* Play Icon Overlay */}
        <button
          onClick={openPopup}
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
          onClick={closePopup}
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
