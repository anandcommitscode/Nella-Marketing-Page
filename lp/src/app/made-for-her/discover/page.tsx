import type { Metadata } from 'next';
import MadeForHerClient from '../MadeForHerClient';

export const metadata: Metadata = {
  title: 'the beauty companion for the woman who tries everything',
  description: 'her algorithm is a dangerous place. nella helps her figure out what actually works.',
  keywords: ['beauty companion app', 'skincare tracking app', 'new beauty product tracker'],
  alternates: {
    canonical: 'https://mynella.app/made-for-her/discover'
  }
};

export default function DiscoverPage() {
  return <MadeForHerClient activeTab="discover" />;
}
