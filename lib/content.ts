// All site copy lives here. Edit this file to change text, links or images.
// Image paths under /images/... are slots: drop a file with that name into
// public/images/... and it shows up. Until then a labelled placeholder is shown.

export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://farazahmed-roan.vercel.app",
  name: "Faraz Ahmed",
  title: "Faraz Ahmed — Senior Software Engineer, Android & Full-Stack",
  description:
    "Android and full-stack engineer in Karachi. Kotlin apps, Next.js web apps and the APIs behind them — 7+ years shipping production apps, 1M+ downloads.",
};

export const profile = {
  name: "Faraz Ahmed",
  first: "Faraz",
  last: "Ahmed",
  monogram: "FA",
  headline: "Senior Software Engineer — Android & Full-Stack",
  greetingWords: ["a Senior Software Engineer", "a Mobile Engineer", "a Full-Stack Engineer", "an Agentic Engineer"],
  intro:
    "I build Kotlin apps, Next.js web apps and the APIs behind them, based in Karachi, Pakistan.",
  photo: "/images/profile/faraz.jpg",
  status: "Available for Work",
  email: "farazgr8007@gmail.com",
  phone: "+92 344 3383112",
  phoneHref: "tel:+923443383112",
  linkedin: "https://www.linkedin.com/in/faraz-ahmed-bb68ab138",
  github: "https://github.com/faraz152",
  location: "Karachi, Pakistan",
  timezone: "GMT+5",
  tz: "Asia/Karachi",
  cv: "/Faraz_Ahmed_CV.pdf",
};

export const hero = {
  title: ["Building", "Android", "apps,", "web", "platforms", "&", "AI", "agents", "people", "rely", "on"],
  counters: [
    { value: 7, suffix: "+", label: "Years shipping apps" },
    { value: 1, suffix: "M+", label: "Downloads on Maqsad" },
  ],
  // Mix of Android, web and AI work: app stores + live websites
  flipImages: [
    "/screenshots/maqsad/2.webp",
    "/images/hero/onvexia.webp",
    "/screenshots/angelvpn/3.webp",
    "/images/hero/maqsad-web.webp",
    "/images/hero/kickoff26.webp",
    "/images/hero/onvexia-api.webp",
  ],
  clientsLabel: "Companies I've built for (2018–26©)",
  clients: [
    { name: "Maqsad", logo: "/images/clients/maqsad.svg" },
    { name: "PureSquare", logo: "/images/clients/puresquare.svg" },
    { name: "Disrupt.com", logo: "/images/clients/disrupt.svg" },
    { name: "V8 Digital", logo: "/images/clients/v8.svg" },
    { name: "Webroot", logo: "/images/clients/webroot.svg" },
    { name: "Evolution Wings", logo: "/images/clients/evolution-wings.svg" },
    { name: "Eir Formation", logo: "/images/clients/eir.svg" },
    { name: "SYBRID", logo: "/images/clients/sybrid.svg" },
    { name: "California Pizza", logo: "/images/clients/california-pizza.svg" },
    { name: "McDonald's", logo: "/images/clients/mcdonalds.svg" },
  ],
};

export const about = {
  title: [
    "Engineering", "Android", "apps", "and", "web", "platforms", "with",
    "clarity,", "speed,", "and", "measurable", "impact",
  ],
  paragraphs: [
    "I've spent 7+ years building production apps, starting with food-ordering apps for California Pizza and McDonald's and moving through VPN apps for phones and TVs, fitness and trading tools, and now an edtech platform used across Pakistan.",
    "At Maqsad I own features end to end: the live-class video player and chat on Android, the matching Next.js web app, and the NestJS/gRPC services behind them on AWS. I work with AI coding agents every day, review every change they make, and measure what I ship. Off the keyboard: gaming and the gym.",
  ],
  // Fan of recognition cards (flat colours, no images needed)
  cards: [
    { kicker: "Award", title: "Employee of the Month", sub: "V8 Digital Solutions", color: "#6a8fd6" },
    { kicker: "Founder", title: "Onvexia", sub: "2,600+ coins · 66 MCP tools", color: "#7c5cf0" },
    { kicker: "VPN product", title: "AngelVPN", sub: "50K+ downloads · phone & TV", color: "#2f8f86" },
    {
      kicker: "✓ Merged",
      title: "12 PRs merged",
      sub: "",
      color: "#e2553f",
      list: [
        "Square LeakCanary",
        "JetBrains Koog",
        "MockK",
        "Chucker ×2",
        "MaterialKolor ×2",
        "PixelPlayer ×2",
        "svg-to-compose",
        "agentmemory",
        "Fossify Calendar",
      ],
    },
    {
      kicker: "✓ Success",
      title: "Maqsad",
      sub: "",
      color: "#1f9d55",
      list: [
        "1M+ downloads",
        "3.9★ · 30K+ reviews",
        "72.5% smaller app (R8)",
        "Live classes for 1M+ students",
        "Android + Next.js + NestJS",
      ],
    },
    { kicker: "Published SDKs", title: "Maven Central, npm & PyPI", sub: "OpenRouter SDKs", color: "#a7c3cf" },
  ],
  centerCard: { big: "7+", title: "Years in production", sub: "2018 — now", color: "#f5b93b" },
};

