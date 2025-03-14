import express from "express";
import cors from "cors";
import { sendEmail } from "./utils/mail";
import { mailData } from "./types/mailTypes";
import { PORT } from "./utils/envs";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is actief! 🚀");
});
app.use(cors());
app.use(express.json());

app.post("/mail", async (req, res) => {
  try {
    const formData: mailData = req.body;
    await sendEmail(formData);
    res.status(200).json({ message: "Mail verzonden!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Er ging iets mis" });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}! 🚀`);
});
