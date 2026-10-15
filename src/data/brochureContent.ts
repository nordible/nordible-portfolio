export interface BrochureMetric {
  value: string;
  label: string;
  sublabel?: string;
  icon?: 'trophy' | 'trending' | 'phone' | 'navigation' | 'star' | 'users' | 'bot' | 'shield';
}

export interface BrochureCaseStudy {
  clientName: string;
  location: string;
  industry: string;
  challenge: string;
  delivered: string[];
  metrics: BrochureMetric[];
  quote?: string;
  badge?: string;
  image?: string;
}

export interface BrochureServiceItem {
  number: string;
  title: string;
  outcome: string;
  description: string;
  icon: 'code' | 'bot' | 'search' | 'map' | 'mail' | 'shield' | 'trending' | 'palette';
}

export interface BrochureSheetCover {
  type: 'cover';
  categoryPill: string;
  headlineMain: string;
  headlineHighlight: string;
  subheadline: string;
  targetAudienceNote: string;
  pillars: string[];
}

export interface BrochureSheetProblem {
  type: 'problem';
  headlineMain: string;
  headlineSub: string;
  leadParagraph: string;
  bodyParagraph: string;
  channelsHeading: string;
  channels: Array<{
    title: string;
    description: string;
  }>;
  executiveTakeaway: string;
}

export interface BrochureSheetPhilosophy {
  type: 'philosophy';
  headline: string;
  thesis: string;
  timelineHeading: string;
  timelineStages: Array<{
    phase: string;
    timeline: string;
    title: string;
    description: string;
    deliverables: string[];
  }>;
  closingStatement: string;
}

export interface BrochureSheetCaseStudies {
  type: 'caseStudies';
  headline: string;
  subtitle: string;
  caseStudies: BrochureCaseStudy[];
}

export interface BrochureSheetTeamModel {
  type: 'teamModel';
  headline: string;
  subtitle: string;
  rolesReplacedTitle: string;
  rolesReplaced: Array<{
    role: string;
    salary: string;
  }>;
  totalCostNote: string;
  solutionHeading: string;
  services: BrochureServiceItem[];
}

export interface BrochureSheetClosing {
  type: 'closing';
  headlineMain: string;
  headlineSub: string;
  headlineHighlight?: string;
  leadParagraph: string;
  partnershipPromise: string;
  stepsHeading: string;
  steps: Array<{
    step: string;
    title: string;
    desc: string;
  }>;
  ctaTitle: string;
  ctaSubtitle: string;
  bookingUrl: string;
  contactName: string;
  contactRole: string;
  contactEmail: string;
  contactPhone: string;
  finalStatement: string;
}

export interface BrochureSheetEventInvitation {
  type: 'eventInvitation';
  categoryPill: string;
  eventTitle: string;
  eventSubtitle: string;
  date: string;
  time: string;
  location: string;
  format: string;
  agendaHeading: string;
  agenda: Array<{
    time: string;
    topic: string;
    speaker?: string;
  }>;
  keyTakeaways: string[];
  rsvpCta: string;
  rsvpDeadline: string;
}

export type BrochureSheetContent =
  | BrochureSheetCover
  | BrochureSheetProblem
  | BrochureSheetPhilosophy
  | BrochureSheetCaseStudies
  | BrochureSheetTeamModel
  | BrochureSheetClosing
  | BrochureSheetEventInvitation;

export interface BrochureSheet {
  id: string;
  sheetNumber: number;
  totalSheets: number;
  runningTag: string;
  content: BrochureSheetContent;
}

export interface BrochureDocument {
  id: string;
  preset: string;
  title: string;
  metaDescription: string;
  version: string;
  sheets: BrochureSheet[];
}

