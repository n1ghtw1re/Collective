
import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import { getPublishedPostsByTag, type BlogPost } from '../utils/blogApi';
import { Input } from '../components/ui/input';
import { Search } from 'lucide-react';
import { useDebounce } from '../hooks/useDebounce';
import LoadingSpinner from '../components/ui/LoadingSpinner';

const SysNews = () => {
  const [sysLogPosts, setSysLogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    const loadSysLogPosts = async () => {
      try {
        setError(null);
        const posts = await getPublishedPostsByTag('sys_log');
        setSysLogPosts(posts);
      } catch (error) {
        console.error('Failed to load sys_log posts:', error);
        setError('Failed to load system logs. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadSysLogPosts();
  }, []);

  const filteredPosts = sysLogPosts.filter(post => {
    if (!debouncedSearchTerm.trim()) return true;
    const searchTermLower = debouncedSearchTerm.toLowerCase();
    return (
      post.title.toLowerCase().includes(searchTermLower) ||
      (post.excerpt && post.excerpt.toLowerCase().includes(searchTermLower)) ||
      post.content.toLowerCase().includes(searchTermLower)
    );
  });

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <LoadingSpinner message="Loading system logs..." />
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="font-glitch text-2xl text-cyberpunk-red mb-4">SYSTEM ERROR</h1>
            <p className="font-mono text-white/80">{error}</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black border border-cyberpunk-green p-6 font-mono mb-8">
            <div className="text-cyberpunk-green mb-4">
              <span className="text-white">SYSTEM:</span> SYS_NEWS_ARCHIVE
            </div>
            <div className="text-cyberpunk-green mb-4">
              {'>'} Displaying all system logs and status updates
            </div>
            <div className="text-cyberpunk-green">
              {'>'} Total entries: {sysLogPosts.length}
            </div>
          </div>

          {/* Search */}
          <div className="mb-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-5 w-5 text-white/50" />
              </div>
              <Input
                type="text"
                placeholder="Search system logs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 font-mono bg-black/30 border-white/20 focus:border-cyberpunk-green text-white placeholder:text-white/40"
              />
            </div>
          </div>

          {/* Posts */}
          <div className="space-y-6">
            {filteredPosts.length === 0 ? (
              <div className="bg-black border border-cyberpunk-green p-6 font-mono">
                <div className="text-cyberpunk-green">
                  {'>'} No system logs found{searchTerm && ' matching your search'}
                </div>
              </div>
            ) : (
              filteredPosts.map((post) => (
                <div key={post.id} className="bg-black border border-cyberpunk-green p-6 font-mono">
                  <div className="text-cyberpunk-green mb-2">
                    <span className="text-white">LOG_ENTRY:</span> {post.created_at}
                  </div>
                  <div className="text-cyberpunk-green mb-2">
                    <span className="text-white">TITLE:</span> {post.title}
                  </div>
                  {post.excerpt && (
                    <div className="text-cyberpunk-green">
                      {'>'} {post.excerpt}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          <div className="bg-black border border-cyberpunk-green p-6 font-mono mt-8">
            <div className="text-cyberpunk-green">
              {'>'} END OF ARCHIVE
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SysNews;
