import type { Metadata } from 'next';
import WhatItDoesClient from './WhatItDoesClient';

export const metadata: Metadata = {
  title: 'the beauty management app that actually thinks',
  description: 'your treatments logged. your routines conflict-checked. your aftercare automated. four things, done properly.',
  keywords: ['beauty management app', 'beauty tracking system', 'beauty analytics app', 'smart skincare app'],
  alternates: {
    canonical: 'https://mynella.app/what-it-does'
  }
};

export default function WhatItDoesPage() {
  return <WhatItDoesClient activeTab="hub" />;
}
