import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Oyengroup - Innovation & Excellence',
  description: 'Welcome to Oyengroup. We deliver innovative solutions and exceptional service.',
  keywords: 'consulting, development, digital transformation, support',
  authors: [{ name: 'Oyengroup' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased flex flex-col min-h-screen bg-white text-gray-900">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
