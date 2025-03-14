import "dotenv/config";

const { SMTP_HOST, SMTP_USER, SMTP_PASS, MAIL_TO, PORT } = process.env;

if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !MAIL_TO || !PORT) {
  throw new Error("Some SMTP variables are missing!");
}

export { SMTP_HOST, SMTP_USER, SMTP_PASS, MAIL_TO, PORT };
