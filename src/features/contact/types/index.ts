import { z } from "zod";

// Schema de validation Zod pour le formulaire de contact
export const contactFormSchema = z.object({
  firstName: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  lastName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(10, "Numéro de téléphone invalide"),
  subject: z.enum(["circuits", "reservations", "conseils", "autre"], {
    message: "Veuillez sélectionner un sujet",
  }),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export type ContactSubject = "circuits" | "reservations" | "conseils" | "autre";

export interface ContactSubjectOption {
  value: ContactSubject;
  label: string;
}

export const contactSubjects: ContactSubjectOption[] = [
  {
    value: "circuits",
    label: "Informations sur les circuits et activités",
  },
  {
    value: "reservations",
    label: "Réservations et hébergements",
  },
  {
    value: "conseils",
    label: "Conseils pratiques et assistance voyage",
  },
  {
    value: "autre",
    label: "Autre",
  },
];
