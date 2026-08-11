import { createFileRoute } from "@tanstack/react-router";
import { Placeholder } from "@/components/site/Placeholder";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About PJ — The Creator Behind PJ Explained" },
      {
        name: "description",
        content:
          "Meet PJ: pop-culture enthusiast, film explainer and the voice behind 2.6M+ subscribers of movie breakdowns.",
      },
      { property: "og:title", content: "About PJ — PJ Explained" },
      {
        property: "og:description",
        content: "The story, the mission and the numbers behind the explainer channel.",
      },
    ],
  }),
  component: About,
});

const timeline = [
  { year: "2017", text: "First breakdown uploaded from a bedroom mic. Twelve views, all family." },
  { year: "2019", text: "The superhero explainers land. The community starts arguing in the comments." },
  { year: "2022", text: "One million subscribers. Shorts push the channel past a billion views." },
  { year: "2026", text: "2.6M+ subscribers, a 500K-strong community, and a website of its own." },
];

function About() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-site gap-12 px-6 py-16 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div>
            <p className="label-xs text-signal">About</p>
            <h1 className="display mt-3 text-[clamp(2.25rem,6.75vw,4.88rem)]">
              Just a man with an <span className="text-signal">internet</span> connection
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ash">
              PJ Explained exists for one reason: complex stories shouldn't feel like homework.
              Movies, series, anime and whole fictional universes — broken down so anyone can follow
              them, argue about them, and enjoy them more.
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[16px] border border-ink/15 shadow-xl bg-black">
            <img
              src="/images/pj_about.png"
              alt="PJ"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 pointer-events-none rounded-[16px] shadow-[inset_0_0_40px_rgba(0,0,0,0.8)]" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-site px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="label-xs text-signal">The mission</p>
            <h2 className="display mt-2 text-[clamp(1.5rem,3.75vw,2.25rem)]">Film literacy, no gatekeeping</h2>
          </div>
          <div className="space-y-4 text-ash">
            <p>
              The channel promotes cinema through reviews, interviews, discussions, video essays and
              analytical compilations. The tone is casual on purpose — the analysis underneath is
              not.
            </p>
            <p>
              Every breakdown starts from the same question a viewer asks in the comments: “wait,
              why did that happen?” The job is to answer it properly, with context, evidence and a
              point of view.
            </p>
          </div>
        </div>

        <ol className="mt-16 grid gap-px overflow-hidden rounded-[12px] border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {timeline.map((t) => (
            <li key={t.year} className="bg-carbon p-8">
              <p className="display text-3xl text-signal">{t.year}</p>
              <p className="mt-3 text-sm text-ash">{t.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-border bg-paper py-20 text-ink">
        <div className="mx-auto max-w-site px-6">
          <p className="label-xs text-signal uppercase">Resources</p>
          <h2 className="display mt-2 text-[clamp(1.5rem,3.75vw,2.25rem)] uppercase">Questions I get daily</h2>
          
          <div className="mt-12 flex flex-col">
            {[
              {
                q: "What order should I watch a franchise in?",
                a: "Release order for first-timers, timeline order for rewatches. Every collection page opens with a recommended path."
              },
              {
                q: "Are the breakdowns spoiler-free?",
                a: "Reviews are strictly spoiler-free. Explainers can be spoiler-full or spoiler-light depending on the topic — the label tells you which is which."
              },
              {
                q: "Hindi or English?",
                a: "Mostly Hindi narration with English on-screen text. Subtitles are on every long-form upload."
              }
            ].map((faq, i) => (
              <div key={i} className="grid gap-4 border-t border-ink/10 py-8 md:grid-cols-[1fr_1.5fr] lg:gap-12">
                <h3 className="display text-xl uppercase tracking-wider">{faq.q}</h3>
                <p className="text-ink/70 text-lg">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
