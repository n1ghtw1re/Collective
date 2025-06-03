
/**
 * This file provides utilities to help generate new blog post articles
 * from markdown content.
 * 
 * Usage:
 * 1. Duplicate the blog-template.tsx file
 * 2. Rename it to your article's ID (e.g., my-new-article.tsx)
 * 3. Update the metadata and markdown content
 */

import fs from 'fs';
import path from 'path';

/**
 * Generate a new article file from the template
 * Note: This function is meant to be used in a Node.js environment,
 * not in the browser. You can run it with a script like:
 * 
 * node -r tsx src/utils/articleGenerator.ts
 */
export const generateArticleFromTemplate = (
  id: string,
  title: string,
  excerpt: string,
  author: string = "N1ghtw1re",
  tags: string[] = [],
  markdownContent: string = ""
) => {
  // This is a development-only utility
  if (typeof window !== 'undefined') {
    console.error('This utility is meant to be run in a Node.js environment, not in the browser');
    return;
  }

  try {
    const templatePath = path.join(__dirname, '../articles/blog-template.tsx');
    const newFilePath = path.join(__dirname, `../articles/${id}.tsx`);
    
    let templateContent = fs.readFileSync(templatePath, 'utf-8');
    
    // Replace the metadata
    templateContent = templateContent.replace(/id: "blog-template"/, `id: "${id}"`);
    templateContent = templateContent.replace(/title: "Blog Post Template"/, `title: "${title}"`);
    templateContent = templateContent.replace(/excerpt: "A brief excerpt of the blog post goes here."/, `excerpt: "${excerpt}"`);
    templateContent = templateContent.replace(/author: "YourName"/, `author: "${author}"`);
    templateContent = templateContent.replace(/tags: \["template", "example"\]/, `tags: ${JSON.stringify(tags)}`);
    
    // Replace the markdown content
    const markdownRegex = /const markdownContent = `[\s\S]*?`;/;
    templateContent = templateContent.replace(markdownRegex, `const markdownContent = \`${markdownContent}\`;`);
    
    // Write the new file
    fs.writeFileSync(newFilePath, templateContent);
    
    console.log(`Successfully created new article: ${newFilePath}`);
  } catch (error) {
    console.error('Error generating article:', error);
  }
};

// Example usage:
// generateArticleFromTemplate(
//   'my-new-article',
//   'My New Article Title',
//   'A brief description of this article',
//   'Author Name',
//   ['tag1', 'tag2'],
//   '# Hello World\n\nThis is my new article content...'
// );
