'use client';

import React, { useState, useEffect, useId } from 'react';
import QRCode from 'qrcode';
import {
  Download,
  Check,
  Share2,
  QrCode as QrCodeIcon,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Globe,
  Linkedin,
  Github,
  Instagram,
  Youtube,
  MessageCircle,
  ExternalLink,
  Copy,
  X,
  Sparkles,
  ShieldCheck,
  ArrowUpRight,
} from 'lucide-react';
import { contactConfig } from '@/config/contact';

export default function DigitalCardPage() {
  const [downloaded, setDownloaded] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const cardUrl = contactConfig.cardUrl;
  const qrModalTitleId = useId();

  // Generate crisp QR code on mount
  useEffect(() => {
    // Encodes the card URL with auto=1 so scanner triggers immediate download prompt
    const targetUrl = `${cardUrl}?auto=1`;
    QRCode.toDataURL(targetUrl, {
      width: 480,
      margin: 2,
      color: {
        dark: '#0B192C',
        light: '#FFFFFF',
      },
    })
      .then((url) => setQrDataUrl(url))
      .catch((err) => console.error('QR code generation error:', err));
  }, [cardUrl]);

  // Science-backed UX: Auto-trigger download on arrival if requested via query param
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('auto') === '1' || params.get('download') === '1') {
        const timer = setTimeout(() => {
          handleDownloadVCard();
        }, 350);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  const handleDownloadVCard = () => {
    const link = document.createElement('a');
    link.href = contactConfig.vcardDownloadUrl;
    link.setAttribute('download', 'Nordible-Technologies.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 4000);
  };

  const handleShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: `${contactConfig.company.name} – Kontakt & Visitenkarte`,
          text: `Kontaktdaten von ${contactConfig.founder.name} (${contactConfig.company.name}) herunterladen.`,
          url: cardUrl,
        });
        return;
      } catch {
        // Fallback to clipboard if share was canceled or failed
      }
    }

    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      await navigator.clipboard.writeText(cardUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const socialChannels = [
    {
      name: 'LinkedIn',
      handle: 'nordible-co',
      url: contactConfig.social.linkedin,
      icon: Linkedin,
      color: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/40',
    },
    {
      name: 'GitHub',
      handle: 'nordible',
      url: contactConfig.social.github,
      icon: Github,
      color: 'hover:text-gray-900 dark:hover:text-white hover:border-gray-400',
    },
    {
      name: 'Instagram',
      handle: '@nordible.co',
      url: contactConfig.social.instagram,
      icon: Instagram,
      color: 'hover:text-[#E4405F] hover:border-[#E4405F]/40',
    },
    {
      name: 'YouTube',
      handle: '@nordible',
      url: contactConfig.social.youtube,
      icon: Youtube,
      color: 'hover:text-[#FF0000] hover:border-[#FF0000]/40',
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pb-28 pt-6 sm:pt-10 px-4 select-none">
      <div className="max-w-md mx-auto space-y-4">
        {/* Top Utility Bar */}
        <div className="flex items-center justify-between px-1">
          <a
            href={contactConfig.websiteUrl}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>nordible.co</span>
          </a>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 shadow-sm active:scale-95 transition-all"
              title="Link teilen"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Kopiert!' : 'Teilen'}</span>
            </button>

            <button
              type="button"
              onClick={() => setShowQrModal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-xs font-semibold text-blue-600 dark:text-blue-400 shadow-sm active:scale-95 transition-all"
              title="QR-Code zum Scannen vorzeigen"
            >
              <QrCodeIcon className="w-3.5 h-3.5" />
              <span>QR-Code</span>
            </button>
          </div>
        </div>

        {/* Main Digital Business Card (Visitenkarte) */}
        <section className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-black/40 overflow-hidden">
          {/* Brand Header Banner */}
          <div className="relative bg-gradient-to-r from-[#0D2B75] via-[#145BFF] to-[#0B192C] p-6 text-white overflow-hidden">
            <div className="absolute -right-6 -top-6 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-md text-[11px] font-semibold text-blue-100 border border-white/20">
                <Sparkles className="w-3 h-3 text-amber-300" />
                <span>Offizielle Visitenkarte</span>
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-blue-200/90">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                <span>Verifiziert</span>
              </span>
            </div>

            <div className="mt-5 flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-white p-1.5 shadow-lg shadow-black/20 shrink-0">
                <img
                  src="/images/founder.png"
                  alt={contactConfig.founder.name}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="min-w-0">
                <h1 className="text-xl font-bold tracking-tight text-white truncate">
                  {contactConfig.founder.name}
                </h1>
                <p className="text-xs font-semibold text-blue-200">
                  {contactConfig.founder.titleDe}
                </p>
                <p className="text-xs text-blue-100/80 font-medium">
                  {contactConfig.company.name}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Actions (Science-backed: immediate 1-tap connection) */}
          <div className="p-5 border-b border-slate-100 dark:border-slate-800">
            <div className="grid grid-cols-4 gap-2">
              <a
                href={contactConfig.phone.telHref}
                className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-blue-50 dark:hover:bg-blue-950/40 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all active:scale-95 border border-slate-200/60 dark:border-slate-800"
              >
                <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-[11px] font-semibold mt-1.5">Anrufen</span>
              </a>

              <a
                href={contactConfig.whatsapp.chatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all active:scale-95 border border-slate-200/60 dark:border-slate-800"
              >
                <MessageCircle className="w-5 h-5 text-emerald-500" />
                <span className="text-[11px] font-semibold mt-1.5">WhatsApp</span>
              </a>

              <a
                href={contactConfig.email.mailToFounder}
                className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all active:scale-95 border border-slate-200/60 dark:border-slate-800"
              >
                <Mail className="w-5 h-5 text-indigo-500" />
                <span className="text-[11px] font-semibold mt-1.5">E-Mail</span>
              </a>

              <a
                href={contactConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-amber-50 dark:hover:bg-amber-950/40 text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 transition-all active:scale-95 border border-slate-200/60 dark:border-slate-800"
              >
                <Calendar className="w-5 h-5 text-amber-500" />
                <span className="text-[11px] font-semibold mt-1.5">Termin</span>
              </a>
            </div>
          </div>

          {/* Detailed Contact Information */}
          <div className="p-5 space-y-3.5 text-xs">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Direkte E-Mail</span>
                <a
                  href={contactConfig.email.mailToFounder}
                  className="font-medium text-slate-800 dark:text-slate-200 hover:text-blue-600 break-all"
                >
                  {contactConfig.email.founder}
                </a>
                <span className="block text-[11px] text-slate-400">{contactConfig.email.general}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Mobil / WhatsApp</span>
                <a
                  href={contactConfig.phone.telHref}
                  className="font-medium text-slate-800 dark:text-slate-200 hover:text-blue-600"
                >
                  {contactConfig.phone.display}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Standort & Büro</span>
                <a
                  href={contactConfig.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-slate-800 dark:text-slate-200 hover:text-blue-600"
                >
                  <span>{contactConfig.address.full}</span>
                  <ArrowUpRight className="w-3 h-3 shrink-0 text-slate-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Social Media Channels */}
          <div className="p-5 bg-slate-50/70 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              Social Media & Netzwerke
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {socialChannels.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2.5 p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 transition-all active:scale-95 ${social.color}`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <div className="min-w-0 text-left">
                      <span className="block text-xs font-semibold leading-tight truncate">{social.name}</span>
                      <span className="block text-[10px] text-slate-400 truncate">{social.handle}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Company Teaser Card */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200/80 dark:border-slate-800 text-left">
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            <strong className="text-slate-900 dark:text-white font-semibold">Nordible Technologies</strong> ist Ihr Business-Technologie-Partner in Frankfurt am Main für individuelle Softwareentwicklung, KI-Agenten und zukunftsfähige Cloud-Architektur.
          </p>
          <div className="mt-3 flex items-center justify-between text-xs pt-2 border-t border-slate-100 dark:border-slate-800">
            <a
              href={contactConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              <span>Kostenloses Erstgespräch vereinbaren</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </section>
      </div>

      {/* Science-backed UX: Fixed Bottom Docked Primary Action Bar (Thumb Zone) */}
      <nav
        aria-label="Schnellaktionen für Kontakte"
        className="fixed bottom-0 left-0 right-0 p-3 sm:p-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 z-40 shadow-2xl"
      >
        <div className="max-w-md mx-auto flex items-center gap-2.5">
          <button
            type="button"
            onClick={handleDownloadVCard}
            className={`flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl text-sm font-bold text-white shadow-lg transition-all active:scale-[0.98] cursor-pointer min-h-[52px] ${
              downloaded
                ? 'bg-emerald-600 shadow-emerald-500/25'
                : 'bg-[#145BFF] hover:bg-blue-600 shadow-blue-500/30'
            }`}
          >
            {downloaded ? (
              <>
                <Check className="w-5 h-5 text-white" />
                <span>Kontakt gespeichert!</span>
              </>
            ) : (
              <>
                <Download className="w-5 h-5 text-white animate-bounce" />
                <span>Kontakt auf Smartphone speichern</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => setShowQrModal(true)}
            className="p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-all active:scale-95 border border-slate-200 dark:border-slate-700 min-h-[52px] min-w-[52px] flex items-center justify-center shrink-0"
            title="QR-Code zum Scannen öffnen"
            aria-label="QR-Code zum Scannen vorzeigen"
          >
            <QrCodeIcon className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Founder Presenter Modal (Clean, high-brightness QR presentation) */}
      {showQrModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={qrModalTitleId}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setShowQrModal(false)}
        >
          <div
            className="bg-white dark:bg-slate-900 rounded-3xl p-6 max-w-sm w-full border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
              <div className="text-left">
                <h3 id={qrModalTitleId} className="text-base font-bold text-slate-900 dark:text-white">
                  QR-Code vorzeigen
                </h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Mit Smartphone-Kamera scannen
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowQrModal(false)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Schließen"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* High Contrast QR Code Display */}
            <div className="bg-white p-4 rounded-2xl border-2 border-slate-100 shadow-inner flex flex-col items-center justify-center">
              {qrDataUrl ? (
                <img
                  src={qrDataUrl}
                  alt="QR-Code Visitenkarte Nordible Technologies"
                  className="w-64 h-64 object-contain"
                />
              ) : (
                <div className="w-64 h-64 flex items-center justify-center text-xs text-slate-400">
                  QR-Code wird generiert...
                </div>
              )}
            </div>

            <div className="space-y-1 text-center">
              <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                1-Klick Kontakt-Download
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Beim Scannen wird die Visitenkarte mit allen Social-Media-Links direkt auf dem Gerät geöffnet.
              </p>
            </div>

            <div className="pt-2 flex gap-2">
              <button
                type="button"
                onClick={async () => {
                  if (typeof navigator !== 'undefined' && navigator.clipboard) {
                    await navigator.clipboard.writeText(cardUrl);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }
                }}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Link kopiert!' : 'Link kopieren'}</span>
              </button>

              <button
                type="button"
                onClick={() => setShowQrModal(false)}
                className="py-2.5 px-4 rounded-xl bg-[#145BFF] text-xs font-bold text-white hover:bg-blue-600 transition-all"
              >
                Fertig
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
