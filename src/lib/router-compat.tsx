'use client';

import React, { useEffect, useState } from 'react';
import NextLink from 'next/link';
import {
  useRouter as useNextRouter,
  usePathname,
  useParams as useNextParams,
} from 'next/navigation';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to?: string;
  href?: string;
  replace?: boolean;
  children?: React.ReactNode;
}

export function Link({ to, href, children, ...props }: LinkProps) {
  const destination = href || to || '';
  return (
    <NextLink href={destination} {...props}>
      {children}
    </NextLink>
  );
}

export function useNavigate() {
  const router = useNextRouter();

  return (to: string | number, options?: { replace?: boolean }) => {
    if (typeof to === 'number') {
      if (typeof window !== 'undefined') {
        window.history.go(to);
      }
      return;
    }

    if (options?.replace) {
      router.replace(to);
    } else {
      router.push(to);
    }
  };
}

/**
 * Static-prerender-safe location hook.
 * Uses `usePathname()` directly without calling `useSearchParams()` so Next.js
 * can prerender full HTML shells instead of bailing out to CSR.
 */
export function useLocation() {
  const pathname = usePathname() || '/';
  const [clientMeta, setClientMeta] = useState({ search: '', hash: '' });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const sync = () => {
      setClientMeta({
        search: window.location.search || '',
        hash: window.location.hash || '',
      });
    };
    sync();
    window.addEventListener('popstate', sync);
    window.addEventListener('hashchange', sync);
    return () => {
      window.removeEventListener('popstate', sync);
      window.removeEventListener('hashchange', sync);
    };
  }, [pathname]);

  return {
    pathname,
    search: clientMeta.search,
    hash: clientMeta.hash,
  };
}

export function useParams<T extends Record<string, string | undefined> = Record<string, string | undefined>>(): T {
  const params = useNextParams();
  return (params as unknown as T) || ({} as T);
}

export function Navigate({ to, replace }: { to: string; replace?: boolean }) {
  const router = useNextRouter();

  useEffect(() => {
    if (replace) {
      router.replace(to);
    } else {
      router.push(to);
    }
  }, [router, to, replace]);

  return null;
}
