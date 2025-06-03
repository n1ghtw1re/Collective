
import React from 'react';
import DOMPurify from 'dompurify';

interface SecureMarkdownRendererProps {
  content: string;
  className?: string;
}

const SecureMarkdownRenderer: React.FC<SecureMarkdownRendererProps> = ({ 
  content, 
  className = "" 
}) => {
  // Configure DOMPurify to allow safe HTML elements
  const cleanContent = DOMPurify.sanitize(content, {
    ALLOWED_TAGS: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'strong', 'em', 'code', 'pre', 'blockquote', 'a'],
    ALLOWED_ATTR: ['href', 'title', 'class'],
    ALLOW_DATA_ATTR: false,
  });

  // Basic markdown to HTML conversion with security
  const processMarkdown = (text: string): string => {
    return text
      // Headers
      .replace(/^### (.*$)/gim, '<h3 class="font-glitch text-xl text-cyberpunk-green mt-6 mb-3">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="font-glitch text-2xl text-white mt-8 mb-4">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="font-glitch text-3xl text-cyberpunk-green mt-8 mb-6">$1</h1>')
      
      // Bold and Italic
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-cyberpunk-green">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="text-white/90">$1</em>')
      
      // Code blocks
      .replace(/```([\s\S]*?)```/g, '<pre class="bg-black/50 border border-cyberpunk-green/30 p-4 my-4 overflow-x-auto"><code class="font-mono text-cyberpunk-green text-sm">$1</code></pre>')
      .replace(/`(.*?)`/g, '<code class="bg-black/30 px-2 py-1 font-mono text-cyberpunk-green text-sm">$1</code>')
      
      // Lists
      .replace(/^\* (.*$)/gim, '<li class="font-mono text-white/90 mb-2">$1</li>')
      .replace(/(<li.*<\/li>)/s, '<ul class="list-disc pl-6 mb-6 space-y-2">$1</ul>')
      
      // Paragraphs
      .replace(/^(?!<[h|u|p|c])(.+)$/gm, '<p class="font-mono text-white/90 mb-4">$1</p>')
      
      // Links (with security attributes)
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-cyberpunk-green hover:underline" target="_blank" rel="noopener noreferrer">$1</a>');
  };

  const processedContent = processMarkdown(cleanContent);
  const finalCleanContent = DOMPurify.sanitize(processedContent);

  return (
    <div 
      className={`prose prose-invert max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: finalCleanContent }}
      role="article"
      aria-label="Blog post content"
    />
  );
};

export default SecureMarkdownRenderer;
