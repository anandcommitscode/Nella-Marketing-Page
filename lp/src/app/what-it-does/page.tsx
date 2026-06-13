import type { Metadata } from 'next';
import WhatItDoesClient from './WhatItDoesClient';

export const metadata: Metadata = {
  title: 'the only beauty app that tracks everything',
  description: 'track your spend, arrange your routine, get alerts when treatments are due, and see what is actually working.',
  keywords: ['beauty app'],
  alternates: {
    canonical: 'https://mynella.app/what-it-does'
  }
};

export default function WhatItDoesPage() {
  return <WhatItDoesClient activeTab="hub" />;
}
