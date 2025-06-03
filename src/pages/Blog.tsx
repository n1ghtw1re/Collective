import React, { useEffect, useState, useMemo } from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { getPublishedPostsExcludingSysLog, type BlogPost } from '../utils/blogApi';
import AccessibleSearch from '../components/ui/AccessibleSearch';
import { X } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useDebounce } from '../hooks/useDebounce';
import { formatDate } from '../utils/dateUtils';
import LoadingSpinner from '../components/ui/LoadingSpinner';

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setError(null);
        const publishedPosts = await getPublishedPostsExcludingSysLog();
        setPosts(publishedPosts);
      } catch (error) {
        console.error('Failed to load blog posts:', error);
        setError('Failed to load dispatches. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  const { filteredPosts, availableTags } = useMemo(() => {
    let filtered = posts;

    if (debouncedSearchTerm.trim() !== '') {
      const searchTermLower = debouncedSearchTerm.toLowerCase();
      filtered = filtered.filter((post) => {
        return post.title.toLowerCase().includes(searchTermLower) ||
               (post.excerpt && post.excerpt.toLowerCase().includes(searchTermLower)) ||
               post.content.toLowerCase().includes(searchTermLower) ||
               (post.tags && post.tags.some(tag => tag.toLowerCase().includes(searchTermLower)));
      });
    }

    if (selectedTag) {
      filtered = filtered.filter(post => 
        post.tags && post.tags.includes(selectedTag)
      );
    }

    const allTags = posts
      .flatMap(post => post.tags || [])
      .filter((tag, index, arr) => arr.indexOf(tag) === index && tag !== 'sys_log')
      .sort();

    return { filteredPosts: filtered, availableTags: allTags };
  }, [posts, debouncedSearchTerm, selectedTag]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTag(null);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "N1GHTW1RE Dispatches",
    "description": "Reports from the frontlines of digital resistance. Analysis, tutorials, philosophy, and tactical information from the N1ghtw1re collective.",
    "url": "https://n1ghtw1re.neocities.org/blog",
    "author": {
      "@type": "Organization",
      "name": "N1GHTW1RE Collective"
    },
    "blogPost": posts.slice(0, 10).map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt || post.title,
      "url": `https://n1ghtw1re.neocities.org/blog/${post.slug}`,
      "datePublished": post.created_at,
      "author": {
        "@type": "Organization",
        "name": "N1GHTW1RE Collective"
      }
    }))
  };

  if (loading) {
    return (
      <>
        <SEO
          title="Loading Dispatches"
          description="Loading N1GHTW1RE dispatches..."
          canonicalUrl="/blog"
        />
        <Layout>
          <div className="container mx-auto px-4 py-16">
            <LoadingSpinner message="Loading dispatches..." />
          </div>
        </Layout>
      </>
    );
  }

  if (error) {
    return (
      <>
        <SEO
          title="Error Loading Dispatches"
          description="Error loading N1GHTW1RE dispatches"
          canonicalUrl="/blog"
        />
        <Layout>
          <div className="container mx-auto px-4 py-16">
            <div className="text-center">
              <h1 className="font-glitch text-2xl text-cyberpunk-red mb-4">ERROR</h1>
              <p className="font-mono text-white/80 mb-4">{error}</p>
              <Button 
                onClick={() => window.location.reload()}
                className="font-mono bg-cyberpunk-green text-black"
              >
                RETRY
              </Button>
            </div>
          </div>
        </Layout>
      </>
    );
  }

  return (
    <>
      <SEO
        title="Dispatches - Digital Resistance Reports"
        description="Reports from the frontlines of digital resistance. Analysis, tutorials, philosophy, and tactical information from the N1ghtw1re collective fighting surveillance capitalism and digital oppression."
        canonicalUrl="/blog"
        ogType="website"
        structuredData={structuredData}
      />
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto">
            <h1 className="font-glitch text-4xl md:text-5xl text-cyberpunk-green mb-8">DISPATCHES</h1>
            
            <p className="font-mono text-white/90 mb-8 max-w-3xl">
              Reports from the frontlines of digital resistance. Analysis, tutorials, philosophy, and tactical information from the N1ghtw1re collective.
            </p>
            
            <div className="space-y-4 mb-8">
              <AccessibleSearch
                onSearch={setSearchTerm}
                value={searchTerm}
                placeholder="Search dispatches..."
                aria-label="Search blog dispatches"
                className="w-full"
              />
              
              {availableTags.length > 0 && (
                <div>
                  <h2 className="font-mono text-white/80 text-sm mb-2">Filter by topic:</h2>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {availableTags.map((tag) => (
                      <Button
                        key={tag}
                        onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                        variant="outline"
                        size="sm"
                        className={`font-mono text-xs focus:ring-2 focus:ring-cyberpunk-green focus:ring-opacity-50 ${
                          selectedTag === tag
                            ? 'bg-cyberpunk-green text-black border-cyberpunk-green'
                            : 'border-white/20 text-white hover:bg-white/10'
                        }`}
                        aria-pressed={selectedTag === tag}
                      >
                        {tag}
                      </Button>
                    ))}
                  </div>
                  
                  {(searchTerm || selectedTag) && (
                    <Button
                      onClick={clearFilters}
                      variant="outline"
                      size="sm"
                      className="font-mono text-xs border-white/20 text-white/70 hover:bg-white/10 focus:ring-2 focus:ring-cyberpunk-green focus:ring-opacity-50"
                      aria-label="Clear all filters"
                    >
                      <X className="h-3 w-3 mr-1" />
                      Clear Filters
                    </Button>
                  )}
                </div>
              )}
            </div>
            
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12 border border-white/20 p-6" role="status">
                <p className="font-mono text-white/70">
                  {posts.length === 0 
                    ? 'No dispatches published yet.' 
                    : `No dispatches found matching "${searchTerm || selectedTag}".`}
                </p>
                {(searchTerm || selectedTag) && (
                  <Button
                    onClick={clearFilters}
                    className="mt-4 font-mono bg-cyberpunk-green text-black"
                  >
                    Show All Dispatches
                  </Button>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {filteredPosts.map(post => (
                  <article 
                    key={post.id} 
                    className="border border-white/20 p-6 hover:border-cyberpunk-green transition-colors h-fit focus-within:ring-2 focus-within:ring-cyberpunk-green focus-within:ring-opacity-50"
                  >
                    <h2 className="font-glitch text-xl text-white mb-3">
                      <Link 
                        to={`/blog/${post.slug}`} 
                        className="hover:text-cyberpunk-green transition-colors focus:outline-none focus:text-cyberpunk-green"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    
                    <div className="flex items-center space-x-4 mb-4">
                      <time 
                        dateTime={post.created_at}
                        className="font-mono text-xs text-white/60"
                      >
                        {formatDate(post.created_at, 'short')}
                      </time>
                    </div>
                    
                    {post.tags && post.tags.length > 0 && (
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {post.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 text-xs font-mono bg-white/10 text-cyberpunk-green border border-cyberpunk-green/30"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {post.excerpt && (
                      <p className="font-mono text-white/90 mb-4">
                        {post.excerpt}
                      </p>
                    )}
                    
                    <Link
                      to={`/blog/${post.slug}`}
                      className="font-mono text-cyberpunk-green hover:underline focus:outline-none focus:underline"
                    >
                      READ FULL DISPATCH →
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Blog;
