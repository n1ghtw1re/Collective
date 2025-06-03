// generate-sitemap.js
// Usage: node generate-sitemap.js
// This script fetches all published blog slugs from Supabase and generates sitemap.xml including static and dynamic pages.

const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

// --- CONFIG ---
const SITE_URL = 'https://n1ghtw1re.com';
const SITEMAP_PATH = path.join(__dirname, 'public', 'sitemap.xml');
const SUPABASE_URL = 'https://jrkhqqafpkykgribayzq.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impya2hxcWFmcGt5a2dyaWJheXpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxNDk4MjAsImV4cCI6MjA2MzcyNTgyMH0.Ecc0mLS1ACy4xK_bKM1LULHHa3PqDAV2J3aT2PLkmCs';

const STATIC_PATHS = [
  '/',
  '/about',
  '/collective',
  '/tools',
  '/manifesto',
  '/blog',
  '/sys-news',
  '/admin',
  '/privacy',
  '/terms',
  '/cookies',
];

async function main() {
  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  // Fetch all published blog posts
  const { data: posts, error } = await supabase
    .from('blog_posts')
    .select('slug')
    .eq('published', true);

  if (error) {
    console.error('Error fetching blog posts from Supabase:', error);
    process.exit(1);
  }

  // Build XML
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  for (const path of STATIC_PATHS) {
    xml += `  <url><loc>${SITE_URL}${path}</loc></url>\n`;
  }
  if (posts) {
    for (const post of posts) {
      xml += `  <url><loc>${SITE_URL}/blog/${post.slug}</loc></url>\n`;
    }
  }
  xml += '</urlset>\n';

  fs.writeFileSync(SITEMAP_PATH, xml, 'utf8');
  console.log('Sitemap generated with', STATIC_PATHS.length + (posts ? posts.length : 0), 'URLs.');
}

main();
