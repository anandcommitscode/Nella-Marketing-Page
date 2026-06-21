import type { Metadata } from 'next';
import MadeForHerClient from '../MadeForHerClient';

export const metadata: Metadata = {
  title: 'the skincare routine tracker that strips back the noise',
  description: 'she has her routine, she has her clinic, and she knows what her skin likes. nella holds the line.',
  keywords: ['skincare routine tracker', 'skincare manager app', 'daily beauty routine app'],
  alternates: {
    canonical: 'https://mynella.app/made-for-her/refine'
  }
};

export default function RefinePage() {
  return <MadeForHerClient activeTab="refine" />;
}
