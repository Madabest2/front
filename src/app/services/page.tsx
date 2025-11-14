"use client";

import { Button } from "@/features/design-system/components/ui/button";
import { ServiceCard } from "@/features/services/components/ServiceCard";
import { Footer } from "@/features/shared/components/layout/Footer";
import { Header } from "@/features/shared/components/layout/Header";
import { motion } from "framer-motion";
import { Medal, Plane, Shield, Smile } from "lucide-react";
import Image from "next/image";

const featureBadges = [
  { icon: Medal, text: "10 ans d’expérience dans les prestations touristiques" },
  { icon: Shield, text: "Protection des réserves naturelles" },
  { icon: Smile, text: "Satisfaction client : vacanciers, chercheurs, touristes" },
];

// Position de base, léger décalage horizontal seulement. Superposition via z-index.
const cards = [
  {
    title: "Des randonnées et excursions en plein nature",
    location: "Nosy-Be",
    rating: 5.0,
    rotation: 12.57,
    offsetX: 0,
    offsetY: 0,
    imageSrc: "/service/baie.jpg",
  },
  {
    title: "Des Kayaks durant votre séjour de voyage",
    location: "Diégo-Suarez",
    rating: 4.8,
    rotation: -9.32,
    offsetX: -30,
    offsetY: 0,
    imageSrc: "/service/kayak.jpg",
  },
  {
    title: "Croisière en bateau",
    location: "Antsohihy",
    rating: 5.0,
    rotation: 4.18,
    offsetX: -60,
    offsetY: 0,
    imageSrc: "/service/bateau.jpg",
    cardWidth: 354,
    cardHeight: 403,
    imageAspectRatio: "312.46 / 208.07",
  },
  {
    title: "Explorations Faune",
    location: "Ambanja",
    rating: 5.0,
    rotation: -11.64,
    offsetX: -90,
    offsetY: 0,
    cardWidth: 204,
    imageSrc: "/service/maki.jpg",
  },
];

const process = [
  {
    title: "Échange & Préparation",
    desc: "Itinéraire personnalisé, réservations adaptées et activités sur mesure.",
  },
  {
    title: "Organisation & Accompagnement",
    desc: "Transferts, guides, chauffeurs et billets réservés pour un voyage serein.",
  },
  {
    title: "Vos Privilèges",
    desc: "Immersion entre nature sauvage et rencontres humaines authentiques.",
  },
  {
    title: "Importance du Groupe",
    desc: "Convivialité, sécurité et contribution au développement local.",
  },
  {
    title: "À savoir",
    desc: "Assurances, frais personnels et services hors programme non inclus.",
  },
];

