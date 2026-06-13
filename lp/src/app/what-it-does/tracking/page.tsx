import type { Metadata } from 'next';
import WhatItDoesClient from '../WhatItDoesClient';

export const metadata: Metadata = {
  title: 'the app that tracks your beauty treatments',
  description: 'log your injectables, facials, hair, and nails. see your true spend and get nudged when your next appointment is due.',
  keywords: ['track beauty treatments'],
  alternates: {
    canonical: 'https://mynella.app/what-it-does/tracking'
  }
};

export default function TrackingPage() {
  return <WhatItDoesClient activeTab="tracking" />;
}
