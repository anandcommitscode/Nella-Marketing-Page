import type { Metadata } from 'next';
import StoryClient from './StoryClient';

export const metadata: Metadata = {
  title: 'our story: why nella exists',
  description: 'every woman has her people. her hair girl, her brow girl, her aesthetics nurse. nella exists because none of them held the whole picture. until now.',
  keywords: ['nella founder story', 'mynella ltd founder', 'beauty app uk story'],
  alternates: {
    canonical: 'https://mynella.app/about/story'
  }
};

export default function AboutStoryPage() {
  return <StoryClient />;
}
