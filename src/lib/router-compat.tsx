'use client';

import React, { useEffect } from 'react';
import NextLink from 'next/link';
import { 
  useRouter as useNextRouter, 
  usePathname, 
  useParams as useNextParams, 
  useSearchParams 
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

export function useLocation() {
  const pathname = usePathname() || '/';
  const searchParams = useSearchParams();
  const search = searchParams ? `?${searchParams.toString()}` : '';

  return {
    pathname,
    search: search === '?' ? '' : search,
    hash: typeof window !== 'undefined' ? window.location.hash : '',
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
