import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface InquiryData {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { fullName, organization, email, phone, message }: InquiryData = await req.json();

    if (!fullName || !organization || !email || !phone) {
      return new Response(
        JSON.stringify({ error: "Не все обязательные поля заполнены" }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const SMTP_HOST = Deno.env.get('SMTP_HOST');
    const SMTP_PORT = Deno.env.get('SMTP_PORT');
    const SMTP_USER = Deno.env.get('SMTP_USER');
    const SMTP_PASS = Deno.env.get('SMTP_PASS');

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      console.error('SMTP settings are not configured');
      return new Response(
        JSON.stringify({ error: "Настройки email не настроены" }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const now = new Date();
    const dateTimeStr = now.toLocaleString('ru-RU', {
      timeZone: 'Asia/Almaty',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    const emailSubject = `Новая заявка от клиники — OcuWave.org`;
    const emailBody = `
Новая заявка от клиники
========================================

Имя: ${fullName}
Email: ${email}
Телефон: ${phone}
Название клиники: ${organization}

Сообщение:
${message || 'Сообщение не указано'}

Дата и время отправки: ${dateTimeStr}

========================================
Эта заявка отправлена через форму на сайте OcuWave.org
    `;

    const client = new SMTPClient({
      connection: {
        hostname: SMTP_HOST,
        port: parseInt(SMTP_PORT),
        tls: true,
        auth: {
          username: SMTP_USER,
          password: SMTP_PASS,
        },
      },
    });

    await client.send({
      from: SMTP_USER,
      to: SMTP_USER,
      subject: emailSubject,
      content: emailBody,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Новая заявка от клиники</h1>
            <p style="color: #e0f2fe; margin: 10px 0 0 0;">OcuWave.org</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <div style="margin-bottom: 20px; padding: 15px; background: #eff6ff; border-left: 4px solid #3b82f6; border-radius: 4px;">
              <p style="margin: 0; color: #1e40af; font-weight: 600;">✉️ Детали заявки:</p>
            </div>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151; width: 40%;">Имя:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">Email:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;"><a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">Телефон:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">Название клиники:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">${organization}</td>
              </tr>
            </table>
            
            <div style="margin-top: 25px; padding: 15px; background: #f9fafb; border-radius: 6px;">
              <p style="margin: 0 0 10px 0; font-weight: 600; color: #374151;">Сообщение:</p>
              <p style="margin: 0; color: #6b7280; line-height: 1.6;">${message || 'Сообщение не указано'}</p>
            </div>
            
            <div style="margin-top: 25px; padding: 15px; background: #ecfdf5; border-radius: 6px; border-left: 4px solid #10b981;">
              <p style="margin: 0; color: #065f46;">📅 <strong>Дата и время отправки:</strong> ${dateTimeStr}</p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; padding: 15px; color: #6b7280; font-size: 12px;">
            <p style="margin: 0;">Эта заявка автоматически отправлена через форму на сайте <a href="https://ocuwave.org" style="color: #3b82f6; text-decoration: none;">OcuWave.org</a></p>
          </div>
        </div>
      `,
    });

    await client.close();

    console.log('Email sent successfully via SMTP');

    return new Response(
      JSON.stringify({ success: true, message: "Заявка успешно отправлена" }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error('Error processing inquiry:', error);
    return new Response(
      JSON.stringify({ error: error.message || "Внутренняя ошибка сервера" }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});