export const corporateBrochurePresets: Record<'de' | 'en', Record<string, BrochureDocument>> = {
  de: {
    'corporate-growth': {
      id: 'corporate-growth',
      preset: 'corporate-growth',
      title: 'Nordible Technologies – B2B Unternehmensbroschüre 2026/2027',
      metaDescription: 'Ihr langfristiger Digitaler Wachstumspartner für moderne Unternehmen in Deutschland.',
      version: 'Ausgabe 2026 / 2027',
      sheets: [
        // ==========================================
        // SHEET 1: COVER
        // ==========================================
        {
          id: 'sheet-1-cover',
          sheetNumber: 1,
          totalSheets: 6,
          runningTag: 'EXEKUTIV-PROSPEKT · AUSGABE 2026/2027',
          content: {
            type: 'cover',
            categoryPill: 'KI-Nativer Digitaler Wachstumspartner',
            headlineMain: 'IHR UNTERNEHMEN VERDIENT IHRE VOLLE AUFMERKSAMKEIT.',
            headlineHighlight: 'Wir übernehmen Ihr digitales Wachstum.',
            subheadline: 'Wir unterstützen mittelständische Marktführer und inhabergeführte Unternehmen dabei, kaufbereite Kunden über Google, KI-Suchsysteme, lokale Sichtbarkeit und moderne Plattformen zu gewinnen.',
            targetAudienceNote: 'Für Geschäftsführer, Gründer und Entscheidungsträger im deutschen Mittelstand',
            pillars: [
              'KI-Nativ',
              'Ingenieurgeprägt',
              'Ergebnisorientiert',
              'Frankfurt am Main'
            ]
          }
        },

        // ==========================================
        // SHEET 2: THE OPERATIONAL REALITY
        // ==========================================
        {
          id: 'sheet-2-problem',
          sheetNumber: 2,
          totalSheets: 6,
          runningTag: 'STATUS QUO & MARKTREALITÄT',
          content: {
            type: 'problem',
            headlineMain: 'Sie leiten Ihr Tagesgeschäft.',
            headlineSub: 'Aber wer gewinnt systematisch Ihre nächsten Kunden?',
            leadParagraph: 'Als Unternehmer investieren Sie Ihre Energie in Kundenservice, Teamführung, Projektabwicklung und operative Qualität. Marketing wird oft vertagt, weil das Tagesgeschäft absolute Priorität hat.',
            bodyParagraph: 'Währenddessen suchen potenzielle Kunden jeden Tag online nach Ihren Dienstleistungen. Wenn Ihr Unternehmen dort nicht auffindbar ist, gehen wertvolle Mandate und Aufträge automatisch an den Wettbewerb.',
            channelsHeading: 'Entscheidende Berührungspunkte moderner Kunden:',
            channels: [
              {
                title: 'Google Suche (Page 1)',
                description: 'Über 87% aller gewerblichen Einkaufsentscheidungen und Recherchen beginnen in der organischen Google-Suche.'
              },
              {
                title: 'Google Maps & Local 3-Pack',
                description: 'Regionale Vertrauensprüfung: Kunden verifizieren Standort, Wegzeit, Rezensionen und Erreichbarkeit vor dem Anruf.'
              },
              {
                title: 'KI-Antwortsysteme (ChatGPT, Gemini, Perplexity)',
                description: 'Immer mehr B2B-Käufer nutzen KI für Dienstleisterempfehlungen. Nur wer semantisch strukturiert ist, wird zitiert.'
              },
              {
                title: 'Branchenverzeichnisse & Trust-Signale',
                description: 'Verifizierte Firmendaten und konsistente Zitationen untermauern Ihre unternehmerische Autorität.'
              },
              {
                title: 'Konversionsstarke Web-Plattform',
                description: 'Ein moderner Webauftritt muss Besucher in unter 3 Sekunden überzeugen und sofort zu Anfragen führen.'
              }
            ],
            executiveTakeaway: 'Jeder Tag ohne digitale Sichtbarkeit ist eine Weitergabe kaufbereiter Kunden an Ihre direkten Konkurrenten.'
          }
        },

        // ==========================================
        // SHEET 3: CONTINUOUS GROWTH LOOP
        // ==========================================
        {
          id: 'sheet-3-philosophy',
          sheetNumber: 3,
          totalSheets: 6,
          runningTag: 'WACHSTUMS-PHILOSOPHIE & METHODIK',
          content: {
            type: 'philosophy',
            headline: 'Digitales Wachstum ist kein Einmalprojekt.',
            thesis: 'Eine Website ist nach dem Relaunch nicht fertig. SEO ist nach dem Erreichen von Seite 1 nicht beendet. Suchalgorithmen verändern sich monatlich, KI revolutioniert das Suchverhalten, und der Wettbewerb investiert kontinuierlich. Wer sein digitales Ökosystem als einmaligen Kauf betrachtet, verliert schleichend Marktanteile.',
            timelineHeading: 'Der kontinuierliche Nordible-Wachstumspfad:',
            timelineStages: [
              {
                phase: 'Phase 01',
                timeline: 'Monat 1 – 3',
                title: 'Fundament & Technische Exzellenz',
                description: 'Vollständige technische Sanierung, Schema.org Wissensgraphen, PageSpeed 95+ und Beseitigung aller Reibungsverluste.',
                deliverables: ['Audit & Re-Engineering', 'Schema.org Graph', 'Mobile First UX']
              },
              {
                phase: 'Phase 02',
                timeline: 'Monat 4 – 6',
                title: 'Sichtbarkeit & Regionale Dominanz',
                description: 'Gezielte Durchdringung hart umkämpfter Suchbegriffe, Google Maps 3-Pack Platzierungen und Inbound-Optimierung.',
                deliverables: ['Google Page 1 Rankings', 'Local SEO Dominanz', 'Konversions-Trichter']
              },
              {
                phase: 'Phase 03',
                timeline: 'Monat 7 – 9',
                title: 'KI-Suchoptimierung (GEO)',
                description: 'Strukturierte Verankerung Ihrer Unternehmensentität in KI-Modellen wie ChatGPT, Gemini und Perplexity.',
                deliverables: ['Generative Engine Optimization', 'Zitationsnetzwerk', 'Entitäts-Strukturierung']
              },
              {
                phase: 'Phase 04',
                timeline: 'Fortlaufend',
                title: 'Zinseszins-Effekt & Marktführerschaft',
                description: 'Kontinuierliche Begleitung, Performance-Monitoring, Wettbewerbsabwehr und stetige Generierung qualifizierter Anfragen.',
                deliverables: ['Monatliches Sparring', 'Proaktive Anpassungen', 'Verlässlicher Inbound-Fluss']
              }
            ],
            closingStatement: 'Deshalb agiert Nordible nicht als kurzfristige Agentur, sondern als Ihr fester strategischer Partner für digitales Wachstum.'
          }
        },

        // ==========================================
        // SHEET 4: PROOF OF WORK / CASE STUDIES
        // ==========================================
        {
          id: 'sheet-4-case-studies',
          sheetNumber: 4,
          totalSheets: 6,
          runningTag: 'FALLSTUDIEN & MESSBARE RESULTATE',
          content: {
            type: 'caseStudies',
            headline: 'Echte Unternehmen. Messbare Resultate.',
            subtitle: 'Keine abstrakten Werbeversprechen, sondern belegbare Zahlen aus realen Kundenprojekten im Rhein-Main-Gebiet.',
            caseStudies: [
              {
                clientName: 'Shams Consult',
                location: 'Frankfurt am Main',
                industry: 'Architektur · Städtebau · Generalplanung',
                challenge: 'Trotz exzellenter Referenzen kaum organische Auffindbarkeit bei lukrativen Planungs- und Bauantragsrecherchen.',
                delivered: [
                  'Performanter Relaunch auf moderner Architektur',
                  'Regionale Suchmaschinenoptimierung (Local SEO)',
                  'Google Unternehmensprofil-Sanierung',
                  'Generative Engine Optimization (GEO für KI-Suche)'
                ],
                metrics: [
                  {
                    value: 'Platz #1',
                    label: 'Regionale Rankings',
                    sublabel: 'Für strategische Suchkombinationen',
                    icon: 'trophy'
                  },
                  {
                    value: '+4 Seiten',
                    label: 'Google-Aufstieg',
                    sublabel: 'Im umkämpften Raum Frankfurt',
                    icon: 'trending'
                  },
                  {
                    value: '61',
                    label: 'Navigationsanfragen',
                    sublabel: 'Maps-Routen in nur einem Monat',
                    icon: 'navigation'
                  },
                  {
                    value: '2 Mandate',
                    label: 'Direkte Neukunden',
                    sublabel: 'Durch qualifizierte Inbound-Anrufe',
                    icon: 'phone'
                  }
                ],
                badge: 'B2B Architektur',
                quote: 'Die Sichtbarkeit auf Seite 1 hat uns sofort hochkarätige Bauherrenanfragen eingebracht.'
              },
              {
                clientName: 'Buns 069',
                location: 'Offenbach am Main',
                industry: 'Gastronomie & Hospitality',
                challenge: 'Steigerung der regionalen Bekanntheit, Erhöhung des Bestellvolumens und Festigung der lokalen Marktführerschaft.',
                delivered: [
                  'Mobil-optimierte digitale Menü-Präsentation',
                  'Lokales Suchmaschinen-Marketing (Frankfurt / Offenbach)',
                  'Social-Media-Kampagnen zur Gästeaktivierung',
                  'Rezensionsmanagement & Google Maps Pflege'
                ],
                metrics: [
                  {
                    value: '+45%',
                    label: 'Umsatzsteigerung',
                    sublabel: 'Über digitale Bestellkanäle',
                    icon: 'trending'
                  },
                  {
                    value: 'Top 3',
                    label: 'Maps-Platzierung',
                    sublabel: 'In relevanten regionalen Suchanfragen',
                    icon: 'star'
                  },
                  {
                    value: '1.200+',
                    label: 'Monatliche Interaktionen',
                    sublabel: 'Routen & Website-Aufrufe',
                    icon: 'users'
                  },
                  {
                    value: '4.8 ★',
                    label: 'Reputationsindex',
                    sublabel: 'Aus über 350 verifizierten Bewertungen',
                    icon: 'shield'
                  }
                ],
                badge: 'Gastronomie & B2C'
              }
            ]
          }
        },

        // ==========================================
        // SHEET 5: OUTSOURCED DIGITAL TEAM
        // ==========================================
        {
          id: 'sheet-5-team-model',
          sheetNumber: 5,
          totalSheets: 6,
          runningTag: 'IHRE AUSGELAGERTE DIGITALABTEILUNG',
          content: {
            type: 'teamModel',
            headline: 'Ihre ausgelagerte Digitalabteilung.',
            subtitle: 'Statt unzählige Einzelspezialisten mühsam intern einzustellen und zu koordinieren, erhalten Sie ein eingespieltes Ingenieurteam zum Festpreis.',
            rolesReplacedTitle: 'Kosten herkömmlicher interner Einstellungen:',
            rolesReplaced: [
              { role: 'Web-Entwickler / Software Engineer', salary: '75.000 € / Jahr' },
              { role: 'SEO- & Search-Spezialist', salary: '65.000 € / Jahr' },
              { role: 'Performance-Marketing-Manager', salary: '70.000 € / Jahr' },
              { role: 'KI- & Automatisierungs-Experte', salary: '80.000 € / Jahr' },
              { role: 'Brand- & UI/UX-Designer', salary: '55.000 € / Jahr' },
              { role: 'Social-Media- & Content-Manager', salary: '50.000 € / Jahr' }
            ],
            totalCostNote: 'Interner Gesamtaufwand: Über 395.000 € / Jahr zzgl. Lohnnebenkosten, Einarbeitungszeit und Führungsaufwand.',
            solutionHeading: 'Der Nordible-Vorteil: Ein ganzheitliches Leistungsportfolio aus einer Hand',
            services: [
              {
                number: '01',
                title: 'High-Performance Web-Plattformen',
                outcome: 'Sofortiges Vertrauen & maximale Konversionsrate',
                description: 'Moderne, barrierefreie und blitzschnelle Weblösungen, die technisch und optisch Maßstäbe setzen.',
                icon: 'code'
              },
              {
                number: '02',
                title: 'Generative Engine Optimization (GEO)',
                outcome: 'Zitiert & empfohlen von modernen KI-Systemen',
                description: 'Wir bereiten Ihre Unternehmensdaten so auf, dass ChatGPT, Gemini und Perplexity Ihr Haus als Branchenführer empfehlen.',
                icon: 'bot'
              },
              {
                number: '03',
                title: 'Lokale & Nationale Suchdominanz',
                outcome: 'Dauerhafte Präsenz auf Google Seite 1',
                description: 'Zielgenaue Ausrichtung auf kaufbereite Entscheideranfragen ohne fortlaufend teure Klickwerbung.',
                icon: 'search'
              },
              {
                number: '04',
                title: 'Google Unternehmensprofil-Betreuung',
                outcome: 'Perfekte regionale Visitenkarte & Map-Pack-Erfolge',
                description: 'Proaktive Pflege, Abwehr von Manipulationsversuchen, Rezensionsbegleitung und Beitragsveröffentlichungen.',
                icon: 'map'
              },
              {
                number: '05',
                title: 'Sichere Business-E-Mail & Infrastruktur',
                outcome: 'DSGVO-konforme, ausfallsichere Firmenkommunikation',
                description: 'Selbstgehostete, hochsichere Mailserver ohne Weitergabe vertraulicher Unternehmensdaten.',
                icon: 'mail'
              },
              {
                number: '06',
                title: 'Laufendes Sparring & Wachstumsanalyse',
                outcome: 'Monatliche Transparenz ohne Fachchinesisch',
                description: 'Feste persönliche Ansprechpartner, regelmäßige Statusgespräche und datenbasierte Optimierungen.',
                icon: 'trending'
              }
            ]
          }
        },

        // ==========================================
        // SHEET 6: EXECUTIVE CTA & PARTNERSHIP
        // ==========================================
        {
          id: 'sheet-6-closing',
          sheetNumber: 6,
          totalSheets: 6,
          runningTag: 'PERSÖNLICHER DIALOG & NÄCHSTE SCHRITTE',
          content: {
            type: 'closing',
            headlineMain: 'Konzentrieren Sie sich auf Ihr Geschäft.',
            headlineSub: 'Wir kümmern uns um den Rest.',
            leadParagraph: 'Stellen Sie sich vor, Sie führen Ihr Unternehmen mit dem sicheren Gefühl, dass Ihre digitale Marktpräsenz Monat für Monat von erfahrenen Technologie- und Marketingexperten proaktiv ausgebaut wird.',
            partnershipPromise: 'Kein Einmalprojekt. Keine leeren Versprechungen. Sondern eine verlässliche, langfristige Partnerschaft für nachhaltiges unternehmerisches Wachstum.',
            stepsHeading: 'Der Weg zu Ihrer Zusammenarbeit:',
            steps: [
              {
                step: '01',
                title: '15-minütiges Erstgespräch',
                desc: 'Unverbindlicher Austausch zu Ihren aktuellen Zielen, Herausforderungen und Wachstumsambitionen.'
              },
              {
                step: '02',
                title: 'Digitale Potenzialanalyse',
                desc: 'Wir analysieren Ihre Domain, regionale Suchpotenziale und Wettbewerber vorab auf eigene Kosten.'
              },
              {
                step: '03',
                title: 'Strategischer Wachstumsstart',
                desc: 'Aktivierung Ihres individuellen Maßnahmenplans mit klar definierten Meilensteinen und festen Ansprechpartnern.'
              }
            ],
            ctaTitle: 'Vereinbaren Sie Ihr kostenfreies Erstgespräch',
            ctaSubtitle: 'Scannen Sie den QR-Code mit Ihrem Smartphone oder kontaktieren Sie uns direkt:',
            bookingUrl: 'https://cal.com/nordible/consultation',
            contactName: 'Kabeer Shah',
            contactRole: 'Gründer & Head of Client Success',
            contactEmail: 'mail@nordible.co',
            contactPhone: '+49 69 945159390',
            finalStatement: 'Große Unternehmen entstehen nicht über Nacht. Sie wachsen durch kontinuierliche Verbesserung, kluge Entscheidungen und die richtigen langfristigen Partner. Gestalten wir Ihre digitale Zukunft gemeinsam.'
          }
        }
      ]
    },

    // Secondary Event Preset (Reusable engine test/example)
    'corporate-event': {
      id: 'corporate-event',
      preset: 'corporate-event',
      title: 'Nordible Technologies – B2B Executive Roundtable Einladung',
      metaDescription: 'Exklusive Einladung zum KI- & Digital-Roundtable für Entscheider im Rhein-Main-Gebiet.',
      version: 'Event-Ausgabe 2026',
      sheets: [
        {
          id: 'event-sheet-1',
          sheetNumber: 1,
          totalSheets: 2,
          runningTag: 'EXKLUSIVE EINLADUNG · B2B ROUNDTABLE',
          content: {
            type: 'eventInvitation',
            categoryPill: 'Executive Event · Frankfurt am Main',
            eventTitle: 'KI-SUCHE, GOOGLE & DIGITALE MARKTFÜHRERSCHAFT',
            eventSubtitle: 'Exklusiver Strategie-Abend für Geschäftsführer & Vorstände im Rhein-Main-Gebiet',
            date: 'Donnerstag, 12. November 2026',
            time: '18:30 – 21:30 Uhr (inkl. Flying Dinner)',
            location: 'Frankfurt am Main (Details nach Bestätigung)',
            format: 'Kurzvortrag, Praxisbeispiele, offener Kamingesprächskreis',
            agendaHeading: 'Ablauf des Abends:',
            agenda: [
              { time: '18:30 Uhr', topic: 'Empfang & Welcome Drinks' },
              { time: '19:00 Uhr', topic: 'Impulsvortrag: Von Google SEO zu Generative Engine Optimization (GEO)', speaker: 'Kabeer Shah' },
              { time: '19:45 Uhr', topic: 'Live-Case-Study: Wie B2B-Unternehmen messbar Inbound-Mandate generieren' },
              { time: '20:15 Uhr', topic: 'Networking, Flying Dinner & vertraulicher Erfahrungsaustausch' }
            ],
            keyTakeaways: [
              'Wie KI-Suchmaschinen (ChatGPT, Perplexity) Ihre Branche verändern',
              'Konkrete Checkliste zur Absicherung Ihrer regionalen Marktpräsenz',
              'Wertvoller persönlicher Austausch mit ausgewählten Branchenkollegen'
            ],
            rsvpCta: 'Platz reservieren (Teilnehmerzahl streng auf 15 limitiert)',
            rsvpDeadline: 'Rückmeldung erbeten bis zum 30. Oktober 2026'
          }
        }
      ]
    }
  },

  en: {
    'corporate-growth': {
      id: 'corporate-growth',
      preset: 'corporate-growth',
      title: 'Nordible Technologies – B2B Corporate Prospectus 2026/2027',
      metaDescription: 'Your Long-Term Digital Growth Partner for Modern Businesses.',
      version: 'Volume 2026 / 2027',
      sheets: [
        {
          id: 'sheet-1-cover',
          sheetNumber: 1,
          totalSheets: 6,
          runningTag: 'CORPORATE PROSPECTUS · VOL. 2026/2027',
          content: {
            type: 'cover',
            categoryPill: 'AI-Native Digital Growth Partner',
            headlineMain: 'YOUR BUSINESS DESERVES YOUR FULL ATTENTION.',
            headlineHighlight: "We'll Take Care of Your Digital Growth.",
            subheadline: 'Helping mid-sized market leaders and owner-operated companies systematically attract high-intent clients through Google, AI-powered search, local presence, and modern digital platforms.',
            targetAudienceNote: 'For CEOs, Founders, and Business Owners in Germany & Europe',
            pillars: [
              'AI-Native',
              'Engineering-Led',
              'Outcome-Driven',
              'Frankfurt am Main'
            ]
          }
        },
        {
          id: 'sheet-2-problem',
          sheetNumber: 2,
          totalSheets: 6,
          runningTag: 'THE OPERATIONAL REALITY',
          content: {
            type: 'problem',
            headlineMain: "You're Busy Running Your Business.",
            headlineSub: "Who is actively bringing in your next customer?",
            leadParagraph: 'Business leaders spend their finite energy managing operations, leading teams, and delivering client excellence. Marketing often gets postponed because running the business comes first.',
            bodyParagraph: 'Meanwhile, high-value prospects continue searching online every single day. If your business is not visible where buying decisions are made, lucrative opportunities default to aggressive competitors.',
            channelsHeading: 'Where commercial buyers search today:',
            channels: [
              {
                title: 'Google Web Search (Page 1)',
                description: 'Over 87% of commercial B2B procurement research begins in organic Google search.'
              },
              {
                title: 'Google Maps & Local 3-Pack',
                description: 'Where local and regional buyers verify proximity, travel time, reviews, and credibility before calling.'
              },
              {
                title: 'AI Search Engines (ChatGPT, Gemini, Perplexity)',
                description: 'More decision-makers now use AI for service recommendations. Only semantically structured entities get cited.'
              },
              {
                title: 'Industry Directories & Authority Signals',
                description: 'Verified citations and consistent corporate data establish enterprise trust and ranking authority.'
              },
              {
                title: 'High-Converting Web Platform',
                description: 'A modern website must communicate authority in under 3 seconds and convert visitors into calendar appointments.'
              }
            ],
            executiveTakeaway: 'Every day your business remains digitally invisible is an inbound opportunity handed directly to competitors.'
          }
        },
        {
          id: 'sheet-3-philosophy',
          sheetNumber: 3,
          totalSheets: 6,
          runningTag: 'GROWTH PHILOSOPHY & METHODOLOGY',
          content: {
            type: 'philosophy',
            headline: 'Digital Growth Is Never Finished.',
            thesis: 'A website is not finished after launch. SEO is not finished after reaching Page 1. Algorithms evolve monthly, AI fundamentally reshapes discovery, and competitors continuously invest. Companies treating digital presence as a one-time transaction inevitably lose market share. Long-term commitment compounds visibility.',
            timelineHeading: 'The Continuous Nordible Growth Trajectory:',
            timelineStages: [
              {
                phase: 'Phase 01',
                timeline: 'Months 1 – 3',
                title: 'Foundation & Technical Excellence',
                description: 'Rigorous architectural re-engineering, Schema.org knowledge graphs, PageSpeed 95+ and conversion friction removal.',
                deliverables: ['Audit & Re-Engineering', 'Schema.org Graph', 'Mobile First UX']
              },
              {
                phase: 'Phase 02',
                timeline: 'Months 4 – 6',
                title: 'Visibility & Regional Dominance',
                description: 'Targeted ranking gains across competitive high-intent terms, Map Pack #1 placements, and lead funnel tuning.',
                deliverables: ['Google Page 1 Rankings', 'Local SEO Dominance', 'Conversion Funnels']
              },
              {
                phase: 'Phase 03',
                timeline: 'Months 7 – 9',
                title: 'Generative Engine Optimization (GEO)',
                description: 'Securing citations and verified entity status in AI engines like ChatGPT, Gemini, and Perplexity.',
                deliverables: ['Generative Engine Optimization', 'Citation Network', 'Entity Structuring']
              },
              {
                phase: 'Phase 04',
                timeline: 'Continuous',
                title: 'Compounding Inbound Leadership',
                description: 'Proactive stewardship, competitor counter-measures, algorithm shielding, and predictable lead generation.',
                deliverables: ['Monthly Executive Sparring', 'Proactive Iterations', 'Predictable Inbound Flow']
              }
            ],
            closingStatement: 'That is why Nordible operates not as a short-term agency, but as your dedicated long-term Digital Growth Partner.'
          }
        },
        {
          id: 'sheet-4-case-studies',
          sheetNumber: 4,
          totalSheets: 6,
          runningTag: 'CASE STUDIES & AUDITED PROOF',
          content: {
            type: 'caseStudies',
            headline: 'Real Businesses. Real Results.',
            subtitle: 'No abstract marketing promises — verifiable metrics from real enterprise projects in Germany.',
            caseStudies: [
              {
                clientName: 'Shams Consult',
                location: 'Frankfurt am Main',
                industry: 'Architecture · Urban Planning · Project Management',
                challenge: 'Despite premier architectural credentials, zero organic visibility for high-ticket commercial planning enquiries.',
                delivered: [
                  'High-performance Next.js web platform re-engineering',
                  'Local SEO & regional entity prominence',
                  'Google Business Profile restructuring',
                  'Generative Engine Optimization (GEO for AI Search)'
                ],
                metrics: [
                  {
                    value: '#1 Position',
                    label: 'Regional Rankings',
                    sublabel: 'For strategic architectural queries',
                    icon: 'trophy'
                  },
                  {
                    value: '+4 Pages',
                    label: 'Google Climb',
                    sublabel: 'In competitive Frankfurt market',
                    icon: 'trending'
                  },
                  {
                    value: '61',
                    label: 'Navigation Requests',
                    sublabel: 'Maps directions in a single month',
                    icon: 'navigation'
                  },
                  {
                    value: '2 Mandates',
                    label: 'Direct Client Wins',
                    sublabel: 'From qualified inbound phone calls',
                    icon: 'phone'
                  }
                ],
                badge: 'B2B Architecture',
                quote: 'Page 1 visibility delivered high-caliber commercial project inquiries immediately.'
              },
              {
                clientName: 'Buns 069',
                location: 'Offenbach am Main',
                industry: 'Hospitality & Gastronomy',
                challenge: 'Boosting local foot traffic, digital ordering volumes, and establishing dominant brand presence.',
                delivered: [
                  'Mobile-first digital menu and ordering experience',
                  'Hyper-local search engine optimization (Frankfurt / Offenbach)',
                  'Social media customer engagement campaigns',
                  'Review management & Google Maps optimization'
                ],
                metrics: [
                  {
                    value: '+45%',
                    label: 'Revenue Increase',
                    sublabel: 'Via direct digital ordering channels',
                    icon: 'trending'
                  },
                  {
                    value: 'Top 3',
                    label: 'Maps Visibility',
                    sublabel: 'For high-volume local search keywords',
                    icon: 'star'
                  },
                  {
                    value: '1,200+',
                    label: 'Monthly Interactions',
                    sublabel: 'Route requests & website visits',
                    icon: 'users'
                  },
                  {
                    value: '4.8 ★',
                    label: 'Reputation Score',
                    sublabel: 'Across 350+ verified customer reviews',
                    icon: 'shield'
                  }
                ],
                badge: 'Hospitality & B2C'
              }
            ]
          }
        },
        {
          id: 'sheet-5-team-model',
          sheetNumber: 5,
          totalSheets: 6,
          runningTag: 'YOUR OUTSOURCED DIGITAL DEPARTMENT',
          content: {
            type: 'teamModel',
            headline: 'Your Outsourced Digital Department.',
            subtitle: 'Instead of hiring, onboarding, and coordinating 6 separate specialists, partner with one seasoned multidisciplinary team.',
            rolesReplacedTitle: 'Standard Cost of In-House Specialists:',
            rolesReplaced: [
              { role: 'Web Developer / Software Engineer', salary: '€75,000 / year' },
              { role: 'SEO & Search Engine Specialist', salary: '€65,000 / year' },
              { role: 'Performance Marketing Manager', salary: '€70,000 / year' },
              { role: 'AI & Automation Specialist', salary: '€80,000 / year' },
              { role: 'Brand & UI/UX Designer', salary: '€55,000 / year' },
              { role: 'Social Media & Content Strategist', salary: '€50,000 / year' }
            ],
            totalCostNote: 'Total in-house cost: Over €395,000 / year plus management overhead, recruiting fees, and employer taxes.',
            solutionHeading: 'The Nordible Model: Complete Digital Growth Capabilities Under One Roof',
            services: [
              {
                number: '01',
                title: 'High-Performance Web Platforms',
                outcome: 'Instant Credibility & Maximum Conversion Rate',
                description: 'Fast, accessible, beautifully engineered digital experiences that turn visitors into scheduled appointments.',
                icon: 'code'
              },
              {
                number: '02',
                title: 'Generative Engine Optimization (GEO)',
                outcome: 'Directly Recommended by AI Engines',
                description: 'We structure your digital footprint so ChatGPT, Gemini, and Perplexity recognize and cite your brand.',
                icon: 'bot'
              },
              {
                number: '03',
                title: 'Search Dominance & Organic Growth',
                outcome: 'Sustainable Google Page 1 Presence',
                description: 'Laser-focused optimization on buyer-intent keywords without endless reliance on paid ad spend.',
                icon: 'search'
              },
              {
                number: '04',
                title: 'Google Business Profile Management',
                outcome: 'Regional Map Pack Leadership',
                description: 'Active maintenance, spam defense, review monitoring, and regular citation authority building.',
                icon: 'map'
              },
              {
                number: '05',
                title: 'Secure Business Email & Infrastructure',
                outcome: 'Private, GDPR-Compliant Communications',
                description: 'Enterprise-grade self-hosted mail infrastructure ensuring total privacy of client communications.',
                icon: 'mail'
              },
              {
                number: '06',
                title: 'Proactive Executive Sparring',
                outcome: 'Transparent Performance Without Jargon',
                description: 'Direct founder-level consultation, monthly reporting, and proactive adjustments to market shifts.',
                icon: 'trending'
              }
            ]
          }
        },
        {
          id: 'sheet-6-closing',
          sheetNumber: 6,
          totalSheets: 6,
          runningTag: 'DIRECT DIALOGUE & NEXT STEPS',
          content: {
            type: 'closing',
            headlineMain: 'Focus on Your Business.',
            headlineSub: "We'll Focus on Growing It.",
            headlineHighlight: "We'll Focus on Growing It.",
            leadParagraph: 'Imagine operating your firm with complete peace of mind, knowing your digital market presence is continuously safeguarded and expanded by specialists.',
            partnershipPromise: 'Not a one-time project. Not empty buzzwords. An accountable, long-term partnership built for sustainable business growth.',
            stepsHeading: 'How We Begin Our Partnership:',
            steps: [
              {
                step: '01',
                title: '15-Minute Introductory Call',
                desc: 'A no-pressure consultation regarding your current market presence, goals, and growth bottlenecks.'
              },
              {
                step: '02',
                title: 'Complimentary Digital Audit',
                desc: 'We analyze your website, competitor rankings, and search opportunities in advance at our own cost.'
              },
              {
                step: '03',
                title: 'Strategic Growth Activation',
                desc: 'Launch your tailored digital growth roadmap with clear milestones and dedicated direct accountability.'
              }
            ],
            ctaTitle: 'Schedule Your Complimentary Consultation',
            ctaSubtitle: 'Scan the QR code with your smartphone or reach out directly:',
            bookingUrl: 'https://cal.com/nordible/consultation',
            contactName: 'Kabeer Shah',
            contactRole: 'Founder & Head of Client Success',
            contactEmail: 'mail@nordible.co',
            contactPhone: '+49 69 945159390',
            finalStatement: 'Great businesses are not built overnight. They are built through consistent execution, smart decisions, and the right long-term partner. Let us build your digital future together.'
          }
        }
      ]
    },
    'corporate-event': {
      id: 'corporate-event',
      preset: 'corporate-event',
      title: 'Nordible Technologies – Executive Roundtable Invitation',
      metaDescription: 'Exclusive invitation to the AI & Digital Growth Roundtable for decision-makers.',
      version: 'Event Edition 2026',
      sheets: [
        {
          id: 'event-sheet-1',
          sheetNumber: 1,
          totalSheets: 2,
          runningTag: 'EXCLUSIVE INVITATION · B2B ROUNDTABLE',
          content: {
            type: 'eventInvitation',
            categoryPill: 'Executive Event · Frankfurt am Main',
            eventTitle: 'AI SEARCH, GOOGLE & DIGITAL MARKET LEADERSHIP',
            eventSubtitle: 'Exclusive Strategic Evening for Managing Directors & Board Members in Germany',
            date: 'Thursday, November 12, 2026',
            time: '18:30 – 21:30 CET (including Flying Dinner)',
            location: 'Frankfurt am Main (Full address upon RSVP confirmation)',
            format: 'Executive Keynote, Practical Case Studies, Closed Roundtable Discussion',
            agendaHeading: 'Evening Agenda:',
            agenda: [
              { time: '18:30', topic: 'Reception & Welcome Drinks' },
              { time: '19:00', topic: 'Keynote: Navigating the Shift from SEO to Generative Engine Optimization (GEO)', speaker: 'Kabeer Shah' },
              { time: '19:45', topic: 'Live Case Study: How German Enterprises Systematically Generate Inbound Inquiries' },
              { time: '20:15', topic: 'Executive Networking, Flying Dinner & Confidential Peer Exchange' }
            ],
            keyTakeaways: [
              'How AI answer engines (ChatGPT, Perplexity) reshape your industry',
              'Actionable checklist to secure regional and national search dominance',
              'Valuable private exchange with selected executive peers'
            ],
            rsvpCta: 'Reserve Your Seat (Strictly Limited to 15 Executives)',
            rsvpDeadline: 'Kindly RSVP by October 30, 2026'
          }
        }
      ]
    }
  }
};
