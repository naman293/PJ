import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { VideoCard, type VideoItem } from "../components/site/VideoCard";
import { FlatMarquee } from "../components/site/FlatMarquee";
import { Placeholder } from "@/components/site/Placeholder";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "Videos & Breakdowns — PJ Explained" },
      {
        name: "description",
        content:
          "Every PJ Explained breakdown in one place: movie reviews, trailer decodes, theories, anime deep dives and shorts.",
      },
      { property: "og:title", content: "Videos & Breakdowns — PJ Explained" },
      {
        property: "og:description",
        content: "The full archive of explainers, reviews and theories.",
      },
    ],
  }),
  component: Videos,
});

const library: VideoItem[] = [
  {
    category: "Podcast",
    title: "Secrets of Bhediya 2, Stree 3 & Mahavatar with Amar Kaushik on Men of Culture-206",
    meta: "Men of Culture",
    thumb: "thumbnail",
    videoId: "du0454QnpGg",
  },
  {
    category: "Podcast",
    title: "Making Of Stree Universe With The Director Himself | Amar Kaushik | Men Of Culture 149",
    meta: "Men of Culture",
    thumb: "thumbnail",
    videoId: "_vPBw2ckwVA",
  },
  {
    category: "Podcast",
    title: "Sanket Mhatre is Back as Deadpool • Exclusive Podcast After Years! Men of culture 138",
    meta: "Men of Culture",
    thumb: "thumbnail",
    videoId: "hknkGFjl70c",
  },
  {
    category: "Podcast",
    title: "How Article 370 movie was Made - Director explains || Men of Culture 128",
    meta: "Men of Culture",
    thumb: "thumbnail",
    videoId: "cX4Lf7lb8ow",
  },
  {
    category: "Podcast",
    title: "What is Cinema? With @5ocial -\\- Men Of Culture 112",
    meta: "Men of Culture",
    thumb: "thumbnail",
    videoId: "lCfpC3aY1Zk",
  },
  {
    category: "Podcast",
    title: "Personal BakcH0di with @RGBucketList /-/ Men of Culture 88",
    meta: "Men of Culture",
    thumb: "thumbnail",
    videoId: "VWETdRufjPw",
  },
  {
    category: "Podcast",
    title: "Revealing our DIRTY secrets with @ABHIKAREVIEW  || Men of Culture 65",
    meta: "Men of Culture",
    thumb: "thumbnail",
    videoId: "FzisqSm9BZM",
  },
  {
    category: "Podcast",
    title: "How to make Your own Web series with @BBKiVines || Men of Culture 57",
    meta: "Men of Culture",
    thumb: "thumbnail",
    videoId: "vm1f7O9CseA",
  },
  {
    category: "Podcast",
    title: "20 Saal se Hollywood movie dekh rahe hai *papa ke saath* @moviestalks  || Men of Culture 54",
    meta: "Men of Culture",
    thumb: "thumbnail",
    videoId: "8aVh5gr3_S0",
  },
  {
    category: "Podcast",
    title: "We may Change our Career after this @triggeredinsaan  || Men of Culture 49",
    meta: "Men of Culture",
    thumb: "thumbnail",
    videoId: "oQYshNgUyjI",
  },
  {
    category: "Podcast",
    title: "Dark Side of Bollywood Industry with @SurajKumarReview  || Men of Culture 39",
    meta: "Men of Culture",
    thumb: "thumbnail",
    videoId: "N07U5a5wWHg",
  },
  {
    category: "Podcast",
    title: "Superhero Dubbing Industry ke Deep Dark secrets with @yogiboltahai || Men of Culture 33",
    meta: "Men of Culture",
    thumb: "thumbnail",
    videoId: "RynblR2joNU",
  },
  {
    category: "Podcast",
    title: "Dark Side of Bollywood Movie Screenings @TriedRefusedProductions  || Men of Culture 26",
    meta: "Men of Culture",
    thumb: "thumbnail",
    videoId: "yO9StWnPw3Y",
  },
  {
    category: "Podcast",
    title: "Marvel & DC ke lafde.. with the Biggest Superhero Creator in India @SuperSuperOfficial  || Men of Culture 22",
    meta: "Men of Culture",
    thumb: "thumbnail",
    videoId: "SRPWK24v74k",
  },
  {
    category: "Podcast",
    title: "Marvel's Deep Dark secrets Revealed by  @ashish chanchlani vines || Men of culture 18",
    meta: "Men of Culture",
    thumb: "thumbnail",
    videoId: "Y8Q4Y9jk8QY",
  },
  {
    category: "Podcast",
    title: "Women of Culture ke saath flirting kar sakte hai? 😈🙈 || Men of Culture 13",
    meta: "Men of Culture",
    thumb: "thumbnail",
    videoId: "8I89ALZRqGE",
  },
  {
    category: "Podcast",
    title: "Kabhi Doodh me Thumbs-Up mila ke piya hai? 🤮☠ || Men of Culture 8",
    meta: "Men of Culture",
    thumb: "thumbnail",
    videoId: "gRvkh4LwuwE",
  },
];

