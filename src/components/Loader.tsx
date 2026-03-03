"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

interface LoaderProps {
  isLoading: boolean;
}

export default function Loader({ isLoading }: LoaderProps) {
  const [displayLoader, setDisplayLoader] = useState(isLoading);

  useEffect(() => {
    if (isLoading) {
      setDisplayLoader(true);
    } else {
      // Fade out loader after loading complete
      const loaderEl = document.querySelector<HTMLDivElement>(".loader-container");
      if (loaderEl) {
        gsap.to(loaderEl, {
          opacity: 0,
          duration: 0.6,
          ease: "power2.inOut",
          onComplete: () => setDisplayLoader(false),
        });
      }
    }
  }, [isLoading]);

  if (!displayLoader) return null;

  return (
    <div className="loader-container">
      <style>{`
        .loader-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #0f0d0d 0%, #1a1818 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          opacity: 1;
        }

        .loader-content {
          text-align: center;
        }

        .loader-logo {
          font-size: 3.5vw;
          font-weight: 700;
          color: #edbfff;
          letter-spacing: 0.1em;
          margin-bottom: 3rem;
          font-family: 'pp-mori-bold', sans-serif;
        }

        .loader-spinner {
          width: 120px;
          height: 120px;
          margin: 0 auto;
          position: relative;
        }

        .loader-ring {
          width: 100%;
          height: 100%;
          border: 3px solid rgba(237, 191, 255, 0.2);
          border-top: 3px solid #edbfff;
          border-right: 3px solid #edbfff;
          border-radius: 50%;
          animation: spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .loader-text {
          margin-top: 2rem;
          font-size: 0.95vw;
          color: #edbfff;
          font-family: 'pp-mori-regular', sans-serif;
          letter-spacing: 0.05em;
          animation: fadeInOut 2s ease-in-out infinite;
        }

        @keyframes fadeInOut {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }

        .loader-dots {
          display: inline-block;
          width: 1.2em;
        }

        .loader-dots span {
          display: inline-block;
          width: 0.3em;
          height: 0.3em;
          border-radius: 50%;
          background: #edbfff;
          margin: 0 0.15em;
          animation: bounce 1.4s infinite;
        }

        .loader-dots span:nth-child(1) {
          animation-delay: -0.32s;
        }

        .loader-dots span:nth-child(2) {
          animation-delay: -0.16s;
        }

        .loader-dots span:nth-child(3) {
          animation-delay: 0s;
        }

        @keyframes bounce {
          0%, 60%, 100% {
            transform: translateY(0);
            opacity: 0.6;
          }
          30% {
            transform: translateY(-10px);
            opacity: 1;
          }
        }
      `}</style>

      <div className="loader-content">
        <div className="loader-logo">DUO STUDIO</div>
        <div className="loader-spinner">
          <div className="loader-ring"></div>
        </div>
        <div className="loader-text">
          Crafting Experience
          <span className="loader-dots">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
      </div>
    </div>
  );
}
