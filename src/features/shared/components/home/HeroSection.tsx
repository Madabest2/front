"use client";

import { Button } from "@/features/design-system/components/ui/button";
import { Facebook, Instagram, Linkedin, MessageCircle, Twitter } from "lucide-react";
import { useState } from "react";

const socialLinks = [
  { icon: Facebook, url: "#", label: "Facebook" },
  { icon: Instagram, url: "#", label: "Instagram" },
  { icon: Linkedin, url: "#", label: "LinkedIn" },
  { icon: Twitter, url: "#", label: "Twitter" },
  { icon: MessageCircle, url: "#", label: "WhatsApp" },
];

export function HeroSection() {
  const [selected, setSelected] = useState<number>(3); // 1: Antsohihy, 2: Diego, 3: Nosy-Be, 4: Ambanja
  return (
    <section className="relative h-[92vh] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center lg:hidden"
        style={{ backgroundImage: "url('/hero/right.jpg')" }}
      />

      {/* Gradient pour lisibilité */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-black/70 lg:hidden" />
      {/* Backgrounds: Left / Center / Right panels like the mockup */}
      <div className="absolute inset-0">
        {/* Left background image */}
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 w-[44%] bg-cover bg-center"
          style={{ backgroundImage: "url('/hero/left.jpg')" }}
        />

        {/* Right background image */}
        <div
          aria-hidden
          className="absolute inset-y-0 right-0 w-[56%] bg-cover bg-center"
          style={{ backgroundImage: "url('/hero/right.jpg')" }}
        />

        {/* Soft vertical fade between panels (left/center/right) */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-black/20 via-transparent to-black/20" />

        {/* Bottom black gradient to transition into next section */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-black/90" />
      </div>

      {/* Woman image - Right side */}
      <div
        className="absolute top-[304px] left-[993px] hidden h-[567px] w-[851px] bg-contain bg-right bg-no-repeat lg:block"
        style={{ backgroundImage: "url('/hero/woman.png')" }}
      />

      {/* Content Container */}
      <div className="relative z-10 mx-auto h-full w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* Social Links - Left side */}
        <div className="absolute top-[151px] left-[70px] hidden h-[242px] w-[69px] flex-col items-center justify-center gap-5 rounded-[50px] bg-[rgba(80,162,223,0.3)] p-4 backdrop-blur-[5.5px] lg:flex">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              className="text-white transition-colors duration-200 hover:text-[#E2531F]"
              aria-label={social.label}
            >
              <social.icon className="h-6 w-6" />
            </a>
          ))}
        </div>

        {/* Main Text - Left side */}
        <div className="absolute top-[163px] left-[183px] hidden w-[387px] lg:block">
          <h2 className="mb-5 text-[24px] leading-[35px] font-medium text-white">
            Découvrez Madagascar autrement : explorez des lieux exotiques et organisez vos circuits
          </h2>
          <h1 className="text-[48px] leading-[69px] font-medium text-white">Je veux visiter...</h1>
        </div>

        {/* Search Input */}

        {/* Destination Cards - Absolute positions from Figma */}
        {/* Antsohihy */}
        <div
          className={`absolute top-[473px] left-[180px] hidden cursor-pointer lg:block ${
            selected === 1 ? "z-10 h-[255px] w-[242px] shadow-xl" : "h-[155px] w-[143px]"
          } transition-all duration-300`}
          onMouseEnter={() => setSelected(1)}
          onClick={() => setSelected(1)}
        >
          <div className="relative h-full w-full overflow-hidden rounded-[15px] border-2 border-white">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/hero/Antsohihy.jpg')" }}
            />
            <div className="absolute inset-0 bg-black/20" />
            {selected === 1 && (
              <div className="absolute top-4 right-5 flex h-[37px] w-[37px] items-center justify-center rounded-full bg-white">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto my-auto"
                >
                  <path
                    d="M21.2819 13.2739L24.527 10.6933C24.9573 10.3511 25.506 10.1939 26.0522 10.2562C26.5985 10.3185 27.0976 10.5953 27.4398 11.0256C27.782 11.4559 27.9393 12.0046 27.877 12.5508C27.8146 13.0971 27.5379 13.5962 27.1075 13.9384L23.8624 16.519L25.1333 24.7785L22.6995 26.7139L19.8061 19.7447L16.561 22.3252L16.2287 25.238L13.7948 27.1734L12.8369 22.638L8.63376 20.6832L11.0676 18.7478L13.9804 19.0801L17.2255 16.4995L11.087 12.1109L13.5208 10.1755L21.2819 13.2739Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
            <div className="absolute right-0 bottom-0 left-0 p-3">
              <h3 className="text-[24px] leading-[35px] font-medium text-white">Antsohihy</h3>
              {selected === 1 && (
                <div className="mt-2 flex flex-col gap-2">
                  <Button
                    size="sm"
                    className="h-[38px] w-full rounded bg-[#E2531F] px-[15px] text-[16px] leading-[23px] font-medium text-white hover:bg-[#d64a2e]"
                  >
                    Je réserve
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-[38px] w-full rounded border border-[#E2531F] bg-transparent px-[15px] text-[16px] leading-[23px] font-medium text-white hover:bg-[#E2531F]/10"
                  >
                    Découvrir
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Diego-Suarez */}
        <div
          className={`absolute top-[472px] left-[334px] hidden cursor-pointer lg:block ${
            selected === 2 ? "z-10 h-[255px] w-[242px] shadow-xl" : "h-[155px] w-[143px]"
          } transition-all duration-300`}
          onMouseEnter={() => setSelected(2)}
          onClick={() => setSelected(2)}
        >
          <div className="relative h-full w-full overflow-hidden rounded-[15px] border border-white">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/hero/Diego suarez.jpg')" }}
            />
            <div className="absolute inset-0 bg-black/20" />
            {selected === 2 && (
              <div className="absolute top-4 right-5 flex h-[37px] w-[37px] items-center justify-center rounded-full bg-white">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto my-auto"
                >
                  <path
                    d="M21.2819 13.2739L24.527 10.6933C24.9573 10.3511 25.506 10.1939 26.0522 10.2562C26.5985 10.3185 27.0976 10.5953 27.4398 11.0256C27.782 11.4559 27.9393 12.0046 27.877 12.5508C27.8146 13.0971 27.5379 13.5962 27.1075 13.9384L23.8624 16.519L25.1333 24.7785L22.6995 26.7139L19.8061 19.7447L16.561 22.3252L16.2287 25.238L13.7948 27.1734L12.8369 22.638L8.63376 20.6832L11.0676 18.7478L13.9804 19.0801L17.2255 16.4995L11.087 12.1109L13.5208 10.1755L21.2819 13.2739Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
            <div className="absolute right-0 bottom-0 left-0 p-3">
              <h3 className="text-[24px] leading-[35px] font-medium text-white">Diego-Suarez</h3>
              {selected === 2 && (
                <div className="mt-2 flex flex-col gap-2">
                  <Button
                    size="sm"
                    className="h-[38px] w-full rounded bg-[#E2531F] px-[15px] text-[16px] leading-[23px] font-medium text-white hover:bg-[#d64a2e]"
                  >
                    Je réserve
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-[38px] w-full rounded border border-[#E2531F] bg-transparent px-[15px] text-[16px] leading-[23px] font-medium text-white hover:bg-[#E2531F]/10"
                  >
                    Découvrir
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Nosy-Be - Featured */}
        <div
          className="absolute top-[373px] left-[488px] hidden h-[255px] w-[242px] cursor-pointer lg:block"
          onMouseEnter={() => setSelected(3)}
          onClick={() => setSelected(3)}
        >
          <div className="relative h-full w-full overflow-hidden rounded-[15px] border border-white">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/hero/Nosy Be.jpg')" }}
            />
            <div className="absolute inset-0 bg-black/20" />
            {selected === 3 && (
              <div className="absolute top-4 right-5 flex h-[37px] w-[37px] items-center justify-center rounded-full bg-white">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto my-auto"
                >
                  <path
                    d="M21.2819 13.2739L24.527 10.6933C24.9573 10.3511 25.506 10.1939 26.0522 10.2562C26.5985 10.3185 27.0976 10.5953 27.4398 11.0256C27.782 11.4559 27.9393 12.0046 27.877 12.5508C27.8146 13.0971 27.5379 13.5962 27.1075 13.9384L23.8624 16.519L25.1333 24.7785L22.6995 26.7139L19.8061 19.7447L16.561 22.3252L16.2287 25.238L13.7948 27.1734L12.8369 22.638L8.63376 20.6832L11.0676 18.7478L13.9804 19.0801L17.2255 16.4995L11.087 12.1109L13.5208 10.1755L21.2819 13.2739Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
            <div className="absolute right-0 bottom-0 left-0 p-4">
              <h3 className="mb-4 text-[24px] leading-[35px] font-medium text-white">Nosy-Be</h3>
              {selected === 3 && (
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="h-[38px] rounded bg-[#E2531F] px-[15px] text-[16px] leading-[23px] font-medium text-white hover:bg-[#d64a2e]"
                  >
                    Je réserve
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-[38px] rounded border border-[#E2531F] bg-transparent px-[15px] text-[16px] leading-[23px] font-medium text-white hover:bg-[#E2531F]/10"
                  >
                    Découvrir
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Ambanja */}
        <div
          className={`absolute top-[470px] left-[741px] hidden cursor-pointer lg:block ${
            selected === 4 ? "z-10 h-[255px] w-[242px] shadow-xl" : "h-[155px] w-[143px]"
          } transition-all duration-300`}
          onMouseEnter={() => setSelected(4)}
          onClick={() => setSelected(4)}
        >
          <div className="relative h-full w-full overflow-hidden rounded-[15px] border border-white">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/hero/Ambanja.jpg')" }}
            />
            <div className="absolute inset-0 bg-black/20" />
            {selected === 4 && (
              <div className="absolute top-4 right-5 flex h-[37px] w-[37px] items-center justify-center rounded-full bg-white">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto my-auto"
                >
                  <path
                    d="M21.2819 13.2739L24.527 10.6933C24.9573 10.3511 25.506 10.1939 26.0522 10.2562C26.5985 10.3185 27.0976 10.5953 27.4398 11.0256C27.782 11.4559 27.9393 12.0046 27.877 12.5508C27.8146 13.0971 27.5379 13.5962 27.1075 13.9384L23.8624 16.519L25.1333 24.7785L22.6995 26.7139L19.8061 19.7447L16.561 22.3252L16.2287 25.238L13.7948 27.1734L12.8369 22.638L8.63376 20.6832L11.0676 18.7478L13.9804 19.0801L17.2255 16.4995L11.087 12.1109L13.5208 10.1755L21.2819 13.2739Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
            <div className="absolute right-0 bottom-0 left-0 p-3">
              <h3 className="text-[24px] leading-[35px] font-medium text-white">Ambanja</h3>
              {selected === 4 && (
                <div className="mt-2 flex flex-col gap-2">
                  <Button
                    size="sm"
                    className="h-[38px] w-full rounded bg-[#E2531F] px-[15px] text-[16px] leading-[23px] font-medium text-white hover:bg-[#d64a2e]"
                  >
                    Je réserve
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-[38px] w-full rounded border border-[#E2531F] bg-transparent px-[15px] text-[16px] leading-[23px] font-medium text-white hover:bg-[#E2531F]/10"
                  >
                    Découvrir
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Voir plus */}
        <div className="absolute top-[470px] left-[895px] hidden h-[155px] w-[143px] cursor-pointer lg:block">
          <div className="relative h-full w-full overflow-hidden rounded-[15px] border border-white/20 bg-[rgba(66,139,193,0.2)] backdrop-blur-[5px]">
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                <span className="text-2xl text-white">+</span>
              </div>
              <p className="text-[16px] leading-[23px] font-medium text-white">Voir plus</p>
            </div>
          </div>
        </div>

        {/* Pagination - Right side */}
        <div className="absolute top-[207px] right-[70px] hidden flex-col gap-4 text-white xl:flex">
          {[1, 2, 3, 4].map((i) => {
            const label = `0${i}`;
            const isActive = selected === i;
            return (
              <div key={i} className={isActive ? "relative" : undefined}>
                <button
                  onClick={() => setSelected(i)}
                  className={
                    (isActive
                      ? "text-[40px] leading-[58px]"
                      : "text-[24px] leading-[35px] opacity-60") +
                    " font-medium transition-colors hover:text-[#E2531F]"
                  }
                >
                  {label}
                </button>
                {isActive && (
                  <div className="absolute top-1/2 -left-4 h-[5px] w-[156px] -translate-y-1/2 bg-[#E2531F]" />
                )}
              </div>
            );
          })}
          <button className="mt-2 text-[16px] leading-[23px] font-medium transition-colors hover:text-[#E2531F]">
            Voir plus
          </button>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="relative z-10 flex h-full flex-col justify-center px-4 py-12 lg:hidden">
        <div className="max-w-md rounded-xl bg-black/50 p-5 shadow-lg backdrop-blur-sm">
          <h2 className="mb-4 text-base leading-relaxed font-medium text-white">
            Découvrez Madagascar autrement : explorez des lieux exotiques et organisez vos circuits
          </h2>
          <h1 className="text-3xl leading-snug font-semibold text-white">Je veux visiter...</h1>
          {/* Social links (mobile) */}
          <div className="mt-6 flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-[#E2531F]"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
