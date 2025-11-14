"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/features/design-system/components/ui/accordion";

export function AboutAccordions() {
  const teamMembers = [
    { name: "Mme Cynthia", role: "GÉRANTE MADABEST" },
    { name: "Paul", role: "RESPONSABLE LOGISTIQUE" },
    { name: "Jean-Luc", role: "RESPONSABLE PRODUIT MADABEST" },
    { name: "Malice", role: "MANAGEUR MADABEST" },
    { name: "Maule", role: "CONSULTANTE MADABEST" },
    { name: "Jordan", role: "CHAUFFEUR MADABEST" },
    { name: "Nico", role: "CHAUFFEUR MADABEST" },
  ];

  return (
    <section className="mx-auto mt-16 max-w-[1300px] px-4">
      <Accordion type="single" collapsible className="grid gap-4">
        <AccordionItem value="qui" className="rounded-2xl bg-[#EFEFEF] px-6">
          <AccordionTrigger className="flex items-center justify-between text-left text-3xl leading-[69px] font-medium text-[#0D0D0D]">
            <span>Qui sommes nous ?</span>
          </AccordionTrigger>
          <AccordionContent className="pb-6 text-[20px]/[29px] text-[#0D0D0D]">
            Madabest, est un voyagiste et agence réceptive à Diego Suarez Madagascar spécialisé dans
            le voyage sur mesure et les circuits ludiques tels que les séjours animaliers,
            balnéaires et sportifs. Notre équipe créative, chaleureuse et passionnée est
            expérimentée, forgée en apprenant de chaque service accompli depuis quelques années.
            Laissez notre équipe expérimentée et créative s’occuper de tout. Nous sommes toujours
            disponibles pour organiser vos vacances, faites-nous part de vos besoins spécifiques, de
            vos moyens et de votre temps.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="pourquoi" className="rounded-2xl bg-[#EFEFEF] px-6">
          <AccordionTrigger className="flex items-center justify-between text-left text-3xl leading-[69px] font-medium text-[#0D0D0D]">
            <span>Pourquoi choisir MADABEST ?</span>
          </AccordionTrigger>
          <AccordionContent className="pb-6 text-[20px]/[29px] font-semibold text-[#0D0D0D]">
            <ul className="mt-1 grid gap-3 text-[20px]/[29px]">
              <li className="flex items-start gap-5">
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
                <span>Écoute & préparation personnalisée</span>
              </li>
              <li className="flex items-start gap-5">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.43225 12.1888C2.43392 13.5829 2.73457 14.9606 3.31393 16.2287C3.89328 17.4968 4.73785 18.6259 5.79068 19.5399C6.84351 20.4538 8.08011 21.1313 9.41705 21.5267C10.754 21.9222 12.1602 22.0262 13.5408 21.832C14.9214 21.6377 16.2442 21.1496 17.4201 20.4006C18.5961 19.6517 19.5977 18.6592 20.3574 17.4902C21.1172 16.3212 21.6174 15.0029 21.8243 13.6241C22.0312 12.2454 21.94 10.8383 21.5569 9.49776C21.5031 9.34115 21.4817 9.17523 21.4941 9.0101C21.5065 8.84497 21.5523 8.68409 21.6289 8.53725C21.7054 8.3904 21.8111 8.26068 21.9393 8.15596C22.0676 8.05124 22.2159 7.97373 22.3751 7.92813C22.5343 7.88254 22.7011 7.86982 22.8653 7.89075C23.0296 7.91168 23.1879 7.96582 23.3305 8.04988C23.4732 8.13393 23.5973 8.24615 23.6952 8.37969C23.7931 8.51322 23.8629 8.66529 23.9001 8.82664C24.642 11.4226 24.5011 14.1914 23.4995 16.6987C22.4979 19.2059 20.6923 21.3098 18.366 22.6801C16.0398 24.0504 13.3244 24.6098 10.6459 24.2703C7.96742 23.9309 5.47741 22.7118 3.5665 20.8045C1.65768 18.8941 0.437363 16.4038 0.0971342 13.7247C-0.243095 11.0456 0.316036 8.32941 1.68674 6.00251C3.05744 3.6756 5.1621 1.86979 7.67027 0.86859C10.1784 -0.132608 12.9481 -0.272497 15.5444 0.470887C15.8535 0.561256 16.1143 0.770322 16.2698 1.0524C16.4253 1.33447 16.4627 1.66662 16.3741 1.97625C16.2854 2.28588 16.0777 2.54782 15.7965 2.70482C15.5153 2.86183 15.1834 2.90113 14.8733 2.81414C13.4214 2.39724 11.8926 2.32337 10.4073 2.59834C8.92209 2.87331 7.52104 3.48961 6.31469 4.39862C5.10834 5.30764 4.12969 6.48451 3.45594 7.83641C2.78218 9.18831 2.43174 10.6783 2.43225 12.1888Z"
                    fill="#E2531F"
                  />
                </svg>
                <span>Organisation et support clairs</span>
              </li>
              <li className="flex items-start gap-2">
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
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M28.5208 33.1458L19.2708 10.0208M33.1458 6.9375L3.85413 13.1042M19.2708 23.1713C19.2708 26.4982 15.9716 28.8353 14.5333 29.6971C14.3344 29.8164 14.1069 29.8794 13.875 29.8794C13.6431 29.8794 13.4155 29.8164 13.2167 29.6971C11.7783 28.8353 8.47913 26.4982 8.47913 23.1697C8.47913 19.906 11.0938 17.7292 13.875 17.7292C16.7533 17.7292 19.2708 19.906 19.2708 23.1713Z"
                    stroke="#E2531F"
                    stroke-width="2"
                  />
                  <path
                    d="M13.8749 24.6663C14.7264 24.6663 15.4166 23.9761 15.4166 23.1247C15.4166 22.2732 14.7264 21.583 13.8749 21.583C13.0235 21.583 12.3333 22.2732 12.3333 23.1247C12.3333 23.9761 13.0235 24.6663 13.8749 24.6663Z"
                    fill="#E2531F"
                  />
                </svg>
                <span>Services flexibles, sur mesure et adaptés</span>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="equipe" className="rounded-2xl bg-[#EFEFEF] px-6">
          <AccordionTrigger className="flex items-center justify-between text-left text-3xl leading-[69px] font-medium text-[#0D0D0D]">
            <span>Notre équipe au sein de MADABEST</span>
          </AccordionTrigger>
          <AccordionContent className="pb-8 text-[#0D0D0D]">
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {teamMembers.map((m) => (
                <div
                  key={m.name}
                  className="flex flex-col items-center rounded-lg bg-white p-4 shadow-sm"
                >
                  <div className="mb-3 flex size-20 items-center justify-center rounded-md bg-[#F5F5F5] text-xl font-semibold text-[#0D0D0D]">
                    {m.name
                      .split(" ")
                      .map((s) => s.charAt(0))
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div className="text-center">
                    <div className="text-[20px]/[29px] font-medium">{m.name}</div>
                    <div className="text-sm font-medium tracking-wide text-[#E2531F] uppercase">
                      {m.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
