import { useEffect, useState, useRef } from "react";
import { ImageLoading } from "../constants/image";

interface TechStackProps {
  src: string;
  alt: string;
  classNames: string;
  load?: ImageLoading;
}

function LazyLoadImg({
  src,
  alt,
  classNames,
  load = ImageLoading.Lazy,
}: TechStackProps) {
  const [isVisible, setIsVisible] = useState(false); // For visibility based on IntersectionObserver
  const [isLoading, setIsLoading] = useState(true); // Track image loading state
  const imgRef = useRef<HTMLImageElement>(null);

  // Intersection Observer to detect if the image is in view
  useEffect(() => {
    const currentRef = imgRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className={classNames}>
      {/* Show skeleton if image is still loading */}
      {isLoading && (
        <div className="flex items-center justify-center">
          <div className={`${classNames} rounded bg-gray-200 animate-pulse`} />
        </div>
      )}
      <img
        ref={imgRef}
        src={isVisible ? src : ""}
        alt={alt}
        className={classNames}
        loading={load}
        onLoad={() => setIsLoading(false)} // Trigger on image load
        style={{
          visibility: isLoading ? "hidden" : "visible", // Keep image hidden until it loads
          opacity: isLoading ? 0 : 1, // Fade-in effect after loading
        }}
      />
    </div>
  );
}

export default LazyLoadImg;
