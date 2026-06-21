import type { Metadata } from 'next';
import WhyNellaClient from './WhyNellaClient';

export const metadata: Metadata = {
  title: 'why nella | the digital skin lab',
  description: 'your beauty drawer is chaos. your clinic visits are unconnected. why we built the first system that remembers everything about your skin.',
  keywords: ['beauty intelligence app', 'beauty companion app', 'beauty record app', 'beauty manager app'],
  alternates: {
    canonical: 'https://mynella.app/why-nella'
  }
};

export default function WhyNellaPage() {
  return <WhyNellaClient />;
}
