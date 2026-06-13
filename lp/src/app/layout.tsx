import type { Metadata } from 'next';
import '../index.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: {
    template: '%s | nella',
    default: 'nella, the beauty intelligence app that remembers everything',
  },
  description: 'every treatment, every product, every cost, in one place. nella tracks your beauty life so you do not have to.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#FAF7F2] text-espresso selection:bg-light-gold selection:text-espresso overflow-x-hidden font-sans flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-[72px] min-h-[calc(100vh-72px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
