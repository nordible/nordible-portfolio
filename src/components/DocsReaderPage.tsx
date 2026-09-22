'use client';
import React, { useState, useEffect, useMemo } from 'react';
import { 
  Lock, 
  Unlock, 
  FileText, 
  LogOut, 
  Check, 
  Copy, 
  Printer, 
  ArrowLeft, 
  ChevronRight,
  Code,
  Eye,
  ArrowUp,
  FolderLock,
  PanelLeft,
  PanelLeftClose,
  Download,
  ImageIcon,
  Loader2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import type { InternalDoc, ExecutiveAsset } from '../data/docsContent';

export default function DocsReaderPage() {
  const [docs, setDocs] = useState<InternalDoc[]>([]);
  const [assets, setAssets] = useState<ExecutiveAsset[]>([]);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedDocId, setSelectedDocId] = useState<string>('');
  const [viewMode, setViewMode] = useState<'formatted' | 'raw'>('formatted');
  const [copiedDoc, setCopiedDoc] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    // Robots meta tag to explicitly prevent indexing
    let metaTag = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
    const previousContent = metaTag ? metaTag.content : null;
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.name = 'robots';
      document.head.appendChild(metaTag);
    }
    metaTag.content = 'noindex, nofollow, noarchive';

    // Check existing session cache
    try {
      const cached = sessionStorage.getItem('nordible_portal_data');
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed.docs) && parsed.docs.length > 0) {
          setDocs(parsed.docs);
          setAssets(parsed.assets || []);
          setSelectedDocId(parsed.docs[0].id);
          setIsUnlocked(true);
        }
      }
    } catch {
      // ignore parse/storage errors
    }

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (previousContent !== null && metaTag) {
        metaTag.content = previousContent;
      } else if (metaTag && metaTag.parentNode) {
        metaTag.parentNode.removeChild(metaTag);
      }
    };
  }, []);

  const handleUnlock = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!pinInput.trim()) {
      setErrorMessage('Please enter an access PIN.');
      return;
    }
    setIsLoading(true);
    setErrorMessage('');
    try {
      const res = await fetch('/api/portal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pin: pinInput.trim() }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setDocs(data.docs);
        setAssets(data.assets || []);
        setSelectedDocId(data.docs[0]?.id || '');
        setIsUnlocked(true);
        try {
          sessionStorage.setItem(
            'nordible_portal_data',
            JSON.stringify({ docs: data.docs, assets: data.assets })
          );
          sessionStorage.setItem('nordible_portal_auth', 'granted');
        } catch {
          // ignore storage error
        }
      } else {
        setErrorMessage(data.error || 'Incorrect PIN. Access denied.');
        setPinInput('');
      }
    } catch {
      setErrorMessage('Connection error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLock = () => {
    try {
      sessionStorage.removeItem('nordible_portal_data');
      sessionStorage.removeItem('nordible_portal_auth');
    } catch {
      // ignore
    }
    setDocs([]);
    setAssets([]);
    setIsUnlocked(false);
    setPinInput('');
    setErrorMessage('');
  };

  const activeDoc = useMemo(() => {
    return docs.find(d => d.id === selectedDocId) || docs[0];
  }, [docs, selectedDocId]);

  const handleCopyDoc = () => {
    if (!activeDoc) return;
    navigator.clipboard.writeText(activeDoc.rawContent);
    setCopiedDoc(true);
    setTimeout(() => setCopiedDoc(false), 2000);
  };

  const handlePrint = () => {
    if (activeDoc?.isFlyer) {
      window.open('/prospect-flyer?print=true', '_blank');
    } else {
      window.print();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render markdown parser for formatted view
  const renderMarkdown = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let inCodeBlock = false;
    let codeBlockBuffer: string[] = [];
    let tableBuffer: string[] = [];
    let inTable = false;

    const flushTable = (keyIndex: number) => {
      if (tableBuffer.length === 0) return null;
      const rows = tableBuffer.map(r => r.split('|').map(c => c.trim()).filter((_, i, arr) => i > 0 && i < arr.length - 1));
      tableBuffer = [];
      inTable = false;

      if (rows.length < 2) return null;
      const header = rows[0];
      const dataRows = rows.slice(2); // row 1 is separator |:---|:---|

      return (
        <div key={`table-${keyIndex}`} className="overflow-x-auto my-6 rounded-2xl border border-nordible-border dark:border-gray-800 shadow-sm bg-white dark:bg-gray-800/80">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 dark:bg-gray-900/80 border-b border-nordible-border dark:border-gray-700 text-xs font-bold uppercase tracking-wider text-nordible-dark dark:text-gray-200 font-heading">
              <tr>
                {header.map((th, hIdx) => (
                  <th key={hIdx} className="px-4 py-3.5">
                    {parseInline(th)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-nordible-border/60 dark:divide-gray-800">
              {dataRows.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-gray-50/50 dark:hover:bg-gray-750 transition-colors">
                  {row.map((td, cIdx) => (
                    <td key={cIdx} className="px-4 py-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                      {parseInline(td)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };

    const parseInline = (text: string): React.ReactNode => {
      if (!text) return null;
      // Bold + Italic, Bold, Code, Links
      const parts = text.split(/(\*\*.*?\*\*|\*.*?\*|`.*?`)/g);
      return parts.map((part, idx) => {
        if (!part) return null;
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={`b-${idx}`} className="font-extrabold text-nordible-dark dark:text-white">{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('*') && part.endsWith('*')) {
          return <em key={`i-${idx}`} className="italic text-gray-700 dark:text-gray-300">{part.slice(1, -1)}</em>;
        }
        if (part.startsWith('`') && part.endsWith('`')) {
          return <code key={`c-${idx}`} className="px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-900/30 text-nordible-blue dark:text-blue-300 font-mono text-xs">{part.slice(1, -1)}</code>;
        }
        return <span key={`t-${idx}`}>{part}</span>;
      });
    };

    lines.forEach((line, index) => {
      if (line.trim().startsWith('```')) {
        if (inCodeBlock) {
          const codeText = codeBlockBuffer.join('\n');
          codeBlockBuffer = [];
          inCodeBlock = false;
          elements.push(
            <pre key={`code-${index}`} className="my-5 p-4 sm:p-5 rounded-2xl bg-gray-950 text-blue-100 font-mono text-xs overflow-x-auto border border-gray-800 shadow-lg">
              <code>{codeText}</code>
            </pre>
          );
        } else {
          inCodeBlock = true;
        }
        return;
      }

      if (inCodeBlock) {
        codeBlockBuffer.push(line);
        return;
      }

      // Tables
      if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
        inTable = true;
        tableBuffer.push(line.trim());
        return;
      } else if (inTable) {
        const tableEl = flushTable(index);
        if (tableEl) elements.push(tableEl);
      }

      // Headings
      if (line.startsWith('# ')) {
        elements.push(
          <h1 key={`h1-${index}`} className="text-2xl sm:text-4xl font-extrabold text-nordible-dark dark:text-white font-heading tracking-tight mt-8 mb-4 border-b border-nordible-border dark:border-gray-800 pb-3">
            {parseInline(line.replace('# ', ''))}
          </h1>
        );
        return;
      }
      if (line.startsWith('## ')) {
        elements.push(
          <h2 key={`h2-${index}`} className="text-xl sm:text-2xl font-extrabold text-nordible-dark dark:text-white font-heading tracking-tight mt-7 mb-3">
            {parseInline(line.replace('## ', ''))}
          </h2>
        );
        return;
      }
      if (line.startsWith('### ')) {
        elements.push(
          <h3 key={`h3-${index}`} className="text-lg sm:text-xl font-bold text-nordible-dark dark:text-white font-heading mt-6 mb-2">
            {parseInline(line.replace('### ', ''))}
          </h3>
        );
        return;
      }

      // Blockquotes
      if (line.startsWith('> ')) {
        elements.push(
          <blockquote key={`quote-${index}`} className="my-4 p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border-l-4 border-nordible-blue text-sm text-gray-700 dark:text-gray-300 italic">
            {parseInline(line.replace('> ', ''))}
          </blockquote>
        );
        return;
      }

      // Horizontal rules
      if (line.trim() === '---') {
        elements.push(
          <hr key={`hr-${index}`} className="my-6 border-t border-nordible-border dark:border-gray-800" />
        );
        return;
      }

      // Unordered List
      if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
        elements.push(
          <div key={`li-${index}`} className="flex items-start gap-2.5 my-1.5 text-sm text-gray-700 dark:text-gray-300">
            <span className="w-1.5 h-1.5 rounded-full bg-nordible-blue shrink-0 mt-2" />
            <span>{parseInline(line.trim().replace(/^[-*]\s+/, ''))}</span>
          </div>
        );
        return;
      }

      // Ordered List
      const olMatch = line.trim().match(/^(\d+)\.\s+(.*)/);
      if (olMatch) {
        elements.push(
          <div key={`ol-${index}`} className="flex items-start gap-2.5 my-2 text-sm text-gray-700 dark:text-gray-300">
            <span className="w-5 h-5 rounded-md bg-blue-50 dark:bg-blue-900/30 text-nordible-blue dark:text-blue-300 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
              {olMatch[1]}
            </span>
            <div className="flex-1">{parseInline(olMatch[2])}</div>
          </div>
        );
        return;
      }

      // Paragraph
      if (line.trim().length > 0) {
        elements.push(
          <p key={`p-${index}`} className="my-2.5 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-normal">
            {parseInline(line)}
          </p>
        );
      }
    });

    if (inTable) {
      const tableEl = flushTable(lines.length);
      if (tableEl) elements.push(tableEl);
    }

    return elements;
  };

  // State: Locked -> PIN Keypad Entry
  if (!isUnlocked) {
    return (
      <div className="min-h-screen bg-nordible-bg dark:bg-gray-950 flex items-center justify-center px-4 py-16">
        <div className="max-w-sm w-full p-8 rounded-3xl bg-white dark:bg-gray-900 border border-nordible-border dark:border-gray-800 shadow-2xl space-y-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-nordible-blue dark:text-blue-400 flex items-center justify-center mx-auto shadow-sm">
            <Lock className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-widest bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
              Private Admin Portal
            </span>
            <h1 className="text-2xl font-extrabold text-nordible-dark dark:text-white font-heading">
              Enter Admin PIN
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Protected executive documents. Session is discarded upon closing the tab.
            </p>
          </div>

          <form onSubmit={handleUnlock} className="space-y-5">
            <div className="relative">
              <input
                type="password"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={12}
                placeholder="••••"
                value={pinInput}
                disabled={isLoading}
                onChange={(e) => {
                  setPinInput(e.target.value);
                  setErrorMessage('');
                }}
                className="w-full text-center text-2xl tracking-[0.4em] font-mono py-3 px-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-nordible-border dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-nordible-blue focus:ring-2 focus:ring-nordible-blue/20 transition-all disabled:opacity-50"
                autoFocus
              />
            </div>

            {errorMessage && (
              <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-xs text-red-600 dark:text-red-400 font-medium">
                {errorMessage}
              </div>
            )}

            <div className="flex items-center gap-3 pt-2">
              <Link
                to="/"
                className="p-3 rounded-2xl border border-nordible-border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-nordible-dark transition-colors"
                title="Cancel and return home"
              >
                <ArrowLeft className="w-4 h-4" />
              </Link>
              <button
                type="submit"
                disabled={isLoading}
                className="btn-primary flex-1 py-3 text-xs font-bold uppercase tracking-wider shadow-lg shadow-blue-500/20 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Verifying...</span>
                  </>
                ) : (
                  <>
                    <span>Unlock Admin Portal</span>
                    <Unlock className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // State 3: Unlocked -> Executive Reader Interface
  if (!activeDoc) {
    return (
      <div className="min-h-screen bg-nordible-bg dark:bg-gray-950 flex items-center justify-center p-8 text-sm text-gray-500">
        <Loader2 className="w-5 h-5 animate-spin mr-2 text-nordible-blue" />
        <span>Loading executive documents...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-nordible-bg dark:bg-gray-950 text-gray-900 dark:text-gray-100 pb-28 selection:bg-nordible-blue selection:text-white">
      {/* Top Navbar */}
      <header className="sticky top-0 z-30 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-nordible-border dark:border-gray-800 px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <Link
              to="/"
              className="p-2 rounded-xl border border-nordible-border dark:border-gray-800 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-nordible-blue transition-colors"
              title="Return to website"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <button
              type="button"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="hidden lg:inline-flex items-center p-2 rounded-xl border border-nordible-border dark:border-gray-800 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-nordible-blue transition-colors"
              title={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
              aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
            >
              {sidebarOpen ? <PanelLeftClose className="w-4 h-4" /> : <PanelLeft className="w-4 h-4" />}
            </button>
            <div>
              <div className="flex items-center gap-2">
                <FolderLock className="w-4 h-4 text-nordible-blue dark:text-blue-400" />
                <span className="text-sm font-extrabold text-nordible-dark dark:text-white font-heading">
                  Executive Docs Portal
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono uppercase font-bold bg-blue-50 dark:bg-blue-900/30 text-nordible-blue dark:text-blue-300">
                  Confidential
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Formatted vs Raw Switcher */}
            <div className="hidden sm:inline-flex p-1 rounded-xl bg-gray-100 dark:bg-gray-800 border border-nordible-border dark:border-gray-700">
              <button
                type="button"
                onClick={() => setViewMode('formatted')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'formatted'
                    ? 'bg-white dark:bg-gray-900 text-nordible-blue dark:text-blue-400 shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-nordible-dark'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Formatted</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('raw')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'raw'
                    ? 'bg-white dark:bg-gray-900 text-nordible-blue dark:text-blue-400 shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-nordible-dark'
                }`}
              >
                <Code className="w-3.5 h-3.5" />
                <span>Raw Markdown</span>
              </button>
            </div>

            {/* Copy Button */}
            <button
              type="button"
              onClick={handleCopyDoc}
              className="p-2 sm:px-3 sm:py-2 rounded-xl border border-nordible-border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-bold hover:border-nordible-blue transition-colors flex items-center gap-1.5"
              title="Copy markdown content"
            >
              {copiedDoc ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              <span className="hidden sm:inline">{copiedDoc ? 'Copied' : 'Copy'}</span>
            </button>

            {/* Print / Export Button */}
            <button
              type="button"
              onClick={handlePrint}
              className="p-2 sm:px-3 sm:py-2 rounded-xl bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800/50 text-nordible-blue dark:text-blue-300 text-xs font-bold hover:bg-blue-100 transition-colors flex items-center gap-1.5"
              title="Print document or open flyer"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            {/* Lock Session Button */}
            <button
              type="button"
              onClick={handleLock}
              className="p-2 sm:px-3 sm:py-2 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/50 text-rose-600 dark:text-rose-400 text-xs font-bold hover:bg-rose-100 transition-colors"
              title="Lock and clear session"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline ml-1.5">Lock</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Workspace Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex gap-8 items-start">
        {/* Left Sticky Sidebar: Document Directory */}
        {sidebarOpen && (
          <aside className="hidden lg:block w-60 shrink-0 sticky top-24 space-y-3">
            <div className="p-3 rounded-2xl bg-white dark:bg-gray-900 border border-nordible-border dark:border-gray-800 shadow-sm space-y-2">
              <div className="flex items-center justify-between px-2 pt-1">
                <h2 className="text-[11px] font-extrabold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                  Documents ({docs.length})
                </h2>
                <button
                  type="button"
                  onClick={() => setSidebarOpen(false)}
                  className="text-gray-400 hover:text-nordible-dark dark:hover:text-white transition-colors"
                  title="Collapse sidebar"
                  aria-label="Collapse sidebar"
                >
                  <PanelLeftClose className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="space-y-1">
                {docs.map((doc) => {
                  const isSelected = doc.id === selectedDocId;
                  return (
                    <button
                      key={doc.id}
                      type="button"
                      onClick={() => {
                        setSelectedDocId(doc.id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`w-full p-2.5 rounded-xl text-left transition-all flex items-center gap-2.5 ${
                        isSelected
                          ? 'bg-blue-50 dark:bg-blue-900/20 border border-nordible-blue/40 text-nordible-dark dark:text-white shadow-sm'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/60 border border-transparent'
                      }`}
                    >
                      <div className={`p-1.5 rounded-lg shrink-0 ${
                        isSelected
                          ? 'bg-nordible-blue text-white'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-500'
                      }`}>
                        <FileText className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold truncate font-heading">
                          {doc.shortTitle}
                        </div>
                        <div className="text-[10px] text-gray-400 truncate">
                          {doc.category}
                        </div>
                      </div>
                      {isSelected && (
                        <ChevronRight className="w-3.5 h-3.5 text-nordible-blue shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Executive Assets Download */}
              <div className="pt-3 border-t border-nordible-border dark:border-gray-800 space-y-1.5">
                <div className="px-2 text-[10px] font-extrabold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                  Executive Assets
                </div>
                {assets.map((asset) => (
                  <a
                    key={asset.id}
                    href={asset.fileUrl}
                    {...(asset.targetBlank ? { target: '_blank', rel: 'noopener noreferrer' } : { download: asset.fileName })}
                    className="w-full p-2.5 rounded-xl text-left transition-all flex items-center gap-2.5 bg-blue-50/50 dark:bg-blue-900/20 border border-blue-200/50 dark:border-blue-800/40 text-nordible-dark dark:text-white hover:border-nordible-blue group cursor-pointer"
                  >
                    <div className="p-1.5 rounded-lg shrink-0 bg-nordible-blue text-white group-hover:scale-105 transition-transform">
                      {asset.fileType === 'image' ? (
                        <ImageIcon className="w-3.5 h-3.5" />
                      ) : asset.fileType === 'html' ? (
                        <FileText className="w-3.5 h-3.5" />
                      ) : (
                        <Download className="w-3.5 h-3.5" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold truncate font-heading flex items-center justify-between">
                        <span className="truncate">{asset.title}</span>
                        {asset.badge && (
                          <span className="text-[9px] font-mono font-semibold px-1 py-0.5 rounded bg-blue-100 dark:bg-blue-800/60 text-nordible-blue dark:text-blue-300 ml-1 shrink-0">
                            {asset.badge}
                          </span>
                        )}
                      </div>
                      <div className="text-[10px] text-gray-400 truncate">
                        {asset.subtitle}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </aside>
        )}

        {/* Main Document Content Area */}
        <main className={`flex-1 min-w-0 ${sidebarOpen ? '' : 'max-w-4xl mx-auto'} space-y-6 transition-all duration-300`}>
          {/* Document Body */}
          <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-gray-900 border border-nordible-border dark:border-gray-800 shadow-sm text-left">
            {/* Metadata Breadcrumb Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-nordible-border/60 dark:border-gray-800 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-900/30 text-nordible-blue dark:text-blue-300">
                  {activeDoc.category}
                </span>
                <span className="text-xs text-gray-400">
                  · Last updated {activeDoc.lastUpdated}
                </span>
              </div>

              {!sidebarOpen && (
                <button
                  type="button"
                  onClick={() => setSidebarOpen(true)}
                  className="hidden lg:inline-flex items-center gap-1.5 text-xs font-bold text-nordible-blue dark:text-blue-400 hover:underline"
                >
                  <PanelLeft className="w-3.5 h-3.5" />
                  <span>Show Documents</span>
                </button>
              )}
            </div>

            {viewMode === 'formatted' ? (
              <article key={`${activeDoc.id}-formatted`} className="prose dark:prose-invert max-w-none">
                {renderMarkdown(activeDoc.rawContent)}
              </article>
            ) : (
              <pre key={`${activeDoc.id}-raw`} className="p-4 sm:p-6 rounded-2xl bg-gray-950 text-blue-200 font-mono text-xs sm:text-sm overflow-x-auto leading-relaxed border border-gray-800">
                <code>{activeDoc.rawContent}</code>
              </pre>
            )}
          </div>
        </main>
      </div>

      {/* Science-Backed Mobile Bottom Action Bar (Thumb Zone) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-nordible-border dark:border-gray-800 px-4 py-2.5 shadow-2xl flex items-center justify-between gap-2 safe-area-pb">
        <select
          value={selectedDocId}
          onChange={(e) => {
            setSelectedDocId(e.target.value);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex-1 py-2 px-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-xs font-bold text-nordible-dark dark:text-white border border-nordible-border dark:border-gray-700 focus:outline-none"
        >
          {docs.map((doc) => (
            <option key={doc.id} value={doc.id}>
              {doc.shortTitle}
            </option>
          ))}
        </select>

        <button
          type="button"
          onClick={() => setViewMode(prev => prev === 'formatted' ? 'raw' : 'formatted')}
          className="p-2.5 rounded-xl border border-nordible-border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-xs font-bold text-gray-700 dark:text-gray-300 active:scale-95"
          title="Toggle Raw / Formatted"
        >
          {viewMode === 'formatted' ? <Code className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </button>

        <button
          type="button"
          onClick={handlePrint}
          className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-900/40 text-nordible-blue dark:text-blue-300 border border-blue-200 dark:border-blue-800/50 active:scale-95"
          title="Print or Export Document"
        >
          <Printer className="w-4 h-4" />
        </button>

        <a
          href="/images/nordible-linkedin-cover.png"
          download="nordible-linkedin-cover.png"
          className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-900/40 text-nordible-blue dark:text-blue-300 border border-blue-200 dark:border-blue-800/50 active:scale-95"
          title="Download LinkedIn Cover (PNG)"
        >
          <ImageIcon className="w-4 h-4" />
        </a>

        <button
          type="button"
          onClick={handleLock}
          className="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-900/50 active:scale-95"
          title="Lock Portal"
        >
          <LogOut className="w-4 h-4" />
        </button>

        {showScrollTop && (
          <button
            type="button"
            onClick={scrollToTop}
            className="p-2.5 rounded-xl border border-nordible-border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-nordible-blue dark:text-blue-400 active:scale-95"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
