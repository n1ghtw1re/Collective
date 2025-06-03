import { supabase } from '../integrations/supabase/client';

export interface BlogPost {
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

// Get published blog posts for public viewing
export const getPublishedPosts = async (): Promise<BlogPost[]> => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching published posts:', error);
    throw error;
  }

  return data || [];
};

// Get published blog posts excluding sys_log posts (for dispatches page)
export const getPublishedPostsExcludingSysLog = async (): Promise<BlogPost[]> => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('published', true)
    .not('tags', 'cs', '{"sys_log"}')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching published posts excluding sys_log:', error);
    throw error;
  }

  return data || [];
};

// Get published blog posts by tag
export const getPublishedPostsByTag = async (tag: string): Promise<BlogPost[]> => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('published', true)
    .contains('tags', [tag])
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching posts by tag:', error);
    throw error;
  }

  return data || [];
};

// Get a single published post by slug
export const getPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single();

  if (error) {
    if (error.code === 'PGRST116') {
      // No rows returned
      return null;
    }
    console.error('Error fetching post by slug:', error);
    throw error;
  }

  return data;
};

// Get all published posts with optional tag filter
export const getPublishedPostsWithFilter = async (tag?: string): Promise<BlogPost[]> => {
  let query = supabase
    .from('blog_posts')
    .select('*')
    .eq('published', true);

  if (tag) {
    query = query.contains('tags', [tag]);
  }

  const { data, error } = await query.order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching filtered posts:', error);
    throw error;
  }

  return data || [];
};
