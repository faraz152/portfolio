"use client";

import { useCallback, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { profile } from "@/lib/content";
import { Clock, SettingsPanel, Sidebar, Tools, scrollToId } from "./Chrome";
import { About, Contact, Experience, Footer, Hero, OpenSource, Services, Stack, Work } from "./Sections";

export default function Portfolio() {
  const [active, setActive] = useState("home");
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [dark, setDark] = useState(true);
  const [preset, setPreset] = useState("");
  const [settingsOpen, setSettingsOpen] = useState(false);

  // Read the theme the inline script already applied.
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark-mode"));
    setPreset(document.documentElement.dataset.preset ?? "");
  }, []);

  const applyTheme = useCallback((isDark: boolean, p: string) => {
    const html = document.documentElement;
    html.classList.toggle("dark-mode", isDark);
    if (p) html.dataset.preset = p; else delete html.dataset.preset;
    try {
      localStorage.setItem("fa-theme", isDark ? "dark" : "light");
      localStorage.setItem("fa-preset", p);
    } catch { /* storage blocked */ }
    setDark(isDark);
    setPreset(p);
  }, []);

  /* ---------- Scroll + animation engine ---------- */
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const w = window as unknown as { __lenis?: Lenis };

    let lenis: Lenis | null = null;
    const raf = (t: number) => lenis?.raf(t * 1000);
    if (!reduce) {
      lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
      w.__lenis = lenis;
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);
    }

    // Scroll progress thumb + marquee speed follow scroll velocity
    const thumb = document.getElementById("scroll-thumb");
    const marquee = document.getElementById("client-marquee");
    let lastY = window.scrollY;
    let boost = 1;
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      if (thumb) thumb.style.transform = `translateY(${p * (window.innerHeight - 56)}px)`;
      const v = Math.abs(window.scrollY - lastY);
      lastY = window.scrollY;
      boost = Math.min(1 + v / 6, 6);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    const marqueeTick = () => {
      const anim = marquee?.getAnimations()[0];
      if (anim) {
        boost += (1 - boost) * 0.06;
        anim.playbackRate = boost;
      }
    };
    if (!reduce) gsap.ticker.add(marqueeTick);

    const ctx = gsap.context(() => {
      // Active section for the nav
      document.querySelectorAll<HTMLElement>("[data-section]").forEach((sec) => {
        ScrollTrigger.create({
          trigger: sec,
          start: "top 50%",
          end: "bottom 50%",
          onToggle: (self) => self.isActive && setActive(sec.id),
        });
      });

      // Counters
      document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
        const target = Number(el.dataset.count);
        if (reduce) return;
        const obj = { v: 0 };
        el.textContent = "0";
        gsap.to(obj, {
          v: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
          onUpdate: () => { el.textContent = String(Math.round(obj.v)); },
        });
      });

      if (reduce) return;

      // Word-by-word blur reveal (scrubbed). Measured from the heading's top
      // so long headings still finish while they're in the upper half of the screen.
      document.querySelectorAll<HTMLElement>("[data-split]").forEach((el) => {
        const words = el.querySelectorAll(".w");
        const isHero = el.tagName === "H1";
        gsap.fromTo(
          words,
          { opacity: 0.15, filter: "blur(6px)" },
          {
            opacity: 1,
            filter: "blur(0px)",
            ease: "none",
            stagger: { amount: 0.6 },
            duration: 0.4,
            scrollTrigger: {
              trigger: el,
              start: isHero ? "top 60%" : "top 92%",
              end: isHero ? "top 10%" : "top 55%",
              scrub: 0.3,
            },
          },
        );
      });

      // Generic fade-up
      gsap.utils.toArray<HTMLElement>(".fx-up").forEach((el) => {
        gsap.from(el, {
          y: 28,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
        });
      });

      // Hero: images fly in from the right on load and settle into a
      // diagonal staircase (90px right, 60px down each), like the reference.
      const flips = gsap.utils.toArray<HTMLElement>(".flip-image");
      if (flips.length) {
        gsap.fromTo(
          flips,
          { x: () => window.innerWidth, y: 0, opacity: 0 },
          {
            x: (i) => -40.5 + i * 90,
            y: (i) => 45 + i * 60,
            opacity: 1,
            duration: 1.3,
            ease: "power3.out",
            delay: 1,
            stagger: { each: 0.14, from: "end" },
          },
        );
      }

      // About: recognition cards fan out
      const fans = gsap.utils.toArray<HTMLElement>(".fan-card");
      gsap.fromTo(
        fans,
        { x: 0, y: 0, rotate: 0, scale: 0.9 },
        {
          x: (_, el) => Number((el as HTMLElement).dataset.x),
          y: (_, el) => Number((el as HTMLElement).dataset.y),
          rotate: (_, el) => Number((el as HTMLElement).dataset.r),
          scale: 1,
          ease: "power2.out",
          scrollTrigger: { trigger: ".award", start: "top 85%", end: "center 55%", scrub: 0.8 },
        },
      );

      // Timeline line fills and dots light up
      gsap.fromTo("#timeline-progress", { height: "0%" }, {
        height: "100%",
        ease: "none",
        scrollTrigger: { trigger: "#timeline", start: "top 60%", end: "bottom 60%", scrub: true },
      });
      document.querySelectorAll<HTMLElement>(".tl-item").forEach((item) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top 60%",
          onEnter: () => item.classList.add("passed"),
          onLeaveBack: () => item.classList.remove("passed"),
        });
      });

      // Skill bars grow
      document.querySelectorAll<HTMLElement>("[data-progress]").forEach((bar) => {
        gsap.fromTo(bar, { width: "0%" }, {
          width: `${bar.dataset.progress}%`,
          duration: 1.6,
          ease: "power3.out",
          scrollTrigger: { trigger: bar, start: "top 92%", once: true },
        });
      });

      // Desktop-only: stacked project cards + project overlay in the left card
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const items = gsap.utils.toArray<HTMLElement>(".sticky-item");
        items.forEach((item, i) => {
          const card = item.querySelector(".wg-work");
          const next = items[i + 1];
          if (!card || !next) return;
          gsap.to(card, {
            scale: 0.9,
            opacity: 0.35,
            ease: "none",
            scrollTrigger: { trigger: next, start: "top bottom", end: "top 132px", scrub: true },
          });
        });
        const pick = (p: number) => Math.min(items.length - 1, Math.floor(p * items.length));
        const st = ScrollTrigger.create({
          trigger: "#work-list",
          start: "top 55%",
          end: "bottom 45%",
          onUpdate: (self) => { if (self.isActive) setActiveProject(pick(self.progress)); },
          onEnter: (self) => setActiveProject(pick(self.progress)),
          onEnterBack: (self) => setActiveProject(pick(self.progress)),
          onLeave: () => setActiveProject(null),
          onLeaveBack: () => setActiveProject(null),
        });
        return () => { st.kill(); setActiveProject(null); };
      });
    });

    // Recalculate once fonts and images settle
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh);
    let resizeTimer: ReturnType<typeof setTimeout>;
    let lastH = document.body.scrollHeight;
    const ro = new ResizeObserver(() => {
      const h = document.body.scrollHeight;
      if (Math.abs(h - lastH) < 4) return;
      lastH = h;
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(refresh, 150);
    });
    ro.observe(document.body);

    // Hash links from elsewhere (e.g. /#contact)
    if (location.hash) setTimeout(() => scrollToId(location.hash.slice(1)), 300);

    return () => {
      ro.disconnect();
      clearTimeout(resizeTimer);
      ctx.revert();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("load", refresh);
      gsap.ticker.remove(raf);
      gsap.ticker.remove(marqueeTick);
      lenis?.destroy();
      delete w.__lenis;
    };
  }, []);

  return (
    <>
      <div className="page-bg" aria-hidden="true" />
      <header className="m-header">
        <a href="#home" className="mono" aria-label={profile.name}>{profile.monogram}</a>
        <Clock />
      </header>
      <div className="d-clock-wrap"><Clock /></div>
      <Sidebar activeProject={activeProject} />
      <Tools
        active={active}
        dark={dark}
        onToggleTheme={() => applyTheme(!dark, "")}
        onOpenSettings={() => setSettingsOpen(true)}
      />
      <SettingsPanel
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        preset={preset}
        dark={dark}
        onPick={(id, theme) => applyTheme(theme === "dark", id)}
      />
      <main className="content">
        <div className="content-inner">
          <Hero />
          <About />
          <Experience />
          <Stack />
          <Work />
          <Services />
          <OpenSource />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}
