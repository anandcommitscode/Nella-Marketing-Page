import type { Metadata } from 'next';
import MadeForHerClient from '../MadeForHerClient';

export const metadata: Metadata = {
  title: 'the skincare routine tracker for women',
  description: 'track your actives, space your retinol, and finally see which products actually change your skin.',
  keywords: ['skincare routine tracker'],
  alternates: {
    canonical: 'https://mynella.app/made-for-her/refine'
  }
};

export default function RefinePage() {
  return <MadeForHerClient activeTab="refine" />;
}
