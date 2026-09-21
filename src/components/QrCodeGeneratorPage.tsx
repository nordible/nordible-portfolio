'use client';
import React, { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import { 
  QrCode, 
  Download, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Globe, 
  Wifi, 
  User, 
  FileText, 
  Mail, 
  Phone, 
  Building2, 
  Layers, 
  Zap, 
  Printer, 
  HelpCircle, 
  Lock,
  X,
  RefreshCw,
  Sliders,
  Calendar
} from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { useLanguage } from '../contexts/LanguageContext';
import { sendContactEmail } from '../services/emailService';
import { contactConfig } from '../config/contact';

type QrType = 'url' | 'vcard' | 'wifi' | 'text' | 'email';

export default function QrCodeGeneratorPage() {
  const { language } = useLanguage();
  const isDe = language === 'de';

  // QR Code State
  const [qrType, setQrType] = useState<QrType>('url');
  const [urlInput, setUrlInput] = useState('https://nordible.co');
  const [textInput, setTextInput] = useState('');
  
  // vCard State
  const [vCardName, setVCardName] = useState('');
  const [vCardOrg, setVCardOrg] = useState('');
  const [vCardPhone, setVCardPhone] = useState('');
  const [vCardEmail, setVCardEmail] = useState('');
  
  // WiFi State
  const [wifiSsid, setWifiSsid] = useState('');
  const [wifiPassword, setWifiPassword] = useState('');
  const [wifiEncryption, setWifiEncryption] = useState<'WPA' | 'WEP' | 'nopass'>('WPA');

  // Email State
  const [emailTo, setEmailTo] = useState('');
  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');

  // Style Settings
  const [fgColor, setFgColor] = useState('#0f172a');
  const bgColor = '#ffffff';
  const [errorLevel, setErrorLevel] = useState<'L' | 'M' | 'Q' | 'H'>('M');

  // QR Preview URLs
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [qrSvgString, setQrSvgString] = useState<string>('');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Lead Generation Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [leadCompany, setLeadCompany] = useState('');
  const [leadUseCase, setLeadUseCase] = useState('Flyer & Printwerbung');
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState('');

  // Calculate raw QR payload based on selected type
  const getQrPayload = React.useCallback((): string => {
    switch (qrType) {
      case 'url':
        return urlInput.trim().startsWith('http://') || urlInput.trim().startsWith('https://') 
          ? urlInput.trim() 
          : `https://${urlInput.trim()}`;
      case 'vcard':
        return `BEGIN:VCARD\nVERSION:3.0\nFN:${vCardName}\nORG:${vCardOrg}\nTEL:${vCardPhone}\nEMAIL:${vCardEmail}\nEND:VCARD`;
      case 'wifi':
        return `WIFI:S:${wifiSsid};T:${wifiEncryption};P:${wifiPassword};;`;
      case 'email':
        return `mailto:${emailTo}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      case 'text':
      default:
        return textInput || 'https://nordible.co';
    }
  }, [qrType, urlInput, vCardName, vCardOrg, vCardPhone, vCardEmail, wifiSsid, wifiEncryption, wifiPassword, emailTo, emailSubject, emailBody, textInput]);

  // Generate QR Code data whenever payload or styles change
  useEffect(() => {
    const payload = getQrPayload();
    if (!payload.trim()) return;

    // Generate PNG Data URL
    QRCode.toDataURL(payload, {
      errorCorrectionLevel: errorLevel,
      color: {
        dark: fgColor,
        light: bgColor
      },
      width: 600,
      margin: 2
    })
      .then((url) => setQrDataUrl(url))
      .catch((err) => console.error('Error generating QR PNG:', err));

    // Generate Scalable SVG
    QRCode.toString(payload, {
      type: 'svg',
      errorCorrectionLevel: errorLevel,
      color: {
        dark: fgColor,
        light: bgColor
      },
      margin: 2
    })
      .then((svg) => setQrSvgString(svg))
      .catch((err) => console.error('Error generating QR SVG:', err));
  }, [getQrPayload, fgColor, bgColor, errorLevel]);

  // Instant free PNG download
  const handleDownloadPng = () => {
    if (!qrDataUrl) return;
    const link = document.createElement('a');
    link.download = `nordible-qr-code-${Date.now()}.png`;
    link.href = qrDataUrl;
    link.click();
  };

  // Trigger SVG download
  const triggerSvgDownload = () => {
    if (!qrSvgString) return;
    const blob = new Blob([qrSvgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = `nordible-vector-qr-${Date.now()}.svg`;
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Handle lead form submission
  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadEmail.trim() || !leadName.trim()) {
      setSubmissionError(isDe ? 'Bitte füllen Sie Name und E-Mail aus.' : 'Please provide your name and email.');
      return;
    }

    setIsSubmittingLead(true);
    setSubmissionError('');

    const payload = getQrPayload();

    try {
      // 1. Send email notification via EmailJS
      await sendContactEmail({
        fullName: leadName,
        email: leadEmail,
        phone: leadPhone || 'Nicht angegeben',
        projectType: 'QR Code Generator Lead',
        budget: leadUseCase,
        description: `Lead über den QR-Code Generator generiert.\n\nEinsatzzweck: ${leadUseCase}\nUnternehmen: ${leadCompany || 'K.A.'}\nQR-Typ: ${qrType}\nQR-Inhalt: ${payload}`
      });

      // 2. Persist to localStorage for LeadDashboard
      try {
        const stored = localStorage.getItem('nordible_leads');
        const existingLeads = stored ? JSON.parse(stored) : [];
        const newLead = {
          id: Date.now().toString(),
          fullName: leadName,
          email: leadEmail,
          phone: leadPhone || '',
          projectType: 'QR-Code Lead',
          budget: leadUseCase,
          description: `QR-Code Typ: ${qrType} | Unternehmen: ${leadCompany || 'K.A.'} | Payload: ${payload}`,
          status: 'new' as const,
          submittedAt: new Date().toISOString()
        };
        localStorage.setItem('nordible_leads', JSON.stringify([newLead, ...existingLeads]));
      } catch (err) {
        console.warn('Could not persist lead to localStorage:', err);
      }

      setLeadSubmitted(true);
      // Automatically trigger the promised vector SVG download
      triggerSvgDownload();
    } catch (error) {
      console.error('Lead submission failed:', error);
      setSubmissionError(isDe ? 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.' : 'An error occurred. Please try again.');
    } finally {
      setIsSubmittingLead(false);
    }
  };

  const colorPresets = [
    { name: 'Navy', hex: '#0f172a' },
    { name: 'Nordible Blue', hex: '#1e40af' },
    { name: 'Emerald', hex: '#059669' },
    { name: 'Purple', hex: '#7c3aed' },
    { name: 'Crimson', hex: '#b91c1c' },
  ];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-slate-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 selection:bg-blue-500 selection:text-white pb-20">
        {/* Hidden canvas for export */}
        <canvas ref={canvasRef} className="hidden" />

        {/* Hero Section */}
        <section className="relative pt-12 pb-8 sm:pt-16 sm:pb-12 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-20 dark:opacity-10" />
          
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 dark:bg-blue-900/40 text-nordible-blue dark:text-blue-400 text-xs font-bold font-heading mb-5 border border-blue-200 dark:border-blue-800/60 shadow-sm">
              <QrCode className="h-4 w-4" />
              <span>{isDe ? '100% Kostenlos • Dauerhaft Gültig • Keine Werbung' : '100% Free • Permanent • Zero Ads'}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-950 dark:text-white font-heading max-w-3xl mx-auto leading-tight">
              {isDe ? (
                <>
                  Professioneller <span className="text-nordible-blue dark:text-blue-400">QR-Code Generator</span> für Unternehmen
                </>
              ) : (
                <>
                  Professional <span className="text-nordible-blue dark:text-blue-400">QR Code Generator</span> for Businesses
                </>
              )}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {isDe 
                ? 'Erstellen Sie druckfertige, unbegrenzt haltbare QR-Codes in Sekundenschnelle. Keine versteckten Abonnements, keine Weiterleitungs-Sperren nach 14 Tagen.' 
                : 'Generate print-ready, permanent QR codes in seconds. Zero hidden subscriptions, no expiration traps after 14 days.'}
            </p>

            {/* Psychological Trust Reversal Pills */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-xs">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>{isDe ? 'Dauerhaft gültig (Statisch)' : 'Permanently valid (Static)'}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-xs">
                <ShieldCheck className="h-4 w-4 text-blue-600 shrink-0" />
                <span>{isDe ? '100% DSGVO-konform' : '100% GDPR compliant'}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-xs">
                <Printer className="h-4 w-4 text-indigo-600 shrink-0" />
                <span>{isDe ? 'Druckfertiges SVG & PNG' : 'Print-ready SVG & PNG'}</span>
              </div>
            </div>
          </div>
        </section>

        {/* The Generator Tool - Science Backed Layout */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
          <div className="bg-white dark:bg-gray-800/90 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl overflow-hidden backdrop-blur-sm">
            
            {/* Type Selection Navigation - Ergonomic Large Touch Targets */}
            <div className="border-b border-gray-200 dark:border-gray-700 bg-gray-50/70 dark:bg-gray-850 p-2 sm:p-3">
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                <button
                  type="button"
                  onClick={() => setQrType('url')}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all cursor-pointer min-h-[44px] ${
                    qrType === 'url'
                      ? 'bg-nordible-blue text-white shadow-md shadow-blue-500/20'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <Globe className="h-4 w-4" />
                  <span>{isDe ? 'Website / URL' : 'Website / URL'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setQrType('vcard')}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all cursor-pointer min-h-[44px] ${
                    qrType === 'vcard'
                      ? 'bg-nordible-blue text-white shadow-md shadow-blue-500/20'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <User className="h-4 w-4" />
                  <span>{isDe ? 'Visitenkarte (vCard)' : 'Contact (vCard)'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setQrType('wifi')}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all cursor-pointer min-h-[44px] ${
                    qrType === 'wifi'
                      ? 'bg-nordible-blue text-white shadow-md shadow-blue-500/20'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <Wifi className="h-4 w-4" />
                  <span>{isDe ? 'WLAN / Wi-Fi' : 'Wi-Fi'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setQrType('email')}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all cursor-pointer min-h-[44px] ${
                    qrType === 'email'
                      ? 'bg-nordible-blue text-white shadow-md shadow-blue-500/20'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <Mail className="h-4 w-4" />
                  <span>{isDe ? 'E-Mail' : 'Email'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setQrType('text')}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all cursor-pointer min-h-[44px] ${
                    qrType === 'text'
                      ? 'bg-nordible-blue text-white shadow-md shadow-blue-500/20'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <FileText className="h-4 w-4" />
                  <span>{isDe ? 'Freitext' : 'Plain Text'}</span>
                </button>
              </div>
            </div>

            {/* Split Screen Workspace: Inputs & Customizer on Left, Sticky Live Preview on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8">
              
              {/* Left Column: Contextual Input Fields (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <Sliders className="h-5 w-5 text-nordible-blue" />
                    <span>{isDe ? 'Inhalt & Daten eingeben' : 'Enter QR Code Content'}</span>
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {isDe 
                      ? 'Der QR-Code wird sofort in Echtzeit aktualisiert.' 
                      : 'The QR code generates and updates in real-time.'}
                  </p>
                </div>

                {/* URL Form */}
                {qrType === 'url' && (
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                      {isDe ? 'Ziel-Webadresse (URL)' : 'Target Website URL'}
                    </label>
                    <div className="relative rounded-xl shadow-xs">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                        <Globe className="h-5 w-5" />
                      </div>
                      <input
                        type="url"
                        value={urlInput}
                        onChange={(e) => setUrlInput(e.target.value)}
                        placeholder="https://ihre-website.de/angebot"
                        className="block w-full pl-11 pr-4 py-3.5 text-sm bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:text-white"
                      />
                    </div>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400">
                      {isDe ? 'Tipp: Verlinken Sie direkt auf Ihre wichtigste Landingpage oder Ihr Buchungstool.' : 'Tip: Link directly to your booking calendar or high-converting landing page.'}
                    </p>
                  </div>
                )}

                {/* vCard Form */}
                {qrType === 'vcard' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                          {isDe ? 'Vollständiger Name' : 'Full Name'}
                        </label>
                        <input
                          type="text"
                          value={vCardName}
                          onChange={(e) => setVCardName(e.target.value)}
                          placeholder="Max Mustermann"
                          className="w-full px-3.5 py-2.5 text-sm bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                          {isDe ? 'Unternehmen / Firma' : 'Company / Organization'}
                        </label>
                        <input
                          type="text"
                          value={vCardOrg}
                          onChange={(e) => setVCardOrg(e.target.value)}
                          placeholder="Muster GmbH"
                          className="w-full px-3.5 py-2.5 text-sm bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 dark:text-white"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                          {isDe ? 'Telefonnummer' : 'Phone Number'}
                        </label>
                        <input
                          type="tel"
                          value={vCardPhone}
                          onChange={(e) => setVCardPhone(e.target.value)}
                          placeholder="+49 170 1234567"
                          className="w-full px-3.5 py-2.5 text-sm bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                          {isDe ? 'E-Mail Adresse' : 'Email Address'}
                        </label>
                        <input
                          type="email"
                          value={vCardEmail}
                          onChange={(e) => setVCardEmail(e.target.value)}
                          placeholder="max@muster.de"
                          className="w-full px-3.5 py-2.5 text-sm bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 dark:text-white"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* WiFi Form */}
                {qrType === 'wifi' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        {isDe ? 'Netzwerkname (SSID)' : 'Network Name (SSID)'}
                      </label>
                      <input
                        type="text"
                        value={wifiSsid}
                        onChange={(e) => setWifiSsid(e.target.value)}
                        placeholder="MeinBuero_GastWLAN"
                        className="w-full px-3.5 py-2.5 text-sm bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 dark:text-white"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                          {isDe ? 'WLAN Passwort' : 'Password'}
                        </label>
                        <input
                          type="password"
                          value={wifiPassword}
                          onChange={(e) => setWifiPassword(e.target.value)}
                          placeholder="••••••••"
                          className="w-full px-3.5 py-2.5 text-sm bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                          {isDe ? 'Verschlüsselung' : 'Encryption'}
                        </label>
                        <select
                          value={wifiEncryption}
                          onChange={(e) => setWifiEncryption(e.target.value as 'WPA' | 'WEP' | 'nopass')}
                          className="w-full px-3.5 py-2.5 text-sm bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 dark:text-white"
                        >
                          <option value="WPA">WPA / WPA2 / WPA3 (Standard)</option>
                          <option value="WEP">WEP</option>
                          <option value="nopass">{isDe ? 'Keine (Offen)' : 'None (Open)'}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Email Form */}
                {qrType === 'email' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        {isDe ? 'Empfänger E-Mail' : 'Recipient Email'}
                      </label>
                      <input
                        type="email"
                        value={emailTo}
                        onChange={(e) => setEmailTo(e.target.value)}
                        placeholder="anfrage@ihre-firma.de"
                        className="w-full px-3.5 py-2.5 text-sm bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        {isDe ? 'Betreffzeile' : 'Subject'}
                      </label>
                      <input
                        type="text"
                        value={emailSubject}
                        onChange={(e) => setEmailSubject(e.target.value)}
                        placeholder="Anfrage über Messe-Flyer"
                        className="w-full px-3.5 py-2.5 text-sm bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        {isDe ? 'Vorausgefüllte Nachricht' : 'Pre-filled Body'}
                      </label>
                      <textarea
                        rows={2}
                        value={emailBody}
                        onChange={(e) => setEmailBody(e.target.value)}
                        placeholder="Hallo, ich interessiere mich für Ihr Angebot..."
                        className="w-full px-3.5 py-2.5 text-sm bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 dark:text-white"
                      />
                    </div>
                  </div>
                )}

                {/* Text Form */}
                {qrType === 'text' && (
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                      {isDe ? 'Beliebiger Text' : 'Plain Text'}
                    </label>
                    <textarea
                      rows={4}
                      value={textInput}
                      onChange={(e) => setTextInput(e.target.value)}
                      placeholder={isDe ? 'Geben Sie hier Ihren Text oder Notizen ein...' : 'Enter any text or notes here...'}
                      className="block w-full p-3.5 text-sm bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 dark:text-white"
                    />
                  </div>
                )}

                {/* Customizer: Colors & Precision */}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-4">
                  <h4 className="text-sm font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
                    <Layers className="h-4 w-4 text-nordible-blue" />
                    <span>{isDe ? 'Farbe & Fehlerkorrektur anpassen' : 'Customize Colors & Precision'}</span>
                  </h4>

                  {/* Color presets */}
                  <div>
                    <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-2">
                      {isDe ? 'QR-Code Farbe' : 'QR Code Foreground Color'}
                    </label>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      {colorPresets.map((preset) => (
                        <button
                          key={preset.hex}
                          type="button"
                          onClick={() => setFgColor(preset.hex)}
                          className={`w-8 h-8 rounded-full border-2 transition-transform cursor-pointer ${
                            fgColor === preset.hex ? 'scale-110 border-blue-500 ring-2 ring-blue-400/40' : 'border-transparent hover:scale-105'
                          }`}
                          style={{ backgroundColor: preset.hex }}
                          title={preset.name}
                        />
                      ))}
                      <div className="flex items-center gap-1.5 ml-2">
                        <input
                          type="color"
                          value={fgColor}
                          onChange={(e) => setFgColor(e.target.value)}
                          className="w-8 h-8 rounded-lg cursor-pointer bg-transparent border-0 p-0"
                          title={isDe ? 'Eigene Farbe wählen' : 'Pick custom color'}
                        />
                        <span className="text-xs font-mono text-gray-500 uppercase">{fgColor}</span>
                      </div>
                    </div>
                  </div>

                  {/* Error Correction Selection */}
                  <div>
                    <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-2">
                      {isDe ? 'Fehlerkorrektur-Level' : 'Error Correction Level'}
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {[
                        { id: 'L', label: '7% (L)', desc: isDe ? 'Gering' : 'Low' },
                        { id: 'M', label: '15% (M)', desc: isDe ? 'Standard' : 'Medium' },
                        { id: 'Q', label: '25% (Q)', desc: isDe ? 'Hoch' : 'Quartile' },
                        { id: 'H', label: '30% (H)', desc: isDe ? 'Druck' : 'High' },
                      ].map((lvl) => (
                        <button
                          key={lvl.id}
                          type="button"
                          onClick={() => setErrorLevel(lvl.id as 'L' | 'M' | 'Q' | 'H')}
                          className={`p-2 rounded-xl text-center border text-xs font-medium transition-all cursor-pointer ${
                            errorLevel === lvl.id
                              ? 'bg-blue-50 dark:bg-blue-900/40 border-blue-500 text-nordible-blue dark:text-blue-400 font-bold'
                              : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300'
                          }`}
                        >
                          <div>{lvl.label}</div>
                          <div className="text-[10px] text-gray-400">{lvl.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: Live Sticky Preview & Conversion Actions (5 cols) */}
              <div className="lg:col-span-5 flex flex-col items-center justify-between bg-gray-50 dark:bg-gray-900/60 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
                
                <div className="w-full text-center space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{isDe ? 'Echtzeit-Vorschau aktiv' : 'Live Preview Active'}</span>
                  </div>

                  {/* QR Image Box */}
                  <div className="p-5 bg-white rounded-2xl shadow-md border border-gray-200/80 mx-auto max-w-[280px] sm:max-w-[300px] aspect-square flex items-center justify-center transition-all hover:scale-[1.02]">
                    {qrDataUrl ? (
                      <img
                        src={qrDataUrl}
                        alt="Generated QR Code"
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-gray-400 text-sm">
                        <RefreshCw className="h-8 w-8 animate-spin mb-2 text-nordible-blue" />
                        <span>Generiere...</span>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-[11px] text-gray-500 dark:text-gray-400">
                    {isDe ? 'Scannen Sie mit Ihrer Smartphone-Kamera zur Sofortprüfung.' : 'Scan with your smartphone camera to test.'}
                  </p>
                </div>

                {/* Conversion Buttons - Fitts's Law Optimized */}
                <div className="w-full space-y-3 pt-6">
                  
                  {/* Lead Magnet Primary CTA: High-Res SVG Vector Download */}
                  <button
                    type="button"
                    onClick={() => {
                      setLeadSubmitted(false);
                      setIsModalOpen(true);
                    }}
                    className="w-full py-4 px-5 rounded-xl font-extrabold text-sm sm:text-base bg-nordible-blue hover:bg-blue-600 active:scale-[0.99] text-white shadow-xl shadow-blue-500/25 transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
                  >
                    <Download className="h-5 w-5 text-blue-200 group-hover:translate-y-0.5 transition-transform" />
                    <span>{isDe ? 'Vektor (SVG) & Druckpaket laden' : 'Get Vector (SVG) & Print Pack'}</span>
                    <Sparkles className="h-4 w-4 text-amber-300" />
                  </button>

                  {/* Instant Frictionless Secondary CTA: Free Standard PNG */}
                  <button
                    type="button"
                    onClick={handleDownloadPng}
                    className="w-full py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Download className="h-4 w-4 text-gray-500" />
                    <span>{isDe ? 'Standard PNG herunterladen (Sofort)' : 'Download Standard PNG (Instant)'}</span>
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-500 dark:text-gray-400 text-center pt-1">
                    <Lock className="h-3 w-3 text-emerald-500 shrink-0" />
                    <span>{isDe ? '100% kostenfrei & ohne Registrierungszwang' : '100% free & no account needed'}</span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Comparison Section: Why Nordible vs. Subscription Trap Generators */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white font-heading">
              {isDe 
                ? 'Schluss mit der Abo-Falle bei QR-Code-Generatoren' 
                : 'Say Goodbye to QR Code Subscription Traps'}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {isDe
                ? 'Viele Anbieter locken mit "kostenlos", schalten die Codes jedoch nach 14 Tagen ab, es sei denn, Sie zahlen monatlich hohe Gebühren. Bei Nordible bleibt Ihr QR-Code dauerhaft aktiv.'
                : 'Most online generators secretly deactivate your QR codes after 14 days unless you pay a monthly fee. With Nordible, your static QR codes remain active forever.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* The Competition Trap */}
            <div className="p-6 sm:p-8 rounded-2xl bg-red-50/60 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40 space-y-4">
              <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold font-heading text-lg">
                <X className="h-5 w-5" />
                <span>{isDe ? 'Typische QR-Generatoren im Netz' : 'Typical Online QR Generators'}</span>
              </div>
              <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <X className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                  <span>{isDe ? 'QR-Code wird nach 14 Tagen Testphase ungültig' : 'QR code breaks after a 14-day free trial'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                  <span>{isDe ? 'Versteckte Abo-Kosten (oft 20 € – 50 €/Monat)' : 'Hidden monthly subscriptions (€20 – €50/month)'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                  <span>{isDe ? 'Lästiges Werbe-Banner vor der Weiterleitung' : 'Annoying interstitial ads before redirecting'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                  <span>{isDe ? 'Server im Ausland ohne DSGVO-Sicherheit' : 'Non-compliant overseas servers'}</span>
                </li>
              </ul>
            </div>

            {/* Nordible Advantage */}
            <div className="p-6 sm:p-8 rounded-2xl bg-blue-50/60 dark:bg-blue-950/30 border-2 border-nordible-blue/40 space-y-4 shadow-lg">
              <div className="flex items-center gap-2 text-nordible-blue dark:text-blue-400 font-bold font-heading text-lg">
                <CheckCircle2 className="h-5 w-5" />
                <span>{isDe ? 'Nordible QR-Code Lösung' : 'Nordible QR Solution'}</span>
              </div>
              <ul className="space-y-3 text-sm text-gray-800 dark:text-gray-200 font-medium">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{isDe ? '100% statisch & dauerhaft gültig – kein Verfallsdatum' : '100% static & permanently valid – no expiration'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{isDe ? 'Direkte Ziel-URL ohne Zwischenschaltung oder Werbung' : 'Direct destination URL with zero intermediate ads'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{isDe ? 'Verlustfreie Vektordateien (SVG) für Plakat- & Posterdruck' : 'Lossless vector (SVG) exports for banners and prints'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{isDe ? 'Entwickelt von einer deutschen IT-Agentur (100% DSGVO)' : 'Engineered by a German software consultancy (GDPR)'}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Enterprise Upgrade Teaser / Lead Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
          <div className="rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-950 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/30 text-blue-200 text-xs font-bold font-heading mb-4">
                <Zap className="h-4 w-4" />
                <span>{isDe ? 'Für wachsende Unternehmen & Marketing-Teams' : 'For Growing Brands & Marketing Teams'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-heading">
                {isDe 
                  ? 'Benötigen Sie dynamische QR-Codes mit Scan-Analytics?' 
                  : 'Need Dynamic QR Codes with Real-Time Analytics?'}
              </h2>
              <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                {isDe
                  ? 'Verändern Sie Ziel-Links jederzeit nach dem Druck, messen Sie Klickzahlen nach Standort & Gerät und verknüpfen Sie QR-Kampagnen direkt mit Ihrem CRM oder Google Analytics.'
                  : 'Change destination URLs anytime after printing, track scans by city and device, and connect QR campaigns directly to your CRM.'}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href={contactConfig.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-nordible-blue hover:bg-blue-600 text-white font-bold text-sm shadow-lg shadow-blue-500/30 transition-all cursor-pointer"
                >
                  <Calendar className="h-4 w-4" />
                  <span>{isDe ? 'Individuelle Lösung anfragen' : 'Request Custom Solution'}</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setLeadUseCase('Dynamische QR-Codes & Analytics');
                    setLeadSubmitted(false);
                    setIsModalOpen(true);
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all cursor-pointer"
                >
                  <span>{isDe ? 'Infomaterial & Preiskatalog anfordern' : 'Request Pricing & Info Deck'}</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white font-heading">
              {isDe ? 'Häufig gestellte Fragen (FAQ)' : 'Frequently Asked Questions'}
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: isDe ? 'Können diese QR-Codes ablaufen?' : 'Can these QR codes expire?',
                a: isDe 
                  ? 'Nein. Statische QR-Codes codieren die Zielinformationen (z. B. eine URL oder Visitenkartendaten) direkt in das Punktmuster. Da keine externe Umleitung nötig ist, funktionieren diese QR-Codes zeitlich unbegrenzt.' 
                  : 'No. Static QR codes encode data directly into the pixel pattern. Since no redirect server is involved, they work indefinitely.'
              },
              {
                q: isDe ? 'Wann benötige ich SVG statt PNG?' : 'When should I use SVG instead of PNG?',
                a: isDe 
                  ? 'PNG ist ein Pixelformat und eignet sich hervorragend für Bildschirme, Social Media oder kleine Ausdrucke. SVG ist eine Vektorgrafik und lässt sich verlustfrei auf beliebige Größen (z. B. Schaufenster, Plakate, Messestände) skalieren.' 
                  : 'PNG is ideal for digital screens. SVG is a vector format that scales infinitely without pixelation, which is essential for professional print shops.'
              },
              {
                q: isDe ? 'Ist der Service wirklich zu 100% kostenlos?' : 'Is this service truly 100% free?',
                a: isDe 
                  ? 'Ja! Wir stellen diesen QR-Code-Generator kostenfrei für Unternehmen und Freiberufler zur Verfügung, um faire, transparente digitale Werkzeuge ohne Abofallen zu fördern.' 
                  : 'Yes! We provide this generator completely free to empower businesses with reliable tools without subscription traps.'
              }
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-xs">
                <h3 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-2">
                  <HelpCircle className="h-4 w-4 text-nordible-blue shrink-0" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* High-Converting Lead Capture Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-fadeIn">
          <div 
            className="relative w-full max-w-lg bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-2xl overflow-hidden p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 dark:hover:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            {!leadSubmitted ? (
              <div>
                <div className="flex items-center gap-2 text-nordible-blue dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <Printer className="h-4 w-4" />
                  <span>{isDe ? 'Druckfertiges Vektorpaket' : 'Print-Ready Vector Pack'}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white font-heading">
                  {isDe ? 'SVG-Vektordatei & Guide anfordern' : 'Download SVG & Optimization Guide'}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  {isDe 
                    ? 'Erhalten Sie sofort den verlustfreien SVG-Download für professionelle Druckereien sowie Best Practices für maximale Scan-Raten.' 
                    : 'Get your lossless vector SVG download for commercial printing along with best practices to maximize scan conversion.'}
                </p>

                {submissionError && (
                  <div className="mt-4 p-3 rounded-xl bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 text-xs">
                    {submissionError}
                  </div>
                )}

                <form onSubmit={handleLeadSubmit} className="mt-5 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      {isDe ? 'Ihr Name *' : 'Your Name *'}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <User className="h-4 w-4" />
                      </div>
                      <input
                        type="text"
                        required
                        value={leadName}
                        onChange={(e) => setLeadName(e.target.value)}
                        placeholder="z. B. Thomas Weber"
                        className="w-full pl-10 pr-3.5 py-2.5 text-sm bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 dark:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      {isDe ? 'Geschäftliche E-Mail *' : 'Business Email *'}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <Mail className="h-4 w-4" />
                      </div>
                      <input
                        type="email"
                        required
                        value={leadEmail}
                        onChange={(e) => setLeadEmail(e.target.value)}
                        placeholder="thomas@firma.de"
                        className="w-full pl-10 pr-3.5 py-2.5 text-sm bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        {isDe ? 'Telefon / WhatsApp' : 'Phone (Optional)'}
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                          <Phone className="h-4 w-4" />
                        </div>
                        <input
                          type="tel"
                          value={leadPhone}
                          onChange={(e) => setLeadPhone(e.target.value)}
                          placeholder="+49 ..."
                          className="w-full pl-10 pr-3.5 py-2.5 text-sm bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 dark:text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        {isDe ? 'Unternehmen' : 'Company'}
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                          <Building2 className="h-4 w-4" />
                        </div>
                        <input
                          type="text"
                          value={leadCompany}
                          onChange={(e) => setLeadCompany(e.target.value)}
                          placeholder="Firma GmbH"
                          className="w-full pl-10 pr-3.5 py-2.5 text-sm bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 dark:text-white"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      {isDe ? 'Geplanter Einsatzzweck' : 'Intended Use Case'}
                    </label>
                    <select
                      value={leadUseCase}
                      onChange={(e) => setLeadUseCase(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 dark:text-white"
                    >
                      <option value="Flyer & Printwerbung">Flyer & Printwerbung</option>
                      <option value="Plakate, Roll-ups & Messe">Plakate, Roll-ups & Messe</option>
                      <option value="Visitenkarte & Networking">Visitenkarte & Networking</option>
                      <option value="Gastronomie & Speisekarte">Gastronomie & Speisekarte</option>
                      <option value="Produktverpackung">Produktverpackung</option>
                      <option value="Dynamische QR-Codes & Analytics">Dynamische QR-Codes & Analytics</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmittingLead}
                      className="w-full py-3.5 px-4 rounded-xl font-bold text-sm bg-nordible-blue hover:bg-blue-600 active:scale-[0.99] text-white shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmittingLead ? (
                        <>
                          <RefreshCw className="h-4 w-4 animate-spin" />
                          <span>{isDe ? 'Wird übertragen...' : 'Processing...'}</span>
                        </>
                      ) : (
                        <>
                          <Download className="h-4 w-4" />
                          <span>{isDe ? 'Jetzt SVG-Download starten' : 'Download SVG Now'}</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-gray-500 dark:text-gray-400 text-center flex items-center justify-center gap-1.5 pt-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                    <span>{isDe ? '100% DSGVO-konform. Kein Spam. Abmeldung jederzeit.' : '100% GDPR compliant. Zero spam.'}</span>
                  </p>
                </form>
              </div>
            ) : (
              /* Success State */
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 dark:text-white font-heading">
                  {isDe ? 'Download erfolgreich gestartet!' : 'Download Started Successfully!'}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 max-w-sm mx-auto">
                  {isDe 
                    ? 'Ihre hochauflösende Vektordatei (SVG) wurde heruntergeladen. Wir haben Ihnen zusätzlich eine Bestätigung per E-Mail gesendet.' 
                    : 'Your high-resolution SVG file was downloaded. We have also sent a confirmation to your email.'}
                </p>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                    {isDe 
                      ? 'Möchten Sie erfahren, wie Sie mit modernen Web-Apps und Lead-Funnels mehr Kunden gewinnen?' 
                      : 'Interested in turning web traffic and QR scans into high-value clients?'}
                  </p>
                  <a
                    href={contactConfig.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-nordible-blue hover:bg-blue-600 text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-500/20 transition-all cursor-pointer"
                  >
                    <Calendar className="h-4 w-4" />
                    <span>{isDe ? 'Kostenfreies Strategiegespräch buchen' : 'Book Free Strategy Call'}</span>
                  </a>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
