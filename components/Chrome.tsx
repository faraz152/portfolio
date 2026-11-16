"use client";

import { useEffect, useState } from "react";
import {
  ArrowUp, ArrowUpRight, BriefcaseBusiness, CircleUser, FileDown, GitPullRequest, House,
  Layers, Mail, Moon, Send, Settings, Sparkles, Sun, Boxes, X,
} from "lucide-react";
import { nav, profile, projects } from "@/lib/content";
import { GitHubIcon, LinkedInIcon } from "./Icons";
import Slot from "./Slot";
import { ProjectCover } from "./Sections";

const navIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  home: House,
  about: CircleUser,
  experience: BriefcaseBusiness,
  work: Sparkles,
  services: Layers,
  stack: Boxes,
  "open-source": GitPullRequest,
  contact: Send,
};

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const lenis = (window as unknown as { __lenis?: { scrollTo: (t: Element | number, o?: object) => void } }).__lenis;
  if (lenis) lenis.scrollTo(el, { offset: id === "home" ? -200 : 0, duration: 1.4 });
  else el.scrollIntoView({ behavior: "smooth" });
}

/* ---------- Clock (Karachi time) ---------- */
export function Clock() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 15_000);
    return () => clearInterval(t);
  }, []);
  const date = now?.toLocaleDateString("en-US", { timeZone: profile.tz, weekday: "short", month: "short", day: "numeric" });
  const time = now?.toLocaleTimeString("en-GB", { timeZone: profile.tz, hour: "2-digit", minute: "2-digit" });
  return (
    <div className="clock" aria-label="Local time in Karachi">
      <p>{date ?? " "}</p>
      <p>{time ? `${time} PKT` : " "}</p>
    </div>
  );
}

/* ---------- Typewriter greeting ---------- */
function Typewriter({ words }: { words: string[] }) {
  const [text, setText] = useState(words[0]);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let i = 0, len = words[0].length, deleting = true;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      const word = words[i];
      if (deleting) {
        len--;
        if (len <= 0) { deleting = false; i = (i + 1) % words.length; len = 0; }
      } else {
        len++;
        if (len >= words[i].length) { deleting = true; setText(words[i]); timer = setTimeout(tick, 2200); return; }
      }
      setText((deleting ? word : words[i]).slice(0, Math.max(len, 0)));
      timer = setTimeout(tick, deleting ? 55 : 95);
    };
    timer = setTimeout(tick, 2600);
    return () => clearTimeout(timer);
  }, [words]);
  return (
    <>
      <span>{text}</span>
      <span className="caret" aria-hidden="true" />
    </>
  );
}

