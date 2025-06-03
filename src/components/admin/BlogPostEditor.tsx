
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { supabase } from '../../integrations/supabase/client';

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

interface BlogPostEditorProps {
  post: BlogPost | null;
  onSave: () => void;
  onCancel: () => void;
}

const BlogPostEditor: React.FC<BlogPostEditorProps> = ({ post, onSave, onCancel }) => {
  const [title, setTitle] = useState(post?.title || '');
  const [content, setContent] = useState(post?.content || '');
  const [excerpt, setExcerpt] = useState(post?.excerpt || '');
  const [slug, setSlug] = useState(post?.slug || '');
  const [published, setPublished] = useState(post?.published || false);
  const [tags, setTags] = useState(post?.tags?.join(', ') || '');
  const [loading, setLoading] = useState(false);

  // Generate slug from title
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  // Update slug when title changes (only for new posts)
  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
    if (!post) { // Only auto-generate slug for new posts
      setSlug(generateSlug(newTitle));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const finalSlug = slug || generateSlug(title);
      
      // Parse tags from comma-separated string
      const parsedTags = tags
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag.length > 0);
      
      if (post) {
        // Update existing post
        const { error } = await supabase
          .from('blog_posts')
          .update({
            title,
            slug: finalSlug,
            content,
            excerpt: excerpt || null,
            published,
            tags: parsedTags.length > 0 ? parsedTags : null,
            updated_at: new Date().toISOString(),
          })
          .eq('id', post.id);

        if (error) {
          console.error('Error updating post:', error);
          alert('Failed to update post. Please try again.');
          return;
        }
      } else {
        // Create new post
        const { error } = await supabase
          .from('blog_posts')
          .insert({
            title,
            slug: finalSlug,
            content,
            excerpt: excerpt || null,
            published,
            tags: parsedTags.length > 0 ? parsedTags : null,
          });

        if (error) {
          console.error('Error creating post:', error);
          alert('Failed to create post. Please try again.');
          return;
        }
      }

      onSave();
    } catch (error) {
      console.error('Failed to save post:', error);
      alert('Failed to save post. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="font-glitch text-2xl text-white">
          {post ? 'EDIT POST' : 'NEW POST'}
        </h2>
        <Button
          onClick={onCancel}
          variant="outline"
          className="font-mono border-white/20 text-white hover:bg-white/10"
        >
          CANCEL
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="title" className="font-mono text-white">
            Title
          </Label>
          <Input
            id="title"
            type="text"
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
            className="font-mono bg-black/30 border-white/20 focus:border-cyberpunk-green text-white"
            required
          />
        </div>

        <div>
          <Label htmlFor="slug" className="font-mono text-white">
            Slug (URL path)
          </Label>
          <Input
            id="slug"
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="font-mono bg-black/30 border-white/20 focus:border-cyberpunk-green text-white"
            placeholder="auto-generated-from-title"
            required
          />
          <p className="text-xs text-white/60 mt-1 font-mono">
            Permalink: /blog/{slug || 'auto-generated-from-title'}
          </p>
        </div>

        <div>
          <Label htmlFor="tags" className="font-mono text-white">
            Tags (comma-separated)
          </Label>
          <Input
            id="tags"
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="font-mono bg-black/30 border-white/20 focus:border-cyberpunk-green text-white"
            placeholder="cybersecurity, privacy, hacking"
          />
          <p className="text-xs text-white/60 mt-1 font-mono">
            Enter tags separated by commas (e.g., cybersecurity, privacy, hacking)
          </p>
        </div>

        <div>
          <Label htmlFor="excerpt" className="font-mono text-white">
            Excerpt (optional)
          </Label>
          <Textarea
            id="excerpt"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            className="font-mono bg-black/30 border-white/20 focus:border-cyberpunk-green text-white h-20"
            placeholder="Brief description of the post..."
          />
        </div>

        <div>
          <Label htmlFor="content" className="font-mono text-white">
            Content (Markdown)
          </Label>
          <Textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="font-mono bg-black/30 border-white/20 focus:border-cyberpunk-green text-white h-96"
            placeholder="Write your post content in Markdown..."
            required
          />
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="published"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
            className="rounded border-white/20 bg-black/30 text-cyberpunk-green focus:ring-cyberpunk-green"
          />
          <Label htmlFor="published" className="font-mono text-white">
            Published
          </Label>
        </div>

        <div className="flex space-x-4">
          <Button
            type="submit"
            disabled={loading}
            className="font-mono bg-cyberpunk-green text-black hover:bg-cyberpunk-green/80"
          >
            {loading ? 'SAVING...' : 'SAVE POST'}
          </Button>
          <Button
            type="button"
            onClick={onCancel}
            variant="outline"
            className="font-mono border-white/20 text-white hover:bg-white/10"
          >
            CANCEL
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BlogPostEditor;
