import { contactConfig } from '@/config/contact';

export async function GET() {
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${contactConfig.founder.lastName};${contactConfig.founder.firstName};;;`,
    `FN:${contactConfig.founder.name} | ${contactConfig.company.name}`,
    `ORG:${contactConfig.company.name}`,
    `TITLE:${contactConfig.founder.titleDe}`,
    `EMAIL;TYPE=INTERNET,WORK,PREF:${contactConfig.email.founder}`,
    `EMAIL;TYPE=INTERNET:${contactConfig.email.general}`,
    `TEL;TYPE=CELL,VOICE,PREF:${contactConfig.phone.raw}`,
    `TEL;TYPE=WORK,VOICE:${contactConfig.phone.raw}`,
    `ADR;TYPE=WORK,POSTAL,PARCEL:;;${contactConfig.address.street};${contactConfig.address.city};Hessen;${contactConfig.address.postalCode};${contactConfig.address.country}`,
    `LABEL;TYPE=WORK:${contactConfig.address.full}`,
    `URL;TYPE=WORK,PREF:${contactConfig.websiteUrl}`,
    `URL;TYPE=CALENDAR:${contactConfig.bookingUrl}`,
    `X-SOCIALPROFILE;type=linkedin:${contactConfig.social.linkedin}`,
    `X-SOCIALPROFILE;type=github:${contactConfig.social.github}`,
    `X-SOCIALPROFILE;type=instagram:${contactConfig.social.instagram}`,
    `X-SOCIALPROFILE;type=youtube:${contactConfig.social.youtube}`,
    `X-SOCIALPROFILE;type=whatsapp:${contactConfig.whatsapp.chatUrl}`,
    `NOTE:${contactConfig.company.name} – ${contactConfig.company.taglineDe}\\nAdresse: ${contactConfig.address.full}\\nWebsite: ${contactConfig.websiteUrl}\\nTermin buchen: ${contactConfig.bookingUrl}`,
    `REV:${new Date().toISOString()}`,
    'END:VCARD',
  ].join('\r\n');

  return new Response(vcard, {
    status: 200,
    headers: {
      'Content-Type': 'text/vcard; charset=utf-8',
      'Content-Disposition': 'attachment; filename="Nordible-Technologies.vcf"',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
