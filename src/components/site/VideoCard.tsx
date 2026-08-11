import { Placeholder } from "./Placeholder";

export type VideoItem = {
  category: string;
  title: string;
  meta: string;
  thumb: string;
  videoId?: string;
};

export function VideoCard({ item }: { item: VideoItem }) {
  const href = item.videoId ? `https://www.youtube.com/watch?v=${item.videoId}` : "https://www.youtube.com/@PJExplained/videos";
  
  return (
    <a 
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="group cursor-pointer block rounded-[14px] border border-border bg-carbon transition-all duration-500 hover:-translate-y-2 hover:bg-carbon/80 h-full"
    >
      <div className="relative overflow-hidden rounded-t-[10px] aspect-video bg-ink">
        {item.videoId ? (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg)` }}
          />
        ) : (
          <Placeholder replaceWith={item.thumb} ratio="aspect-video" className="rounded-none" />
        )}
        
        {/* Internal Depth / Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/20 to-carbon/40 opacity-100 shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] pointer-events-none" />

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-300 group-hover:bg-ink/50">
          <div className="flex h-12 w-12 translate-y-3 items-center justify-center rounded-full bg-signal opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 shadow-[0_0_15px_rgba(239,35,60,0.5)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="h-5 w-5 translate-x-0.5"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="px-4 pb-4 pt-4">
        <p className="label-xs text-signal">{item.category}</p>
        <h3 className="display mt-2 text-[15px] tracking-[0.08em] leading-relaxed text-paper/90" style={{ wordSpacing: '0.15em' }}>{item.title}</h3>
        <p className="mt-2 text-[13px] text-ash tracking-wide">{item.meta}</p>
      </div>

      {/* Signal red progress-bar line */}
      <div className="mx-4 mb-4 h-0.5 overflow-hidden rounded-full bg-border">
        <div className="h-full w-0 rounded-full bg-signal transition-all duration-500 group-hover:w-full" />
      </div>
    </a>
  );
}
