
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
  id: "demystifying-web-html-css-matters",
  title: "Demystifying the Web - Why Understanding Basic HTML & CSS Still Matters",
  excerpt: "Even in a world of sophisticated frameworks and website builders, understanding these basics still matters, empowering you to demystify the web and take control of your digital experience.",
  date: "2025-05-14",
  author: "C1nder5",
  tags: ["HTML", "CSS", "WebDev"]
};

const Content: React.FC = () => {
  return (
    <div>
      <h2 className="font-glitch text-2xl text-white mt-8 mb-4">
        Why Understanding Basic HTML & CSS Still Matters
      </h2>
      
      <p className="font-mono text-white/90 mb-4">
        The modern web is a complex tapestry of technologies, but at its core lie two fundamental languages: HTML and CSS. Even in a world of sophisticated frameworks and website builders, understanding these basics still matters, empowering you to demystify the web and take control of your digital experience.
      </p>
      
      <p className="font-mono text-white/90 mb-4">
        <em>HTML (HyperText Markup Language)</em> is the structure of a webpage. It's the skeleton that defines the content, from headings and paragraphs to images and links. CSS (Cascading Style Sheets) is the styling language that determines how that content looks, from colors and fonts to layouts and animations.
      </p>
      
      <p className="font-mono text-white/90 mb-4">
        You might think, "Why bother learning these languages when website builders do it for me?" But even a basic understanding of HTML and CSS can be incredibly powerful.
      </p>
      
      <p className="font-mono text-white/90 mb-4">
        Here's why:
      </p>
      
      <ul className="list-disc pl-6 mb-6 space-y-2 font-mono text-white/90">
        <li><strong>Understanding How Websites Work:</strong> Knowing the underlying structure and styling of a website gives you a deeper appreciation for the craft of web development. You begin to see the web not as a black box, but as a collection of interconnected elements.</li>
        <li><strong>Simple Customization:</strong> Ever wanted to tweak the appearance of a blog post or add a simple element to your own website? Basic HTML and CSS knowledge allows you to make these small changes without relying on complex tools or developers.</li>
        <li><strong>Troubleshooting:</strong> When things go wrong, a basic understanding of HTML and CSS can help you diagnose and fix simple problems, saving you time and frustration.</li>
        <li><strong>Digital Literacy:</strong> In an increasingly digital world, understanding the building blocks of the web is a crucial form of digital literacy. It empowers you to navigate the online world with greater confidence and awareness.</li>
        <li><strong>Appreciating the Craft:</strong> Seeing how websites are built, even in a basic sense, increases your appreciation for the work of web developers.</li>
      </ul>
      
      <p className="font-mono text-white/90 mb-4">
        You don't need to become a coding expert. Even a rudimentary understanding of HTML and CSS can unlock a new level of digital literacy. It's about demystifying the web, taking back a bit of control, and appreciating the craft that shapes our online experiences.
      </p>
    </div>
  );
};

export default Content;
