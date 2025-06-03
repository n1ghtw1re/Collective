import React from 'react';

export interface BlogPostData {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
}

export const metadata: BlogPostData = {
  id: "blog-template",
  title: "Blog Post Template",
  excerpt: "A brief excerpt of the blog post goes here.",
  date: "2025-05-23",
  author: "YourName",
  tags: ["template", "example"]
};

const Content: React.FC = () => {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="font-glitch text-3xl text-white mt-8 mb-4">Main Heading</h1>
      
      <h2 className="font-glitch text-2xl text-white mt-8 mb-4">Introduction</h2>
      
      <p className="font-mono text-white/90 mb-4">
        This is a paragraph of text. You can write <strong>bold text</strong>, <em>italic text</em>, and <a href="https://example.com" className="text-cyberpunk-green hover:underline" target="_blank" rel="noopener noreferrer">links</a>.
      </p>
      
      <ul className="list-disc pl-6 mb-6 space-y-2 font-mono text-white/90">
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </ul>
      
      <h2 className="font-glitch text-2xl text-white mt-8 mb-4">Another Section</h2>
      
      <blockquote className="border-l-4 border-cyberpunk-green pl-4 italic font-mono text-white/80 mb-4">
        <p>This is a blockquote with some important information.</p>
      </blockquote>
      
      <pre className="font-mono bg-black/50 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-cyberpunk-green">
          // This is a code block<br />
          function example() &#123;<br />
            &nbsp;&nbsp;return "Hello, world!";<br />
          &#125;
        </code>
      </pre>
      
      <h3 className="font-glitch text-xl text-cyberpunk-green mt-6 mb-3">Subsection</h3>
      
      <p className="font-mono text-white/90 mb-4">
        More content goes here...
      </p>
    </div>
  );
};

export default Content;
