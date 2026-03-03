"use client";

import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { label: "Home", id: "hero" },
  { label: "Work", id: "works" },
  { label: "Studio", id: "services" },
  { label: "Contact", id: "footer" },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    const section = document.querySelector<HTMLElement>(`#${id}`);
    if (section) {
      const lenisInstance = (window as any).lenis;
      if (lenisInstance) {
        lenisInstance.scrollTo(section, { offset: -80 });
      } else {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  // Prevent body scroll when menu open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <button
        className="mobile-hamburger"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className={`ham-line ${isOpen ? "open" : ""}`} />
        <span className={`ham-line ${isOpen ? "open" : ""}`} />
        <span className={`ham-line ${isOpen ? "open" : ""}`} />
      </button>

      <div
        ref={panelRef}
        className={`mobile-nav-panel ${isOpen ? "mobile-nav-panel--open" : ""}`}
        aria-hidden={!isOpen}
      >
        <nav>
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button onClick={() => scrollToSection(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {isOpen && (
        <div
          className="mobile-nav-overlay"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
