import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'nella, the beauty intelligence app that remembers everything',
  description: 'every treatment, every product, every cost, in one place. nella tracks your beauty life so you do not have to.',
  keywords: ['beauty tracking app', 'skincare routine app', 'treatment tracker', 'aftercare app', 'beauty intelligence'],
  alternates: {
    canonical: 'https://mynella.app/'
  }
};

export default function Page() {
  return <HomeClient />;
}
