import type { Metadata } from 'next';
import WhyNellaClient from './WhyNellaClient';

export const metadata: Metadata = {
  title: 'why nella exists',
  description: 'the manifesto logic behind nella. a clean thread for your beauty life, away from the noise and the endless consumption.',
  alternates: {
    canonical: 'https://mynella.app/why-nella'
  }
};

export default function WhyNellaPage() {
  return <WhyNellaClient />;
}
