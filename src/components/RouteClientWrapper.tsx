'use client';

import React from 'react';
import Header from './Header';
import Footer from './Footer';

export interface NavigablePageProps {
  onBack?: () => void;
  onBookConsultation?: () => void;
}

export default function RouteClientWrapper({ 
  children,
  withHeader = true,
  withFooter = true 
}: { 
  children?: React.ReactNode;
  withHeader?: boolean;
  withFooter?: boolean;
}) {
  return (
    <>
      {withHeader && <Header />}
      {children}
      {withFooter && <Footer />}
    </>
  );
}
