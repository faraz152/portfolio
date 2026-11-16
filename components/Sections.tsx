"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight, BriefcaseBusiness, Check, ChevronLeft, ChevronRight, CircleUser, Copy, Boxes,
  GitPullRequest, Layers, Quote, Send, Sparkles,
} from "lucide-react";
import {
  about, contact, experience, hero, moreProjects, openSource, profile, projects, services, tech,
  type Project,
} from "@/lib/content";
import { BrandIcon, GitHubIcon } from "./Icons";
import Slot from "./Slot";

/* ---------- Small helpers ---------- */
function Split({ words, as: Tag = "h2", className = "" }: { words: string[]; as?: "h1" | "h2"; className?: string }) {
  return (
    <Tag className={`split ${className}`} data-split>
      {words.map((w, i) => (
        <span key={i} className="w">{w}</span>
      ))}
    </Tag>
  );
}

function Tag({ icon: Icon, children }: { icon: React.ComponentType; children: React.ReactNode }) {
  return (
    <div className="sect-tag fx-up">
      <Icon />
      {children}
    </div>
  );
}

function Counter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  return (
    <div className="wg-counter">
      <p className="counter-num">
        <span data-count={value}>{value}</span>
        <span>{suffix}</span>
      </p>
      <p className="counter-label">{label}</p>
    </div>
  );
}

export function ProjectCover({ p, plain }: { p: Project; plain?: boolean }) {
  if (p.phones) {
    return (
      <div className="phones" style={{ background: p.bg }}>
        {p.phones.map((src, i) => (
          <div className="ph" key={src}>
            <Slot src={src} alt={plain ? "" : `${p.title} app screen ${i + 1}`} />
          </div>
        ))}
      </div>
    );
  }
  if (p.screens) {
    return (
      <div className="browsers" style={{ background: p.bg }}>
        {p.screens.slice(0, 3).map((src, i) => (
          <div className="bw" key={src}>
            <div className="bw-bar" aria-hidden="true"><i /><i /><i /></div>
            <Slot src={src} alt={plain ? "" : `${p.title} screen ${i + 1}`} />
          </div>
        ))}
      </div>
    );
  }
  // Until a real cover is added, show a flat typographic cover instead of a placeholder box.
  const designed = (
    <div className="cover-flat" style={{ background: p.bg }} role="img" aria-label={plain ? undefined : `${p.title} preview`}>
      <span className="cf-kicker">{p.role} · {p.year}</span>
      <span className="cf-title">{p.title}</span>
      <span className="cf-tags">{p.tags.join(" · ")}</span>
      {process.env.NODE_ENV !== "production" && <code className="cf-hint">add public{p.cover}</code>}
    </div>
  );
  return (
    <Slot
      src={p.cover!}
      alt={plain ? "" : `${p.title} preview`}
      style={{ background: p.bg }}
      fallback={designed}
    />
  );
}

