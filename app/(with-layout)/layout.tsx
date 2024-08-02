'use client';

import type { Metadata } from 'next';
import { roboto } from '@/app/ui/fonts';
import '@/app/ui/globals.css';
import { Header } from '../ui/home/header';
import { Footer } from '../ui/home/footer';
import { ModalProvider } from '../lib/providers/modalProvider';
import ModalGeneric from '../ui/Modal';

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
  return (
    <ModalProvider>
      <html lang="fr">
        <body
          className={`${roboto.className} antialiased bg-bgcolor-400 flex flex-col items-center w-full h-screen relative`}
          suppressHydrationWarning={true}
        >
          <Header />
          {children}
          <Footer />
          <ModalGeneric />
        </body>
      </html>
    </ModalProvider>
  );
}
