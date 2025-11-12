"use client";
import { Section } from "../types";

export type TermsSidebarProps = {
  sections: Section[];
  activeIdx: number;
  onSelect: (index: number) => void;
};

export function TermsSidebar({ sections, activeIdx, onSelect }: TermsSidebarProps) {
  return (
    <nav className="sticky top-24">
      <div className="relative min-h-[664px] overflow-hidden rounded-[13px] bg-[#FFEEE8] p-5">
        {/* Decorative corner shape */}
        <div className="pointer-events-none absolute top-0 right-0 h-[99px] w-[119px] rounded-tr-[10px] rounded-bl-[130px] bg-[rgba(226,83,31,0.19)]" />
        {/* Dashed segmented lines (desktop) */}
        <div className="pointer-events-none absolute left-8 hidden lg:block">
          <div className="absolute top-[143px] h-[67px] border-l border-dashed border-[#A4A4A4]" />
          <div className="absolute top-[249px] h-[67px] border-l border-dashed border-[#A4A4A4]" />
          <div className="absolute top-[356px] h-[67px] border-l border-dashed border-[#A4A4A4]" />
          <div className="absolute top-[460px] h-[67px] border-l border-dashed border-[#E2531F]" />
        </div>

        <ul className="space-y-4">
          {sections.map((s, i) => {
            const selected = i === activeIdx;
            return (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => onSelect(i)}
                  className={`w-full text-left transition-colors ${selected ? "" : "hover:opacity-80"}`}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`mt-1 flex size-8 items-center justify-center rounded-full border ${selected ? "border-[#E2531F] bg-[#E2531F] text-white" : "border-black/10 bg-white text-black"}`}
                    >
                      {s.icon}
                    </span>
                    <div>
                      <div
                        className={`text-[18px] font-semibold ${selected ? "text-[#E2531F]" : ""}`}
                      >
                        {s.title}
                      </div>
                      <div className="mt-1 text-[14px] leading-5 text-black/80">
                        {s.sidebarText}
                      </div>
                    </div>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="absolute right-0 bottom-4 left-0 text-center text-sm font-semibold text-[#E2531F]">
          Besoin d’aide ?
        </div>
      </div>
    </nav>
  );
}
