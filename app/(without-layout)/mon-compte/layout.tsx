import type { Metadata } from "next";
import { roboto } from "@/app/ui/fonts";
import "@/app/ui/globals.css";
import { Header } from "@/app/ui/home/header";
import { Footer } from "@/app/ui/home/footer";

export const metadata: Metadata = {
  title: {
    template: '%s | KL Sophrologue',
    default: 'KL Sophrologue',
  },
  description: "Katia Lemaire, sophrologue à Noyal-Muzillac, vous accompagne dans votre démarche de bien-être.",
};

export default function ClientDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${roboto.className} antialiased bg-bgcolor-400`} suppressHydrationWarning={true}>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
