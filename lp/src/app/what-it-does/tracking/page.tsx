import type { Metadata } from 'next';
import WhatItDoesClient from '../WhatItDoesClient';

export const metadata: Metadata = {
  title: 'the beauty treatment tracker that remembers so you don\'t have to',
  description: 'your botox, your nails, your facials. every treatment logged with the date, the clinic, the provider, and the cost.',
  keywords: ['beauty treatment tracker', 'botox app', 'aesthetic treatment log', 'beauty record app'],
  alternates: {
    canonical: 'https://mynella.app/what-it-does/tracking'
  }
};

export default function TrackingPage() {
  return <WhatItDoesClient activeTab="tracking" />;
}
