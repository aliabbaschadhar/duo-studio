"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    cursor.style.transition = "background-image 0.3s ease";

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener("mousemove", onMouseMove);

    let rafId: number;
    const animateCursor = () => {
      const ease = 0.1;
      cursorX += (mouseX - cursorX) * ease;
      cursorY += (mouseY - cursorY) * ease;
      cursor.style.left = cursorX + 7 + "px";
      cursor.style.top = cursorY + 7 + "px";
      rafId = requestAnimationFrame(animateCursor);
    };
    animateCursor();

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <div className="cursor" ref={cursorRef} />;
}
