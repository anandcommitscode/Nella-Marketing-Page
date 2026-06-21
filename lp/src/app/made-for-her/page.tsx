import type { Metadata } from 'next';
import MadeForHerClient from './MadeForHerClient';

export const metadata: Metadata = {
  title: 'made for her: the women nella was built for',
  description: 'the woman who has forgotten when she last booked. the woman who built a routine and is not sure it is working. the woman who keeps trying new things.',
  keywords: ['beauty app for women', 'skincare app uk', 'treatment tracking app uk', 'beauty management app'],
  alternates: {
    canonical: 'https://mynella.app/made-for-her'
  }
};

export default function MadeForHerPage() {
  return <MadeForHerClient activeTab="hub" />;
}
