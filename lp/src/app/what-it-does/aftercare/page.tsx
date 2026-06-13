import type { Metadata } from 'next';
import WhatItDoesClient from '../WhatItDoesClient';

export const metadata: Metadata = {
  title: 'the beauty aftercare app',
  description: 'log a treatment and nella builds your recovery plan. automatic pauses for retinol and acids so you heal properly.',
  keywords: ['beauty aftercare app'],
  alternates: {
    canonical: 'https://mynella.app/what-it-does/aftercare'
  }
};

export default function AftercarePage() {
  return <WhatItDoesClient activeTab="aftercare" />;
}