export default function ServicesPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-[#FFF6E4]">
      <Header />
      <main className="flex-1 pt-40">
        {/* Hero Title */}
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="mx-auto mb-8 max-w-xl text-5xl font-medium tracking-tight text-[#0D0D0D] md:text-6xl">
            Nos services
          </h1>
        </div>

        {/* Feature badges */}
        <section className="mx-auto mb-24 max-w-[1300px] px-6">
          <div className="rounded-[15px] bg-white px-8 py-10 shadow-sm md:flex md:items-center md:justify-between md:gap-10">
            {featureBadges.map((f, i) => (
              <div key={i} className="mb-8 flex items-center gap-5 last:mb-0 md:mb-0">
                <div className="flex h-[57px] w-[57px] items-center justify-center border-[#E2531F]">
                  <f.icon className="h-10 w-10 text-[#E2531F]" />
                </div>
                <p className="max-w-xs text-left text-[20px] leading-[29px] font-medium text-[#0D0D0D]">
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Cards + dashed plane decoration */}
        <section className="relative mx-auto mb-24 w-screen px-0">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            className="absolute -top-8 left-50 z-20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2005_1423)">
              <path
                d="M27.8012 38.113L29.8557 36.4458L29.6636 22.2166L34.0002 18.6973C34.5753 18.2307 34.9414 17.5546 35.0181 16.818C35.0947 16.0814 34.8756 15.3445 34.4089 14.7694C33.9422 14.1944 33.2662 13.8282 32.5296 13.7516C31.793 13.6749 31.0561 13.8941 30.481 14.3607L26.0306 17.9724L12.1457 14.8551L10.2061 16.4291L20.2911 22.6301L15.3029 26.6781L10.4952 25.1852L8.32688 26.9448L14.8942 30.606L17.125 37.7863L19.2933 36.0267L18.8221 31.0147L23.9014 26.8928L27.8012 38.113Z"
                fill="#E2531F"
              />
            </g>
            <defs>
              <clipPath id="clip0_2005_1423">
                <rect
                  width="33.5094"
                  height="33.5094"
                  fill="white"
                  transform="translate(26.0195) rotate(50.94)"
                />
              </clipPath>
            </defs>
          </svg>
          <svg
            className="absolute top-0 left-0 z-10 -translate-x-4"
            width="228"
            height="218"
            viewBox="0 0 228 218"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M211.5 8C211.5 12.4183 215.082 16 219.5 16C223.918 16 227.5 12.4183 227.5 8C227.5 3.58172 223.918 0 219.5 0C215.082 0 211.5 3.58172 211.5 8ZM-0.5 216L-0.223567 217.474C1.85152 217.085 4.20028 216.378 6.69495 215.311L6.10494 213.932L5.51492 212.553C3.20058 213.543 1.06178 214.181 -0.776433 214.526L-0.5 216ZM17.8033 206.542L18.7808 207.68C22.0796 204.845 25.3205 201.341 28.2637 197.073L27.0289 196.222L25.7941 195.37C23.0003 199.421 19.9334 202.734 16.8258 205.404L17.8033 206.542ZM33.5521 184L34.9432 184.561C36.584 180.492 37.9608 175.988 38.9849 171.013L37.5158 170.711L36.0466 170.408C35.0575 175.212 33.7319 179.543 32.161 183.439L33.5521 184ZM39.2954 156.958L40.7927 157.047C40.9292 154.775 41 152.427 41 150H39.5H38C38 152.368 37.9309 154.657 37.7981 156.868L39.2954 156.958ZM39.5 150H41C41 147.32 41.039 144.72 41.1177 142.196L39.6185 142.15L38.1192 142.103C38.0395 144.66 38 147.291 38 150H39.5ZM40.7178 126.548L42.2079 126.72C42.8432 121.228 43.7327 116.173 44.885 111.505L43.4287 111.145L41.9724 110.786C40.7857 115.593 39.8755 120.775 39.2277 126.375L40.7178 126.548ZM48.4933 96.3645L49.8573 96.9887C52.0633 92.1678 54.6989 87.8596 57.7852 83.9675L56.6099 83.0355L55.4345 82.1035C52.1923 86.1923 49.4318 90.7085 47.1293 95.7404L48.4933 96.3645ZM67.7292 72.0762L68.6522 73.2586C72.5117 70.2457 76.8184 67.5146 81.5991 64.9894L80.8985 63.663L80.1979 62.3367C75.2858 64.9313 70.8259 67.7558 66.8062 70.8938L67.7292 72.0762ZM95.1497 57.2119L95.6969 58.6085C98.044 57.689 100.476 56.7935 102.993 55.9165L102.5 54.5L102.007 53.0835C99.4565 53.9717 96.9889 54.8804 94.6026 55.8153L95.1497 57.2119ZM102.5 54.5L102.993 55.9165C105.058 55.1975 107.118 54.5512 109.173 53.9674L108.763 52.5245L108.353 51.0816C106.245 51.6805 104.129 52.3442 102.007 53.0835L102.5 54.5ZM121.541 49.588L121.81 51.0637C126.136 50.2761 130.432 49.6763 134.694 49.1645L134.515 47.6752L134.337 46.1859C130.037 46.7022 125.678 47.3103 121.272 48.1122L121.541 49.588ZM147.557 46.2653L147.713 47.7572C152.124 47.2965 156.495 46.8182 160.798 46.2035L160.586 44.7186L160.374 43.2336C156.131 43.8397 151.809 44.3132 147.401 44.7734L147.557 46.2653ZM173.47 42.2925L173.828 43.7491C178.136 42.6901 182.368 41.35 186.506 39.5928L185.92 38.2121L185.334 36.8314C181.368 38.5153 177.292 39.8082 173.112 40.8358L173.47 42.2925ZM197.418 31.9419L198.265 33.1801C201.785 30.7732 205.208 27.934 208.524 24.5703L207.456 23.5171L206.388 22.464C203.205 25.6924 199.93 28.4072 196.572 30.7037L197.418 31.9419ZM215.848 13.4778L217.068 14.3505C218.322 12.5971 219.557 10.7464 220.773 8.79266L219.5 8L218.227 7.20734C217.043 9.10879 215.843 10.9059 214.628 12.6052L215.848 13.4778Z"
              fill="#E2531F"
            />
          </svg>
          <div className="relative flex w-full justify-center gap-6 px-4">
            {cards.map((c, i) => (
              <motion.div
                key={i}
                style={{
                  transform: `translateX(${c.offsetX}px) translateY(${c.offsetY}px)`,
                  zIndex: cards.length - i,
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                }}
                className="relative"
              >
                <ServiceCard {...c} index={i} />
              </motion.div>
            ))}
          </div>
          <div className="mx-auto mt-20 max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-medium text-[#0D0D0D]">Des aventures inoubliables</h2>
            <p className="text-[20px] leading-[29px] text-[#0D0D0D]">
              Chez Madabest, nous allions respect de la nature, ouverture culturelle et sens du
              partage pour créer des voyages sur mesure. Notre mission est d’offrir à chaque
              voyageur une expérience unique, authentique et sereine.
            </p>
          </div>
        </section>

        {/* Process section */}
        <section className="mx-auto mb-28 max-w-[1300px] px-6">
          <div className="relative overflow-hidden rounded-[25px] bg-[#FAFAFA] px-6 py-12 md:px-16">
            <svg
              className="pointer-events-none absolute top-3 right-3 h-[130px] w-[162px] md:top-2 md:right-6"
              width="162"
              height="130"
              viewBox="0 0 162 130"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M101.974 52.2326L102.915 53.4007L101.974 52.2326ZM33.417 118.621C31.9308 114.46 27.353 112.291 23.1922 113.778C19.0314 115.264 16.8631 119.842 18.3492 124.002C19.8354 128.163 24.4131 130.331 28.574 128.845C32.7348 127.359 34.9031 122.781 33.417 118.621ZM135.882 0.3115L134.415 -4.83227e-05C133.877 2.53128 133.222 5.03501 132.443 7.51097L133.874 7.96124L135.305 8.41151C136.113 5.84206 136.792 3.24566 137.349 0.623048L135.882 0.3115ZM127.677 22.4951L126.361 21.7752C123.963 26.1601 121.086 30.4551 117.684 34.6575L118.849 35.6014L120.015 36.5453C123.527 32.2077 126.505 27.7633 128.993 23.215L127.677 22.4951ZM107.982 47.0802L106.97 45.9733C105.095 47.6875 103.117 49.3847 101.032 51.0646L101.974 52.2326L102.915 53.4007C105.047 51.6829 107.072 49.945 108.994 48.1871L107.982 47.0802ZM101.974 52.2326L101.032 51.0646C99.2213 52.5239 97.4344 53.8679 95.6724 55.1116L96.5374 56.337L97.4023 57.5625C99.2158 56.2826 101.053 54.9003 102.915 53.4007L101.974 52.2326ZM84.9764 63.42L84.2756 62.0938C80.0527 64.3254 75.9899 66.1235 72.085 67.7388L72.6583 69.1249L73.2317 70.511C77.1837 68.8763 81.3404 67.038 85.6773 64.7462L84.9764 63.42ZM60.084 74.2407L59.4915 72.8627C55.1671 74.7222 51.0701 76.7427 47.2683 79.3883L48.1251 80.6195L48.9819 81.8507C52.5464 79.3702 56.4356 77.4424 60.6766 75.6188L60.084 74.2407ZM38.4129 90.0067L37.2112 89.1089C34.7177 92.4467 32.4518 96.4163 30.4161 101.228L31.7976 101.813L33.179 102.397C35.1335 97.7771 37.2844 94.0235 39.6146 90.9044L38.4129 90.0067ZM27.4806 114.671L26.0312 114.285C25.4669 116.403 24.9288 118.636 24.4172 120.993L25.8831 121.311L27.349 121.63C27.8514 119.314 28.3786 117.127 28.93 115.058L27.4806 114.671Z"
                fill="#E2531F"
              />
            </svg>
            <Plane
              className="absolute top-50 right-8 h-5 w-5 text-[#E2531F] md:top-36 md:right-40 md:h-6 md:w-6"
              style={{ transform: "rotate(160deg)" }}
            />

            <div className="grid items-stretch gap-10 lg:grid-cols-2">
              {/* Visual block (matches mockup sizing/positioning) */}
              <div className="relative mx-auto h-full w-full overflow-visible lg:max-w-none">
                {/* Background rectangle smaller than the image (Rectangle 111) */}
                {/* Foreground subject image matches steps height */}
                <div className="relative -top-4 h-full w-[155%] overflow-visible">
                  {/* Background rectangle: fixed size, slightly left, top-aligned */}
                  <Image
                    src="/substract.png"
                    alt="Background rectangle"
                    width={370}
                    height={350}
                    className="pointer-events-none absolute top-41 -left-4 z-0 select-none"
                    priority
                  />
                  {/* Foreground subject image: fills container, top-aligned */}
                  <Image
                    src="/femme_valise.png"
                    alt="Voyageuse avec valise pointant la destination"
                    fill
                    className="pointer-events-none translate-y-1 object-contain select-none md:-translate-y-8.5"
                    sizes="(min-width: 1024px) 75vw, 100vw"
                    priority
                  />
                </div>
              </div>
              {/* Steps */}
              <div className="relative z-20 space-y-8">
                <div className="mb-10 inline-flex rounded-full border border-[#E2531F] bg-[#E2531F]/10 px-6 py-2">
                  <span className="text-[20px] font-semibold text-[#E2531F]">
                    Ce que nous faisons
                  </span>
                </div>
                {process.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-5">
                    <div className="mt-2 h-3 w-3 rounded-full bg-[#E2531F]" />
                    <div className="space-y-2">
                      <h3 className="text-[20px] leading-[30px] font-semibold text-[#0D0D0D] md:text-[22px] md:leading-8">
                        {step.title}
                      </h3>
                      <p className="text-[16px] leading-[26px] text-[#0D0D0D] opacity-90 md:text-[18px] md:leading-7">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
                <div className="ml-auto flex flex-wrap gap-4 pt-4">
                  <Button
                    variant="outline"
                    className="h-[38px] rounded border border-[#E2531F] bg-white px-6 text-[14px] font-medium text-[#080707] hover:bg-[#E2531F]/10 md:text-[16px]"
                  >
                    Contacter nous
                  </Button>
                  <Button className="h-[38px] rounded bg-[#E2531F] px-6 text-[14px] font-medium text-white hover:bg-[#d64a2e] md:text-[16px]">
                    Commencer votre réservation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
