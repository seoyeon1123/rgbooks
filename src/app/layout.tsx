'use client';

import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import { RecoilRoot } from 'recoil';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <RecoilRoot>{children}</RecoilRoot>
      </body>
    </html>
  );
}
