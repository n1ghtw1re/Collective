
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
  id: "markdown-example",
  title: "Markdown Article Example",
  excerpt: "An example article written in Markdown format.",
  date: "2025-05-23",
  author: "N1ghtw1re",
  tags: ["markdown", "tutorial", "example"]
};

const Content: React.FC = () => {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="font-glitch text-3xl text-white mt-8 mb-4">Markdown Article Example</h1>

      <h2 className="font-glitch text-2xl text-white mt-8 mb-4">Introduction to Markdown</h2>
      
      <p className="font-mono text-white/90 mb-4">
        Markdown is a lightweight markup language with plain-text formatting syntax. Its design allows it to be converted to many output formats, but the original tool by the same name only supports HTML.
      </p>

      <h2 className="font-glitch text-2xl text-white mt-8 mb-4">Why Use Markdown?</h2>
      
      <ul className="list-disc pl-6 mb-6 space-y-2 font-mono text-white/90">
        <li><strong>Simplicity</strong>: Easy to learn and use</li>
        <li><strong>Portability</strong>: Plain text can be opened anywhere</li>
        <li><strong>Flexibility</strong>: Can be converted to HTML, PDF, and many other formats</li>
      </ul>

      <h2 className="font-glitch text-2xl text-white mt-8 mb-4">Cybersecurity Tips in Markdown</h2>

      <h3 className="font-glitch text-xl text-cyberpunk-green mt-6 mb-3">1. Use Strong Passwords</h3>
      
      <p className="font-mono text-white/90 mb-4">
        Always use <em>strong, unique passwords</em> for each service. Consider using a <strong>password manager</strong> to keep track of them.
      </p>

      <h3 className="font-glitch text-xl text-cyberpunk-green mt-6 mb-3">2. Enable Two-Factor Authentication</h3>
      
      <blockquote className="border-l-4 border-cyberpunk-green pl-4 italic font-mono text-white/80 mb-4">
        <p>Two-factor authentication adds an extra layer of security to your accounts by requiring two different forms of identification.</p>
      </blockquote>

      <h3 className="font-glitch text-xl text-cyberpunk-green mt-6 mb-3">3. Keep Systems Updated</h3>
      
      <pre className="font-mono bg-black/50 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-cyberpunk-green">
          # Example update commands<br/>
          sudo apt update && sudo apt upgrade -y  # Ubuntu/Debian<br/>
          sudo pacman -Syu                        # Arch Linux<br/>
          brew update && brew upgrade             # macOS
        </code>
      </pre>

      <h2 className="font-glitch text-2xl text-white mt-8 mb-4">Conclusion</h2>
      
      <p className="font-mono text-white/90 mb-4">
        Markdown makes it easy to write formatted content without having to deal with complex HTML tags. It's perfect for blog posts, documentation, and more.
      </p>
      
      <p className="font-mono text-white/90 mb-4">
        <a href="https://www.markdownguide.org/" className="text-cyberpunk-green hover:underline" target="_blank" rel="noopener noreferrer">
          Learn more about Markdown
        </a>
      </p>
    </div>
  );
};

export default Content;
