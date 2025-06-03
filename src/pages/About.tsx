import React from 'react';
import Layout from '../components/layout/Layout';
import { Mail } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-glitch text-4xl md:text-5xl text-cyberpunk-green mb-8">ABOUT N1GHTW1RE</h1>
          
          <div className="space-y-8">
            <section>
              <p className="font-mono text-white/90 mb-4">
                If you're reading this, you're already feeling it—the static behind the screen, the itch under your skin that something is wrong. You're right. It is.
              </p>
              <p className="font-mono text-white/90">
                N1ghtw1re was born in 2021, forged in the hidden backchannels between hacker dens, dead message boards, occult archives, and the bleeding edge of digital resistance. We are a decentralized collective of coders, mystics, builders, breakers, and exiles. Our members remain anonymous—even to each other. Not for style. For survival.
              </p>
            </section>
            
            <section>
              <p className="font-mono text-white/90 mb-4">
                We came together because we saw the truth:
              </p>
              <ul className="list-disc pl-6 space-y-2 font-mono text-white/90 mb-4">
                <li>The systems meant to connect us had been weaponized.</li>
                <li>The tools that promised freedom became chains.</li>
                <li>The digital realm became the panopticon.</li>
              </ul>
              <p className="font-mono text-white/90">
                We exist in the liminal zones—between technology and mysticism, code and chaos, poetry and praxis. The name N1ghtw1re refers to the invisible threads that still run beneath the networked world. Signals only a few can hear. Frequencies buried under noise. The lifelines of the next resistance.
              </p>
            </section>
            
            <section>
              <h2 className="font-glitch text-2xl text-white mb-4">OUR MISSION</h2>
              <p className="font-mono text-white/90 mb-4">
                We stand against three forces:
              </p>
              <ul className="space-y-4 mb-4">
                <li className="font-mono text-white/90">
                  <span className="text-cyberpunk-green font-bold">Surveillance capitalism</span> – where your data is the product and your attention the prize.
                </li>
                <li className="font-mono text-white/90">
                  <span className="text-cyberpunk-green font-bold">Techno-hegemony</span> – where power centralizes behind black-box algorithms and unaccountable platforms.
                </li>
                <li className="font-mono text-white/90">
                  <span className="text-cyberpunk-green font-bold">Digital fascism</span> – where control masquerades as convenience, and dissent is filtered, shadowbanned, or erased.
                </li>
              </ul>
              <p className="font-mono text-white/90">
                Our mission is simple: Reclaim autonomy. Not just privacy. Not just security. Sovereignty.
                We build tools. We share knowledge. We seed ideas like viruses into the machine. And we do it all in the open—encrypted, but open.
              </p>
            </section>
            
            <section>
              <h2 className="font-glitch text-2xl text-white mb-4">WHAT WE DO</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-white/20 p-4">
                  <h3 className="font-glitch text-xl text-cyberpunk-green mb-2">🛠 OPEN-SOURCE TOOLS</h3>
                  <p className="font-mono text-sm text-white/90">
                    We craft and curate privacy-first software designed to help individuals mask, shield, and reassert control in a hostile digital terrain.
                  </p>
                </div>
                
                <div className="border border-white/20 p-4">
                  <h3 className="font-glitch text-xl text-cyberpunk-green mb-2">📚 BOOKS & ZINES</h3>
                  <p className="font-mono text-sm text-white/90">
                    We publish field manuals, philosophical blueprints, and tactical guides—blending ancient wisdom and modern threat models into living documents of defiance.
                  </p>
                </div>
                
                <div className="border border-white/20 p-4">
                  <h3 className="font-glitch text-xl text-cyberpunk-green mb-2">🕳 ALTERNATE REALITIES</h3>
                  <p className="font-mono text-sm text-white/90">
                    Through immersive storytelling, ARGs, and myth-making, we challenge consensus reality. You'll find the truth buried in the fiction.
                  </p>
                </div>
                
                <div className="border border-white/20 p-4">
                  <h3 className="font-glitch text-xl text-cyberpunk-green mb-2">🕶 PRIVACY ACTIVISM</h3>
                  <p className="font-mono text-sm text-white/90">
                    We don't just talk. We act. From code to protests to digital disobedience, we resist every attempt to normalize surveillance culture.
                  </p>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="font-glitch text-2xl text-white mb-4">OUR APPROACH</h2>
              <p className="font-mono text-white/90 mb-4">
                We don't believe in purity. We believe in power.
              </p>
              <p className="font-mono text-white/90 mb-4">
                We draw from hacker ethics, chaos magic, punk DIY, guerrilla theory, and the sacred art of making meaning in a world designed to strip it away. This isn't about ideology—it's about survival, subversion, and liberation.
              </p>
              <div className="font-mono text-white/90 mb-4">
                <p className="mb-1">Rationality alone won't save you.</p>
                <p className="mb-1">Neither will mysticism.</p>
                <p>But together—intention and encryption, imagination and action—we can outmaneuver the machine.</p>
              </div>
            </section>
            
            <section>
              <h2 className="font-glitch text-2xl text-white mb-4">A FINAL NOTE</h2>
              <p className="font-mono text-white/90 mb-4">
                This is more than a site. This is a hypersigil, encoded with every act of rebellion, every encrypted message, every hidden node. N1ghtw1re is alive because you are. What you do next determines what this becomes.
              </p>
              <div className="font-mono text-white/90 mb-4">
                <p className="mb-1">So don't just read. Move.</p>
                <p className="mb-1">Encrypt something. Question everything.</p>
                <p>Mask your signal. Light another.</p>
              </div>
              <div className="font-mono text-white/90 mt-6">
                <p className="mb-1">We're not here to save you.</p>
                <p className="mb-1">We're here to show you how to save yourself.</p>
              </div>
              <p className="font-glitch text-cyberpunk-green mt-6">
                The signal is clear. The time is now.<br/>
                Welcome to the N1ghtw1re Collective.
              </p>
            </section>

            {/* Contact Section */}
            <section className="mt-16 border-t border-white/20 pt-8">
              <h2 className="font-glitch text-2xl text-white mb-6">CONTACT US</h2>
              
              <div>
                <p className="font-mono text-white/90 mb-4">
                  Want to join the resistance? Have information to share? Need assistance with digital security?
                </p>
                <p className="font-mono text-white/90 mb-6">
                  Reach out securely. We never sell or share your data. Our communications are strictly encrypted and protected.
                </p>
                
                <div className="flex items-center space-x-2 mb-2">
                  <Mail size={18} className="text-cyberpunk-green" />
                  <a href="mailto:n1ghtw1re@proton.me" className="font-mono text-cyberpunk-green hover:underline">
                    n1ghtw1re@proton.me
                  </a>
                </div>
              </div>
            </section>
            
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
