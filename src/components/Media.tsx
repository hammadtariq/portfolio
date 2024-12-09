import { useCallback, useEffect, useRef, useState } from "react";

function Media() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Handle the click event to open the video in a new tab
  const handleVideoClick = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    window.open("/intro.mp4", "_blank");
  }, []);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVideoLoaded(true); // Lazy-load video when it enters the viewport
          observer.disconnect(); // Disconnect the observer once the video is loaded
        }
      },
      { threshold: 0.5 }
    ); // Trigger when 50% of the video is in view

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    // Cleanup observer on component unmount
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
        <img
          src="/profile-dp.webp" // Replace with your profile picture path
          alt="Profile" // Accessible alt text for the image
          loading="lazy" // Lazy-load image
          className="w-full h-full rounded-full object-cover border-4 border-blue-600 group-hover:opacity-0 transition-opacity"
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
          {isVideoLoaded && <source src="/intro-compressed.mp4" type="video/mp4" />}
        </video>
        {/* Play Icon Overlay */}
        <a
          href="/intro.mp4"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleVideoClick} // Stop video and open it in a new tab
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
        </a>
      </div>
    </div>
  );
}
export default Media;
