"use server";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1>Melding fra {name} </h1>
    <p>Eposten som ble brukt: {email}</p>
    <p>Melding: {message}</p>
  </div>
);

export async function sendEmail(name: string, email: string, message: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["magnusgjerstad00@gmail.com"],
      subject: "Leilighet - Ny melding fra " + name,
      react: EmailTemplate({ name, email, message }) as React.ReactElement,
    });

    if (error) {
      return false;
    }

    return data;
  } catch (error) {
    return false;
  }
}
