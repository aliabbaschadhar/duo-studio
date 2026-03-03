"use client";

import { useEffect, useRef } from "react";

const CLIENTS = [
  { name: "Verizon", achievement: "Small Business feature", year: "2021", image: "/Content/Hover1.avif" },
  { name: "Awwwwards", achievement: "Honorable Mention", year: "2023", image: "/Content/Hover2.avif" },
  { name: "Awwwwards", achievement: "Mobile Excellence", year: "2020", image: "/Content/Hover3.avif" },
  { name: "Mindsparkle Mag", achievement: "Site of the Day", year: "2020", image: "/Content/Hover4.avif" },
  { name: "Orpetron", achievement: "Site of the Day", year: "2020", image: "/Content/Hover5.avif" },
];

export default function Clients() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cursor = document.querySelector<HTMLElement>(".cursor");
    const boxes = container.querySelectorAll<HTMLElement>(".box");

    const enterHandlers: (() => void)[] = [];
    const leaveHandlers: (() => void)[] = [];

    boxes.forEach((box) => {
      const imageAddress = box.getAttribute("data-image") || "";
      const h4s = box.querySelectorAll<HTMLElement>("h4");

      const onEnter = () => {
        if (cursor) {
          cursor.style.width = "25vw";
          cursor.style.height = "30vh";
          cursor.style.borderRadius = "0";
          cursor.style.backgroundImage = `url(${imageAddress})`;
        }
        h4s.forEach((h) => {
          h.style.color = "white";
          h.style.fontWeight = "600";
        });
      };

      const onLeave = () => {
        if (cursor) {
          cursor.style.width = "2vw";
          cursor.style.height = "2vw";
          cursor.style.borderRadius = "100%";
          cursor.style.backgroundImage = "";
        }
        h4s.forEach((h) => {
          h.style.color = "rgb(77, 75, 75)";
          h.style.fontWeight = "400";
        });
      };

      box.addEventListener("mouseenter", onEnter);
      box.addEventListener("mouseleave", onLeave);
      enterHandlers.push(onEnter);
      leaveHandlers.push(onLeave);
    });

    return () => {
      boxes.forEach((box, i) => {
        box.removeEventListener("mouseenter", enterHandlers[i]);
        box.removeEventListener("mouseleave", leaveHandlers[i]);
      });
    };
  }, []);

  return (
    <div className="page5" ref={containerRef}>
      <div className="clients">
        <h2>Mentions clients</h2>
        <button>View Clients</button>
      </div>

      {CLIENTS.map((client, i) => (
        <div className="box" key={i} data-image={client.image}>
          <h4>{client.name}</h4>
          <div className="name-date">
            <h4>{client.achievement}</h4>
            <h4>{client.year}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}
