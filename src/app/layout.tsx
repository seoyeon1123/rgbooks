'use client';

import './styles/globals.css';
import './styles/Font.css';
import Header from '@/components/layout/Header';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Footer from '@/components/layout/Footer';

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="font-NEXON">
        <Header />
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <div className="mt-32">{children}</div>
          </RecoilRoot>
        </QueryClientProvider>
        <Footer />
      </body>
    </html>
  );
}
