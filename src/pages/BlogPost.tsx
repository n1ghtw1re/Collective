
import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { getPostBySlug, type BlogPost as BlogPostType } from '../utils/blogApi';
import SecureMarkdownRenderer from '../utils/secureMarkdownRenderer';
import { formatDate } from '../utils/dateUtils';
import LoadingSpinner from '../components/ui/LoadingSpinner';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const loadPost = async () => {
      if (!id) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      try {
        const fetchedPost = await getPostBySlug(id);
        if (fetchedPost) {
          setPost(fetchedPost);
        } else {
          setNotFound(true);
        }
      } catch (error) {
        console.error('Failed to load blog post:', error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [id]);

  if (loading) {
    return (
      <>
        <SEO
          title="Loading Dispatch"
          description="Loading N1GHTW1RE dispatch..."
          canonicalUrl={`/blog/${id}`}
        />
        <Layout>
          <div className="container mx-auto px-4 py-16">
            <LoadingSpinner message="Loading dispatch..." />
          </div>
        </Layout>
      </>
    );
  }

  if (notFound || !post) {
    return <Navigate to="/404" replace />;
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt || post.title,
    "image": "https://lovable.dev/opengraph-image-p98pqg.png",
    "url": `https://n1ghtw1re.neocities.org/blog/${post.slug}`,
    "datePublished": post.created_at,
    "dateModified": post.updated_at || post.created_at,
    "author": {
      "@type": "Organization",
      "name": "N1GHTW1RE Collective",
      "url": "https://n1ghtw1re.neocities.org"
    },
    "publisher": {
      "@type": "Organization",
      "name": "N1GHTW1RE",
      "logo": {
        "@type": "ImageObject",
        "url": "https://lovable.dev/opengraph-image-p98pqg.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://n1ghtw1re.neocities.org/blog/${post.slug}`
    },
    "keywords": post.tags?.join(', ') || "digital resistance, cyberpunk, privacy, technology",
    "articleSection": "Digital Resistance"
  };

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt || `${post.title} - A dispatch from the N1GHTW1RE collective on digital resistance and technology.`}
        canonicalUrl={`/blog/${post.slug}`}
        ogType="article"
        publishedTime={post.created_at}
        modifiedTime={post.updated_at}
        tags={post.tags}
        structuredData={structuredData}
      />
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <article className="max-w-3xl mx-auto">
            <header className="mb-12">
              <h1 className="font-glitch text-3xl md:text-4xl text-cyberpunk-green mb-6">
                {post.title}
              </h1>
              
              <div className="flex items-center space-x-4 mb-6">
                <time 
                  dateTime={post.created_at}
                  className="font-mono text-sm text-white/60"
                >
                  {formatDate(post.created_at)}
                </time>
              </div>
              
              {post.tags && post.tags.length > 0 && (
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm font-mono bg-white/10 text-cyberpunk-green border border-cyberpunk-green/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {post.excerpt && (
                <p className="font-mono text-lg text-white/90 border-l-2 border-cyberpunk-green pl-4">
                  {post.excerpt}
                </p>
              )}
            </header>
            
            <div className="border-t border-white/20 pt-8">
              <SecureMarkdownRenderer content={post.content} />
            </div>
          </article>
        </div>
      </Layout>
    </>
  );
};

export default BlogPost;
