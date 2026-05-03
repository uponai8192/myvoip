import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const DEFAULT_NOTIFY_EMAILS = ['jody@my-voip.com', 'Denise@my-voip.com'];

type DeliveryResult =
  | { ok: true }
  | { ok: false; error: string };

function getNotifyEmails() {
  const configured = process.env.NOTIFY_EMAILS
    ?.split(',')
    .map((email) => email.trim())
    .filter(Boolean);

  return configured?.length ? configured : DEFAULT_NOTIFY_EMAILS;
}

function getFromEmail() {
  return process.env.SMTP_FROM ?? process.env.MAIL_FROM ?? process.env.SMTP_USER;
}

function getErrorMessage(err: unknown) {
  if (err instanceof Error) return err.message;
  return 'Unknown error';
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function safeValue(value: string | undefined, fallback = '—') {
  const normalized = value?.trim();
  return escapeHtml(normalized || fallback);
}

function buildEmailShell({
  accentColor,
  title,
  subtitle,
  rows,
  actionLabel,
  actionHref,
}: {
  accentColor: string;
  title: string;
  subtitle: string;
  rows: string;
  actionLabel?: string;
  actionHref?: string;
}) {
  const actionMarkup = actionLabel && actionHref
    ? `<div style="padding:0 24px 24px">
        <a href="${escapeHtml(actionHref)}" style="display:inline-block;background:${accentColor};color:#ffffff;padding:12px 20px;border-radius:8px;text-decoration:none;font-size:14px;font-weight:600">${escapeHtml(actionLabel)}</a>
      </div>`
    : '';

  return `
  <div style="margin:0;padding:24px;background:#f8fafc;font-family:Arial,Helvetica,sans-serif;color:#0f172a">
    <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:14px;overflow:hidden">
      <div style="background:${accentColor};padding:24px 28px">
        <h2 style="margin:0;color:#ffffff;font-size:20px;line-height:1.3">${title}</h2>
        <p style="margin:6px 0 0;color:#e2e8f0;font-size:14px;line-height:1.5">${subtitle}</p>
      </div>
      <div style="padding:20px 24px">
        <table style="width:100%;border-collapse:collapse">
          ${rows}
        </table>
      </div>
      ${actionMarkup}
    </div>
  </div>`;
}

function buildEmailRow(label: string, value: string) {
  return `
    <tr>
      <td style="padding:10px 0;width:180px;vertical-align:top;color:#475569;font-size:14px;font-weight:600;border-bottom:1px solid #e2e8f0">${escapeHtml(label)}</td>
      <td style="padding:10px 0 10px 18px;vertical-align:top;color:#0f172a;font-size:14px;line-height:1.6;border-bottom:1px solid #e2e8f0">${value}</td>
    </tr>`;
}

// ── Email transport ───────────────────────────────────────────────────────────
function buildTransport() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS ?? process.env.SMTP_PASSWORD;
  if (!host || !user || !pass || pass === 'REPLACE_WITH_YOUR_EMAIL_PASSWORD') return null;

  return nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: false,
    auth: {
      user,
      pass,
    },
    tls: { rejectUnauthorized: false },
  });
}

function buildQuoteEmailHtml(d: Record<string, string>) {
  const rows = [
    d.company ? buildEmailRow('Company', safeValue(d.company)) : '',
    buildEmailRow('Name', safeValue(`${d.firstName} ${d.lastName}`)),
    buildEmailRow('Email', safeValue(d.email)),
    buildEmailRow('Phone', safeValue(d.phone)),
    buildEmailRow('Users / Seats', safeValue(d.seats)),
    buildEmailRow('Desk Phones?', safeValue(d.deskPhones)),
    buildEmailRow('Desk Phone Qty', safeValue(d.deskPhonesQty)),
    buildEmailRow('Mobile / Desktop Users', safeValue(d.mobileUsers)),
    buildEmailRow('AI Receptionist?', safeValue(d.aiReceptionist)),
    buildEmailRow('Call Recording?', safeValue(d.callRecording)),
    buildEmailRow('SMS Consent', d.smsConsent === 'true' ? 'Yes' : 'No'),
  ].join('');

  return buildEmailShell({
    accentColor: '#2563eb',
    title: 'New VoIP Quote Request',
    subtitle: 'Submitted via my-voip.com',
    rows,
    actionLabel: `Reply to ${d.firstName?.trim() || 'Lead'}`,
    actionHref: `mailto:${d.email}`,
  });
}

