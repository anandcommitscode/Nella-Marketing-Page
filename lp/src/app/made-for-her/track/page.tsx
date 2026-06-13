import type { Metadata } from 'next';
import MadeForHerClient from '../MadeForHerClient';

export const metadata: Metadata = {
  title: 'the beauty appointment tracker for women',
  description: 'track your botox, nails, brows, and lasers. nella nudges you when you’re due and adds up what you’ve spent.',
  keywords: ['beauty appointment tracker'],
  alternates: {
    canonical: 'https://mynella.app/made-for-her/track'
  }
};

export default function TrackPage() {
  return <MadeForHerClient activeTab="track" />;
}
