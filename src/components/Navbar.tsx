"use client";

import { useEffect, useRef } from "react";

const NAV_ITEMS = [
  { label: "Home", id: "hero" },
  { label: "Work", id: "works" },
  { label: "Studio", id: "services" },
  { label: "Contact", id: "footer" },
];

export default function Navbar() {
  const purpleRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const navPart2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const purple = purpleRef.current;
    const marquee = marqueeRef.current;
    const navPart2 = navPart2Ref.current;
    if (!purple || !marquee || !navPart2) return;

    const cursor = document.querySelector<HTMLElement>(".cursor");

    // We need to find all h4 elements inside nav-part2
    const h4Els = navPart2.querySelectorAll<HTMLElement>("h4");

    const enterHandlers: (() => void)[] = [];
    const leaveHandler = () => {
      purple.style.display = "none";
      purple.style.opacity = "0";
      if (cursor) {
        cursor.style.backgroundColor = "#edbfff";
        cursor.style.width = "1vw";
        cursor.style.height = "1vw";
      }
    };

    const clickHandlers: (() => void)[] = [];

    h4Els.forEach((el, index) => {
      const enterHandler = () => {
        purple.style.display = "block";
        purple.style.opacity = "1";
        if (cursor) {
          cursor.style.width = "3vw";
          cursor.style.height = "3vw";
          cursor.style.zIndex = "500";
          cursor.style.backgroundColor = "green";
        }
        marquee.textContent = `${" " + NAV_ITEMS[index].label + " "}`.repeat(50);
        marquee.style.fontWeight = "900";
        marquee.style.display = "block";
      };

      const clickHandler = () => {
        const sectionId = NAV_ITEMS[index].id;
        const section = document.querySelector<HTMLElement>(`#${sectionId}`);
        if (section) {
          // Use Lenis scroll if available, otherwise fallback to native scroll
          const lenisInstance = (window as any).lenis;
          if (lenisInstance) {
            lenisInstance.scrollTo(section, { offset: -80 });
          } else {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }
      };

      el.addEventListener("mouseenter", enterHandler);
      el.addEventListener("click", clickHandler);
      enterHandlers.push(enterHandler);
      clickHandlers.push(clickHandler);
      el.style.cursor = "pointer";
    });

    navPart2.addEventListener("mouseleave", leaveHandler);

    return () => {
      h4Els.forEach((el, index) => {
        el.removeEventListener("mouseenter", enterHandlers[index]);
        el.removeEventListener("click", clickHandlers[index]);
      });
      navPart2.removeEventListener("mouseleave", leaveHandler);
    };
  }, []);

  return (
    <>
      <div id="nav">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://d33wubrfki0l68.cloudfront.net/439bf938233c24af021ffe6d206cd42f546e1143/ff4ed/assets/logo.svg"
          alt="Duo Studio Logo"
        />
        <div className="nav-part2" ref={navPart2Ref}>
          {NAV_ITEMS.map((item, i) => (
            <h4 key={item.id}>
              {item.label}
              {i < NAV_ITEMS.length - 1 ? " ,\u00a0" : ""}
            </h4>
          ))}
        </div>
        <div className="nav-part3">
          <div className="circle" />
        </div>
      </div>

      <div id="purple" ref={purpleRef}>
        <div className="marquee" ref={marqueeRef} />
      </div>
    </>
  );
}
