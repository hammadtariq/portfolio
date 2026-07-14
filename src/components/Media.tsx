import { Play, X } from "lucide-react";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { ImageLoading } from "../constants/image";
import LazyLoadImg from "./LazyLoadImg";

function Media() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Play preview video on hover
  const playVideo = useCallback(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  // Pause preview video on hover leave
  const pauseVideo = useCallback(() => {
    videoRef.current?.pause();
  }, []);

  const openPopup = useCallback(() => {
    setIsPopupOpen(true);
  }, []);

  // Ask the native dialog to close; the "close" event syncs React state
  // and restores focus to the trigger button automatically.
  const closePopup = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  // Lazy-load the preview video once its avatar scrolls into view
  useEffect(() => {
    const videoElement = videoRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (videoElement) observer.observe(videoElement);

    return () => {
      if (videoElement) observer.disconnect();
    };
  }, []);

  // Open the dialog modally (native focus trap + Escape-to-close) as soon
  // as it mounts, and keep React state in sync when it closes.
  useLayoutEffect(() => {
    const dialog = dialogRef.current;
    if (!isPopupOpen || !dialog) return;

    dialog.showModal();

    const onNativeClose = () => setIsPopupOpen(false);
    dialog.addEventListener("close", onNativeClose);
    return () => dialog.removeEventListener("close", onNativeClose);
  }, [isPopupOpen]);

  return (
    <>
      <div
        className="group relative h-16 w-16 flex-none rounded-full border-4 border-blue-600 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-48 lg:w-48"
        onMouseEnter={playVideo}
        onMouseLeave={pauseVideo}
      >
        <LazyLoadImg
          src="/profile-dp.webp"
          alt="Profile"
          classNames="w-full h-full rounded-full object-cover transition-opacity duration-300 group-hover:opacity-0"
          load={ImageLoading.Eager}
        />
        {/* Render the video element only after it's in view */}
        <video
          ref={videoRef}
          aria-hidden="true"
          preload="metadata"
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full rounded-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          {isVideoLoaded && (
            <source src="/intro-compressed.mp4" type="video/mp4" />
          )}
        </video>
        <button
          type="button"
          onClick={openPopup}
          aria-haspopup="dialog"
          aria-label="Play intro video"
          className="absolute inset-0 flex items-center justify-center rounded-full opacity-100 transition-opacity duration-300 group-hover:opacity-0 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <span className="hero-video-trigger flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-black/45 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-105 md:h-10 md:w-10">
            <Play size={16} className="translate-x-[1px] fill-current" />
          </span>
        </button>
      </div>

      {isPopupOpen && (
        <dialog
          ref={dialogRef}
          aria-label="Hammad Tariq's intro video"
          className="hero-video-modal"
          onClick={(event) => {
            if (event.target === dialogRef.current) closePopup();
          }}
        >
          <button
            type="button"
            onClick={closePopup}
            aria-label="Close video"
            className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-slate-950/80 text-slate-300 backdrop-blur transition-colors duration-200 hover:bg-white/15 hover:text-white"
          >
            <X size={18} />
          </button>
          <video controls autoPlay playsInline src="/intro.mp4">
            Your browser does not support the video tag.
          </video>
        </dialog>
      )}
    </>
  );
}
export default Media;
