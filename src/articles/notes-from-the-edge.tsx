
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
  id: "notes-from-the-edge",
  title: "Notes From The Edge: Living Without GPS, Ads, or Permission",
  excerpt: "Every app asks for your location. Every site wants your consent. Every ad pretends to know you. I said no.",
  date: "2025-05-23",
  author: "ImVexd",
  tags: ["privacy", "degoogle", "sovereignty", "offline"]
};

const Content: React.FC = () => {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="font-glitch text-3xl text-white mt-8 mb-4">
        🛰️ Notes from the Edge: Living Without GPS, Ads, or Permission
      </h1>
      
      <p className="font-mono text-white/90 mb-4">
        <em>by ImVexd // N1ghtw1re Transmission 0037 // classified: public</em>
      </p>
      
      <hr className="border-white/20 my-8" />
      
      <blockquote className="border-l-4 border-cyberpunk-green pl-4 italic font-mono text-white/80 mb-4">
        <p>"Every app asks for your location. Every site wants your consent. Every ad pretends to know you. I said no. Here's what happened."</p>
      </blockquote>
      
      <hr className="border-white/20 my-8" />
      
      <h2 className="font-glitch text-2xl text-white mt-8 mb-4">
        🔥 The Premise
      </h2>
      
      <p className="font-mono text-white/90 mb-4">
        Most people live <strong>on the grid</strong>—not metaphorically, but <em>literally</em>. Your phone constantly broadcasts your coordinates, your browser bleeds your preferences, and your digital shadow walks ahead of you in every room.
      </p>
      
      <p className="font-mono text-white/90 mb-4">
        I wanted out.
      </p>
      
      <p className="font-mono text-white/90 mb-4">
        So I spent 30 days navigating life with:
      </p>
      
      <ul className="list-disc pl-6 mb-6 space-y-2 font-mono text-white/90">
        <li>📵 No GPS</li>
        <li>🚫 No targeted ads</li>
        <li>❌ No platform permissions</li>
      </ul>
      
      <p className="font-mono text-white/90 mb-4">
        Here is what I learned—and how you can do it too.
      </p>
      
      <hr className="border-white/20 my-8" />
      
      <h2 className="font-glitch text-2xl text-white mt-8 mb-4">
        🛠️ The Toolkit
      </h2>
      
      <p className="font-mono text-white/90 mb-4">
        Before unplugging the coordinates, I prepped my loadout:
      </p>
      
      <ul className="list-disc pl-6 mb-6 space-y-2 font-mono text-white/90">
        <li>🧭 <a href="https://www.magicearth.com/" className="text-cyberpunk-green hover:underline" target="_blank" rel="noopener noreferrer">Magic Earth</a>: offline maps that don't track</li>
        <li>🔐 <a href="https://grapheneos.org/" className="text-cyberpunk-green hover:underline" target="_blank" rel="noopener noreferrer">GrapheneOS</a>: custom Android OS with hardened privacy</li>
        <li>🧊 <a href="https://blokada.org/" className="text-cyberpunk-green hover:underline" target="_blank" rel="noopener noreferrer">Blokada</a>: system-wide ad-blocking</li>
        <li>🦊 <a href="https://play.google.com" className="text-cyberpunk-green hover:underline" target="_blank" rel="noopener noreferrer">Firefox Focus</a></li>
      </ul>
    </div>
  );
};

export default Content;