export const experience = [
  {
    when: "Oct 2025 – Now",
    role: "Senior Software Engineer at Maqsad",
    logo: "/images/companies/maqsad.png",
    initials: "M",
    desc: "Live-class ExoPlayer player with live chat and watch-time analytics, a unified Compose test engine across 5 exam tracks, a 3-release R8 migration (−72.5% app size), a Next.js 16 web app and NestJS/gRPC services on AWS CDK.",
  },
  {
    when: "Jan 2024 – Sep 2025",
    role: "Senior Software Engineer (Android) at PureSquare",
    logo: "/images/companies/puresquare.png",
    initials: "PS",
    desc: "Led a team of Android engineers on white-label VPN apps (PureWL) in Kotlin and Compose for phone, Android TV and Fire TV: IKEv2 + WireGuard, certificate pinning, long-lived tunnels under background limits, Python CLI brand generation (−70% effort), CI/CD with GitHub Actions + fastlane.",
  },
  {
    when: "Oct 2022 – Dec 2023",
    role: "Software Engineer II (Android) at V8 Digital",
    logo: "/images/companies/v8.png",
    initials: "V8",
    desc: "White-label VPN apps for mobile and TV, React Native apps with Redux-Saga, an MVP → MVVM migration and a Google Fit fitness app. Employee of the Month.",
  },
  {
    when: "May 2022 – Sep 2022",
    role: "Software Engineer (Android) at Evolution Wings",
    logo: "/images/companies/evolution-wings.png",
    initials: "EW",
    desc: "Re-architected food-delivery apps to MVVM with Firebase, social login and live GPS order tracking — about 30% faster.",
  },
  {
    when: "Mar 2021 – Apr 2022",
    role: "App Developer & Blockchain Data Analyst at Eir Formation",
    logo: "/images/companies/eir.png",
    initials: "EF",
    desc: "React and React Native apps from Figma with a shared component library, real-time crypto dashboards over WebSockets and a Django trading app.",
  },
  {
    when: "Mar 2018 – Sep 2018",
    role: "Mobile Application Developer at SYBRID",
    logo: "/images/companies/sybrid.png",
    initials: "SY",
    desc: "Android and React Native ordering apps for California Pizza and McDonald's, with Firebase, payments and C#/.NET services.",
  },
  {
    when: "2013 – 2017",
    role: "BS Computer Engineering, Sir Syed University",
    logo: "/images/companies/ssuet.png",
    initials: "SU",
    desc: "Karachi. Certifications: Android Architecture Masterclass; Flutter & Dart Advanced Development (Udemy).",
  },
];

export type Project = {
  title: string;
  desc: string;
  year: string;
  role: string;
  tags: string[];
  link?: string;
  // Cover options, in priority order:
  //   phones  → up to 3 app screens in phone frames
  //   screens → up to 3 web screenshots in browser windows
  //   cover   → a single image slot (falls back to a flat title cover)
  phones?: string[];
  screens?: string[];
  cover?: string;
  bg: string;
};

