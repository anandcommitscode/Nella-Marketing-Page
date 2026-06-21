import type { Metadata } from 'next';
import WaitlistClient from './WaitlistClient';

export const metadata: Metadata = {
  title: 'join the waitlist',
  description: 'nella launches in August 2026. reserve your slot today.',
  alternates: {
    canonical: 'https://mynella.app/waitlist'
  }
};

export default function WaitlistPage() {
  return <WaitlistClient />;
}