function buildContactEmailHtml(d: Record<string, string>) {
  const rows = [
    buildEmailRow('Name', safeValue(`${d.firstName} ${d.lastName}`)),
    buildEmailRow('Email', safeValue(d.email)),
    buildEmailRow('Phone', safeValue(d.phone)),
    buildEmailRow('Message', safeValue(d.message)),
    buildEmailRow('SMS Consent', d.smsConsent === 'true' ? 'Yes' : 'No'),
  ].join('');

  return buildEmailShell({
    accentColor: '#7c3aed',
    title: 'New Contact Us Message',
    subtitle: 'Submitted via my-voip.com',
    rows,
    actionLabel: `Reply to ${d.firstName?.trim() || 'Contact'}`,
    actionHref: `mailto:${d.email}`,
  });
}

function buildDownloadEmailHtml(d: Record<string, string>) {
  const rows = [
    buildEmailRow('Email', safeValue(d.email)),
    buildEmailRow('Resource', safeValue(d.resourceTitle)),
    buildEmailRow('Slug', safeValue(d.resourceSlug)),
  ].join('');

  return buildEmailShell({
    accentColor: '#2563eb',
    title: 'New Resource Download',
    subtitle: 'Submitted via my-voip.com',
    rows,
    actionLabel: 'Open PDF',
    actionHref: d.downloadUrl,
  });
}

async function sendNotification(subject: string, html: string): Promise<DeliveryResult> {
  const transport = buildTransport();
  const fromEmail = getFromEmail();
  if (!transport) {
    const error = 'SMTP is not configured. Required: SMTP_HOST, SMTP_USER, and SMTP_PASS or SMTP_PASSWORD.';
    console.error('Email notification failed:', error);
    return { ok: false, error };
  }
  if (!fromEmail) {
    const error = 'SMTP sender is not configured. Set SMTP_FROM or SMTP_USER.';
    console.error('Email notification failed:', error);
    return { ok: false, error };
  }
  try {
    await transport.sendMail({
      from: `"MyVoIP Website" <${fromEmail}>`,
      to: getNotifyEmails().join(', '),
      subject,
      html,
      replyTo: fromEmail,
    });
    return { ok: true };
  } catch (err) {
    console.error('Email notification failed:', err);
    return { ok: false, error: getErrorMessage(err) };
  }
}

// ── GHL helper ────────────────────────────────────────────────────────────────
async function pushToGHL(contact: Record<string, unknown>, customFields: { key: string; field_value: string }[]): Promise<DeliveryResult> {
  const apiKey = process.env.GHL_API_KEY;
  const locationId = process.env.GHL_LOCATION_ID;
  if (!apiKey || apiKey.startsWith('YOUR_')) {
    return { ok: false, error: 'GHL is not configured.' };
  }

  const res = await fetch('https://services.leadconnectorhq.com/contacts/', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      Version: '2021-07-28',
    },
    body: JSON.stringify({ ...contact, locationId, customFields }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error('GHL API error:', res.status, err);
    return { ok: false, error: `GHL API error ${res.status}: ${err}` };
  }

  return { ok: true };
}

