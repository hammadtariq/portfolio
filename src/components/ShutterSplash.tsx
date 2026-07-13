import { useEffect, useState } from "react";

const COMPLETION_FALLBACK_MS = 1350;

export default function ShutterSplash() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isVisible) return;

    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    const previousScrollbarGutter = root.style.scrollbarGutter;
    root.style.scrollbarGutter = "stable";
    root.style.overflow = "hidden";

    const completionFallback = window.setTimeout(() => {
      setIsVisible(false);
    }, COMPLETION_FALLBACK_MS);

    return () => {
      window.clearTimeout(completionFallback);
      root.style.overflow = previousOverflow;
      root.style.scrollbarGutter = previousScrollbarGutter;
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      aria-hidden="true"
      className="shutter-splash"
      data-testid="shutter-splash"
      onAnimationEnd={() => setIsVisible(false)}
    >
      <div
        className="shutter-splash__exposure"
        data-testid="shutter-exposure"
      />
      <div
        className="shutter-splash__panel shutter-splash__panel--left"
        data-testid="shutter-panel"
      />
      <div
        className="shutter-splash__panel shutter-splash__panel--right"
        data-testid="shutter-panel"
      />
    </div>
  );
}
