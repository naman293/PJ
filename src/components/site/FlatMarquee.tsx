import { VideoCard, type VideoItem } from "./VideoCard";

export function FlatMarquee({ items, direction = "left" }: { items: VideoItem[], direction?: "left" | "right" }) {
  // We duplicate the items array once to create a seamless infinite loop
  const duplicatedItems = [...items, ...items];

  return (
    <div className="relative flex w-full overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-left {
          animation: marquee-left 40s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 40s linear infinite;
        }
      `}} />
      <div 
        className={`flex w-max shrink-0 gap-6 py-4 hover:[animation-play-state:paused] ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}
      >
        {duplicatedItems.map((item, i) => (
          <div key={`${item.videoId || item.title}-${i}`} className="w-[300px] shrink-0">
            <VideoCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
