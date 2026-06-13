import { createClient } from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_WRITE_TOKEN;

if (!projectId || projectId === 'your-project-id') {
  console.error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID in environment variables");
  process.exit(1);
}

if (!token) {
  console.error("Missing SANITY_WRITE_TOKEN in environment variables. Please create one with editor/writer permissions in your Sanity project.");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2026-06-01',
  useCdn: false,
  token,
});

const audiences = [
  {
    _type: 'audience',
    name: 'the organiser',
    slug: { _type: 'slug', current: 'organiser' },
    title: 'for the woman who has forgotten when she last booked.',
    subheading: 'your nails, your brows, your botox, your hair. nella keeps the diary you should have been keeping.',
    cardBg: 'espresso',
    benefit1Title: 'every treatment in one place.',
    benefit1Body: 'injectables, facials, hair, nails, brows, lashes, body. log it once, see it forever.',
    benefit2Title: 'reminders that actually fit you.',
    benefit2Body: 'every treatment has its own cycle. nella knows when your nails are due in three weeks and your botox is due in twelve. you get told, not asked.',
    benefit3Title: 'spending that adds up properly.',
    benefit3Body: 'how much you spent this month, this quarter, this year. by category.',
    testimonialQuote: 'i used to forget when my brows were due. now nella tells me before i remember to look.',
    testimonialAuthor: 'rachel, 32',
    seoTitle: 'the beauty app that finally remembers it all',
    seoDescription: 'your nails, your botox, your highlights, your brows. nella tracks them so you do not have to.',
  },
  {
    _type: 'audience',
    name: 'the ritualist',
    slug: { _type: 'slug', current: 'ritualist' },
    title: 'you\'ve built the routine. you\'re not sure it\'s working.',
    subheading: 'AM, PM, actives, conflicts, consistency. nella tells you whether the work is paying off.',
    cardBg: 'blush',
    benefit1Title: 'a routine that orders itself.',
    benefit1Body: 'AM and PM, in the right order, every time. cleanser, toner, actives, hydration, SPF. nella knows the order. you don\'t have to.',
    benefit2Title: 'conflicts already sorted.',
    benefit2Body: 'retinol and vitamin C, AHA and BHA, niacinamide and acid. nella knows which actives fight, which ones pause when, and which ones are safe to keep going.',
    benefit3Title: 'a score that tells you the truth.',
    benefit3Body: 'it moves with your routine consistency, your treatments, your check-ins, and how your skin is trending. a number you can trust because it\'s built from what you actually do.',
    testimonialQuote: 'i finally know what is doing the work in my routine and what is just sitting there.',
    testimonialAuthor: 'priya, 28',
    seoTitle: 'the routine app that knows what fights what',
    seoDescription: 'retinol, vitamin C, AHA, BHA. nella holds your routine and the conflicts, so you finally know if it is working.',
  },
  {
    _type: 'audience',
    name: 'the explorer',
    slug: { _type: 'slug', current: 'explorer' },
    title: 'for the woman who is committed.',
    subheading: 'skin boosters in march, polynucleotides in september, microneedling somewhere in between. you have invested. nella holds the record so you know what worked, what it cost, and what to do next.',
    cardBg: 'cream',
    benefit1Title: 'a record that holds everything.',
    benefit1Body: 'clinic, cost, rating, notes, photos, your honest opinion. so when someone asks where you got the thing that worked, you actually know.',
    benefit2Title: 'aftercare that runs itself.',
    benefit2Body: 'log microneedling and nella starts the seven-day plan. log botox and the rules update. you do not have to remember anything.',
    benefit3Title: 'compare what is actually working.',
    benefit3Body: 'which treatments are worth the money, which clinics deliver, which months you spend the most.',
    testimonialQuote: 'i did the research, booked the right clinic, paid the £180. nella made sure day three did not undo any of it.',
    testimonialAuthor: 'hannah, 35',
    seoTitle: 'the aftercare app for the woman who is properly in',
    seoDescription: 'skin boosters, polynucleotides, microneedling. nella holds the record and runs the aftercare so the money you spent does the work it is meant to.',
  }
];

async function seed() {
  console.log('Starting seed process for LPs (Audiences)...');
  
  for (const audience of audiences) {
    try {
      console.log(`Seeding ${audience.name}...`);
      const result = await client.createOrReplace({
        _id: `audience-${audience.slug.current}`,
        ...audience
      });
      console.log(`✅ Successfully seeded ${audience.name} (ID: ${result._id})`);
    } catch (error) {
      console.error(`❌ Failed to seed ${audience.name}:`, error.message);
    }
  }
  
  console.log('Finished seeding LP data.');
}

seed();
