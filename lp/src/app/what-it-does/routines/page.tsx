import type { Metadata } from 'next';
import WhatItDoesClient from '../WhatItDoesClient';

export const metadata: Metadata = {
  title: 'the skincare routine app with intelligent conflict logic',
  description: 'tell nella your products and she builds your AM and PM. if your new peel conflicts with your retinol, nella pauses the conflict.',
  keywords: ['skincare routine app', 'skincare conflict checker', 'beauty routine manager'],
  alternates: {
    canonical: 'https://mynella.app/what-it-does/routines'
  }
};

export default function RoutinesPage() {
  return <WhatItDoesClient activeTab="routines" />;
}
