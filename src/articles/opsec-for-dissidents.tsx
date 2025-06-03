
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
  id: "opsec-for-dissidents",
  title: "OPSEC for Digital Dissidents",
  excerpt: "Practical strategies for maintaining operational security while engaging in digital resistance.",
  date: "2025-04-28",
  author: "Axi0m",
  tags: ["security", "privacy", "activism"]
};

const Content: React.FC = () => {
  return (
    <div>
      <h2 className="font-glitch text-2xl text-white mt-8 mb-4">Your Security Is Non-Negotiable</h2>
      
      <p className="font-mono text-white/90 mb-4">
        As digital resistance movements grow, so does the sophistication of surveillance. 
        This guide outlines practical OPSEC (Operational Security) measures for those engaged 
        in privacy advocacy, digital rights activism, and other forms of online dissent.
      </p>
      
      <p className="font-mono text-white/90 mb-4">
        Remember: Security is not a product you buy, but a process you practice daily.
      </p>
      
      <h2 className="font-glitch text-2xl text-white mt-8 mb-4">Core OPSEC Principles</h2>
      
      <h3 className="font-glitch text-xl text-cyberpunk-green mt-6 mb-3">1. Threat Modeling</h3>
      
      <p className="font-mono text-white/90 mb-4">
        Before implementing security measures, understand what you're protecting, from whom, 
        and what resources your adversary has. Different activities require different security postures.
      </p>
      
      <h3 className="font-glitch text-xl text-cyberpunk-green mt-6 mb-3">2. Compartmentalization</h3>
      
      <p className="font-mono text-white/90 mb-4">
        Never use the same identity for different spheres of activity. Create dedicated devices, 
        accounts, and personas for sensitive work. What your employer sees should be different from 
        what your activist network sees.
      </p>
      
      <h3 className="font-glitch text-xl text-cyberpunk-green mt-6 mb-3">3. Minimize Digital Footprint</h3>
      
      <p className="font-mono text-white/90 mb-4">
        Every interaction leaves traces. Limit what you share, where you sign in, and 
        how much metadata you generate. Remember that absence of data is often more 
        protective than encrypted data.
      </p>
      
      <h2 className="font-glitch text-2xl text-white mt-8 mb-4">Practical Implementations</h2>
      
      <h3 className="font-glitch text-xl text-cyberpunk-green mt-6 mb-3">Communication Security</h3>
      
      <ul className="list-disc pl-6 mb-6 space-y-2 font-mono text-white/90">
        <li>Use E2EE (End-to-End Encrypted) messaging apps for sensitive discussions</li>
        <li>Consider metadata-resistant platforms like Signal with disappearing messages</li>
        <li>For highest security needs, use ephemeral messaging on airgapped devices</li>
        <li>Verify keys and use secure channels for sharing initial contact details</li>
      </ul>
      
      <h3 className="font-glitch text-xl text-cyberpunk-green mt-6 mb-3">Network Security</h3>
      
      <ul className="list-disc pl-6 mb-6 space-y-2 font-mono text-white/90">
        <li>Use Tor for anonymous browsing, but understand its limitations</li>
        <li>Consider VPNs as a layer of protection, not a complete solution</li>
        <li>Use public Wi-Fi carefully, with additional encryption layers</li>
        <li>Consider TAILS or other amnesic operating systems for sensitive operations</li>
      </ul>
      
      <h3 className="font-glitch text-xl text-cyberpunk-green mt-6 mb-3">Physical Security</h3>
      
      <ul className="list-disc pl-6 mb-6 space-y-2 font-mono text-white/90">
        <li>Enable full-disk encryption on all devices</li>
        <li>Use strong passwords and 2FA wherever possible</li>
        <li>Consider the risks of biometric authentication (fingerprints can be compelled)</li>
        <li>Have a data destruction plan for emergency situations</li>
      </ul>
      
      <h2 className="font-glitch text-2xl text-white mt-8 mb-4">The Human Element</h2>
      
      <p className="font-mono text-white/90 mb-4">
        Technical measures are only as strong as the humans implementing them. Practice:
      </p>
      
      <ul className="list-disc pl-6 mb-6 space-y-2 font-mono text-white/90">
        <li>Regular security training with your networks</li>
        <li>Skepticism toward unexpected contacts or too-good-to-be-true opportunities</li>
        <li>Awareness of social engineering tactics</li>
        <li>Clear protocols for verifying identities within your trusted circles</li>
      </ul>
      
      <p className="font-mono text-white/90 italic mt-8">
        "Security is not about being paranoid. It's about being prepared." — 0xShadow
      </p>
    </div>
  );
};

export default Content;
