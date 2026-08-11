import { createFileRoute, Link } from "@tanstack/react-router";
import { ThePjGraphic, PjExplainedGraphic, MocGraphic } from "@/components/site/ChannelGraphics";
import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Placeholder } from "@/components/site/Placeholder";
import { VideoStage } from "@/components/site/VideoStage";
import { VideoCard, type VideoItem } from "@/components/site/VideoCard";
import { Ticker } from "@/components/site/Ticker";
import { BounceCards } from "@/components/BounceCards";
import { useScrollReveal } from "@/hooks/useScrollReveal";

gsap.registerPlugin(ScrollTrigger);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PJ Explained — Movies, Stories & Internet Culture, Explained" },
      {
        name: "description",
        content:
          "The official home of PJ Explained. Movie breakdowns, series theories and pop-culture explainers for 2.6M+ fans.",
      },
      { property: "og:title", content: "PJ Explained — Movies & Stories, Explained" },
      {
        property: "og:description",
        content: "Breakdowns, theories and easter eggs. The explainer channel, now a website.",
      },
    ],
  }),
  component: Home,
});

const topPerforming: VideoItem[] = [
  {
    category: "Movies",
    title: "Toxic Movie Is Done Bro.",
    meta: "8:18 • 1.2M views • 1 week ago",
    thumb: "thumbnail",
    videoId: "kM5z9K0FhtI",
  },
  {
    category: "Trailer Breakdown",
    title: "Yash Nanga Kyu Hai? ⋮ Toxic Trailer",
    meta: "6:31 • 1.5M views • 2 weeks ago",
    thumb: "thumbnail",
    videoId: "9Dc-M8zr8Ck",
  },
  {
    category: "Analysis",
    title: "Why ₹4000 CR Can't Beat Ramanand Sagar's Ramayan",
    meta: "8:06 • 890K views • 3 weeks ago",
    thumb: "thumbnail",
    videoId: "FqygErTwcGU",
  },
  {
    category: "Comics",
    title: "What Happens After Spider-Man Brand New Day?",
    meta: "13:54 • 1.1M views • 1 month ago",
    thumb: "thumbnail",
    videoId: "OxBx6JuIeDs",
  },
  {
    category: "Movies",
    title: "Why People Hate Ramayan",
    meta: "9:40 • 1.3M views • 1 month ago",
    thumb: "thumbnail",
    videoId: "jiL-iV_LF88",
  },
];

const latest: VideoItem[] = [
  {
    category: "Podcast",
    title: "Secrets of Bhediya 2, Stree 3 & Mahavatar with Amar Kaushik on Men of Culture-206",
    meta: "Men of Culture • 206",
    thumb: "thumbnail",
    videoId: "du0454QnpGg",
  },
  {
    category: "Podcast",
    title: "“Took a loan to make Ekaki” Ashish Chanchalani Returns - Men of Culture-205",
    meta: "Men of Culture • 205",
    thumb: "thumbnail",
    videoId: "Drei6eH-4fY",
  },
  {
    category: "Podcast",
    title: "How He made Mahavatar Narsimha - India’s Biggest Animation || Men Of Culture 192",
    meta: "Men of Culture • 192",
    thumb: "thumbnail",
    videoId: "Iyf75BTuQus",
  },
];

const topics = [
  { n: "01", title: "Marvel & DC", body: "Phases, cameos, leaks and the lore behind the noise." },
  { n: "02", title: "Indian Cinema", body: "Bollywood and regional releases, reviewed honestly." },
  { n: "03", title: "Anime & Comics", body: "Arcs, adaptations and source-material deep dives." },
  { n: "04", title: "Internet Culture", body: "Trends, discourse and why the timeline is arguing." },
];

