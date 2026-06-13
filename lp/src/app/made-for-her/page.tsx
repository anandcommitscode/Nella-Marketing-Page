import type { Metadata } from 'next';
import MadeForHerClient from './MadeForHerClient';

export const metadata: Metadata = {
  title: 'who is nella for? the beauty tracking app for women',
  description: 'whether you track everything, refine a core routine, or try every new product, nella is built to hold the mental load of your beauty life.',
  keywords: ['beauty tracking app'],
  alternates: {
    canonical: 'https://mynella.app/made-for-her'
  }
};

export default function MadeForHerPage() {
  return <MadeForHerClient activeTab="hub" />;
}
