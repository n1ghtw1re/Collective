import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { supabase } from '../../integrations/supabase/client';
import BlogPostEditor from './BlogPostEditor';
import BlogPostList from './BlogPostList';

interface AdminDashboardProps {
  onLogout: () => void;
}

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

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [showEditor, setShowEditor] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Failed to fetch posts:', error);
        return;
      }
      
      setPosts(data || []);
    } catch (error) {
      console.error('Failed to fetch posts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleNewPost = () => {
    setSelectedPost(null);
    setShowEditor(true);
  };

  const handleEditPost = (post: BlogPost) => {
    setSelectedPost(post);
    setShowEditor(true);
  };

  const handleSavePost = () => {
    fetchPosts();
    setShowEditor(false);
    setSelectedPost(null);
  };

  const handleDeletePost = async (postId: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', postId);
      
      if (error) {
        console.error('Failed to delete post:', error);
        return;
      }
      
      fetchPosts();
    } catch (error) {
      console.error('Failed to delete post:', error);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    onLogout();
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-cyberpunk-green border-r-transparent"></div>
          <p className="font-mono text-white/70 mt-4">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-glitch text-4xl text-cyberpunk-green">
            BLOG ADMIN
          </h1>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="font-mono border-white/20 text-white hover:bg-white/10"
          >
            LOGOUT
          </Button>
        </div>

        {showEditor ? (
          <BlogPostEditor
            post={selectedPost}
            onSave={handleSavePost}
            onCancel={() => setShowEditor(false)}
          />
        ) : (
          <div>
            <div className="mb-6">
              <Button
                onClick={handleNewPost}
                className="font-mono bg-cyberpunk-green text-black hover:bg-cyberpunk-green/80"
              >
                NEW POST
              </Button>
            </div>
            
            <BlogPostList
              posts={posts}
              onEdit={handleEditPost}
              onDelete={handleDeletePost}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
