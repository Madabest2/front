"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/features/design-system/components/ui/accordion";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";

export function AboutAccordions() {
  const t = useTranslations("about.accordions");
  const teamMembers = t.raw("team.members") as Array<{ name: string; role: string }>;

  const teamMembersWithPhotos = [
    { ...teamMembers[0], photo: "/squad/cynthia.jpg" },
    { ...teamMembers[1], photo: "/squad/paul.jpg" },
    { ...teamMembers[2], photo: "/squad/luc.jpg" },
    { ...teamMembers[3], photo: "/squad/malice.jpg" },
    { ...teamMembers[4], photo: "/squad/maule.jpg" },
    { ...teamMembers[5], photo: "/squad/jordan.jpg" },
    { ...teamMembers[6], photo: "/squad/nico.jpg" },
  ];

  // Respect user reduced motion preference
  const [reduceMotion, setReduceMotion] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    }
  }, []);

  // Animation variants
  const contentVariants = {
    collapsed: { opacity: 0, height: 0, y: -8, transition: { duration: 0.25 } },
    open: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 0.8, 0.28, 1] },
    },
  } as const;

  const listItemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.4, ease: [0.25, 0.7, 0.3, 1] },
    }),
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: 0.1 + i * 0.06, duration: 0.5, ease: [0.22, 0.8, 0.28, 1] },
    }),
  } as const;

  return (
    <section className="mx-auto mt-16 max-w-[1300px] px-4">
      <Accordion type="single" collapsible className="grid gap-4">
        <AccordionItem value="qui" className="rounded-2xl bg-[#EFEFEF] px-6">
          <AccordionTrigger className="flex items-center justify-between text-left text-3xl leading-[69px] font-medium text-[#0D0D0D]">
            <span>{t("whoWeAre.title")}</span>
          </AccordionTrigger>
          <AccordionContent>
            <AnimatePresence initial={false}>
              <motion.div
                key="content-qui"
                className="pb-6 text-[20px]/[29px] text-[#0D0D0D]"
                initial={reduceMotion ? undefined : "collapsed"}
                animate={reduceMotion ? undefined : "open"}
                exit={reduceMotion ? undefined : "collapsed"}
                variants={contentVariants}
              >
                {t("whoWeAre.content")}
              </motion.div>
            </AnimatePresence>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="pourquoi" className="rounded-2xl bg-[#EFEFEF] px-6">
          <AccordionTrigger className="flex items-center justify-between text-left text-3xl leading-[69px] font-medium text-[#0D0D0D]">
            <span>{t("whyChoose.title")}</span>
          </AccordionTrigger>
          <AccordionContent>
            <AnimatePresence initial={false}>
              <motion.ul
                key="content-pourquoi"
                className="mt-1 grid gap-3 pb-6 text-[20px]/[29px] font-semibold text-[#0D0D0D]"
                initial={reduceMotion ? undefined : "collapsed"}
                animate={reduceMotion ? undefined : "open"}
                exit={reduceMotion ? undefined : "collapsed"}
                variants={contentVariants}
              >
                <motion.li
                  className="flex items-start gap-5"
                  custom={0}
                  initial={reduceMotion ? undefined : "hidden"}
                  animate={reduceMotion ? undefined : "visible"}
                  variants={listItemVariants}
                  whileHover={reduceMotion ? undefined : { scale: 1.02, x: 4 }}
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 25.3333C4.4087 25.3333 2.88258 24.7012 1.75736 23.576C0.632141 22.4508 0 20.9246 0 19.3333C0 17.742 0.632141 16.2159 1.75736 15.0907C2.88258 13.9655 4.4087 13.3333 6 13.3333C7.5913 13.3333 9.11742 13.9655 10.2426 15.0907C11.3679 16.2159 12 17.742 12 19.3333C12 20.9246 11.3679 22.4508 10.2426 23.576C9.11742 24.7012 7.5913 25.3333 6 25.3333ZM19.3333 12C18.5454 12 17.7652 11.8448 17.0372 11.5433C16.3093 11.2417 15.6478 10.7998 15.0907 10.2426C14.5335 9.68549 14.0916 9.02405 13.7901 8.2961C13.4885 7.56815 13.3333 6.78793 13.3333 6C13.3333 5.21207 13.4885 4.43185 13.7901 3.7039C14.0916 2.97595 14.5335 2.31451 15.0907 1.75736C15.6478 1.20021 16.3093 0.758251 17.0372 0.456723C17.7652 0.155195 18.5454 -1.17411e-08 19.3333 0C20.9246 2.37122e-08 22.4508 0.632141 23.576 1.75736C24.7012 2.88258 25.3333 4.4087 25.3333 6C25.3333 7.5913 24.7012 9.11742 23.576 10.2426C22.4508 11.3679 20.9246 12 19.3333 12ZM6 22.6667C6.88406 22.6667 7.7319 22.3155 8.35702 21.6904C8.98214 21.0652 9.33333 20.2174 9.33333 19.3333C9.33333 18.4493 8.98214 17.6014 8.35702 16.9763C7.7319 16.3512 6.88406 16 6 16C5.11595 16 4.2681 16.3512 3.64298 16.9763C3.01786 17.6014 2.66667 18.4493 2.66667 19.3333C2.66667 20.2174 3.01786 21.0652 3.64298 21.6904C4.2681 22.3155 5.11595 22.6667 6 22.6667ZM19.3333 9.33333C20.2174 9.33333 21.0652 8.98214 21.6904 8.35702C22.3155 7.7319 22.6667 6.88406 22.6667 6C22.6667 5.11595 22.3155 4.2681 21.6904 3.64298C21.0652 3.01786 20.2174 2.66667 19.3333 2.66667C18.4493 2.66667 17.6014 3.01786 16.9763 3.64298C16.3512 4.2681 16 5.11595 16 6C16 6.88406 16.3512 7.7319 16.9763 8.35702C17.6014 8.98214 18.4493 9.33333 19.3333 9.33333ZM0.666667 7.33333C0.666667 5.56522 1.36905 3.86953 2.61929 2.61929C3.86953 1.36905 5.56522 0.666667 7.33333 0.666667H11.3333V3.33333H7.33333C6.27247 3.33333 5.25505 3.75476 4.50491 4.50491C3.75476 5.25505 3.33333 6.27247 3.33333 7.33333V11.3333H0.666667V7.33333ZM24.6667 14H22V18C22 19.0609 21.5786 20.0783 20.8284 20.8284C20.0783 21.5786 19.0609 22 18 22H14V24.6667H18C19.7681 24.6667 21.4638 23.9643 22.714 22.714C23.9643 21.4638 24.6667 19.7681 24.6667 18V14Z"
                      fill="#E2531F"
                    />
                  </svg>
                  <span>{t("whyChoose.points.0")}</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-5"
                  custom={1}
                  initial={reduceMotion ? undefined : "hidden"}
                  animate={reduceMotion ? undefined : "visible"}
                  variants={listItemVariants}
                  whileHover={reduceMotion ? undefined : { scale: 1.02, x: 4 }}
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_61_216)">
                      <path
                        d="M22.1601 3.83982L24.8836 4.3842C25.0299 4.41345 25.1501 4.5207 25.1924 4.66532C25.2137 4.73558 25.2156 4.8103 25.1979 4.88155C25.1801 4.9528 25.1434 5.0179 25.0916 5.06995L22.8605 7.3027C22.5932 7.56854 22.2316 7.71806 21.8546 7.7187H20.0038L15.3562 12.3678C15.4449 12.7026 15.4612 13.0524 15.4041 13.394C15.3469 13.7356 15.2177 14.0611 15.0249 14.3488C14.8321 14.6365 14.5802 14.8798 14.286 15.0625C13.9918 15.2452 13.662 15.3632 13.3186 15.4084C12.9753 15.4537 12.6262 15.4253 12.2947 15.3251C11.9632 15.2249 11.6568 15.0552 11.3961 14.8273C11.1353 14.5994 10.926 14.3186 10.7823 14.0035C10.6386 13.6884 10.5636 13.3463 10.5625 12.9999C10.5624 12.6259 10.6484 12.2569 10.8138 11.9214C10.9793 11.5859 11.2197 11.293 11.5165 11.0654C11.8132 10.8377 12.1584 10.6814 12.5253 10.6086C12.8922 10.5358 13.2709 10.5483 13.6321 10.6453L18.2812 5.99457V4.14695C18.2812 3.76995 18.4307 3.40757 18.6972 3.14107L20.93 0.908324C20.982 0.856534 21.0472 0.819816 21.1184 0.802076C21.1896 0.784335 21.2644 0.786236 21.3346 0.807574C21.4792 0.849824 21.5865 0.970074 21.6158 1.11632L22.1601 3.83982Z"
                        fill="#E2531F"
                      />
                      <path
                        d="M3.25 12.9998C3.25167 14.394 3.55232 15.7716 4.13167 17.0397C4.71103 18.3078 5.5556 19.4369 6.60843 20.3509C7.66126 21.2648 8.89786 21.9424 10.2348 22.3378C11.5717 22.7332 12.9779 22.8373 14.3585 22.643C15.7391 22.4487 17.062 21.9607 18.2379 21.2117C19.4138 20.4627 20.4154 19.4702 21.1752 18.3012C21.9349 17.1322 22.4351 15.8139 22.642 14.4351C22.8489 13.0564 22.7578 11.6493 22.3746 10.3088C22.3208 10.1522 22.2995 9.98626 22.3119 9.82113C22.3242 9.656 22.3701 9.49512 22.4466 9.34828C22.5232 9.20144 22.6288 9.07171 22.7571 8.967C22.8854 8.86228 23.0336 8.78476 23.1928 8.73917C23.352 8.69358 23.5188 8.68086 23.6831 8.70179C23.8473 8.72272 24.0056 8.77686 24.1483 8.86091C24.291 8.94497 24.415 9.05718 24.513 9.19072C24.6109 9.32426 24.6806 9.47633 24.7179 9.63767C25.4597 12.2337 25.3188 15.0025 24.3172 17.5097C23.3157 20.017 21.5101 22.1208 19.1838 23.4911C16.8575 24.8615 14.1421 25.4208 11.4636 25.0813C8.78517 24.7419 6.29515 23.5229 4.38425 21.6155C2.47543 19.7051 1.25511 17.2149 0.914883 14.5358C0.574655 11.8567 1.13378 9.14045 2.50449 6.81354C3.87519 4.48663 5.97985 2.68082 8.48802 1.67963C10.9962 0.678427 13.7658 0.538539 16.3621 1.28192C16.6713 1.37229 16.9321 1.58136 17.0875 1.86343C17.243 2.14551 17.2805 2.47765 17.1918 2.78728C17.1031 3.09692 16.8955 3.35885 16.6143 3.51586C16.333 3.67286 16.0011 3.71216 15.691 3.62517C14.2392 3.20828 12.7104 3.1344 11.2251 3.40937C9.73984 3.68435 8.33879 4.30064 7.13244 5.20966C5.92609 6.11868 4.94744 7.29555 4.27368 8.64745C3.59993 9.99935 3.24948 11.4893 3.25 12.9998Z"
                        fill="#E2531F"
                      />
                      <path
                        d="M8.12504 13.0001C8.12514 13.8883 8.36774 14.7596 8.82666 15.5201C9.28559 16.2805 9.94343 16.9013 10.7292 17.3153C11.515 17.7294 12.3989 17.921 13.2857 17.8696C14.1724 17.8182 15.0282 17.5257 15.7609 17.0236C16.4935 16.5202 17.0745 15.8262 17.4411 15.0165C17.8077 14.2068 17.9459 13.3123 17.8409 12.4297C17.8125 12.2155 17.8417 11.9976 17.9255 11.7985C18.0093 11.5994 18.1446 11.4262 18.3176 11.2967C18.4906 11.1673 18.6949 11.0863 18.9096 11.0621C19.1243 11.0378 19.3416 11.0713 19.539 11.1589C19.7365 11.2455 19.9074 11.3828 20.0344 11.5569C20.1615 11.7311 20.2401 11.9358 20.2622 12.1502C20.4387 13.6584 20.1414 15.1841 19.4115 16.5156C18.6816 17.8471 17.5553 18.9184 16.1889 19.5807C14.8225 20.243 13.2838 20.4636 11.7863 20.2117C10.2889 19.9598 8.90702 19.248 7.83248 18.1751C6.75795 17.1022 6.04407 15.7214 5.78992 14.2244C5.53578 12.7274 5.75397 11.1883 6.41422 9.82092C7.07447 8.45351 8.14403 7.32556 9.47443 6.59361C10.8048 5.86167 12.3301 5.56204 13.8385 5.73632C14.0001 5.7513 14.157 5.79838 14.3 5.87479C14.4431 5.9512 14.5695 6.05541 14.6718 6.1813C14.7741 6.30719 14.8502 6.45224 14.8958 6.60793C14.9413 6.76363 14.9552 6.92685 14.9368 7.08801C14.9185 7.24918 14.8681 7.40505 14.7887 7.54649C14.7093 7.68794 14.6024 7.81211 14.4744 7.91172C14.3464 8.01134 14.1998 8.08439 14.0431 8.12661C13.8865 8.16882 13.723 8.17935 13.5623 8.15757C12.8792 8.07826 12.1871 8.14435 11.5314 8.35151C10.8757 8.55867 10.2713 8.9022 9.75776 9.35954C9.24425 9.81688 8.8333 10.3777 8.55191 11.0051C8.27051 11.6326 8.12504 12.3124 8.12504 13.0001Z"
                        fill="#E2531F"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_61_216">
                        <rect width="26" height="26" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>{t("whyChoose.points.1")}</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-2"
                  custom={2}
                  initial={reduceMotion ? undefined : "hidden"}
                  animate={reduceMotion ? undefined : "visible"}
                  variants={listItemVariants}
                  whileHover={reduceMotion ? undefined : { scale: 1.02, x: 4 }}
                >
                  <svg
                    width="37"
                    height="37"
                    viewBox="0 0 37 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.85413 8.78734C3.85413 7.06067 3.85413 6.19734 4.19021 5.5375C4.48581 4.95736 4.95749 4.48569 5.53763 4.19009C6.19746 3.854 7.06079 3.854 8.78746 3.854H28.2125C29.9391 3.854 30.8025 3.854 31.4623 4.19009C32.0424 4.48569 32.5141 4.95736 32.8097 5.5375C33.1458 6.19734 33.1458 7.06067 33.1458 8.78734V28.2123C33.1458 29.939 33.1458 30.8023 32.8097 31.4622C32.5141 32.0423 32.0424 32.514 31.4623 32.8096C30.8025 33.1457 29.9391 33.1457 28.2125 33.1457H8.78746C7.06079 33.1457 6.19746 33.1457 5.53763 32.8096C4.95749 32.514 4.48581 32.0423 4.19021 31.4622C3.85413 30.8023 3.85413 29.939 3.85413 28.2123V8.78734Z"
                      stroke="#E2531F"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M28.5208 33.1458L19.2708 10.0208M33.1458 6.9375L3.85413 13.1042M19.2708 23.1713C19.2708 26.4982 15.9716 28.8353 14.5333 29.6971C14.3344 29.8164 14.1069 29.8794 13.875 29.8794C13.6431 29.8794 13.4155 29.8164 13.2167 29.6971C11.7783 28.8353 8.47913 26.4982 8.47913 23.1697C8.47913 19.906 11.0938 17.7292 13.875 17.7292C16.7533 17.7292 19.2708 19.906 19.2708 23.1713Z"
                      stroke="#E2531F"
                      strokeWidth="2"
                    />
                    <path
                      d="M13.8749 24.6663C14.7264 24.6663 15.4166 23.9761 15.4166 23.1247C15.4166 22.2732 14.7264 21.583 13.8749 21.583C13.0235 21.583 12.3333 22.2732 12.3333 23.1247C12.3333 23.9761 13.0235 24.6663 13.8749 24.6663Z"
                      fill="#E2531F"
                    />
                  </svg>
                  <span>{t("whyChoose.points.2")}</span>
                </motion.li>
              </motion.ul>
            </AnimatePresence>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="equipe" className="rounded-2xl bg-[#EFEFEF] px-6">
          <AccordionTrigger className="flex items-center justify-between text-left text-3xl leading-[69px] font-medium text-[#0D0D0D]">
            <span>{t("team.title")}</span>
          </AccordionTrigger>
          <AccordionContent>
            <AnimatePresence initial={false}>
              <motion.div
                key="content-team"
                className="grid gap-6 pb-8 text-[#0D0D0D] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                initial={reduceMotion ? undefined : "collapsed"}
                animate={reduceMotion ? undefined : "open"}
                exit={reduceMotion ? undefined : "collapsed"}
                variants={contentVariants}
              >
                {teamMembersWithPhotos.map((m, i) => (
                  <motion.div
                    key={m.name}
                    className="flex flex-col items-center rounded-lg p-4"
                    custom={i}
                    initial={reduceMotion ? undefined : "hidden"}
                    animate={reduceMotion ? undefined : "visible"}
                    variants={cardVariants}
                    whileHover={reduceMotion ? undefined : { scale: 1.05 }}
                  >
                    <div className="mb-3 flex size-20 items-center justify-center overflow-hidden rounded-md border-8 border-[#F5F5F5] bg-[#F5F5F5] shadow-md">
                      <Image
                        src={m.photo}
                        alt={m.name}
                        width={90}
                        height={90}
                        className="h-full w-full object-cover"
                        priority={false}
                      />
                    </div>
                    <div className="text-center">
                      <div className="text-[20px]/[29px] font-medium">{m.name}</div>
                      <div className="text-sm font-medium tracking-wide text-[#E2531F] uppercase">
                        {m.role}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
