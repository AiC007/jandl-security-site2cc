// Zapier durable workflow: jandl-website-enquiry-notify
// Workflow ID: 01a08fe2-2984-70e1-96a7-9282b5bfa1c2
// Editor: https://zapier.com/workflow/01a08fe2-2984-70e1-96a7-9282b5bfa1c2
//
// This file is the repository record of the source published to Zapier.
// It is not compiled by Next.js (see tsconfig exclude). The site posts each
// quote-form submission to the workflow's catch-hook URL (QUOTE_WEBHOOK_URL)
// with a shared token (QUOTE_WEBHOOK_TOKEN); the workflow emails the enquiry
// from the Wendy Gmail account to the J&L office.
//
// The placeholder below is replaced with the real token at publish time.
// The real value lives only in Zapier and in the Vercel environment variable.

import { defineDurable } from "@zapier/zapier-durable";
import { createZapierSdk } from "@zapier/zapier-sdk";
import { z } from "zod";

const sdk = createZapierSdk();

// Shared secret: must match QUOTE_WEBHOOK_TOKEN on the Vercel project.
const EXPECTED_TOKEN = "__QUOTE_WEBHOOK_TOKEN__";

const GMAIL_CONNECTION = "gmail_wendy";
const FROM_ADDRESS = "Wendy AI, The AI Consultancy <ai@theaiconsultancy.ai>";
const CLIENT_INBOX = "info@jandlsecurity.co.uk";
const AIC_INBOX = "ai@theaiconsultancy.ai";

const InputSchema = z
  .object({
    token: z.string().nullable().optional(),
    id: z.string().nullable().optional(),
    name: z.string().nullable().optional(),
    phone: z.string().nullable().optional(),
    service: z.string().nullable().optional(),
    postcode: z.string().nullable().optional(),
    message: z.string().nullable().optional(),
    submittedAt: z.string().nullable().optional(),
    source: z.string().nullable().optional(),
    environment: z.string().nullable().optional(),
    page: z.string().nullable().optional(),
  })
  .loose();
type Input = z.infer<typeof InputSchema>;

function normalizeInput(rawInput: unknown): unknown {
  if (typeof rawInput === "string") {
    return JSON.parse(rawInput);
  }
  return rawInput;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Strip CR/LF so a payload value can never inject extra mail headers.
function headerSafe(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function formatUkTime(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleString("en-GB", {
    timeZone: "Europe/London",
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function buildMime(to: string, subject: string, text: string, html: string): string {
  const boundary = "----=_JandL_" + Math.random().toString(36).slice(2);
  const lines = [
    "From: " + FROM_ADDRESS,
    "To: " + to,
    "Subject: " + headerSafe(subject),
    "MIME-Version: 1.0",
    'Content-Type: multipart/alternative; boundary="' + boundary + '"',
    "",
    "--" + boundary,
    'Content-Type: text/plain; charset="UTF-8"',
    "Content-Transfer-Encoding: 8bit",
    "",
    text,
    "",
    "--" + boundary,
    'Content-Type: text/html; charset="UTF-8"',
    "Content-Transfer-Encoding: 8bit",
    "",
    html,
    "",
    "--" + boundary + "--",
    "",
  ];
  return lines.join("\r\n");
}

const workflow = defineDurable<Input, unknown>(
  "jandl-website-enquiry-notify",
  async (ctx, rawInput) => {
    const input = InputSchema.parse(normalizeInput(rawInput));

    // Reject anything that did not come from the site.
    if ((input.token ?? "") !== EXPECTED_TOKEN) {
      return { skipped: true, reason: "invalid-token" };
    }

    const name = headerSafe(input.name ?? "Not given");
    const phone = headerSafe(input.phone ?? "Not given");
    const service = headerSafe(input.service ?? "Not given");
    const postcode = headerSafe(input.postcode ?? "Not given");
    const message = (input.message ?? "").trim();
    const submittedAt = input.submittedAt ?? "";
    const environment = input.environment ?? "development";
    const page = input.page ?? "";
    const id = input.id ?? "";

    const isProduction = environment === "production";
    const to = isProduction ? CLIENT_INBOX : AIC_INBOX;
    const subjectPrefix = isProduction ? "" : "[TEST " + environment + "] ";
    const subject = subjectPrefix + "New website enquiry: " + service + " in " + postcode + " from " + name;
    const when = submittedAt ? formatUkTime(submittedAt) : "";

    const textLines = [
      "New enquiry from the J&L Security website quote form.",
      "",
      "Name: " + name,
      "Phone: " + phone,
      "Service: " + service,
      "Postcode: " + postcode,
      message ? "Message: " + message : "",
      when ? "Submitted: " + when : "",
      page ? "Page: " + page : "",
      "",
      "The customer has been told to expect a call within 2 hours during business hours.",
      "",
      "Reference: " + id,
      "Sent automatically by the J&L Security website via The AI Consultancy.",
    ].filter((line) => line !== "");
    const text = textLines.join("\n");

    const row = (label: string, value: string) =>
      '<tr><td style="padding:6px 12px 6px 0;color:#5b6b7b;vertical-align:top;white-space:nowrap;">' +
      label +
      '</td><td style="padding:6px 0;color:#0A1F3D;font-weight:600;">' +
      value +
      "</td></tr>";

    const html =
      '<div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#1f2d3d;line-height:1.5;max-width:640px;">' +
      '<p style="color:#8792a2;font-size:12px;margin:0 0 14px 0;">J&amp;L Security website &middot; New enquiry</p>' +
      "<p>A customer has just submitted the quote form on jandlsecurity.co.uk.</p>" +
      '<table style="border-collapse:collapse;font-size:14px;">' +
      row("Name", escapeHtml(name)) +
      row("Phone", '<a href="tel:' + escapeHtml(phone.replace(/\s+/g, "")) + '" style="color:#0A1F3D;">' + escapeHtml(phone) + "</a>") +
      row("Service", escapeHtml(service)) +
      row("Postcode", escapeHtml(postcode)) +
      (message ? row("Message", escapeHtml(message)) : "") +
      (when ? row("Submitted", escapeHtml(when)) : "") +
      (page ? row("Page", escapeHtml(page)) : "") +
      "</table>" +
      '<div style="background:#FEFCE8;border-left:3px solid #F59E0B;padding:10px 14px;margin:16px 0;">' +
      "The customer has been told to expect a call within 2 hours during business hours." +
      "</div>" +
      '<p style="color:#8792a2;font-size:12px;">Reference ' + escapeHtml(id) +
      " &middot; Sent automatically by the J&amp;L Security website via The AI Consultancy.</p>" +
      "</div>";

    const mime = buildMime(to, subject, text, html);
    const raw = Buffer.from(mime, "utf8").toString("base64url");

    const sent = await ctx.step({
      name: "send-enquiry-email",
      maxAttempts: 3,
      retryDelaySeconds: 10,
      run: async () => {
        const response = await sdk.fetch("https://gmail.googleapis.com/gmail/v1/users/me/messages/send", {
          connection: GMAIL_CONNECTION,
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ raw }),
        });
        if (!response.ok) {
          const detail = await response.text();
          throw new Error("Gmail send failed " + response.status + ": " + detail.slice(0, 500));
        }
        const json = (await response.json()) as { id?: string; threadId?: string };
        return { messageId: json.id ?? null, threadId: json.threadId ?? null };
      },
    });

    return { delivered: true, to, subject, reference: id, gmail: sent };
  },
);

export default workflow;