/* ---------- Hero ---------- */
export function Hero() {
  return (
    <section id="home" className="section section-intro" data-section>
      <div className="hero-row">
        <Split words={hero.title} as="h1" className="h-hero" />
        <div className="box-counter">
          {hero.counters.map((c) => <Counter key={c.label} {...c} />)}
        </div>
        <div className="flip-list" aria-hidden="true">
          {hero.flipImages.map((src) => (
            <div className="flip-image" key={src}>
              <div className="flip-tilt">
                <Slot src={src} alt="" eager />
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="intro-client">{hero.clientsLabel}</p>
      <div className="marquee">
        <div className="marquee-track" id="client-marquee">
          {[0, 1].map((g) => (
            <div className="marquee-group" key={g} aria-hidden={g === 1}>
              {hero.clients.map((c) => (
                <div className="brand" key={c.name}>
                  <Slot
                    src={c.logo}
                    alt={c.name}
                    fallback={<><span className="brand-mark" />{c.name}</>}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- About ---------- */
const fanPos = [
  { x: -132, y: -128, r: -6 },
  { x: 136, y: -120, r: 5 },
  { x: -232, y: 30, r: -9 },
  { x: 236, y: 38, r: 8 },
  { x: -124, y: 160, r: -4 },
  { x: 130, y: 156, r: 6 },
];

export function About() {
  return (
    <section id="about" className="section" data-section>
      <Tag icon={CircleUser}>About</Tag>
      <Split words={about.title} className="h-sect" />
      <div className="s-desc">
        {about.paragraphs.map((p, i) => <p key={i} className="fx-up">{p}</p>)}
      </div>
      <div className="award" aria-label="Recognition">
        {about.cards.map((c, i) => (
          <div
            key={c.title}
            className={`award-card fan-card ${"list" in c && c.list ? "list-card" : ""}`}
            style={{ background: c.color }}
            data-x={fanPos[i].x}
            data-y={fanPos[i].y}
            data-r={fanPos[i].r}
          >
            <span className="mk">FA.</span>
            <span className="k" style={{ marginTop: 10 }}>{c.kicker}</span>
            <span className="ttl">{c.title}</span>
            {"list" in c && c.list ? (
              <ul className="pr-list">
                {c.list.map((r) => <li key={r}>{r}</li>)}
              </ul>
            ) : (
              <span className="sub">{c.sub}</span>
            )}
          </div>
        ))}
        <div className="award-card award-center" style={{ background: about.centerCard.color }}>
          <span className="mk">FA.</span>
          <span className="big">{about.centerCard.big}</span>
          <span className="ttl">{about.centerCard.title}</span>
          <span className="sub">{about.centerCard.sub}</span>
        </div>
      </div>
    </section>
  );
}

/* ---------- Experience ---------- */
export function Experience() {
  return (
    <section id="experience" className="section" data-section>
      <Tag icon={BriefcaseBusiness}>Education &amp; Experience</Tag>
      <div className="timeline" id="timeline">
        <div className="timeline-line"><span id="timeline-progress" /></div>
        {experience.map((e) => (
          <div className="tl-item fx-up" key={e.role}>
            <p className="tl-date">{e.when}</p>
            <span className="tl-dot" />
            <div>
              <div className="tl-logo">
                <Slot src={e.logo} alt="" fallback={<span className="tl-initials">{e.initials}</span>} />
              </div>
              <h3 className="tl-role">{e.role}</h3>
              <p className="tl-desc">{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Work ---------- */
export function Work() {
  return (
    <section id="work" className="section" data-section>
      <div className="work-tag-wrap"><Tag icon={Sparkles}>Work Highlights</Tag></div>
      <div className="work-list" id="work-list">
        {projects.map((p) => (
          <div className="sticky-item" key={p.title}>
            <article className="wg-work">
              <a
                className="work-image"
                href={p.link ?? "#contact"}
                {...(p.link ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                aria-label={`${p.title}${p.link ? " — open project" : ""}`}
                style={{ background: p.bg }}
              >
                <ProjectCover p={p} />
              </a>
              <div className="work-info-m">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="meta">{p.year} · {p.role}</div>
                <div className="tags">{p.tags.map((t) => <span className="chip" key={t}>{t}</span>)}</div>
              </div>
            </article>
          </div>
        ))}
      </div>
      <h3 className="more-title fx-up">More things I&apos;ve built</h3>
      <div className="more-grid">
        {moreProjects.map((m) => (
          <div className="more-card fx-up" key={m.name}>
            <b>{m.name}</b>
            <span>{m.desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Services ---------- */
export function Services() {
  const [open, setOpen] = useState(0);
  return (
    <section id="services" className="section" data-section>
      <Tag icon={Layers}>Services</Tag>
      <div>
        {services.map((s, i) => (
          <div key={s.title} className={`svc-item fx-up ${open === i ? "open" : ""}`}>
            <button className="svc-head" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
              <h3>{s.title}</h3>
              <span className="ic-wrap"><span className="ic-plus" /></span>
            </button>
            <div className="svc-body">
              <div>
                <div className="svc-content">
                  <div className="svc-images">
                    {s.images.map((src, k) => (
                      <div className="svc-img" key={src}>
                        <Slot src={src} alt={`${s.title} example ${k + 1}`} label={`${s.title} image`} />
                      </div>
                    ))}
                  </div>
                  <div className="svc-tags">{s.tags.map((t) => <span className="chip" key={t}>{t}</span>)}</div>
                  <p className="svc-desc">{s.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Tech stack ---------- */
export function Stack() {
  return (
    <section id="stack" className="section" data-section>
      <Tag icon={Boxes}>Tech Stack</Tag>
      <Split words={tech.title} className="h-sect" />
      <ul className="tech-list">
        {tech.items.map((t) => (
          <li className="wg-tech" key={t.name}>
            <div className="tech-infor fx-up">
              {Array.isArray(t.icon) ? (
                <div className="tech-img trio">
                  {t.icon.map((n) => <span key={n}><BrandIcon name={n} /></span>)}
                </div>
              ) : (
                <div className="tech-img"><BrandIcon name={t.icon} /></div>
              )}
              <div>
                <p className="tech-name">{t.name}</p>
                <p className="tech-duty">{t.duty}</p>
              </div>
            </div>
            <div className="tech-progress">
              <div className="progress-line" data-progress={t.value} style={{ width: `${t.value}%` }}>
                <p className="progress-num"><span data-count={t.value}>{t.value}</span>%</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="tech-more">
        {tech.more.map((m) => <span className="chip fx-up" key={m}>{m}</span>)}
      </div>
    </section>
  );
}

/* ---------- Open source (testimonial-style slider) ---------- */
const OS_AUTOPLAY_MS = 2500;

export function OpenSource() {
  const [i, setI] = useState(0);
  const [inView, setInView] = useState(false);
  const [paused, setPaused] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const n = openSource.prs.length;

  // Start from the first PR every time the section scrolls into view.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setI(0);
      setInView(e.isIntersecting);
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Auto-advance every 2.5s while visible; any change (incl. a click) restarts the timer.
  useEffect(() => {
    if (!inView || paused) return;
    const t = setTimeout(() => setI((k) => (k + 1) % n), OS_AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [i, inView, paused, n]);

  const hold = {
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    onFocus: () => setPaused(true),
    onBlur: () => setPaused(false),
  };

  return (
    <section id="open-source" className="section" data-section ref={ref}>
      <Tag icon={GitPullRequest}>Open Source</Tag>
      <div className="os-heading">
        <div>
          <Split words={openSource.title} className="h-sect inline" />
          <div className="box-counter fx-up">
            {openSource.counters.map((c) => <Counter key={c.label} {...c} />)}
          </div>
        </div>
        <div className="os-card-wrap fx-up" {...hold}>
          <div className="os-cards">
            {openSource.prs.map((p, k) => {
              const [owner, repo] = p.repo.split("/");
              const off = k - i;
              return (
                <div
                  key={p.repo}
                  className="os-card"
                  style={{ transform: `translateX(${off * 104}%)`, opacity: off === 0 ? 1 : 0 }}
                  aria-hidden={off !== 0}
                >
                  <GitHubIcon className="gh" />
                  <span className="owner">{owner} /</span>
                  <span className="repo">{repo}</span>
                  <span className="num"><GitPullRequest size={12} /> #{p.num} merged</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="os-slider fx-up" aria-roledescription="carousel" {...hold}>
        {openSource.prs.map((p, k) => (
          <div key={p.repo} className={`os-slide ${k === i ? "on" : ""}`} aria-hidden={k !== i}>
            <Quote className="os-quote-icon" />
            <p className="os-text">{p.text}</p>
            <div className="os-author">
              <b>{p.repo}</b>
              <a href={p.url} target="_blank" rel="noopener noreferrer" tabIndex={k === i ? 0 : -1}>
                Pull request #{p.num} <ArrowUpRight size={12} style={{ display: "inline" }} />
              </a>
            </div>
          </div>
        ))}
        <p className="os-pag">{i + 1}<span>/{n}</span></p>
        <div className="os-nav">
          <button className="sw-nav" onClick={() => setI((i - 1 + n) % n)} aria-label="Previous"><ChevronLeft /></button>
          <button className="sw-nav" onClick={() => setI((i + 1) % n)} aria-label="Next"><ChevronRight /></button>
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
export function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch { /* clipboard blocked: the mailto link still works */ }
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = `Portfolio enquiry from ${f.get("name")}`;
    const body = `${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  return (
    <section id="contact" className="section" data-section>
      <Tag icon={Send}>Contact</Tag>
      <Split words={contact.title} className="h-sect h-contact" />
      <form className="form-contact fx-up" onSubmit={onSubmit}>
        <label className="field"><span className="sr-only">Your name</span><input name="name" placeholder="Your Name *" required autoComplete="name" /></label>
        <label className="field"><span className="sr-only">Email address</span><input name="email" type="email" placeholder="Email Address *" required autoComplete="email" /></label>
        <label className="field"><span className="sr-only">Project description</span><textarea name="message" rows={1} placeholder="Role or Project Description" /></label>
        <div className="form-action">
          <button type="submit" className="tf-btn">Send Message</button>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
            <a className="mail-big" href={`mailto:${profile.email}`}>{profile.email}</a>
            <button type="button" className="copy-btn" onClick={copy} aria-live="polite">
              {copied ? <><Check /> Copied</> : <><Copy /> Copy</>}
            </button>
          </span>
        </div>
      </form>
      <div className="contact-meta fx-up">
        <div><small>Phone</small><a href={profile.phoneHref}>{profile.phone}</a></div>
        <div><small>Location</small><span>{profile.location} · {profile.timezone}</span></div>
        <div><small>LinkedIn</small><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">in/faraz-ahmed</a></div>
        <div><small>GitHub</small><a href={profile.github} target="_blank" rel="noopener noreferrer">github.com/faraz152</a></div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
export function Footer() {
  return (
    <footer className="footer">
      <blockquote className="fx-up">
        <p className="quote-text"><span className="q">“</span>{contact.quote}<span className="q">”</span></p>
        <p className="quote-author">{contact.quoteBy}</p>
      </blockquote>
      <div className="foot-line" />
      <div className="foot-inner">
        <p className="big-name fx-up">{profile.first}</p>
        <a href="#home" className="f-logo" aria-label="Back to top"><span className="mono">{profile.monogram}</span></a>
      </div>
      <div className="foot-bottom">
        <p className="foot-copy">Open to remote · Ready to relocate<br />© 2026 {profile.name}</p>
        <p className="big-name outline fx-up" aria-hidden="true">{profile.last}</p>
      </div>
    </footer>
  );
}