export const projects: Project[] = [
  {
    title: "Maqsad — Android",
    desc: "Android app for MDCAT, ECAT, BCAT and O-Level prep: live classes on an ExoPlayer player with live chat, mock and timed Grand Tests, paywalls and payments, and an R8 migration that cut the app by 72.5%. 1M+ downloads, 3.9★.",
    year: "2025 — Now",
    role: "Senior Software Engineer",
    tags: ["Kotlin", "Compose", "Media3", "Hilt", "R8"],
    link: "https://play.google.com/store/apps/details?id=io.maqsad",
    phones: ["/screenshots/maqsad/1.webp", "/screenshots/maqsad/2.webp", "/screenshots/maqsad/3.webp"],
    bg: "#1d1f3a",
  },
  {
    title: "Maqsad — Web",
    desc: "The Next.js 16 / React 19 web app that brings the Android features to the browser: Grand Tests with persisted timers, university filters and single-session sign-in with forced logout, on NestJS/gRPC services and DynamoDB via AWS CDK.",
    year: "2025 — Now",
    role: "Senior Software Engineer",
    tags: ["Next.js", "React 19", "NestJS", "gRPC", "AWS CDK"],
    link: "https://maqsad.io",
    screens: ["/screenshots/maqsad-web/1.webp", "/screenshots/maqsad-web/2.webp", "/screenshots/maqsad-web/3.webp"],
    bg: "#2b2d5c",
  },
  {
    title: "Onvexia",
    desc: "Crypto research across 2,600+ coins: 1.6M social posts with LLM sentiment, whale flows over 150K labelled wallets, and REST, GraphQL and a public MCP server with 66 tools. Ingest 2h08 → 42 min, whale endpoint 24 s → 42 ms.",
    year: "2025 — Now",
    role: "Founder & AI Engineer",
    tags: ["Go", "Python", "TimescaleDB", "React", "MCP"],
    link: "https://onvexia.com",
    screens: ["/images/work/onvexia.webp", "/images/services/ai-2.webp", "/images/services/ai-1.webp"],
    bg: "#0f2a33",
  },
  {
    title: "Neural Delta X",
    desc: "Algorithmic trading platform for Binance spot and futures: rule-based and AI strategy engines (DeepSeek, GPT, Claude), an AI planner that turns a chart screenshot into exact trade conditions, an O(n) backtester 85× faster and Grafana observability.",
    year: "2025",
    role: "Algo/Quant & AI Engineer",
    tags: ["Go", "React", "Redis", "LLMs", "Grafana"],
    screens: ["/screenshots/neural-delta-x/1.webp", "/screenshots/neural-delta-x/3.webp", "/screenshots/neural-delta-x/2.webp"],
    bg: "#3a2c08",
  },
  {
    title: "AngelVPN",
    desc: "White-label VPN for phone, Android TV and Fire TV: WireGuard, IKEv2, OpenVPN, split tunnelling and subscriptions. 50K+ downloads.",
    year: "2022 — 2025",
    role: "Lead Android Engineer",
    tags: ["Kotlin", "Compose", "WireGuard", "Android TV"],
    link: "https://play.google.com/store/apps/details?id=com.angelvpn",
    phones: ["/screenshots/angelvpn/1.webp", "/screenshots/angelvpn/3.webp", "/screenshots/angelvpn/4.webp"],
    bg: "#e9f1fb",
  },
  {
    title: "SecureVPN by Webroot",
    desc: "Android VPN for a global security brand on the same white-label platform: protocol handling, certificate pinning, always-on protection and a store-compliant subscription flow.",
    year: "2022 — 2025",
    role: "Android Engineer",
    tags: ["Kotlin", "AtomSDK", "IKEv2", "WireGuard", "Play Billing"],
    link: "https://play.google.com/store/apps/details?id=com.webroot.android.vpn",
    phones: ["/screenshots/webroot/1.webp", "/screenshots/webroot/3.webp", "/screenshots/webroot/4.webp"],
    bg: "#14321f",
  },
  {
    title: "PureVPN",
    desc: "Android work at PureSquare on PureVPN's AtomSDK core, the VPN engine shared with the PureWL white-label apps: protocol handling, tunnels that survive background limits, subscriptions and releases for phone and TV.",
    year: "2024 — 2025",
    role: "Senior Android Engineer",
    tags: ["Kotlin", "AtomSDK", "WireGuard", "Android TV"],
    link: "https://play.google.com/store/apps/details?id=com.gaditek.purevpnics",
    phones: ["/screenshots/purevpn/1.webp", "/screenshots/purevpn/3.webp", "/screenshots/purevpn/6.webp"],
    bg: "#1b1033",
  },
  {
    title: "Cheflic",
    desc: "Food-delivery app in the style of Foodpanda: restaurant discovery, menus and cart, checkout, and live order tracking on Google Maps with push notifications at every step.",
    year: "2022",
    role: "Android Engineer",
    tags: ["Kotlin", "Java", "Google Maps", "Firebase", "FCM"],
    phones: ["/screenshots/cheflic/1.webp", "/screenshots/cheflic/2.webp", "/screenshots/cheflic/3.webp"],
    bg: "#f2542d",
  },
  {
    title: "Premium Crypto Signals",
    desc: "Web app for paid crypto trading signals: spot and futures setups with entry, targets and stop-loss, live Binance prices over WebSockets, automatic target and stop tracking, and a performance history.",
    year: "2021 — 2022",
    role: "Full-Stack Developer",
    tags: ["React", "WebSockets", "Django", "Binance API"],
    screens: ["/screenshots/crypto-signals/1.webp", "/screenshots/crypto-signals/2.webp"],
    bg: "#2a2410",
  },
  {
    title: "California Pizza",
    desc: "Ordering app for one of Pakistan's best-known pizza chains: menu and deals, cart, checkout and payments. Built at SYBRID alongside McDonald's.",
    year: "2018",
    role: "Mobile Developer",
    tags: ["Android", "React Native", "Firebase", "Payments"],
    phones: ["/screenshots/california-pizza/3.webp", "/screenshots/california-pizza/4.webp", "/screenshots/california-pizza/5.webp"],
    bg: "#b81f26",
  },
];

