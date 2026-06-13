import type { Metadata } from 'next';
import WhatItDoesClient from '../WhatItDoesClient';

export const metadata: Metadata = {
  title: 'the app that builds your skincare routine',
  description: 'tell nella what you own. she builds the AM and PM steps, flags the conflicts, and tells you what order to apply it in.',
  keywords: ['app that builds skincare routine'],
  alternates: {
    canonical: 'https://mynella.app/what-it-does/routines'
  }
};

export default function RoutinesPage() {
  return <WhatItDoesClient activeTab="routines" />;
}
