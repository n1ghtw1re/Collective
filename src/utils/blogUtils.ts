
import { lazy } from 'react';
import type { BlogPostData } from '../articles/the-surveillance-state-of-mind';

// Dynamically import all article files
const articleModules = import.meta.glob('../articles/*.tsx');

// Helper function to get all blog posts metadata
export const getAllBlogPosts = async (): Promise<BlogPostData[]> => {
  const posts: BlogPostData[] = [];
  
  const importPromises = Object.entries(articleModules).map(async ([path, importArticle]) => {
    try {
      const module = await importArticle() as { metadata: BlogPostData };
      if (module.metadata) {
        posts.push(module.metadata);
      }
    } catch (error) {
      console.error(`Error importing article at ${path}:`, error);
    }
  });
  
  await Promise.all(importPromises);
  
  // Sort by date (newest first)
  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
};

// Helper function to get a specific blog post by ID
export const getBlogPostById = async (id: string) => {
  // Find the correct path by trying to match the ID in the file path
  const filePath = Object.keys(articleModules).find(path => path.includes(id));
  
  if (!filePath) {
    return null;
  }
  
  try {
    const module = await articleModules[filePath]() as { 
      metadata: BlogPostData;
      default: React.ComponentType;
    };
    
    return {
      metadata: module.metadata,
      Content: module.default
    };
  } catch (error) {
    console.error(`Error loading blog post ${id}:`, error);
    return null;
  }
};
