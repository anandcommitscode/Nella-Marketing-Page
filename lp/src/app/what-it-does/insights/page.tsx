import type { Metadata } from 'next';
import WhatItDoesClient from '../WhatItDoesClient';

export const metadata: Metadata = {
  title: 'beauty analytics and spend tracking',
  description: 'your daily score, your monthly wrap, and your all-time spend. see exactly what your beauty life costs and what is actually returning.',
  keywords: ['beauty analytics', 'beauty spend tracker', 'glow score app', 'cosmetic investment tracker'],
  alternates: {
    canonical: 'https://mynella.app/what-it-does/insights'
  }
};

export default function InsightsPage() {
  return <WhatItDoesClient activeTab="insights" />;
}
