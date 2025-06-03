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
  id: "boot-sequence-year-zero-recalibration",
  title: "Boot Sequence: Year Zero Recalibration",
  excerpt: "A tactical debrief for reclaiming autonomy in a networked world designed for control.",
  date: "2025-05-21", // Converted from 5-21-25
  author: "Axi0m",
  tags: [
    "manifesto",
    "cybersecurity",
    "sovereignty",
    "surveillance",
    "capitalism",
    "decentralized"
  ]
};

const Content: React.FC = () => {
  return (
    <div>
      <h2 className="font-glitch text-2xl text-white mt-8 mb-4">
        <em>Boot Sequence: Year Zero Recalibration</em>
      </h2>

      <blockquote className="font-mono text-white/70 italic border-l-4 border-cyberpunk-green pl-4 my-6">
        <p className="mb-2">“Recalibrate not to adapt, but to defy. Survival demands intention. Autonomy demands war.”</p>
        <p>— <strong>Axi0m</strong></p>
      </blockquote>

      <hr className="my-8 border-white/30" />

      <h2 className="font-glitch text-2xl text-white mt-8 mb-4">SYSTEM CHECK: ALL SIGNALS COMPROMISED</h2>
      
      <p className="font-mono text-white/90 mb-4">
        Let’s not waste time.
      </p>
      
      <p className="font-mono text-white/90 mb-4">
        The digital terrain has shifted again. Quietly. Invisibly. Most didn’t notice, because the shift came not in policy, not in bombs or firewalls—but in interface updates, ToS blurbs, “personalized experiences,” and zero-click content.
      </p>
      
      <p className="font-mono text-white/90 mb-4">
        While you scrolled, while you slept, the net reconfigured itself into something tighter, darker, and more predictive. Welcome to the era of <strong>anticipatory control</strong>—where you are not punished for dissent, but pre-emptively steered away from it.
      </p>
      
      <p className="font-mono text-white/90 mb-4">
        This isn’t censorship. It’s architecture.
      </p>
      
      <p className="font-mono text-white/90 mb-4">
        <strong>We’re not in an open system anymore. We’re in a guided maze. And the walls are learning.</strong>
      </p>
      
      <p className="font-mono text-white/90 mb-4">
        This is your <em>year zero</em> reminder: The internet is not neutral. Your devices are not passive. The feed is not random. And if you don't reset your operating assumptions now, you will be optimized into irrelevance.
      </p>

      <hr className="my-8 border-white/30" />

      <h2 className="font-glitch text-2xl text-white mt-8 mb-4">PHASE 1: RECOGNIZE THE NEW SHAPE OF THE TRAP</h2>
      
      <p className="font-mono text-white/90 mb-4">
        Let’s break it down. These are the current vectors of control:
      </p>
      
      <h3 className="font-glitch text-xl text-cyberpunk-green mt-6 mb-3">🧠 Cognitive Capture</h3>
      <ul className="list-disc pl-6 mb-6 space-y-2 font-mono text-white/90">
        <li><strong>AI-driven content loops</strong> trained on emotional reaction, not comprehension. You’re not being informed—you’re being kept in orbit.</li>
        <li><strong>Emotionally-charged interface design</strong> is the new opiate. Rage, envy, nostalgia, dopamine. These are the strings.</li>
      </ul>
      
      <h3 className="font-glitch text-xl text-cyberpunk-green mt-6 mb-3">📦 Infrastructure Centralization</h3>
      <ul className="list-disc pl-6 mb-6 space-y-2 font-mono text-white/90">
        <li>Cloud monocultures mean your “independent” tools rely on <strong>the same backbone</strong>—usually Amazon, Google, or Microsoft.</li>
        <li>A few companies control <strong>app stores, DNS roots, SSL certs, and payment rails.</strong> You can be disappeared from the internet without a single takedown notice.</li>
      </ul>
      
      <h3 className="font-glitch text-xl text-cyberpunk-green mt-6 mb-3">👁️ Surveillance Creep</h3>
      <ul className="list-disc pl-6 mb-6 space-y-2 font-mono text-white/90">
        <li>Browser fingerprinting, behavioral analytics, telemetry—all normalized. <strong>Obfuscation is now subversion.</strong></li>
        <li>Governments don’t need backdoors. They <strong>buy access</strong> from ad networks, telecoms, or scrape APIs.</li>
      </ul>
      
      <h3 className="font-glitch text-xl text-cyberpunk-green mt-6 mb-3">🎯 Predictive Suppression</h3>
      <ul className="list-disc pl-6 mb-6 space-y-2 font-mono text-white/90">
        <li>“Shadowbanning” has evolved. Now, dissent is algorithmically marked as <strong>non-viral</strong>—it doesn’t get blocked, just never spreads.</li>
        <li>Content moderation AI is trained to confuse <strong>urgency with extremism</strong>, <strong>sarcasm with disinformation</strong>, <strong>truth with harm</strong>.</li>
      </ul>

      <hr className="my-8 border-white/30" />

      <h2 className="font-glitch text-2xl text-white mt-8 mb-4">PHASE 2: UPGRADE YOUR TACTICS</h2>
      
      <p className="font-mono text-white/90 mb-4">
        This is not a guide for aesthetic rebels. This is for those who intend to move through hostile systems with purpose. Real resistance demands more than noise. It requires <strong>stealth, discipline, and strategy</strong>.
      </p>
      
      <h3 className="font-glitch text-xl text-cyberpunk-green mt-6 mb-3">🔐 OPSEC IS A DAILY RITUAL</h3>
      <ul className="list-disc pl-6 mb-6 space-y-2 font-mono text-white/90">
        <li><strong>Use burner identities</strong> tied to purpose, not personality. No cross-contamination. No vanity.</li>
        <li>Stop treating <strong>password managers, VPNs, and 2FA</strong> as optional. These are your armor, not accessories.</li>
        <li><strong>Stop logging into anything</strong> with your main device that you wouldn’t want subpoenaed.</li>
      </ul>
      
      <h3 className="font-glitch text-xl text-cyberpunk-green mt-6 mb-3">🌐 DECOUPLE FROM CENTRALIZED PLATFORMS</h3>
      <ul className="list-disc pl-6 mb-6 space-y-2 font-mono text-white/90">
        <li>Build and share on <strong>federated networks</strong>: Mastodon, Matrix, IPFS, Gemini.</li>
        <li>If your work exists <strong>only on Instagram, Medium, or YouTube</strong>, it can be deleted without warning. That’s not your platform. That’s rented space in a hostile nation.</li>
      </ul>
      
      <h3 className="font-glitch text-xl text-cyberpunk-green mt-6 mb-3">🧰 WEAPONIZE OPEN SOURCE</h3>
      <ul className="list-disc pl-6 mb-6 space-y-2 font-mono text-white/90">
        <li>Fork everything. Mirror everything. If a tool disappears tomorrow, you should already have a local copy.</li>
        <li>Learn to audit your dependencies. Do you know what’s calling home? What libraries are bundled in your tools?</li>
        <li>Prefer projects where <strong>the build process is transparent</strong> and reproducible from source.</li>
      </ul>
      
      <h3 className="font-glitch text-xl text-cyberpunk-green mt-6 mb-3">🛰️ BUILD PARALLEL INFRASTRUCTURE</h3>
      <ul className="list-disc pl-6 mb-6 space-y-2 font-mono text-white/90">
        <li>Start <strong>local mesh networks</strong>. Explore <strong>sneakernets</strong>. Test <strong>offline-first apps.</strong></li>
        <li>Your digital life should be survivable during an outage, a ban, or a purge.</li>
      </ul>

      <hr className="my-8 border-white/30" />

      <h2 className="font-glitch text-2xl text-white mt-8 mb-4">PHASE 3: ENCRYPTION IS NOT PARANOIA—IT'S LITERACY</h2>
      
      <p className="font-mono text-white/90 mb-4">
        We don’t ask whether a door has a lock. So stop questioning the need for encrypted comms.
      </p>
      
      <h3 className="font-glitch text-xl text-cyberpunk-green mt-6 mb-3">🚪 Use these as defaults:</h3>
      <ul className="list-disc pl-6 mb-6 space-y-2 font-mono text-white/90">
        <li><strong>Signal</strong> for messages and calls.</li>
        <li><strong>SimpleX</strong> or <strong>Session</strong> for highly anonymous contact.</li>
        <li><strong>Proton Mail / Tutanota</strong> for encrypted email.</li>
        <li><strong>Cryptpad</strong> or <strong>Standard Notes</strong> for encrypted docs.</li>
        <li><strong>Veracrypt</strong> for disk encryption.</li>
      </ul>
      
      <p className="font-mono text-white/90 mb-4">
        <strong>Your rituals shape your habits. Your habits shape your trace.</strong> Make encryption part of your spiritual hygiene.
      </p>

      <hr className="my-8 border-white/30" />

      <h2 className="font-glitch text-2xl text-white mt-8 mb-4">PHASE 4: RECLAMATION THROUGH CONSCIOUS CODE</h2>
      
      <p className="font-mono text-white/90 mb-4">
        The digital realm is not just a battleground. It’s a terrain of ritual and recursion. Every line of code, every network ping, every post is an invocation. You are shaping the machine as much as it shapes you.
      </p>
      
      <ul className="list-disc pl-6 mb-6 space-y-2 font-mono text-white/90">
        <li><strong>Write code with intention.</strong> Don’t just automate—awaken.</li>
        <li><strong>Seed subversive content</strong> into dead spaces: QR codes in junk mail, encrypted messages in abandoned forums.</li>
        <li><strong>Treat your Git commits like grimoires.</strong> Document your logic, your defense, your curse.</li>
      </ul>
      
      <p className="font-mono text-white/90 mb-4">
        This is more than defense. This is <strong>digital alchemy</strong>.
      </p>

      <hr className="my-8 border-white/30" />

      <h2 className="font-glitch text-2xl text-white mt-8 mb-4">FINAL DIRECTIVE: CALIBRATE OR BE CALIBRATED</h2>
      
      <p className="font-mono text-white/90 mb-4">
        You are not helpless. But you are surrounded.
      </p>
      
      <p className="font-mono text-white/90 mb-4">
        You need a new boot sequence. A mental cold start. A full-stack realignment. From hardware to headspace.
      </p>
      
      <p className="font-mono text-white/90 mb-4">
        This isn’t a call to nostalgia for the “old internet.” It’s a mandate to build the <strong>next one</strong>, from the ashes and in defiance.
      </p>
      
      <p className="font-mono text-white/90 mb-4">
        The machine will continue to optimize itself—for control, for profit, for silence.
      </p>

      <div className="font-mono text-white/90 my-6">
        <p className="mb-2">Your task is not to escape it.</p>
        <p className="mb-2"><strong>Your task is to reroute the signal.</strong></p>
        <p className="mb-2"><strong>Your task is to become undetectable and undeniable.</strong></p>
        <p><strong>Your task is to write the new operating system of freedom.</strong></p>
      </div>
      
      <p className="font-mono text-white/90 font-bold mt-8 mb-2">/END TRANSMISSION</p>
      <p className="font-mono text-white/90 italic">
        —<strong>Axi0m</strong>
      </p>
    </div>
  );
};

export default Content;