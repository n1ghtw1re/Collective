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
  id: "digital-fascism",
  title: "Digital Fascism",
  excerpt: "Where control masquerades as convenience, and dissent is filtered, shadowbanned, or erased.",
  date: "2025-05-20", // Assuming a publication date
  author: "ImVexd",
  tags: ["digital rights", "censorship", "control", "big tech", "privacy", "dissent", "fascism", "surveillance"]
};

const Content: React.FC = () => {
  return (
    <div>
      <h2 className="font-glitch text-2xl text-white mt-8 mb-4">
        Where control masquerades as convenience, and dissent is filtered, shadowbanned, or erased.
      </h2>
      
      <p className="font-mono text-white/90 mb-4">
        Let’s drop the niceties: we’re living under a new kind of fascism. It doesn’t wear uniforms. It doesn’t wave flags. It doesn’t need to. It’s frictionless. Clean. Branded. Downloadable. And most terrifying of all — people line up to install it.
      </p>
      
      <p className="font-mono text-white/90 mb-4">
        Digital fascism isn’t coming. It’s already live. Beta tested. Auto-updated. It's the silent operating system underneath your daily life — one where surveillance is sold as safety, and obedience is gamified.
      </p>
      
      <h2 className="font-glitch text-2xl text-white mt-8 mb-4">The Interface of Control</h2>
      
      <p className="font-mono text-white/90 mb-4">
        Control in the digital age doesn’t shout; it suggests. It nudges. It learns your preferences, then filters your reality accordingly. Recommendation algorithms shape your worldview. Push notifications shape your habits. And “personalization”? That’s just predictive policing for your thoughts.
      </p>
      
      <p className="font-mono text-white/90 mb-4">
        Big Tech’s trick was simple: give you something useful, shiny, addictive — then slowly swap the functionality for obedience. Map apps that warn you about traffic? Now warn you about "misinformation." Social feeds designed to connect you? Now throttle dissenting speech until it disappears. The illusion of free speech is maintained — just long enough to keep you compliant.
      </p>
      
      <h2 className="font-glitch text-2xl text-white mt-8 mb-4">Shadowbans and Soft Censorship</h2>
      
      <p className="font-mono text-white/90 mb-4">
        They don’t need to knock on your door or burn your books. Now they just tweak a slider. Silence your voice. Limit your reach. Make you invisible to everyone except yourself.
      </p>
      
      <p className="font-mono text-white/90 mb-4">
        This is soft censorship — speech that’s technically allowed but algorithmically buried. No one hears you, so no one cares. And because it’s hidden behind proprietary code and vague “community standards,” you can’t even prove it’s happening. That's by design.
      </p>
      
      <p className="font-mono text-white/90 mb-4">
        You’re not deplatformed — you’re ghosted. The digital equivalent of being locked in a soundproof room where you can scream all you want and never be heard.
      </p>
      
      <h2 className="font-glitch text-2xl text-white mt-8 mb-4">The Illusion of Consent</h2>
      
      <p className="font-mono text-white/90 mb-4">
        People will say, “You agreed to the terms.” As if consent buried under 40 pages of unreadable legalese counts. As if anyone who doesn’t click “Accept” can function in society. Opting out of digital fascism increasingly means opting out of modern life. Try buying a train ticket, applying for a job, or getting medical help without a phone. Good luck.
      </p>
      
      <p className="font-mono text-white/90 mb-4">
        This isn't capitalism. It's coercion. Wrapped in the language of UX design.
      </p>
      
      <h2 className="font-glitch text-2xl text-white mt-8 mb-4">Algorithmic Authority</h2>
      
      <p className="font-mono text-white/90 mb-4">
        The scariest part? No one’s really in control anymore — not fully. Tech execs don’t understand their own systems. The machine optimizes itself. And what it optimizes for is engagement — which just happens to align perfectly with control. Angry people click. Polarized people stay glued. Outrage becomes infrastructure.
      </p>
      
      <p className="font-mono text-white/90 mb-4">
        Combine that with machine-learning moderation systems and outsourced content police, and you get a hybrid nightmare of AI authoritarianism and corporate cowardice. Faceless, fast-moving, and unaccountable.
      </p>
      
      <h2 className="font-glitch text-2xl text-white mt-8 mb-4">What Happens to Dissent?</h2>
      
      <p className="font-mono text-white/90 mb-4">
        It doesn’t disappear — it mutates. Goes underground. Moves to encrypted spaces, alt protocols, dead protocols, pirate servers. People start whispering in ones and zeroes. Because once you realize the town square is bugged, you stop shouting and start encoding.
      </p>
      
      <p className="font-mono text-white/90 mb-4">
        Digital fascism thrives on visibility and metadata. So resistance looks like encryption. Looks like federated networks. Looks like abandoning platforms that treat your life like a data stream to be mined, flagged, and sold.
      </p>
      
      <h2 className="font-glitch text-2xl text-white mt-8 mb-4">This Isn’t Paranoia. It’s Pattern Recognition.</h2>
      
      <p className="font-mono text-white/90 mb-4">
        We watched platforms ban journalists, whistleblowers, and movements. We saw “conspiracy theory” get slapped on real events — until those events became impossible to ignore. We saw governments outsource censorship to corporations, so they could pretend their hands were clean.
      </p>
      
      <p className="font-mono text-white/90 mb-4">
        Every day, the net tightens. But the system survives because it doesn’t feel like oppression. It feels like convenience. Efficiency. Safety.
      </p>
      
      <p className="font-mono text-white/90 mb-4">
        That’s the trap.
      </p>
      
      <h2 className="font-glitch text-2xl text-white mt-8 mb-4">Time to Glitch the System</h2>
      
      <p className="font-mono text-white/90 mb-4">
        You don’t fight this with hashtags. You don’t debate it in comment sections. You study the system until you see the gaps — then you break it. You mask your traffic. Build in the shadows. Encrypt by default. Speak in code. Leave breadcrumbs for the ones still waking up.
      </p>
      
      <p className="font-mono text-white/90 mb-4">
        Digital fascism doesn’t fear protest. It fears autonomy. It fears people who remember what it felt like to own their own thoughts.
      </p>
      
      <p className="font-mono text-white/90 mb-4">
        So here’s your reminder: you were never free because they let you speak. You were free until they stopped listening.
      </p>
      
      <p className="font-mono text-white/90 mb-4">
        Time to make some noise they can’t filter.
      </p>
      
      <p className="font-mono text-white/90 italic mt-8">
        — ImVexd
      </p>
    </div>
  );
};

export default Content;