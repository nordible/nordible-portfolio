'use client';
import { useState } from 'react';
import { Link2, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface SectionAnchorProps {
  id: string;
  className?: string;
  title?: string;
}

export default function SectionAnchor({ id, className = '', title }: SectionAnchorProps) {
  const [copied, setCopied] = useState(false);
  const { language } = useLanguage();

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const targetUrl = `${window.location.origin}${window.location.pathname}#${id}`;
    window.history.pushState(null, '', `#${id}`);

    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(targetUrl).catch(() => {});
    }

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const label = language === 'de' ? 'Direktlink kopieren' : 'Copy direct link';
  const copiedLabel = language === 'de' ? 'Kopiert!' : 'Copied!';

  return (
    <span className={`relative inline-flex items-center group/anchor ${className}`}>
      <button
        type="button"
        onClick={handleCopy}
        className="opacity-0 group-hover:opacity-70 group-focus-within:opacity-100 hover:!opacity-100 focus:opacity-100 p-1 rounded-md text-gray-400 hover:text-nordible-blue dark:text-gray-500 dark:hover:text-blue-400 transition-all cursor-pointer"
        title={title || label}
        aria-label={title || label}
      >
        {copied ? (
          <Check className="h-4 w-4 text-emerald-500" />
        ) : (
          <Link2 className="h-4 w-4" />
        )}
      </button>

      {copied && (
        <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[10px] font-bold text-white bg-gray-900 dark:bg-gray-100 dark:text-gray-900 rounded shadow-md whitespace-nowrap pointer-events-none animate-in fade-in duration-200">
          {copiedLabel}
        </span>
      )}
    </span>
  );
}