export const moreProjects = [
  { name: "openrouter-android-auto", desc: "Kotlin + Compose SDK for OpenRouter on Maven Central" },
  { name: "openrouter-auto-connect", desc: "OpenRouter SDKs in TS, Python, Go and Rust on npm & PyPI" },
  { name: "Lantern Share", desc: "Private LAN file & clipboard sharing as a Windows/macOS background service" },
  { name: "onvexia-mcp", desc: "Public MCP server for AI agents (awesome-mcp-servers)" },
  { name: "kickoff26", desc: "World Cup 2026 site: Next.js 16, 6 languages, RTL, Babylon.js game" },
  { name: "social-media-agentic-manager", desc: "Google ADK orchestrator with 7 sub-agents" },
  { name: "Seco Seals", desc: "Freelance Android app on Google Play" },
];

export const services = [
  {
    title: "Android Apps",
    tags: ["Compose", "Coroutines", "Hilt", "R8", "fastlane"],
    desc: "Kotlin and Jetpack Compose for phones, Android TV and Fire TV: live video, payments and subscriptions, offline caching, and small, fast release builds.",
    images: ["/screenshots/maqsad/4.webp", "/screenshots/angelvpn/6.webp"],
  },
  {
    title: "Full-Stack Web & APIs",
    tags: ["Next.js", "NestJS", "gRPC", "DynamoDB", "CDK"],
    desc: "Next.js with server rendering, NestJS and Go services, gRPC and GraphQL contracts, and AWS infrastructure in code.",
    images: ["/images/services/web-1.webp", "/images/services/web-2.webp"],
  },
  {
    title: "AI Agents & Data",
    tags: ["MCP", "OpenRouter", "Python", "TimescaleDB"],
    desc: "LLM pipelines measured against eval sets, MCP servers that let AI agents use your data, and agentic coding with human review.",
    images: ["/images/services/ai-1.webp", "/images/services/ai-2.webp"],
  },
];

