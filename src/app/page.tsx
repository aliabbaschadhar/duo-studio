"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import MobileNav from "@/components/MobileNav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Works from "@/components/Works";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis();

    // Store Lenis instance on window for access from other components
    (window as any).lenis = lenis;

    // Keep ScrollTrigger in sync with Lenis
    lenis.on("scroll", ScrollTrigger.update);

    const tickerFn = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tickerFn);
    gsap.ticker.lagSmoothing(0);

    // Simulate loading time and then fade out loader
    const loaderTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // ------ Hero entrance animation ------
    const mm = gsap.matchMedia();

    mm.add("(max-width: 768px)", () => {
      return () => gsap.killTweensOf(".page1 h1, .page1 h2");
    });

    mm.add("(min-width: 769px)", () => {
      gsap.from(".page1 h1, .page1 h2", {
        opacity: 0,
        y: 100,
        duration: 2.7,
        delay: 0.5,
        stagger: 0.2,
        ease: "power4.out",
      });
    });

    // ------ Timeline 1: h1/h2 slide apart + video expands on scroll ------
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".page1 h1",
        start: "top 30%",
        end: "top 0%",
        scrub: 3,
      },
    });

    tl1.to(".page1 h1", { x: -100 }, "one");
    tl1.to(".page1 h2", { x: 100 }, "one");
    tl1.to(".page1 video", { width: "100%" }, "one");

    // ------ Timeline 2: background transitions to white ------
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".page1 h1",
        start: "top -100%",
        end: "top -120%",
        scrub: 3,
      },
    });

    tl2.to(".main", { backgroundColor: "#fff" });

    // ------ Timeline 3: background transitions back to dark ------
    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".page1 h1",
        start: "top -380%",
        end: "top -400%",
        scrub: 3,
      },
    });

    tl3.to(".main", { backgroundColor: "#0f0d0d" });

    return () => {
      clearTimeout(loaderTimeout);
      lenis.destroy();
      gsap.ticker.remove(tickerFn);
      mm.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
      delete (window as any).lenis;
    };
  }, []);

  return (
    <>
      <Loader isLoading={isLoading} />
      <CustomCursor />
      <Navbar />
      <MobileNav />
      <div className="main" ref={mainRef} role="main">
        <div id="hero">
          <Hero />
        </div>
        <About />
        <div id="works">
          <Works />
        </div>
        <div id="services">
          <Services />
        </div>
        <Clients />
        <Footer />
      </div>
    </>
  );
}
