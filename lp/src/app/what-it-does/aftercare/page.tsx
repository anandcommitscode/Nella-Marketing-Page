import type { Metadata } from 'next';
import WhatItDoesClient from '../WhatItDoesClient';

export const metadata: Metadata = {
  title: 'the cosmetic aftercare app that runs itself',
  description: 'log a treatment and nella automatically loads your day-by-day aftercare. what to do, what to pause, and when to start again.',
  keywords: ['cosmetic aftercare app', 'botox aftercare tracker', 'microneedling aftercare', 'aesthetic recovery'],
  alternates: {
    canonical: 'https://mynella.app/what-it-does/aftercare'
  }
};

export default function AftercarePage() {
  return <WhatItDoesClient activeTab="aftercare" />;
}
