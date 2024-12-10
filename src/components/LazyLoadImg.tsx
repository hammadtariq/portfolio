import { useEffect, useState, useRef } from "react";

export enum ImageLoading {
  Lazy = "lazy",
  Eager = "eager",
}

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
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <img
      ref={imgRef}
      src={isVisible ? src : ""}
      alt={alt}
      className={classNames}
      loading={load}
    />
  );
}

export default LazyLoadImg;
