'use client';

import type { Metadata } from 'next';
import { roboto } from '@/app/ui/fonts';
import '@/app/ui/globals.css';
import { Header } from '../ui/home/header';
import { Footer } from '../ui/home/footer';
import { ModalProvider } from '../lib/providers/modalProvider';
import { usePathname } from 'next/navigation';
import FooterClient from '../ui/home/footer-client';
import { useEffect } from 'react';
import useScreenDetect from '../lib/hooks/screen-detect';
import AntThemeProvider from '../lib/providers/antThemeProvider';
import ModalGeneric from '../ui/modal';
import { Input } from 'antd';

// export const metadata: Metadata = {
//   title: {
//     template: '%s | KL Sophrologue',
//     default: 'KL Sophrologue',
//   },
//   description:
//     'Katia Lemaire, sophrologue à Noyal-Muzillac, vous accompagne dans votre démarche de bien-être.',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const urlPathName = usePathname();
  const isMobileSize = useScreenDetect();
  const extractMonCompte = urlPathName.split('/');
  const isMonComptePresent = extractMonCompte.includes('mon-compte');

  return (
    <ModalProvider>
      <AntThemeProvider>
        <html lang="fr">
          <body
            className={`${roboto.className} antialiased bg-bgcolor-400 flex flex-col items-center h-screen relative`}
            suppressHydrationWarning={true}
          >
            {/* {isMonComptePresent && isMobileSize ? null : <Header />} */}
            <Header />
            {children}
            {isMonComptePresent && isMobileSize ? <FooterClient /> : <Footer />}
            <ModalGeneric />
          </body>
        </html>
      </AntThemeProvider>
    </ModalProvider>
  );
}