function Videos() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-paper pt-16 pb-8 lg:pt-24 lg:pb-12">
        <div className="mx-auto max-w-site px-6">
          <p className="label-xs text-signal mb-3">Archive</p>
          
          <div className="flex flex-wrap items-center justify-between gap-6">
            <h1 className="display text-[clamp(2.25rem,7.5vw,5.25rem)]">MOC Specials</h1>
            
            <a
              href="https://www.youtube.com/@menofculturepodcast"
              target="_blank"
              rel="noreferrer noopener"
              className="group mr-10 md:mr-[76px] flex h-12 items-center rounded-full bg-signal px-3 text-sm font-bold text-white transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:px-6 shadow-[0_0_20px_rgba(239,35,60,0.3)] hover:shadow-[0_0_30px_rgba(239,35,60,0.5)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 shrink-0 transition-transform duration-500 group-hover:scale-110">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
              <div className="grid grid-cols-[0fr] transition-[grid-template-columns] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:grid-cols-[1fr]">
                <span className="overflow-hidden whitespace-nowrap opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="pl-2 block">MOC Podcast</span>
                </span>
              </div>
            </a>
          </div>

          <p className="mt-4 max-w-xl text-ash">
            The full archive of Men of Culture special podcast episodes and deep conversations.
          </p>
        </div>
      </section>

      <section 
        className="relative z-10 -mt-8 bg-ink text-paper pt-12 pb-32 md:pt-16 md:pb-40"
        style={{ clipPath: "polygon(0 6vw, 100% 0, 100% calc(100% - 6vw), 0 100%)" }}
      >
        <div className="mx-auto max-w-site px-6">
          <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-center">
          <div className="relative w-full rounded-2xl overflow-hidden bg-ink-light">
            <img 
              src="/images/moc_placeholder.png" 
              alt="Men of Culture Creators" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="label-xs text-signal">The Creators</p>
            <h2 className="display mt-3 text-4xl">Men of Culture</h2>
            <p className="mt-4 text-ash text-lg leading-relaxed">
              Join the MOC creators for unfiltered conversations, behind-the-scenes stories, and detailed discussions with filmmakers, guests, and the community.
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* ── THE ARCHIVE - PART 1 (Off-White) ───────────── */}
      <section className="relative border-b border-border bg-paper pt-32 pb-24 text-ink overflow-hidden -mt-[6vw]">
        <div className="mx-auto max-w-site px-6">
          <div className="mb-12 z-10 max-w-2xl">
            <p className="label-xs text-signal">The Archive</p>
            <h2 className="display mt-3 text-4xl uppercase">Trending Episodes</h2>
            <p className="mt-4 text-ash text-lg leading-relaxed">
              Catch up on the most watched and highly rated episodes. These are the fan favorites that everyone in the community is talking about.
            </p>
          </div>
        </div>
        
        {/* Full-bleed marquee */}
        <div className="w-full mt-12 mb-8">
          <FlatMarquee items={library.slice(0, 8)} direction="left" />
        </div>
      </section>

      {/* ── THE ARCHIVE - PART 2 (Black) ───────────────── */}
      <section className="relative border-b border-border bg-ink py-24 text-paper overflow-hidden">
        <div className="mx-auto max-w-site px-6">
          <div className="mb-12 z-10 max-w-2xl">
            <p className="label-xs text-signal">Deep Cuts</p>
            <h2 className="display mt-3 text-4xl uppercase">More to Watch</h2>
            <p className="mt-4 text-paper/70 text-lg leading-relaxed">
              Dive deep into the complete archive of all our past reviews, detailed breakdowns, and special discussions.
            </p>
          </div>
        </div>
        
        {/* Full-bleed marquee */}
        <div className="w-full mt-12 mb-8">
          <FlatMarquee items={library.slice(8, 16)} direction="right" />
        </div>
      </section>
    </>
  );
}
