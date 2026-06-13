import type { Metadata } from 'next';
import WhatItDoesClient from '../WhatItDoesClient';

export const metadata: Metadata = {
  title: 'the app that tracks your skin progress',
  description: 'track your daily glow score against the products you use. see your true beauty spend by month, clinic, and treatment.',
  keywords: ['track skin progress'],
  alternates: {
    canonical: 'https://mynella.app/what-it-does/insights'
  }
};

export default function InsightsPage() {
  return <WhatItDoesClient activeTab="insights" />;
}
