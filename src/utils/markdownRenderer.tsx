
import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  // Simple markdown parser for basic formatting
  const parseMarkdown = (text: string) => {
    let html = text;
    
    // Headers
    html = html.replace(/^### (.*$)/gm, '<h3 class="text-xl font-glitch text-cyberpunk-green mb-4 mt-6">$1</h3>');
    html = html.replace(/^## (.*$)/gm, '<h2 class="text-2xl font-glitch text-cyberpunk-green mb-4 mt-8">$1</h2>');
    html = html.replace(/^# (.*$)/gm, '<h1 class="text-3xl font-glitch text-cyberpunk-green mb-6 mt-8">$1</h1>');
    
    // Bold and Italic
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-bold">$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em class="text-white/90 italic">$1</em>');
    
    // Code blocks
    html = html.replace(/```([\s\S]*?)```/g, '<pre class="bg-black/50 border border-white/20 p-4 rounded font-mono text-cyberpunk-green overflow-x-auto my-4"><code>$1</code></pre>');
    
    // Inline code
    html = html.replace(/`(.*?)`/g, '<code class="bg-black/30 px-2 py-1 rounded font-mono text-cyberpunk-green">$1</code>');
    
    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-cyberpunk-green underline hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">$1</a>');
    
    // Line breaks and paragraphs
    html = html.replace(/\n\n/g, '</p><p class="font-mono text-white/90 mb-4">');
    html = html.replace(/\n/g, '<br />');
    
    // Wrap in paragraph if content doesn't start with a header
    if (!html.startsWith('<h')) {
      html = '<p class="font-mono text-white/90 mb-4">' + html + '</p>';
    }
    
    return html;
  };

  return (
    <div 
      className="prose prose-invert max-w-none"
      dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }}
    />
  );
};

export default MarkdownRenderer;
