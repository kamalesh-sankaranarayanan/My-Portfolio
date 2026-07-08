import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);

  useEffect(() => {
    const canUseCustomCursor =
      window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!canUseCustomCursor) return;

    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const updateTargetState = (e: MouseEvent) => {
      const target = e.target as Element | null;
      setIsInteractive(Boolean(target?.closest('a, button, input, textarea, select, [role="button"]')));
    };

    const hideCursor = () => setIsVisible(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', updateTargetState);
    window.addEventListener('mouseout', updateTargetState);
    window.addEventListener('mouseleave', hideCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', updateTargetState);
      window.removeEventListener('mouseout', updateTargetState);
      window.removeEventListener('mouseleave', hideCursor);
    };
  }, []);

  return (
    <>
      <div
        className={`cursor-dot ${isVisible ? 'is-visible' : ''} ${isInteractive ? 'is-interactive' : ''}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />

      <div
        className={`cursor-ring ${isVisible ? 'is-visible' : ''} ${isInteractive ? 'is-interactive' : ''}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
    </>
  );
}