export const tech = {
  title: ["See", "how", "my", "toolkit", "turns", "ideas", "into", "fast,", "reliable", "products"],
  items: [
    { name: "Agentic Engineering", duty: "Claude Code, MCP servers, AI agents", value: 90, icon: "siClaude" },
    { name: "Kotlin", duty: "Primary language for Android", value: 95, icon: "siKotlin" },
    { name: "Jetpack Compose", duty: "Modern Android UI", value: 92, icon: "siJetpackcompose" },
    { name: "Next.js & TypeScript", duty: "Web apps with server rendering", value: 88, icon: "siNextdotjs" },
    { name: "NestJS & gRPC", duty: "Backend services and contracts", value: 82, icon: "siNestjs" },
    { name: "Go, Rust & Python", duty: "Services, SDKs and data pipelines", value: 80, icon: ["siGo", "siRust", "siPython"] },
    { name: "Docker & CI/CD", duty: "GitHub Actions, fastlane, Linux", value: 78, icon: "siDocker" },
    { name: "AWS", duty: "DynamoDB, CDK, AppSync, Amplify", value: 75, icon: "aws" },
  ],
  more: [
    "Java", "Rust", "Material 3", "Coroutines & Flow", "Hilt / Dagger 2", "Room", "Retrofit / OkHttp",
    "ExoPlayer / Media3", "WorkManager", "In-App Billing", "Android TV", "R8 / ProGuard",
    "MVVM", "Clean Architecture", "React", "React Native", "Redux-Saga", "Tailwind",
    "GraphQL", "Django", "FastAPI", "Firebase",
    "PostgreSQL / TimescaleDB", "Redis", "MongoDB", "Grafana",
    "JUnit", "MockK", "Espresso", "Robolectric", "Claude Code", "MCP", "Google ADK", "x402", "Prometheus / Loki / Tempo",
  ],
};

export const openSource = {
  title: ["Code", "I've", "shipped", "into", "tools", "developers", "use"],
  counters: [
    { value: 12, suffix: "", label: "Merged pull requests" },
    { value: 9, suffix: "", label: "Open-source projects" },
  ],
  prs: [
    { repo: "square/leakcanary", text: "Heap-analysis results now reach main-process listeners when analysis runs in a separate process.", url: "https://github.com/square/leakcanary/pull/2812", num: 2812 },
    { repo: "JetBrains/koog", text: "Fixed @Contextual property resolution in the JSON schema generator used for LLM prompts.", url: "https://github.com/JetBrains/koog/pull/1875", num: 1875 },
    { repo: "mockk/mockk", text: "Added the mockk-context-parameters module so Kotlin context parameters can be mocked.", url: "https://github.com/mockk/mockk/pull/1521", num: 1521 },
    { repo: "ChuckerTeam/chucker", text: "Fixed a memory leak in TransactionActivity and a Gson crash on cold start (2 PRs).", url: "https://github.com/ChuckerTeam/chucker/pull/1604", num: 1604 },
    { repo: "jordond/MaterialKolor", text: "Ported the tone-99 chroma fix and added consumer ProGuard/R8 rules (2 PRs).", url: "https://github.com/jordond/MaterialKolor/pull/495", num: 495 },
    { repo: "PixelPlayerHQ/PixelPlayer", text: "Navigation-bar inset padding and a cache sort-stability bug (2 PRs).", url: "https://github.com/PixelPlayerHQ/PixelPlayer/pull/1898", num: 1898 },
    { repo: "rafaeltonholo/svg-to-compose", text: "Added an --exclude-dir CLI flag for directory-level filtering.", url: "https://github.com/rafaeltonholo/svg-to-compose/pull/316", num: 316 },
    { repo: "rohitg00/agentmemory", text: "PostToolUse hook now reads tool_response instead of tool_output.", url: "https://github.com/rohitg00/agentmemory/pull/561", num: 561 },
    { repo: "FossifyOrg/Calendar", text: "Title and location fields now wrap long text instead of cutting it off.", url: "https://github.com/FossifyOrg/Calendar/pull/1178", num: 1178 },
  ],
};

export const contact = {
  title: [
    "Have", "a", "role", "or", "a", "project?", "Let's", "build", "it", "—", "drop",
    "me", "an", "email", "or", "fill", "the", "form,", "available", "now",
  ],
  quote: "Talk is cheap. Show me the code.",
  quoteBy: "Linus Torvalds",
};

export const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "stack", label: "Stack" },
  { id: "work", label: "Work" },
  { id: "services", label: "Services" },
  { id: "open-source", label: "Open source" },
  { id: "contact", label: "Contact" },
] as const;
