
import React from 'react';
import { Button } from '../ui/button';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  published: boolean;
  tags: string[] | null;
  created_at: string;
  updated_at: string;
}

interface BlogPostListProps {
  posts: BlogPost[];
  onEdit: (post: BlogPost) => void;
  onDelete: (postId: string) => void;
}

const BlogPostList: React.FC<BlogPostListProps> = ({ posts, onEdit, onDelete }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="space-y-4">
      <h2 className="font-glitch text-2xl text-white mb-6">POSTS</h2>
      
      {posts.length === 0 ? (
        <div className="border border-white/20 p-6 text-center">
          <p className="font-mono text-white/70">No posts yet. Create your first post!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="border border-white/20 p-6 hover:border-cyberpunk-green transition-colors"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <h3 className="font-glitch text-xl text-white">{post.title}</h3>
                    <span
                      className={`px-2 py-1 text-xs font-mono ${
                        post.published
                          ? 'bg-cyberpunk-green text-black'
                          : 'bg-white/20 text-white'
                      }`}
                    >
                      {post.published ? 'PUBLISHED' : 'DRAFT'}
                    </span>
                  </div>
                  
                  {post.tags && post.tags.length > 0 && (
                    <div className="mb-2">
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
                    <p className="font-mono text-white/80 mb-2">{post.excerpt}</p>
                  )}
                  
                  <div className="flex items-center space-x-4 text-xs font-mono text-white/60">
                    <span>Created: {formatDate(post.created_at)}</span>
                    <span>Updated: {formatDate(post.updated_at)}</span>
                    <span>Slug: /{post.slug}</span>
                  </div>
                </div>
                
                <div className="flex space-x-2 ml-4">
                  <Button
                    onClick={() => onEdit(post)}
                    variant="outline"
                    size="sm"
                    className="font-mono border-white/20 text-white hover:bg-white/10"
                  >
                    EDIT
                  </Button>
                  <Button
                    onClick={() => onDelete(post.id)}
                    variant="outline"
                    size="sm"
                    className="font-mono border-cyberpunk-red text-cyberpunk-red hover:bg-cyberpunk-red/10"
                  >
                    DELETE
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogPostList;