const channelCards = [
  {
    tag: "Vlogs & More",
    title: "thePJ",
    description: "Behind the scenes, vlogs, and personal updates.",
    Graphic: ThePjGraphic,
    category: "Second Channel",
    url: "https://www.youtube.com/@thepjoffical",
  },
  {
    tag: "Main Channel",
    title: "PJ Explained",
    description: "Movie breakdowns, series theories and pop-culture explainers.",
    Graphic: PjExplainedGraphic,
    category: "Explainers",
    url: "https://www.youtube.com/@PJExplained",
  },
  {
    tag: "Podcast",
    title: "Men of Culture",
    description: "The ultimate hangout spot for movie buffs and storytellers.",
    Graphic: MocGraphic,
    category: "Community",
    url: "https://www.youtube.com/@menofculturepodcast",
  },
];

const stats = [
  { value: "2.6M+", label: "Subscribers" },
  { value: "1.9B", label: "Total views" },
  { value: "500K+", label: "Community members" },
  { value: "3×", label: "Uploads per week" },
];

const tickerItems = [
  "New Breakdown Every Week",
  "Marvel • DC • Bollywood • Anime",
  "PJ Explained",
  "2.6M+ Subscribers",
];

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroTagsRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);
  const charRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const backTapeRef = useRef<HTMLDivElement>(null);
  const frontTapeRef = useRef<HTMLDivElement>(null);
  const heroCopyRef = useRef<HTMLDivElement>(null);

  // Video control
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  // GSAP hero entrance + scroll parallax
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ── Pre-set GSAP transforms to lock in exact percentages ──
      // This prevents GSAP from parsing computed pixel matrices and double-translating.
      gsap.set(bgTextRef.current, { yPercent: -50, x: 0, y: 0, transformPerspective: 1000 });
      gsap.set(circleRef.current, { xPercent: -50, yPercent: -50, x: 0, y: 0 });
      gsap.set(backTapeRef.current, { xPercent: -50, yPercent: -50, rotation: -2, x: 0, y: 0 });
      gsap.set(frontTapeRef.current, { xPercent: -50, rotation: -2, x: 0, y: 0 });
      gsap.set(charRef.current, { x: 0, y: 0 });

      // ── Entrance animation
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        heroRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1.2 },
      )
        .fromTo(
          circleRef.current,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 2, ease: "expo.out" },
          "-=1.0"
        )
        .fromTo(
          bgTextRef.current,
          { opacity: 0, y: 50, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "expo.out" },
          "-=1.2",
        )
        .fromTo(
          ".hero-char",
          { opacity: 0, rotateY: 90, scale: 0.8 },
          { opacity: 1, rotateY: 0, scale: 1, duration: 0.8, stagger: 0.08, ease: "back.out(1.5)" },
          "-=1.0"
        )
        .fromTo(
          charRef.current,
          { opacity: 0, y: "100vh", scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 1.25, ease: "power4.out" },
          "-=0.7",
        )
        .fromTo(
          ".hero-tag",
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.5, stagger: 0.08, ease: "back.out(2)" },
          "-=1.0"
        )
        .fromTo(
          backTapeRef.current,
          { x: "-200vw", opacity: 0 },
          { 
            x: 0, 
            opacity: 0.8, 
            duration: 0.8, 
            ease: "expo.out"
          },
          "-=0.2"
        )
        .fromTo(
          heroCopyRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4",
        );

      // ── Scroll parallax: creative depth effect using native GSAP ──
      // Created in onComplete to prevent GSAP from recording pre-entrance starting values (which caused elements to disappear on scroll-back)
      tl.eventCallback("onComplete", () => {
        gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        })
          .to(bgTextRef.current, { y: -30, scale: 1.2, opacity: 0.1, ease: "none" }, 0)
          .to(circleRef.current, { y: 150, scale: 0.9 }, 0)
          .to(backTapeRef.current, { y: -100 }, 0)
          .to(".hero-char-img", { y: 150, scale: 0.95 }, 0)
          .to(frontTapeRef.current, { y: -150 }, 0);
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Scroll-reveal refs
  const latestRef = useScrollReveal<HTMLDivElement>();
  const topicsRef = useScrollReveal<HTMLDivElement>();
  const povRef = useScrollReveal<HTMLDivElement>();
  const featuredRef = useScrollReveal<HTMLDivElement>();
  const statsRef = useScrollReveal<HTMLDivElement>();
  const moctaleRef = useScrollReveal<HTMLDivElement>();
  const latestGridRef = useScrollReveal<HTMLDivElement>();
  const topicsGridRef = useScrollReveal<HTMLDivElement>();
  const topicsImgsRef = useScrollReveal<HTMLDivElement>();
  const featuredBodyRef = useScrollReveal<HTMLDivElement>();

  return (
    <>
      {/* ── 01 / HERO ──────────────────────────────────── */}
      <div ref={heroRef} className="relative opacity-0">
        <section
          className="relative flex h-[100svh] min-h-[600px] w-full flex-col items-center justify-center bg-black noise-bg"
          aria-label="Hero"
        >
          {/* Solid red circle */}
          <div
            ref={circleRef}
            className="pointer-events-none absolute left-1/2 top-[60%] h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-deep-red md:h-[450px] md:w-[450px] lg:h-[600px] lg:w-[600px] opacity-0"
            aria-hidden
          />

          <div className="relative mx-auto flex h-full w-full max-w-site flex-col justify-between px-6 pt-10 pb-0 md:pt-16">
            {/* ── Big hero text + character image ── */}
            <div className="relative mt-auto flex flex-1 flex-col items-center justify-center text-center">
              {/* Background display text & top tags */}
              <div
                ref={bgTextRef}
                className="pointer-events-none absolute inset-x-0 top-[50%] -translate-y-1/2 flex flex-col items-center select-none opacity-0"
                style={{ perspective: "1000px" }}
                aria-hidden
              >
                {/* 2 straight horizontal above PJ EXPLAINED text */}
                <span style={{ transform: "none" }} className="hero-tag opacity-0 display-hero pointer-events-none absolute left-[5%] sm:left-[8%] md:left-[12%] lg:left-[15%] -top-[20px] sm:-top-[60px] md:-top-[90px] z-[15] select-none text-[clamp(0.7rem,1.3vw,1.15rem)] tracking-widest text-paper/90 drop-shadow-md">EXPLAINER</span>
                <span style={{ transform: "none" }} className="hero-tag opacity-0 display-hero pointer-events-none absolute right-[5%] sm:right-[8%] md:right-[12%] lg:right-[15%] -top-[20px] sm:-top-[60px] md:-top-[90px] z-[15] select-none text-[clamp(0.7rem,1.3vw,1.15rem)] tracking-widest text-paper/90 drop-shadow-md translate-x-[15px] sm:translate-x-[20px] md:translate-x-[25px] lg:translate-x-[30px]">BREAKDOWNS</span>

                <h1
                  className="display-hero mx-auto w-full whitespace-nowrap px-4 text-center text-[clamp(3.5rem,9.5vw,9.5rem)] leading-none text-paper"
                  style={{ lineHeight: 0.9 }}
                >
                  {"PJ EXPLAINED".split("").map((char, i) => (
                    <span key={i} className="hero-char opacity-0 inline-block whitespace-pre">
                      {char}
                    </span>
                  ))}
                </h1>

                {/* 2 straight horizontal below PJ EXPLAINED text */}
                <span style={{ transform: "none" }} className="hero-tag opacity-0 display-hero pointer-events-none absolute left-[5%] sm:left-[8%] md:left-[12%] lg:left-[15%] -bottom-[20px] sm:-bottom-[60px] md:-bottom-[90px] z-[15] select-none text-[clamp(0.7rem,1.3vw,1.15rem)] tracking-widest text-paper/90 drop-shadow-md">REVIEWS</span>
                <span style={{ transform: "none" }} className="hero-tag opacity-0 display-hero pointer-events-none absolute right-[5%] sm:right-[8%] md:right-[12%] lg:right-[15%] -bottom-[20px] sm:-bottom-[60px] md:-bottom-[90px] z-[15] select-none text-[clamp(0.7rem,1.3vw,1.15rem)] tracking-widest text-paper/90 drop-shadow-md">THEORIES</span>
              </div>


              {/* ── Background Tape (Behind Character) ── */}
              <div
                ref={backTapeRef}
                className="pointer-events-none absolute left-1/2 top-[-2%] z-[5] w-[300vw] -translate-x-1/2 -translate-y-1/2 -rotate-2 transform"
                style={{ opacity: 0 }}
              >
                <Ticker 
                  items={["HIDDEN DETAILS", "EASTER EGGS", "BREAKDOWNS", "THEORIES"]} 
                  className="border-y-[2px] border-deep-red/50 bg-deep-red/80 py-2"
                  textClassName="text-xs sm:text-sm font-black tracking-[0.4em] text-white/90 uppercase"
                  speed="200s"
                />
              </div>

              {/* Character image — sits in front of text and back tape */}
              <div
                ref={charRef}
                className="relative z-10 mx-auto mt-auto w-[85%] min-w-[280px] max-w-[800px] md:w-[75%] opacity-0"
              >
                <img 
                  src="/images/HERO-nobg-clean.png" 
                  alt="PJ" 
                  className="hero-char-img w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] relative z-10 origin-bottom"
                />
              </div>
            </div>
          </div>

          {/* ── Ticker banner (Angled Caution Tape) ── */}
          <div 
            ref={frontTapeRef}
            className="absolute -bottom-8 left-1/2 z-20 w-[110%] -translate-x-1/2 -rotate-2 transform"
          >
            <Ticker 
              items={tickerItems} 
              className="border-y-[4px] border-ink bg-headline-yellow py-4 sm:py-6 text-ink" 
              textClassName="text-base sm:text-lg md:text-xl font-black uppercase tracking-widest"
            />
            {/* The curtain that hides the character as it sinks */}
            <div className="absolute left-0 top-[98%] h-[150vh] w-full bg-black" aria-hidden />
          </div>
        </section>

        {/* ── CTA row (moved below hero for dedicated landing scene) ── */}
        <section className="relative z-30 bg-ink text-paper">
          <div className="mx-auto max-w-site px-6">
            <div ref={heroCopyRef} className="grid gap-6 py-16 md:grid-cols-[1fr_auto] md:items-end opacity-0">
              <p className="max-w-xl text-lg text-ash">
                The sharp friend who already watched the thing, investigated the weird part, and is
                about to explain what actually matters.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.youtube.com/@PJExplained"
                  target="_blank"
                  rel="noreferrer noopener"
                  id="hero-subscribe-btn"
                  className="label-xs rounded-[10px] bg-signal px-6 py-3 text-white transition-opacity hover:opacity-90 active:scale-95"
                >
                  Subscribe on YouTube
                </a>
                <Link
                  to="/videos"
                  id="hero-watch-btn"
                  className="label-xs rounded-[10px] border border-border px-6 py-3 transition-colors hover:border-signal/50"
                >
                  Watch latest
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── Video Title BounceCards ────────────────────── */}
      <section className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden border-y border-border bg-ink text-paper py-20">
        
        <div className="mb-12 text-center z-10">
          <p className="label-xs text-signal">Trending Videos</p>
          <h2 className="display mt-2 text-[clamp(1.5rem,3.75vw,2.25rem)]">Top Performing Videos</h2>
        </div>

        <BounceCards
          containerWidth="min(100%, 480px)"
          containerHeight={270}
          enableHover={true}
          transformStyles={[
            'rotate(5deg) translate(-300px)',
            'rotate(2.5deg) translate(-150px)',
            'rotate(0deg)',
            'rotate(-2.5deg) translate(150px)',
            'rotate(-5deg) translate(300px)'
          ]}
          mobileTransformStyles={[
            'rotate(5deg) translate(-60px)',
            'rotate(2.5deg) translate(-30px)',
            'rotate(0deg)',
            'rotate(-2.5deg) translate(30px)',
            'rotate(-5deg) translate(60px)'
          ]}
          hoverOffset={280}
          mobileHoverOffset={70}
          items={topPerforming.map((v, i) => {
            const href = v.videoId ? `https://www.youtube.com/watch?v=${v.videoId}` : "https://www.youtube.com/@PJExplained/videos";
            return (
              <a 
                key={i}
                href={href}
                target={v.videoId ? "_blank" : undefined}
                rel={v.videoId ? "noreferrer noopener" : undefined}
                className="group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[24px] border border-border bg-carbon shadow-2xl card-glow transition-all hover:border-signal/50"
              >
                {/* Background image if videoId exists */}
                {v.videoId ? (
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105"
                    style={{ backgroundImage: `url(https://img.youtube.com/vi/${v.videoId}/maxresdefault.jpg)` }}
                  />
                ) : null}
                {/* Overlay gradient so text is readable */}
                {v.videoId ? (
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/60 to-transparent" />
                ) : null}

                <div className="relative z-10 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-signal text-white shadow-[0_0_15px_rgba(239,35,60,0.5)] transition-transform duration-300 group-hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 translate-x-0.5">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="relative z-10 p-6 pt-0">
                  <p className="label-xs text-headline-yellow drop-shadow-md tracking-widest">{v.category}</p>
                  <h3 className="display mt-3 text-lg leading-tight tracking-wider drop-shadow-md">{v.title}</h3>
                  <p className="mt-2 text-xs text-paper drop-shadow-md tracking-widest">{v.meta.split('•')[1]?.trim()}</p>
                </div>
              </a>
            );
          })}
        />
      </section>

      {/* ── 02 / MOC SPECIALS ─────────────────────────── */}
      <section id="latest" className="bg-ink text-paper py-24">
        <div className="mx-auto max-w-site px-6">
          <div
            ref={latestRef}
            className="reveal-up"
          >
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="label-xs text-signal">02 / MOC Specials</p>
                <h2 className="display mt-2 text-[clamp(1.5rem,3.75vw,2.4rem)]">Men of Culture Podcast</h2>
              </div>
              <Link to="/videos" className="label-xs text-ash transition-colors hover:text-paper">
                View all podcasts →
              </Link>
            </div>
          </div>
  
          <div
            ref={latestGridRef}
            className="reveal-stagger mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {latest.map((v) => (
              <VideoCard key={v.title} item={v} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 03 / WHAT I COVER ──────────────────────────── */}
      <section className="border-y border-border bg-paper py-24 text-ink">
        <div className="mx-auto max-w-site px-6">
          <div ref={topicsRef} className="reveal-up">
            <p className="label-xs text-signal">03 / What I cover</p>
            <h2 className="display mt-2 max-w-3xl text-[clamp(1.5rem,4.12vw,2.62rem)]">
              Four obsessions, one explainer
            </h2>
          </div>

          <div
            ref={topicsGridRef}
            className="reveal-stagger mt-12 grid gap-px overflow-hidden rounded-[16px] border border-ink/15 bg-ink/15 md:grid-cols-2 lg:grid-cols-4"
          >
            {topics.map((t) => (
              <div
                key={t.n}
                className="group bg-paper p-8 transition-colors duration-300 hover:bg-ink hover:text-paper"
              >
                <p className="label-xs text-accent-blue">{t.n}</p>
                <h3 className="display mt-3 text-2xl">{t.title}</h3>
                <p className="mt-3 text-ink/70 transition-colors group-hover:text-paper/70">
                  {t.body}
                </p>
              </div>
            ))}
          </div>

          <div
            ref={topicsImgsRef}
            className="reveal-stagger mt-12 grid gap-6 md:grid-cols-3"
          >
            {channelCards.map((card) => (
              <a
                key={card.title}
                href={card.url}
                target="_blank"
                rel="noreferrer noopener"
                className="group cursor-pointer block overflow-hidden rounded-[16px] border border-ink/15 bg-paper shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-black">
                  {/* Custom Graphic */}
                  <div className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105">
                    <card.Graphic />
                  </div>
                  
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-70 transition-opacity group-hover:opacity-50 pointer-events-none" />
                  {/* Category Badge */}
                  <span className="absolute z-20 top-3 left-3 rounded-full border border-white/20 bg-ink/75 px-3 py-1 text-[11px] font-medium tracking-wider text-paper uppercase backdrop-blur-md">
                    {card.category}
                  </span>


                  {/* Play/Arrow Icon Hover Overlay */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center bg-ink/0 transition-colors duration-300 group-hover:bg-ink/30">
                    <div className="flex h-12 w-12 translate-y-3 items-center justify-center rounded-full bg-signal opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 shadow-[0_0_20px_rgba(239,35,60,0.6)]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="white"
                        className="h-5 w-5"
                      >
                        <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                      </svg>
                    </div>
                  </div>
                </div>


              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04 / THE POV ───────────────────────────────── */}
      <section className="bg-ink text-paper py-24">
        <div className="mx-auto max-w-site px-6">
          <div
            ref={povRef}
            className="reveal-up grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-[16px] border border-ink/15 shadow-xl bg-black">
              <img
                src="/images/pj_pov.png"
                alt="PJ at the desk"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 pointer-events-none rounded-[16px] shadow-[inset_0_0_40px_rgba(0,0,0,0.8)]" />
            </div>
            <div>
              <p className="label-xs text-signal">04 / The POV</p>
              <blockquote className="display mt-4 border-l-2 border-signal pl-6 text-[clamp(1.35rem,3.38vw,2.25rem)] leading-relaxed tracking-wider">
                "I don't review films to sound smart. I explain them so the{" "}
                <span className="text-headline-yellow">story</span> finally lands."
              </blockquote>
              <p className="mt-6 max-w-xl text-ash leading-loose tracking-wide">
                Nine years of breakdowns, one rule: no gatekeeping. Whether it's a twenty-film
                timeline or a two-minute trailer, the goal is that you walk away actually
                understanding it.
              </p>
              <Link
                to="/about"
                id="read-story-btn"
                className="label-xs mt-8 inline-block rounded-[10px] border border-border px-6 py-3 transition-colors hover:border-signal/50"
              >
                Read the full story
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* ── STATS BANNER ───────────────────────────────── */}
      <section className="bg-ink pb-24 text-paper">
        <div className="mx-auto max-w-site px-6">
          <div className="rounded-[16px] border border-border bg-carbon overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 className="display text-[clamp(2.5rem,4vw,3.5rem)] leading-none text-paper mb-2">2.6M+</h3>
                <p className="label-xs text-ash uppercase tracking-widest text-[10px] md:text-xs">Subscribers</p>
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 className="display text-[clamp(2.5rem,4vw,3.5rem)] leading-none text-paper mb-2">1.9B+</h3>
                <p className="label-xs text-ash uppercase tracking-widest text-[10px] md:text-xs">Total Views</p>
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 className="display text-[clamp(2.5rem,4vw,3.5rem)] leading-none text-paper mb-2">500K+</h3>
                <p className="label-xs text-ash uppercase tracking-widest text-[10px] md:text-xs">Community Members</p>
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 className="display text-[clamp(2.5rem,4vw,3.5rem)] leading-none text-paper mb-2">3x</h3>
                <p className="label-xs text-ash uppercase tracking-widest text-[10px] md:text-xs">Uploads Per Week</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 05 / COMMUNITY ──────────────────────────────── */}
      <section className="border-y border-border bg-paper text-ink py-24">
        <div className="mx-auto max-w-site px-6">
          <div ref={featuredRef} className="reveal-up">
            <p className="label-xs text-signal uppercase">05 / Community</p>
            <h2 className="display mt-2 text-[clamp(2.0rem,4.5vw,3.25rem)] text-ink">
              JOIN <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-signal">MOCTALE</span>
            </h2>
          </div>
          
          <div
            ref={featuredBodyRef}
            className="reveal-up mt-12 grid gap-y-12 gap-x-12 lg:grid-cols-[1fr_340px] lg:items-center"
          >
            {/* Top Left: Video */}
            <div className="relative aspect-video w-full overflow-hidden rounded-[24px] border border-border shadow-2xl bg-black group">
              <video 
                ref={videoRef}
                src="/videos/moctale-promo.mp4" 
                className="w-full h-full object-cover"
                autoPlay 
                muted 
                loop 
                playsInline 
              />
              <button
                onClick={toggleMute}
                className="absolute bottom-4 right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-all hover:bg-black/80 hover:scale-105 opacity-0 group-hover:opacity-100"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                  </svg>
                )}
              </button>
            </div>
            
            {/* Right side: App Card Graphic */}
            <div className="relative flex flex-col items-center justify-center lg:mt-0 mt-8 w-full gap-6">
              <div className="relative w-full rounded-[32px] border border-ink/10 bg-white p-8 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)]">
                {/* Background ambient glow behind the card */}
                <div className="absolute -inset-4 -z-10 rounded-full bg-gradient-to-tr from-accent-blue/20 to-signal/20 blur-2xl opacity-50"></div>
                
                <div className="mb-6 flex items-center justify-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-[24px] bg-gradient-to-br from-ink to-carbon shadow-lg">
                    <img src="/images/moctale-logo.webp" alt="Moctale Logo" className="w-16 h-16 object-contain drop-shadow-md" />
                  </div>
                </div>
                
                <h3 className="text-center display text-3xl tracking-wider text-ink">MOCTALE</h3>
                <p className="mt-1 text-center label-xs text-ash">Official App</p>
                
                <div className="mt-8 flex flex-col items-center gap-3">
                  <div className="h-px w-16 bg-ink/10 mb-2"></div>
                  <p className="text-center text-xs font-semibold uppercase tracking-widest text-ink/50">Now Available On</p>
                  <a 
                    href="https://play.google.com/store/search?q=moctale&c=apps" 
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group flex w-full items-center justify-center gap-3 rounded-[16px] bg-ink px-6 py-4 shadow-lg transition-all duration-300 hover:bg-carbon hover:-translate-y-1 hover:shadow-xl active:scale-95"
                  >
                    <svg viewBox="0 0 512 512" className="h-6 w-6 text-paper transition-transform duration-300 group-hover:scale-110" fill="currentColor">
                      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                    </svg>
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-paper/70 leading-none">Get it on</span>
                      <span className="font-bold text-paper text-sm leading-tight tracking-wide">Google Play</span>
                    </div>
                  </a>
                </div>
              </div>
              
              <a
                href="https://moctale.in"
                target="_blank"
                rel="noreferrer noopener"
                className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-ink px-8 py-4 text-paper shadow-xl transition-all hover:bg-carbon hover:-translate-y-1 hover:shadow-2xl"
              >
                <span className="relative z-10 font-bold uppercase tracking-widest text-sm">Visit moctale.in</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1">
                  <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                </svg>
              </a>
            </div>

            {/* Bottom Left: Text */}
            <div className="lg:col-start-1">
              <h3 className="display text-3xl uppercase tracking-wider">
                Rate, Review, and Discuss
              </h3>
              <p className="mt-4 text-ash text-lg max-w-2xl">
                Moctale is the ultimate hangout spot for movie buffs and storytellers. Discuss theories, connect with the community, and dive deeper into the lore. It's your dedicated space to review movies and shows, find new favorites, and connect with other cinephiles.
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
