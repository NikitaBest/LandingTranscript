import React from "react";

interface MacbookFrameProps {
  src: string;
  alt: string;
}

export function MacbookFrame({ src, alt }: MacbookFrameProps) {
  return (
    <div className="relative w-full max-w-[900px] mx-auto">
      {/* MacBook Top (Screen) */}
      <div className="relative bg-[#1a1a1a] rounded-[24px] pt-[2%] px-[2%] pb-[3%] shadow-2xl border-[4px] border-[#2a2a2a]">
        {/* Camera Dot */}
        <div className="absolute top-[4%] left-1/2 -translate-x-1/2 w-2 h-2 bg-[#0a0a0a] rounded-full z-20 shadow-inner" />
        
        {/* Screen Content Container */}
        <div className="relative bg-black rounded-[10px] overflow-hidden aspect-[16/10] border border-white/5">
           <img 
            src={src} 
            alt={alt} 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Reflection/Sheen */}
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-tr from-white/5 to-transparent rounded-[20px] pointer-events-none z-10" />
      </div>

      {/* MacBook Bottom (Base) */}
      <div className="relative -mt-1 mx-auto w-[120%] h-4 bg-[#e0e0e0] rounded-b-xl shadow-[0_10px_20px_rgba(0,0,0,0.15)] hidden">
        {/* This is a flat styling, maybe better to just keep the screen for a cleaner look? 
            The user asked for "MacBook mockups", so usually the base is expected. 
            Let's make a minimalist dark base.
        */}
      </div>
      
       {/* Simplified Base - Dark Minimalist */}
       <div className="relative z-0 mx-[5%] h-[12px] bg-[#1a1a1a] rounded-b-[16px] shadow-xl border-t border-[#333]">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[15%] h-[4px] bg-[#2a2a2a] rounded-b-[6px]" />
       </div>
    </div>
  );
}