// ── Route handler ─────────────────────────────────────────────────────────────
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { formType = 'contact' } = body;

    if (formType === 'download') {
      const { email, resourceSlug, resourceTitle, downloadUrl } = body;

      if (!email || !resourceSlug || !resourceTitle || !downloadUrl) {
        return NextResponse.json({ error: 'Email and resource details are required.' }, { status: 400 });
      }

      const ghlResult = await pushToGHL(
        {
          email,
          source: 'Website Resource Download',
          tags: ['resource-download', String(resourceSlug), 'website-lead'],
        },
        [
          { key: 'resource_slug', field_value: String(resourceSlug) },
          { key: 'resource_title', field_value: String(resourceTitle) },
          { key: 'download_url', field_value: String(downloadUrl) },
        ],
      );

      const emailResult = await sendNotification(
        `📥 Resource Download: ${resourceTitle}`,
        buildDownloadEmailHtml({
          email: String(email),
          resourceSlug: String(resourceSlug),
          resourceTitle: String(resourceTitle),
          downloadUrl: String(downloadUrl),
        }),
      );

      if (!emailResult.ok) {
        return NextResponse.json({ error: `Download captured, but email alert failed: ${emailResult.error}` }, { status: 502 });
      }

      if (!ghlResult.ok) {
        console.warn('Resource download saved without GHL sync:', ghlResult.error);
      }

      return NextResponse.json({ success: true });
    }

    if (!body.firstName || !body.email) {
      return NextResponse.json({ error: 'First name and email are required.' }, { status: 400 });
    }

    if (formType === 'quote') {
      // ── VoIP Quote ──────────────────────────────────────────────────────────
      const {
        firstName, lastName, email, phone, company,
        seats, deskPhones, deskPhonesQty, mobileUsers,
        aiReceptionist, callRecording, smsConsent,
      } = body;

      const ghlResult = await pushToGHL(
        { firstName, lastName, email, phone, companyName: company, source: 'Website VoIP Quote', tags: ['voip-quote', 'website-lead'] },
        [
          { key: 'seats_needed', field_value: seats ?? '' },
          { key: 'desk_phones', field_value: deskPhones ?? '' },
          { key: 'desk_phones_qty', field_value: deskPhonesQty ?? '' },
          { key: 'mobile_users', field_value: mobileUsers ?? '' },
          { key: 'ai_receptionist', field_value: aiReceptionist ?? '' },
          { key: 'call_recording', field_value: callRecording ?? '' },
          { key: 'sms_consent', field_value: smsConsent ? 'Yes' : 'No' },
        ],
      );

      const emailResult = await sendNotification(
        `🚀 New VoIP Quote: ${firstName} ${lastName} — ${company || 'No Company'}`,
        buildQuoteEmailHtml({ firstName, lastName, email, phone, company, seats, deskPhones, deskPhonesQty, mobileUsers, aiReceptionist, callRecording, smsConsent: String(smsConsent) }),
      );

      if (!emailResult.ok) {
        return NextResponse.json({ error: `We couldn't deliver your quote request alert: ${emailResult.error}` }, { status: 502 });
      }

      if (!ghlResult.ok) {
        console.warn('Quote saved without GHL sync:', ghlResult.error);
      }
    } else {
      // ── Contact Us ──────────────────────────────────────────────────────────
      const { firstName, lastName, email, phone, message, smsConsent } = body;

      const ghlResult = await pushToGHL(
        { firstName, lastName, email, phone, source: 'Website Contact Form', tags: ['contact-us', 'website-lead'] },
        [
          { key: 'message', field_value: message ?? '' },
          { key: 'sms_consent', field_value: smsConsent ? 'Yes' : 'No' },
        ],
      );

      const emailResult = await sendNotification(
        `💬 New Contact Us: ${firstName} ${lastName}`,
        buildContactEmailHtml({ firstName, lastName, email, phone, message, smsConsent: String(smsConsent) }),
      );

      if (!emailResult.ok) {
        return NextResponse.json({ error: `We couldn't deliver your contact request alert: ${emailResult.error}` }, { status: 502 });
      }

      if (!ghlResult.ok) {
        console.warn('Contact saved without GHL sync:', ghlResult.error);
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
