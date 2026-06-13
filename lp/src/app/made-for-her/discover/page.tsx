import type { Metadata } from 'next';
import MadeForHerClient from '../MadeForHerClient';

export const metadata: Metadata = {
  title: 'the beauty and skincare app for women',
  description: 'track your skin boosters, viral masks, and new actives. nella connects the things you try to the results you see.',
  keywords: ['beauty and skincare app'],
  alternates: {
    canonical: 'https://mynella.app/made-for-her/discover'
  }
};

export default function DiscoverPage() {
  return <MadeForHerClient activeTab="discover" />;
}
