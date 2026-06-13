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

const audienceIds = [
  'audience-organiser',
  'audience-ritualist',
  'audience-explorer'
];

async function clean() {
  console.log('Starting cleanup process for LP (Audience) data...');
  
  for (const id of audienceIds) {
    try {
      console.log(`Deleting document with ID: ${id}...`);
      await client.delete(id);
      console.log(`✅ Successfully deleted ${id}`);
    } catch (error) {
      if (error.statusCode === 404) {
        console.log(`ℹ️ Document ${id} not found (already deleted)`);
      } else {
        console.error(`❌ Failed to delete ${id}:`, error.message);
      }
    }
  }
  
  console.log('Finished cleaning LP data.');
}

clean();
