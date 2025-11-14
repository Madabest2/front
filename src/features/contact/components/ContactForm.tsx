"use client";

import { Button, Input, Label, Textarea } from "@/features/design-system/components";
import { cn } from "@/lib/utils";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Twitter,
} from "lucide-react";
import { useContactForm } from "../hooks";
import { contactSubjects } from "../types";

export function ContactForm() {
  const { form, onSubmit, isSubmitting, submitSuccess, submitError } = useContactForm();
  const {
    register,
    formState: { errors },
    watch,
  } = form;

  const selectedSubject = watch("subject");

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 font-(--font-poppins) md:py-16">
      {/* Titre principal */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-medium text-[#0D0D0D] md:text-5xl lg:text-6xl">
          Contacter nous
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-[#0D0D0D] md:text-xl">
          Des questions ou des remarques ? Écrivez-nous simplement un message !
        </p>
      </div>

      {/* Formulaire de contact (adapté à la maquette) */}
      <div className="relative mx-auto w-full max-w-[1196px] overflow-hidden rounded-[10px] bg-white shadow-[0px_0px_60px_30px_rgba(0,0,0,0.03)] md:h-[667px]">
        <div className="flex h-full flex-col md:flex-row">
          {/* Panel orange mobile */}
          <div className="w-full rounded-t-[10px] bg-[#E2531F] p-6 text-white md:hidden">
            <div className="space-y-2">
              <h2 className="text-[24px] leading-9 font-semibold">Contact Information</h2>
              <p className="text-[16px] leading-6 text-[#F3D9CF]">
                Say something to start a live chat!
              </p>
            </div>

            <div className="mt-6 space-y-4 text-[16px] leading-6">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                <span>+261 34 28 325 14 /+261 32 05 127 11</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5" />
                <div>
                  <div>madabesrtip@gmail.com /</div>
                  <div>contact@madabestour.com</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5" />
                <span>43 Rue de la marne – Diego Suarez</span>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              {[
                { Icon: Twitter, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Facebook, href: "#" },
                { Icon: MessageCircle, href: "#" },
                { Icon: Linkedin, href: "#" },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1B1B1B] transition-colors hover:bg-[#2B2B2B]"
                  aria-label="Social media link"
                >
                  <Icon className="h-4 w-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Panel orange desktop (509px / 647px) */}
          <div className="relative -right-2 hidden h-[647px] w-[509px] shrink-0 self-center overflow-hidden rounded-l-[10px] bg-[#E2531F] text-white md:block">
            {/* Cercles décoratifs selon positions maquette */}
            <div className="absolute top-[438px] left-[283px] h-[138px] w-[138px] rounded-full bg-[rgba(247,214,202,0.5)]" />
            <div className="absolute top-[464px] left-[311px] h-[269px] w-[269px] rounded-full bg-[rgba(247,214,202,0.6)]" />

            {/* Contenu positionné */}
            <div className="absolute top-10 left-10 w-[291px]">
              <h2 className="mb-2 text-[28px] leading-[42px] font-semibold">Contact Information</h2>
              <p className="mb-10 text-[18px] leading-[27px] text-[#C9C9C9]">
                Say something to start a live chat!
              </p>
            </div>

            {/* Groupe téléphone / email / adresse */}
            <div className="absolute top-[226px] left-[30px] space-y-6 text-[16px] leading-6">
              <div className="flex w-[321px] items-center gap-4">
                <Phone className="h-6 w-6" />
                <span>+261 34 28 325 14 /+261 32 05 127 11</span>
              </div>
              <div className="flex w-[279px] items-center gap-4">
                <Mail className="h-6 w-6" />
                <div>
                  <div>madabesrtip@gmail.com /</div>
                  <div>contact@madabestour.com</div>
                </div>
              </div>
              <div className="flex w-[288px] items-start gap-4">
                <MapPin className="mt-1 h-6 w-6" />
                <span>43 Rue de la marne – Diego Suarez</span>
              </div>
            </div>

            {/* Réseaux sociaux positionnés en bas */}
            <div className="absolute top-[581px] left-[39px] flex gap-4">
              {[
                { Icon: Twitter, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Facebook, href: "#" },
                { Icon: MessageCircle, href: "#" },
                { Icon: Linkedin, href: "#" },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#1B1B1B] transition-colors hover:bg-[#2B2B2B]"
                  aria-label="Social media link"
                >
                  <Icon className="h-[18px] w-[18px] text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Zone formulaire (remplit l'espace restant) */}
          <div className="relative flex-1 px-6 py-8 md:px-10">
            <form onSubmit={onSubmit} className="h-full space-y-8">
              {/* Messages de retour */}
              {submitSuccess && (
                <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-green-800">
                  Votre message a été envoyé avec succès !
                </div>
              )}

              {submitError && (
                <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-800">
                  {submitError}
                </div>
              )}

              {/* Nom & Prénom (alignés en haut selon maquette) */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-[12px] font-medium text-[#8D8D8D]">
                    Nom
                  </Label>
                  <Input
                    id="firstName"
                    {...register("firstName")}
                    className={cn(
                      "rounded-lg border-0 border-b border-[#8D8D8D] text-[14px] placeholder:text-[#8D8D8D]",
                      errors.firstName && "border-red-500"
                    )}
                    placeholder="Dupont"
                  />
                  {errors.firstName && (
                    <p className="text-xs text-red-500">{errors.firstName.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-[12px] font-medium text-black">
                    Prénom
                  </Label>
                  <Input
                    id="lastName"
                    {...register("lastName")}
                    className={cn(
                      "border-0 border-b border-[#8D8D8D] text-[14px]",
                      errors.lastName && "border-red-500"
                    )}
                    placeholder="Doe"
                  />
                  {errors.lastName && (
                    <p className="text-xs text-red-500">{errors.lastName.message}</p>
                  )}
                </div>
              </div>

              {/* Email & Téléphone */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[12px] font-medium text-[#8D8D8D]">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    className={cn(
                      "rounded-lg border-0 border-b border-[#8D8D8D] text-[14px] placeholder:text-[#8D8D8D]",
                      errors.email && "border-red-500"
                    )}
                    placeholder="exemple@email.com"
                  />
                  {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-[12px] font-medium text-black">
                    Numéro de téléphone
                  </Label>
                  <Input
                    id="phone"
                    {...register("phone")}
                    className={cn(
                      "rounded-lg border-0 border-b border-black text-[14px] placeholder:text-[#8D8D8D]",
                      errors.phone && "border-red-500"
                    )}
                    placeholder="+261 34 01 123 45"
                  />
                  {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
                </div>
              </div>

              {/* Sujet */}
              <div className="space-y-3">
                <Label className="text-[14px] font-semibold text-black">
                  Sélectionnez un sujet
                </Label>
                {/* Alignement horizontal quatre options */}
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {contactSubjects.map((subject) => (
                    <label
                      key={subject.value}
                      className="group flex cursor-pointer items-center gap-2"
                    >
                      <div className="relative">
                        <input
                          type="radio"
                          value={subject.value}
                          {...register("subject")}
                          className="peer sr-only"
                        />
                        <div
                          className={cn(
                            "flex h-4 w-4 items-center justify-center rounded-full transition-colors",
                            selectedSubject === subject.value ? "bg-black" : "bg-[#E0E0E0]"
                          )}
                        >
                          {selectedSubject === subject.value && (
                            <div className="h-2 w-2 rounded-full bg-white" />
                          )}
                        </div>
                      </div>
                      <span className="text-[12px] text-black">{subject.label}</span>
                    </label>
                  ))}
                </div>

                {errors.subject && <p className="text-xs text-red-500">{errors.subject.message}</p>}
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-[12px] font-medium text-[#8D8D8D]">
                  Message
                </Label>
                <Textarea
                  id="message"
                  {...register("message")}
                  placeholder="Laissez-nous un message..."
                  rows={4}
                  className={cn(
                    "resize-none border-0 border-b border-[#8D8D8D] text-[14px] placeholder:text-[#8D8D8D]",
                    errors.message && "border-red-500"
                  )}
                />
                {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
              </div>

              {/* Bouton d'envoi (aligné selon maquette vers le bas) */}
              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-lg bg-[#E2531F] px-4 py-1.5 text-[16px] leading-[23px] font-medium text-white hover:bg-[#C84517]"
                >
                  {isSubmitting ? "Envoi en cours..." : "Commencer votre réservation"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
