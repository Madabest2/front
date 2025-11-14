import { contactFormSchema } from "@/features/contact/types";
import { NextRequest, NextResponse } from "next/server";

/**
 * API Route pour gérer les soumissions du formulaire de contact
 * POST /api/contact
 */
export async function POST(request: NextRequest) {
  try {
    // 1. Récupérer et parser le body de la requête
    const body = await request.json();

    // 2. Valider les données avec Zod
    const validatedData = contactFormSchema.parse(body);

    // 3. Log des données (à retirer en production)
    console.log("📧 Nouveau message de contact:", validatedData);

    // 4. TODO: Implémenter l'envoi d'email
    // Exemples d'intégrations possibles :

    // Option A: SendGrid
    // const sgMail = require('@sendgrid/mail');
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // await sgMail.send({
    //   to: 'contact@madabestour.com',
    //   from: 'noreply@madabestour.com',
    //   subject: `Contact: ${validatedData.subject}`,
    //   html: generateEmailTemplate(validatedData),
    // });

    // Option B: Resend
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'contact@madabestour.com',
    //   to: ['contact@madabestour.com'],
    //   subject: `Nouveau message de ${validatedData.firstName} ${validatedData.lastName}`,
    //   html: generateEmailTemplate(validatedData),
    // });

    // Option C: Nodemailer (SMTP)
    // const nodemailer = require('nodemailer');
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: process.env.SMTP_PORT,
    //   secure: true,
    //   auth: {
    //     user: process.env.SMTP_USER,
    //     pass: process.env.SMTP_PASS,
    //   },
    // });
    // await transporter.sendMail({
    //   from: process.env.SMTP_FROM,
    //   to: 'contact@madabestour.com',
    //   subject: `Contact: ${validatedData.subject}`,
    //   html: generateEmailTemplate(validatedData),
    // });

    // 5. TODO: Sauvegarder dans la base de données (optionnel)
    // await prisma.contactMessage.create({
    //   data: {
    //     ...validatedData,
    //     status: 'pending',
    //     receivedAt: new Date(),
    //   },
    // });

    // 6. Retourner une réponse de succès
    return NextResponse.json(
      {
        success: true,
        message: "Votre message a été envoyé avec succès !",
      },
      { status: 200 }
    );
  } catch (error) {
    // Gestion des erreurs de validation Zod
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        {
          success: false,
          error: "Données invalides",
          details: error,
        },
        { status: 400 }
      );
    }

    // Autres erreurs
    console.error("❌ Erreur lors du traitement du message de contact:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Une erreur est survenue. Veuillez réessayer plus tard.",
      },
      { status: 500 }
    );
  }
}

/**
 * Template HTML pour l'email de contact
 * @param data - Données validées du formulaire
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function generateEmailTemplate(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}): string {
  const subjectLabels: Record<string, string> = {
    circuits: "Informations sur les circuits et activités",
    reservations: "Réservations et hébergements",
    conseils: "Conseils pratiques et assistance voyage",
    autre: "Autre",
  };

  return `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nouveau message de contact</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .container {
          background: #f9f9f9;
          border-radius: 10px;
          padding: 30px;
        }
        .header {
          background: #E2531F;
          color: white;
          padding: 20px;
          border-radius: 10px 10px 0 0;
          margin: -30px -30px 30px -30px;
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
        }
        .field {
          margin-bottom: 20px;
          background: white;
          padding: 15px;
          border-radius: 5px;
        }
        .field-label {
          font-weight: bold;
          color: #E2531F;
          margin-bottom: 5px;
          font-size: 14px;
          text-transform: uppercase;
        }
        .field-value {
          color: #333;
          font-size: 16px;
        }
        .message-box {
          background: white;
          padding: 20px;
          border-radius: 5px;
          border-left: 4px solid #E2531F;
        }
        .footer {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #ddd;
          font-size: 12px;
          color: #666;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>📧 Nouveau message de contact</h1>
        </div>
        
        <div class="field">
          <div class="field-label">De</div>
          <div class="field-value">${data.firstName} ${data.lastName}</div>
        </div>
        
        <div class="field">
          <div class="field-label">Email</div>
          <div class="field-value">
            <a href="mailto:${data.email}" style="color: #E2531F;">${data.email}</a>
          </div>
        </div>
        
        <div class="field">
          <div class="field-label">Téléphone</div>
          <div class="field-value">
            <a href="tel:${data.phone}" style="color: #E2531F;">${data.phone}</a>
          </div>
        </div>
        
        <div class="field">
          <div class="field-label">Sujet</div>
          <div class="field-value">${subjectLabels[data.subject] || data.subject}</div>
        </div>
        
        <div class="field">
          <div class="field-label">Message</div>
          <div class="message-box">${data.message.replace(/\n/g, "<br>")}</div>
        </div>
        
        <div class="footer">
          <p>
            Ce message a été envoyé depuis le formulaire de contact de 
            <strong>Madabest Tour</strong>
          </p>
          <p>
            📅 Reçu le ${new Date().toLocaleDateString("fr-FR", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}

// Configuration CORS (si nécessaire)
export async function OPTIONS(_request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