/* ---------- Left profile card ---------- */
export function Sidebar({ activeProject }: { activeProject: number | null }) {
  return (
    <aside className="sidebar-user" aria-label="Profile">
      <div className="wrap glass">
        <div className="user-image">
          <Slot
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            eager
            fallback={
              <div className="photo-fallback">
                <span className="big">{profile.monogram}</span>
                {process.env.NODE_ENV !== "production" && (
                  <>
                    <span>Add your photo</span>
                    <code>public{profile.photo}</code>
                  </>
                )}
              </div>
            }
          />
        </div>

        <div className="user-logo">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToId("home"); }} className="mono" aria-label="Back to top">
            {profile.monogram}
          </a>
        </div>

        <ul className="user-social">
          <li><a className="round-btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a></li>
          <li><a className="round-btn" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GitHubIcon /></a></li>
          <li><a className="round-btn" href={`mailto:${profile.email}`} aria-label="Email"><Mail /></a></li>
        </ul>

        <div className="user-info">
          <p className="avail"><span className="dot" />{profile.status}</p>
          <h2 className="greeting">
            <span>Hey, I’m&nbsp;</span>
            <Typewriter words={profile.greetingWords} />
          </h2>
          <p className="introduce">{profile.intro}</p>
          <div className="br-line" />
          <div className="action-group">
            <a href="#contact" className="btn-action" onClick={(e) => { e.preventDefault(); scrollToId("contact"); }}>
              <span className="btn-circle"><ArrowUpRight size={16} /></span>
              <span className="btn-pill">Let’s talk</span>
            </a>
            <a href={profile.cv} className="link-cv" download>
              <FileDown /> Download CV
            </a>
          </div>
        </div>

        {/* Project details shown here while the Work section scrolls (desktop) */}
        <div className="work-overlay" aria-hidden={activeProject === null}>
          {projects.map((p, i) => (
            <div key={p.title} className={`wo-layer ${activeProject === i ? "on" : ""}`}>
              <div className="wo-bg">
                {p.phones ? <Slot src={p.phones[0]} alt="" />
                  : p.screens ? <Slot src={p.screens[0]} alt="" />
                  : <ProjectCover p={p} plain />}
              </div>
              <div className="wo-content">
                <div>
                  <h3 className="wo-title">{p.title}</h3>
                  <p className="wo-desc">{p.desc}</p>
                </div>
                <div className="wo-meta">
                  <div><small>Year</small><strong>{p.year}</strong></div>
                  <div><small>Role</small><strong>{p.role}</strong></div>
                </div>
                <div className="wo-tags">
                  {p.tags.map((t) => <span key={t} className="chip chip-dark">{t}</span>)}
                </div>
                <div className="wo-foot">
                  {p.link ? (
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn-action" tabIndex={activeProject === i ? 0 : -1}>
                      <span className="btn-circle"><ArrowUpRight size={16} /></span>
                      <span className="btn-pill">View project</span>
                    </a>
                  ) : (
                    <a href="#contact" className="btn-action" tabIndex={activeProject === i ? 0 : -1} onClick={(e) => { e.preventDefault(); scrollToId("contact"); }}>
                      <span className="btn-circle"><ArrowUpRight size={16} /></span>
                      <span className="btn-pill">Let’s talk</span>
                    </a>
                  )}
                  <p className="wo-count"><b>{String(i + 1).padStart(2, "0")}</b> / {String(projects.length).padStart(2, "0")}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

/* ---------- Right tools: theme, section nav, back to top ---------- */
export function Tools({ active, dark, onToggleTheme, onOpenSettings }: {
  active: string;
  dark: boolean;
  onToggleTheme: () => void;
  onOpenSettings: () => void;
}) {
  return (
    <>
      <button className="gear-btn tool-icon glass" onClick={onOpenSettings} aria-label="Open colour settings">
        <Settings />
      </button>
      <nav className="sidebar-tools" aria-label="Sections">
        <button className="tool-icon tool-top glass" onClick={onToggleTheme} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}>
          {dark ? <Sun /> : <Moon />}
        </button>
        <ul className="nav-list glass">
          {nav.map((n, i) => {
            const Icon = navIcons[n.id];
            return (
              <li key={n.id} className="nav-item" style={{ display: "contents" }}>
                {i === nav.length - 1 && <span className="nav-sep" aria-hidden="true" />}
                <a
                  href={`#${n.id}`}
                  className={active === n.id ? "active" : ""}
                  aria-current={active === n.id ? "true" : undefined}
                  onClick={(e) => { e.preventDefault(); scrollToId(n.id); }}
                >
                  <Icon />
                  <span className="tool-tip">{n.label}</span>
                  <span className="sr-only">{n.label}</span>
                </a>
                {i === 0 && <span className="nav-sep" aria-hidden="true" />}
              </li>
            );
          })}
        </ul>
        <button className="tool-icon go-top glass" onClick={() => scrollToId("home")} aria-label="Back to top">
          <ArrowUp />
        </button>
      </nav>
      <div className="scroll-progress" aria-hidden="true"><span id="scroll-thumb" /></div>
    </>
  );
}

/* ---------- Colour settings panel ---------- */
export const presets = [
  { id: "", name: "Default", theme: "light", swatch: "#ffffff" },
  { id: "silver", name: "Silver Dawn", theme: "light", swatch: "linear-gradient(180deg,#bdc5db,#e1eaef)" },
  { id: "lavender", name: "Lavender Stone", theme: "light", swatch: "linear-gradient(180deg,#b7bad1,#d1cad6 50%,#d5d8e4)" },
  { id: "ocean", name: "Ocean Breeze", theme: "light", swatch: "linear-gradient(180deg,#aac7cf,#d8e2d6)" },
  { id: "midnight", name: "Midnight Fade", theme: "dark", swatch: "#14151a" },
  { id: "charcoal", name: "Charcoal Mist", theme: "dark", swatch: "#12151c" },
  { id: "forest", name: "Forest Shadow", theme: "dark", swatch: "#0d1210" },
] as const;

export function SettingsPanel({ open, onClose, preset, dark, onPick }: {
  open: boolean;
  onClose: () => void;
  preset: string;
  dark: boolean;
  onPick: (id: string, theme: "light" | "dark") => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <>
      <div className={`settings-backdrop ${open ? "open" : ""}`} onClick={onClose} />
      <aside className={`settings ${open ? "open" : ""}`} aria-hidden={!open} aria-label="Colour settings">
        <div className="settings-head">
          <h2>Settings</h2>
          <button className="tool-icon glass" onClick={onClose} aria-label="Close settings" tabIndex={open ? 0 : -1}><X /></button>
        </div>
        <div className="settings-body">
          <h3>Background colour</h3>
          <div className="preset-list">
            {presets.map((p) => {
              const isActive = preset === p.id && (p.theme === "dark") === dark;
              return (
                <button key={p.name} className={`preset ${isActive ? "active" : ""}`} onClick={() => onPick(p.id, p.theme)} tabIndex={open ? 0 : -1}>
                  <span className="sw" style={{ background: p.swatch }} />
                  <span>{p.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
}
