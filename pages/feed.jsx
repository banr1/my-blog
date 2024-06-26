import { getAllPages } from '@/lib/notion';
import { generateRss } from '@/lib/rss';

export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'text/xml');
  const posts = await getAllPages({ allowedTypes: ['Post'] });
  const latestPosts = posts.slice(0, 10);
  const xmlFeed = await generateRss(latestPosts);
  res.write(xmlFeed);
  res.end();
  return {
    props: {},
  };
}

const feed = () => null;

export default feed;
