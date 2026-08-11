import React from "react";

const CinematicStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    @keyframes cinematicFadeIn {
      0% { opacity: 0; filter: blur(20px); transform: scale(1.1) translateZ(0); }
      100% { opacity: 1; filter: blur(0px); transform: scale(1) translateZ(0); }
    }
    @keyframes slowPan {
      0% { transform: scale(1.1) translateZ(0); }
      100% { transform: scale(1.2) translateZ(0); }
    }
    @keyframes pulseGlow {
      0%, 100% { opacity: 0.3; filter: blur(30px); transform: translateZ(0); }
      50% { opacity: 0.6; filter: blur(40px); transform: translateZ(0); }
    }
    @keyframes anamorphicFlare {
      0% { transform: translateX(-100%) scaleX(0.5) translateZ(0); opacity: 0; }
      20% { opacity: 1; transform: translateX(-20%) scaleX(2.5) translateZ(0); }
      80% { opacity: 1; transform: translateX(20%) scaleX(2.5) translateZ(0); }
      100% { transform: translateX(100%) scaleX(0.5) translateZ(0); opacity: 0; }
    }
    @keyframes sweepLight {
      0% { transform: translateX(-200%) skewX(-25deg) translateZ(0); opacity: 0; }
      20% { opacity: 0.5; }
      50% { transform: translateX(200%) skewX(-25deg) translateZ(0); opacity: 0; }
      100% { transform: translateX(200%) skewX(-25deg) translateZ(0); opacity: 0; }
    }
    @keyframes titleTracking {
      0% { letter-spacing: 0.1em; opacity: 0; filter: blur(10px); transform: translateZ(0); }
      100% { letter-spacing: 0.4em; opacity: 1; filter: blur(0px); transform: translateZ(0); }
    }
    @keyframes flicker {
      0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% { opacity: 1; }
      20%, 21.999%, 63%, 63.999%, 65%, 69.999% { opacity: 0.6; }
    }

    .cinematic-bg {
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E");
      pointer-events: none;
    }

    .svg-cinematic-entry {
      transform-origin: center;
      animation: cinematicFadeIn 2.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
    }

    .svg-tracking-entry {
      transform-origin: center;
      animation: titleTracking 3s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
    }
      
    .anamorphic-beam {
      background: linear-gradient(90deg, transparent 0%, var(--color-accent-blue) 40%, var(--color-paper) 50%, var(--color-accent-blue) 60%, transparent 100%);
      height: 2px;
      width: 150%;
      animation: anamorphicFlare 8s ease-in-out infinite;
      box-shadow: 0 0 20px 2px var(--color-accent-blue);
    }
    
    .thepj-flare {
      background: linear-gradient(90deg, transparent 0%, color-mix(in srgb, var(--color-paper) 50%, transparent) 50%, transparent 100%);
      animation: sweepLight 8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    }
    
    .moc-flicker {
      animation: flicker 6s infinite alternate, cinematicFadeIn 2s ease-out forwards;
    }
  ` }} />
);

export function ThePjGraphic() {
  return (
    <div className="relative w-full h-full overflow-hidden flex items-center justify-center group" style={{ backgroundColor: 'var(--color-ink)' }}>
      <CinematicStyles />
      
      {/* Background Ambience (Scaling) */}
      <div className="absolute inset-0 animate-[slowPan_25s_ease-out_forwards] pointer-events-none">
        <div className="absolute inset-0 cinematic-bg mix-blend-overlay z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--color-paper)_8%,transparent)_0%,transparent_80%)] z-0" />
        {/* Cinematic light leaks */}
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] blur-[80px] rounded-full animate-[pulseGlow_7s_ease-in-out_infinite]" style={{ backgroundColor: 'color-mix(in srgb, var(--color-paper) 5%, transparent)' }} />
        <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] blur-[80px] rounded-full animate-[pulseGlow_9s_ease-in-out_infinite_reverse]" style={{ backgroundColor: 'color-mix(in srgb, var(--color-paper) 5%, transparent)' }} />
      </div>
      
      {/* Foreground SVG Text (Static container, scaling content) */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <svg viewBox="0 0 1000 500" className="w-full h-full relative drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] svg-cinematic-entry">
          <defs>
            <linearGradient id="pjGrad1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--color-paper)" />
              <stop offset="50%" stopColor="var(--color-ash)" />
              <stop offset="100%" stopColor="var(--color-paper)" />
            </linearGradient>
          </defs>
          <text 
            x="50%" 
            y="50%" 
            dominantBaseline="middle" 
            textAnchor="middle" 
            className="display font-black"
            fontSize="160"
            fill="url(#pjGrad1)"
          >
            thePJ
          </text>
        </svg>

        {/* Overlay flare for metallic shine */}
        <div className="absolute inset-0 w-[200%] -left-[50%] h-full thepj-flare mix-blend-overlay z-30 pointer-events-none" />
      </div>
    </div>
  );
}

export function PjExplainedGraphic() {
  return (
    <div className="relative w-full h-full overflow-hidden flex items-center justify-center group" style={{ backgroundColor: 'var(--color-ink)' }}>
      <CinematicStyles />
      
      {/* Background Ambience (Scaling) */}
      <div className="absolute inset-0 animate-[slowPan_30s_ease-out_forwards] pointer-events-none">
        <div className="absolute inset-0 cinematic-bg mix-blend-overlay opacity-50 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,color-mix(in_srgb,var(--color-accent-blue)_20%,transparent)_0%,transparent_80%)] z-0" />
        {/* Ambient deep blue glows */}
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] rounded-full blur-[100px] animate-[pulseGlow_10s_ease-in-out_infinite]" style={{ backgroundColor: 'color-mix(in srgb, var(--color-accent-blue) 15%, transparent)' }} />
      </div>
      
      {/* Foreground Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
        <svg viewBox="0 0 1000 500" className="w-full h-full relative">
          <defs>
            <linearGradient id="pjGrad2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="color-mix(in srgb, var(--color-accent-blue) 60%, var(--color-paper))" />
              <stop offset="100%" stopColor="var(--color-accent-blue)" />
            </linearGradient>
          </defs>
          
          <text 
            x="50%" 
            y="42%" 
            dominantBaseline="middle" 
            textAnchor="middle" 
            className="display font-black svg-cinematic-entry drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
            fontSize="180"
            fill="url(#pjGrad2)"
          >
            PJ
          </text>
          <text 
            x="50%" 
            y="65%" 
            dominantBaseline="middle" 
            textAnchor="middle" 
            className="display font-bold svg-tracking-entry drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
            fontSize="50"
            fill="color-mix(in srgb, var(--color-accent-blue) 30%, var(--color-paper))"
          >
            EXPLAINED
          </text>
        </svg>


      </div>
    </div>
  );
}

export function MocGraphic() {
  return (
    <div className="relative w-full h-full overflow-hidden flex items-center justify-center group" style={{ backgroundColor: 'var(--color-carbon)' }}>
      <CinematicStyles />
      
      {/* Background Ambience */}
      <div className="absolute inset-0 animate-[slowPan_25s_ease-out_forwards] pointer-events-none">
        <div className="absolute inset-0 cinematic-bg mix-blend-overlay opacity-60 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,color-mix(in_srgb,var(--color-deep-red)_30%,transparent)_0%,transparent_90%)] z-0" />
        
        {/* Aggressive Red Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full blur-[90px] animate-[pulseGlow_6s_ease-in-out_infinite]" style={{ backgroundColor: 'color-mix(in srgb, var(--color-signal) 15%, transparent)' }} />
        
        {/* Cinematic Scratches Overlay */}
        <div className="absolute inset-0 opacity-15 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cGF0aCBkPSJNMCA0TDQgMCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIvPgo8L3N2Zz4=')] mix-blend-overlay" />
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <svg viewBox="0 0 1000 500" className="w-full h-full relative moc-flicker">
          <text 
            x="50%" 
            y="50%" 
            dominantBaseline="middle" 
            textAnchor="middle" 
            className="display font-black"
            fontSize="200"
            fill="var(--color-signal)"
            style={{ transform: "skewX(-10deg)", transformOrigin: "center", textShadow: "0 0 40px color-mix(in srgb, var(--color-signal) 60%, transparent)" }}
          >
            MOC
          </text>
          {/* Subtle ghost text behind for chromatic aberration feel */}
          <text 
            x="51%" 
            y="50%" 
            dominantBaseline="middle" 
            textAnchor="middle" 
            className="display font-black mix-blend-screen opacity-50 blur-[8px]"
            fontSize="200"
            fill="var(--color-deep-red)"
            style={{ transform: "skewX(-10deg)", transformOrigin: "center" }}
          >
            MOC
          </text>
        </svg>
      </div>
    </div>
  );
}
