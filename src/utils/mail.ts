import nodemailer from "nodemailer";
import { SMTP_HOST, SMTP_USER, SMTP_PASS, MAIL_TO } from "./envs";
import { mailData } from "../types/mailTypes";

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: 465,
  secure: true,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

export const sendEmail = async (data: mailData) => {
  const info = await transporter.sendMail({
    from: SMTP_USER,
    to: MAIL_TO,
    subject: `Nieuw formulier van ${data.naam} ${data.voornaam}`,
    html: `
      <h2>Nieuw formulier ontvangen!</h2>
      <ul>
        <li><strong>Naam:</strong> ${data.naam}</li>
        <li><strong>Voornaam:</strong> ${data.voornaam}</li>
        <li><strong>Geboortedatum:</strong> ${data.geboortedatum}</li>
        <li><strong>Haarkleur:</strong> ${data.haarkleur}</li>
        <li><strong>Lengte:</strong> ${data.lengte} cm</li>
        <li><strong>Geslacht:</strong> ${data.geslacht}</li>
        <li><strong>Opmerking:</strong> ${data.opmerking}</li>
      </ul>
    `,
  });

  console.log("Mail succesvol verzonden 🚀");
};
