
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPublishedPostsByTag, type BlogPost } from '../../utils/blogApi';

const SysNews = () => {
  const [sysLogPosts, setSysLogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSysLogPosts = async () => {
      try {
        const posts = await getPublishedPostsByTag('sys_log');
        setSysLogPosts(posts.slice(0, 5)); // Limit to 5 posts
      } catch (error) {
        console.error('Failed to load sys_log posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadSysLogPosts();
  }, []);

  if (loading) {
    return (
      <div className="bg-black border border-cyberpunk-green p-6 font-mono">
        <div className="text-cyberpunk-green mb-4">
          <span className="text-white">SYSTEM:</span> SYS_NEWS
        </div>
        <div className="text-cyberpunk-green">
          {'>'} Loading system logs...
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black border border-cyberpunk-green p-6 font-mono">
      <div className="text-cyberpunk-green mb-4">
        <span className="text-white">SYSTEM:</span> SYS_NEWS
      </div>
      
      <div className="space-y-2">
        {sysLogPosts.length === 0 ? (
          <div className="text-cyberpunk-green">
            {'>'} No system logs found
          </div>
        ) : (
          sysLogPosts.map((post) => (
            <div key={post.id} className="text-cyberpunk-green">
              {post.excerpt || 'No excerpt available'}
            </div>
          ))
        )}
      </div>
      
      <div className="mt-4 space-y-2">
        <div className="text-cyberpunk-green">
          {'>'} END OF TRANSMISSION
        </div>
        <Link 
          to="/sys-news" 
          className="inline-block text-cyberpunk-green hover:text-white transition-colors border border-cyberpunk-green px-3 py-1 text-sm"
        >
          {'>'} READ MORE LOGS
        </Link>
      </div>
    </div>
  );
};

export default SysNews;
